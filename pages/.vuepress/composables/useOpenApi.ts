import yaml from 'js-yaml';

export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head';
export const HTTP_METHODS: Method[] = ['get', 'post', 'put', 'patch', 'delete', 'options', 'head'];

export interface OpenApiDoc {
  openapi: string;
  info: { title: string; description?: string; version: string };
  servers?: Array<{ url: string }>;
  paths: Record<string, Record<string, any>>;
  components?: { schemas?: Record<string, any>; [k: string]: any };
  [k: string]: any;
}

export interface ParsedOperation {
  method: Method;
  methodUpper: string;
  path: string;
  anchor: string;
  operationId: string;
  externalDocsUrl: string | null;
  groupKey: string;
  // SHOUTING CASE label for the body section dividers ("ADD NOTE", "SHIPMENT").
  groupLabel: string;
  // Title-case label for sidebar group headings ("Add note", "Shipment").
  groupLabelSidebar: string;
  summary: string;
  description: string;
  parameters: Array<{ name: string; in: string; type: string; description: string; required: boolean; schemaFields: SchemaField[] }>;
  requestBodyExample: any;
  requestContentType: string | null;
  requestBodyDescription: string;
  requestBodyRequired: boolean;
  requestBodyFields: SchemaField[];
  responses: Array<{ status: string; description: string }>;
  responseExample: any;
  responseStatus: string;
  // Required auth: list of "scope: role" badges derived from the security block.
  securityBadges: string[];
}

export async function fetchOpenApi(url: string): Promise<OpenApiDoc> {
  const res = await fetch(url, { credentials: 'omit', mode: 'cors' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
  const text = await res.text();
  return yaml.load(text) as OpenApiDoc;
}

// Resolve a single $ref against the root document.
function resolveRef(root: any, ref: string): any {
  if (!ref.startsWith('#/')) return undefined;
  const parts = ref.slice(2).split('/');
  let cur: any = root;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

// Walk an object and resolve all $refs in-place; protects against cycles
// by tracking the set of refs we've already entered along the current path.
function deref(root: any, node: any, seen: Set<string> = new Set()): any {
  if (node == null || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map(n => deref(root, n, seen));
  if (typeof node.$ref === 'string') {
    const ref = node.$ref;
    if (seen.has(ref)) return {}; // break the cycle
    const next = new Set(seen);
    next.add(ref);
    const target = resolveRef(root, ref);
    return deref(root, target, next);
  }
  const out: any = {};
  for (const [k, v] of Object.entries(node)) out[k] = deref(root, v, seen);
  return out;
}

// Generate a representative example value from a JSON Schema.
function exampleFromSchema(schema: any, depth = 0): any {
  if (!schema || depth > 6) return null;
  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];
  if (schema.oneOf?.length) return exampleFromSchema(schema.oneOf[0], depth + 1);
  if (schema.anyOf?.length) return exampleFromSchema(schema.anyOf[0], depth + 1);
  if (schema.allOf?.length) {
    const merged: any = { type: 'object', properties: {}, required: [] };
    for (const s of schema.allOf) {
      if (s.properties) Object.assign(merged.properties, s.properties);
      if (s.required) merged.required.push(...s.required);
      if (s.type) merged.type = s.type;
    }
    return exampleFromSchema(merged, depth + 1);
  }
  switch (schema.type) {
    case 'string':
      if (schema.format === 'uuid') return '00000000-0000-0000-0000-000000000000';
      if (schema.format === 'date-time') return '2025-01-01T00:00:00Z';
      if (schema.format === 'date') return '2025-01-01';
      if (schema.format === 'email') return 'user@example.com';
      return 'string';
    case 'integer':
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'array':
      return [exampleFromSchema(schema.items, depth + 1)];
    case 'object':
    default: {
      const obj: Record<string, any> = {};
      if (schema.properties) {
        for (const [k, v] of Object.entries<any>(schema.properties)) {
          obj[k] = exampleFromSchema(v, depth + 1);
        }
      }
      return obj;
    }
  }
}

function readableType(schema: any): string {
  if (!schema) return '';
  if (schema.type) {
    const base = Array.isArray(schema.type) ? schema.type.join(' | ') : schema.type;
    if (base === 'array' && schema.items) {
      const inner = readableType(schema.items);
      return inner ? `array<${inner}>` : 'array';
    }
    if (schema.format) return `${base} <${schema.format}>`;
    return base;
  }
  if (schema.oneOf) return 'oneOf';
  if (schema.anyOf) return 'anyOf';
  if (schema.allOf) return 'object';
  return '';
}

// Walks a (resolved) JSON Schema and produces a flat list of leaf-ish fields
// for the Object Definitions-style schema table. Nested objects produce one
// parent row + recursive children; arrays produce one row + recursive into
// items; oneOf/anyOf produce one row showing the union alternatives.
export interface SchemaField {
  // Dotted path from the root, e.g. "filter.assignedUserId[]"
  name: string;
  // Indent depth for visual nesting in the table (0 = top-level)
  depth: number;
  type: string;
  required: boolean;
  description: string;
  // Inline constraint chips: ["min 1", "max 100", "uuid", "enum: A | B | C"]
  constraints: string[];
}

function constraintsFromSchema(schema: any): string[] {
  if (!schema) return [];
  const out: string[] = [];
  if (schema.format && schema.format !== 'uuid') out.push(schema.format);
  if (schema.format === 'uuid') out.push('uuid');
  if (typeof schema.minLength === 'number' || typeof schema.maxLength === 'number') {
    const lo = schema.minLength ?? 0;
    const hi = schema.maxLength ?? '∞';
    out.push(`length ${lo}–${hi}`);
  }
  if (typeof schema.minimum === 'number' || typeof schema.maximum === 'number') {
    const lo = schema.minimum ?? '−∞';
    const hi = schema.maximum ?? '∞';
    out.push(`range ${lo}–${hi}`);
  }
  if (typeof schema.minItems === 'number' || typeof schema.maxItems === 'number') {
    const lo = schema.minItems ?? 0;
    const hi = schema.maxItems ?? '∞';
    out.push(`items ${lo}–${hi}`);
  }
  if (Array.isArray(schema.enum) && schema.enum.length) {
    const vs = schema.enum.slice(0, 6).map((v: any) => String(v)).join(' | ');
    out.push(`enum: ${vs}${schema.enum.length > 6 ? ' …' : ''}`);
  }
  if (schema.pattern && schema.pattern.length < 60) out.push(`pattern: ${schema.pattern}`);
  return out;
}

export function flattenSchema(schema: any, opts: { rootName?: string; maxDepth?: number } = {}): SchemaField[] {
  const maxDepth = opts.maxDepth ?? 5;
  const out: SchemaField[] = [];
  const seenRefs = new Set<any>();

  function walk(s: any, name: string, depth: number, required: boolean) {
    if (!s || depth > maxDepth) return;
    if (seenRefs.has(s)) return; // already-visited reference (cycle protection)
    seenRefs.add(s);

    // Merge allOf in-place so we surface the combined shape.
    if (Array.isArray(s.allOf) && s.allOf.length) {
      const merged: any = { type: 'object', properties: {}, required: [] };
      for (const sub of s.allOf) {
        Object.assign(merged.properties, sub.properties ?? {});
        if (Array.isArray(sub.required)) merged.required.push(...sub.required);
        if (sub.description && !merged.description) merged.description = sub.description;
      }
      s = merged;
    }

    if (Array.isArray(s.oneOf) || Array.isArray(s.anyOf)) {
      const branches = s.oneOf ?? s.anyOf;
      out.push({
        name,
        depth,
        type: s.oneOf ? 'oneOf' : 'anyOf',
        required,
        description: s.description ?? '',
        constraints: [`${branches.length} alternatives`],
      });
      branches.forEach((branch: any, idx: number) => {
        walk(branch, `${name} «alt ${idx + 1}»`, depth + 1, false);
      });
      return;
    }

    const type = readableType(s);

    if (s.type === 'object' || (!s.type && s.properties)) {
      // Skip the synthetic row for the root level — the caller already has a
      // heading. Inner object rows are useful as a grouping marker.
      if (name) {
        out.push({
          name,
          depth,
          type: type || 'object',
          required,
          description: s.description ?? '',
          constraints: constraintsFromSchema(s),
        });
      }
      const reqSet = new Set<string>(Array.isArray(s.required) ? s.required : []);
      for (const [k, v] of Object.entries<any>(s.properties ?? {})) {
        walk(v, name ? `${name}.${k}` : k, depth + (name ? 1 : 0), reqSet.has(k));
      }
      return;
    }

    if (s.type === 'array' && s.items) {
      out.push({
        name,
        depth,
        type,
        required,
        description: s.description ?? '',
        constraints: constraintsFromSchema(s),
      });
      // Recurse into items only if it's a structured shape — primitives are
      // already captured by the type column (e.g. "array<string>").
      if (s.items.type === 'object' || s.items.properties || s.items.oneOf || s.items.anyOf) {
        walk(s.items, `${name}[]`, depth + 1, false);
      }
      return;
    }

    // Primitive leaf
    out.push({
      name,
      depth,
      type,
      required,
      description: s.description ?? '',
      constraints: constraintsFromSchema(s),
    });
  }

  walk(schema, opts.rootName ?? '', 0, false);
  return out;
}

// "/add-note" → "add-note";  "/shops/{id}/order-rules" → "shops"
function groupKeyForPath(path: string): string {
  const seg = path.replace(/^\/+/, '').split('/')[0] || 'root';
  return seg.replace(/[{}]/g, '').toLowerCase();
}
function shoutingLabel(key: string): string {
  return key.replace(/[-_]/g, ' ').toUpperCase();
}
function titleLabel(key: string): string {
  const words = key.replace(/[-_]/g, ' ').toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Per-API curated grouping. Lets us restore the hand-grouped sidebar where
// the OpenAPI tags alone can't carry enough structure (e.g. several
// untagged paths that humans want grouped under one heading).
export interface GroupOverride {
  key: string;
  label: string;           // Title Case — used both as sidebar heading and uppercased for body label
  labelBody?: string;      // Optional override; defaults to label.toUpperCase()
  pathPrefixes?: string[]; // Operation path starts with any prefix
  pathExact?: string[];    // Operation path equals exactly
  tags?: string[];         // Operation has any of these tags
}

function matchesOverride(op: { path: string; tags: string[] }, ov: GroupOverride): boolean {
  if (ov.pathExact?.includes(op.path)) return true;
  if (ov.pathPrefixes?.some(p => op.path === p || op.path.startsWith(p + '/') || op.path.startsWith(p + '?'))) return true;
  if (ov.tags?.some(t => op.tags.includes(t))) return true;
  return false;
}

// "POST /add-note" → "post-add-note";  "GET /orders/{id}" → "get-orders-ids"
// Matches the existing slugify pattern in OrderBody.vue, where `{id}` segments
// become `ids` (plural) — preserve that for anchor stability.
export function endpointAnchor(method: string, path: string): string {
  const cleaned = path
    .replace(/\{([^}]+)\}/g, (_m, name) => `${name}s`)
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return `${method.toLowerCase()}-${cleaned}`;
}

export function parseOperations(spec: OpenApiDoc, overrides: GroupOverride[] = []): ParsedOperation[] {
  const ops: ParsedOperation[] = [];
  const paths = spec.paths ?? {};

  for (const [path, pathItem] of Object.entries(paths)) {
    for (const m of HTTP_METHODS) {
      const op = (pathItem as any)[m];
      if (!op) continue;

      const resolved = deref(spec, op);
      const tagList: string[] = Array.isArray(resolved.tags) ? resolved.tags.map(String) : [];

      // First match wins; falls back to first tag, then first path segment.
      const ov = overrides.find(o => matchesOverride({ path, tags: tagList }, o));
      const groupKey = ov?.key ?? tagList[0] ?? groupKeyForPath(path);
      const groupLabelSidebar = ov?.label ?? titleLabel(groupKey);
      const groupLabel = ov?.labelBody ?? ov?.label?.toUpperCase() ?? shoutingLabel(groupKey);

      // Parameters (query/path/header) — flatten with resolved types
      const parameters = (resolved.parameters ?? []).map((p: any) => ({
        name: p.name,
        in: p.in,
        type: readableType(p.schema),
        description: p.description ?? '',
        required: !!p.required,
        // For object-typed parameters (like Order /orders' `filter`), expose
        // the nested field structure so the schema table can render the
        // sub-shape under the parameter row.
        schemaFields: (p.schema?.type === 'object' || p.schema?.properties)
          ? flattenSchema(p.schema, { maxDepth: 4 })
          : [],
      }));

      // Request body example (use application/json if present)
      let requestBodyExample: any = undefined;
      let requestContentType: string | null = null;
      let requestBodyDescription = '';
      let requestBodyRequired = false;
      let requestBodyFields: SchemaField[] = [];
      if (resolved.requestBody?.content) {
        requestBodyDescription = resolved.requestBody.description ?? '';
        requestBodyRequired = !!resolved.requestBody.required;
        const json = resolved.requestBody.content['application/json']
          ?? Object.values(resolved.requestBody.content)[0];
        if (json) {
          requestContentType = resolved.requestBody.content['application/json']
            ? 'application/json'
            : Object.keys(resolved.requestBody.content)[0];
          if (json.example !== undefined) requestBodyExample = json.example;
          else if (json.schema) requestBodyExample = exampleFromSchema(json.schema);
          if (json.schema) requestBodyFields = flattenSchema(json.schema, { maxDepth: 5 });
        }
      }

      // Security badges: distill the security block into "scope · role" chips.
      // Handles two shapes seen in MyParcel specs:
      //   - { features: [...], roles: [...] }  (Order, IAM, …)
      //   - [scopeString, ...]                  (MyParcel API)
      const securityBadges: string[] = [];
      const secList = Array.isArray(resolved.security) ? resolved.security : Array.isArray(spec.security) ? spec.security : [];
      for (const entry of secList) {
        for (const [scheme, payload] of Object.entries<any>(entry ?? {})) {
          if (Array.isArray(payload) && payload.length) {
            securityBadges.push(`${scheme} · scope: ${payload.join(', ')}`);
            continue;
          }
          const features = Array.isArray(payload?.features) ? payload.features : [];
          const roles = Array.isArray(payload?.roles) ? payload.roles : [];
          if (features.length === 0 && roles.length === 0) continue;
          const parts = [scheme];
          if (features.length) parts.push(`feature: ${features.join(', ')}`);
          if (roles.length) parts.push(`role: ${roles.join(', ')}`);
          securityBadges.push(parts.join(' · '));
        }
      }

      // Responses table + a sample response body
      const responses: Array<{ status: string; description: string }> = [];
      let responseExample: any = undefined;
      let responseStatus = '200';
      for (const [status, res] of Object.entries<any>(resolved.responses ?? {})) {
        responses.push({ status, description: res?.description ?? '' });
        if (responseExample === undefined && status.startsWith('2')) {
          responseStatus = status;
          const json = res?.content?.['application/json']
            ?? (res?.content ? Object.values(res.content)[0] : undefined);
          if (json) {
            if (json.example !== undefined) responseExample = json.example;
            else if (json.schema) responseExample = exampleFromSchema(json.schema);
          }
        }
      }
      if (responseExample === undefined) responseExample = [];

      ops.push({
        method: m,
        methodUpper: m.toUpperCase(),
        path,
        anchor: endpointAnchor(m, path),
        operationId: resolved.operationId ?? '',
        externalDocsUrl: resolved.externalDocs?.url ?? null,
        groupKey,
        groupLabel,
        groupLabelSidebar,
        summary: resolved.summary ?? '',
        description: resolved.description ?? resolved.summary ?? '',
        parameters,
        requestBodyExample,
        requestContentType,
        requestBodyDescription,
        requestBodyRequired,
        requestBodyFields,
        responses,
        responseExample,
        responseStatus,
        securityBadges,
      });
    }
  }

  return ops;
}

export interface OperationGroup {
  key: string;
  label: string;          // SHOUTING — used in body section dividers
  labelSidebar: string;   // Title case — used in sidebar group headings
  ops: ParsedOperation[];
}

export function groupOperations(ops: ParsedOperation[], overrides: GroupOverride[] = []): OperationGroup[] {
  const seen = new Map<string, ParsedOperation[]>();
  for (const op of ops) {
    if (!seen.has(op.groupKey)) seen.set(op.groupKey, []);
    seen.get(op.groupKey)!.push(op);
  }
  // Sort by override order first (preserves the human-curated sequence),
  // then by first appearance for any groups not in the override set.
  const orderIndex = new Map<string, number>();
  overrides.forEach((o, i) => orderIndex.set(o.key, i));
  const entries = Array.from(seen.entries());
  entries.sort(([a], [b]) => {
    const ai = orderIndex.has(a) ? orderIndex.get(a)! : Number.MAX_SAFE_INTEGER;
    const bi = orderIndex.has(b) ? orderIndex.get(b)! : Number.MAX_SAFE_INTEGER;
    return ai - bi;
  });
  return entries.map(([key, ops]) => ({
    key,
    label: ops[0].groupLabel,
    labelSidebar: ops[0].groupLabelSidebar,
    ops,
  }));
}

export function serverUrl(spec: OpenApiDoc, fallback = ''): string {
  return spec.servers?.[0]?.url ?? fallback;
}
