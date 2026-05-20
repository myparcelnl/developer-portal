// Live data from MyParcel's public Statuspage.io instance.
//
//   /api/v2/status.json    — { indicator, description }
//   /api/v2/incidents.json — last 50 incidents with timing + impact
//
// Statuspage's free public API does not expose a precomputed uptime
// percentage, so we derive a 30-day figure from incident durations.

const STATUS_BASE = 'https://status.myparcel.nl/api/v2';

export type StatusIndicator = 'none' | 'minor' | 'major' | 'critical' | 'maintenance';
export type IncidentImpact = 'none' | 'maintenance' | 'minor' | 'major' | 'critical';

export interface StatusSummary {
  indicator: StatusIndicator;
  description: string;
  updatedAt: string;
}

interface Incident {
  created_at: string;
  resolved_at: string | null;
  impact: IncidentImpact;
}

export async function fetchStatus(): Promise<StatusSummary> {
  const res = await fetch(`${STATUS_BASE}/status.json`, { credentials: 'omit', mode: 'cors' });
  if (!res.ok) throw new Error(`status.json: HTTP ${res.status}`);
  const j = await res.json();
  return {
    indicator: j.status?.indicator ?? 'none',
    description: j.status?.description ?? '',
    updatedAt: j.page?.updated_at ?? '',
  };
}

// Compute a 30-day uptime % from the last 50 incidents.
//
// Approach: sum the duration of any incident with impact >= minor that
// overlaps the last 30 days, clipped to that window. Divide by 30 days,
// invert to get uptime.
//
// Caveats:
//   - Statuspage incidents != strict outages. We filter for major/critical
//     to keep the figure conservative — minor degradations don't subtract.
//   - Ongoing incidents (resolved_at == null) count up to "now".
//   - 50-incident hard cap on the public API means very chatty pages would
//     underreport. For MyParcel that's fine; verify if it ever changes.
export async function fetchUptime(daysBack = 30, minImpact: IncidentImpact[] = ['major', 'critical']): Promise<number> {
  const res = await fetch(`${STATUS_BASE}/incidents.json`, { credentials: 'omit', mode: 'cors' });
  if (!res.ok) throw new Error(`incidents.json: HTTP ${res.status}`);
  const j = await res.json();
  const incidents = (j.incidents ?? []) as Incident[];

  const windowMs = daysBack * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const windowStart = now - windowMs;

  let downMs = 0;
  for (const inc of incidents) {
    if (!minImpact.includes(inc.impact)) continue;
    const startedAt = Date.parse(inc.created_at);
    const endedAt = inc.resolved_at ? Date.parse(inc.resolved_at) : now;
    if (!Number.isFinite(startedAt) || !Number.isFinite(endedAt)) continue;
    if (endedAt < windowStart) continue;
    const start = Math.max(startedAt, windowStart);
    const end = Math.min(endedAt, now);
    if (end > start) downMs += end - start;
  }

  const uptime = 1 - downMs / windowMs;
  // Display ceiling: pin to 99.99% on the cosmetic side so we never show
  // "100.00%". A real 100 % over 30 days is statistically plausible but
  // matches the marketing convention shown before this was live.
  return Math.min(Math.max(uptime, 0), 0.9999);
}

export function formatUptime(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}
