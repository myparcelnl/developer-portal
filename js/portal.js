/* ============================================================
   MyParcel Developer Portal — prototype interactions
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     0. Theme toggle (light / dark)
        The <head> inline script already applied data-theme before
        first paint to avoid FOUC; this handler only deals with
        user interaction + persistence.
  ---------------------------------------------------------- */
  var themeButtons = document.querySelectorAll(".mp-theme-toggle");
  function setTheme(mode) {
    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try { localStorage.setItem("mp-theme", mode); } catch (e) { /* ignore */ }
  }
  themeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });


  /* ----------------------------------------------------------
     0b. Contact form — intercept submit, show success inline
  ---------------------------------------------------------- */
  var contactForm = document.getElementById("mp-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      var result = document.getElementById("mp-form-result");
      if (result) result.hidden = false;
      contactForm.querySelectorAll("input, select, textarea, button").forEach(function (el) {
        el.disabled = true;
      });
      if (result && result.scrollIntoView) {
        result.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }


  /* ----------------------------------------------------------
     0b2. Syntax highlighting + faux window chrome + line numbers
        Loads highlight.js (github-dark) from CDN, strips any
        legacy manual `<span class="token-*">` markup, assigns a
        language label, and wraps the code in numbered lines so
        the block reads like an IDE window.
  ---------------------------------------------------------- */
  (function () {
    var LANG_LABEL = {
      "curl": "cURL", "bash": "bash", "sh": "shell", "shell": "shell",
      "js": "JavaScript", "javascript": "JavaScript", "ts": "TypeScript", "typescript": "TypeScript",
      "php": "PHP", "python": "Python", "py": "Python",
      "json": "JSON", "yaml": "YAML", "yml": "YAML",
      "html": "HTML", "xml": "XML", "http": "HTTP"
    };

    function detectLangFromText(txt) {
      var s = txt.trim().slice(0, 200);
      if (/^\s*[{\[]/.test(s) && /"[^"]+"\s*:/.test(s)) return "json";
      if (/^curl\b/.test(s)) return "bash";
      if (/^(GET|POST|PUT|DELETE|PATCH)\s/.test(s)) return "http";
      if (/^<\?php\b/.test(s)) return "php";
      if (/^(import|from)\s.+/m.test(s) && /:\s*$/m.test(s)) return "python";
      if (/^(const|let|var|import|export|async|function)\b/.test(s)) return "javascript";
      if (/^#\s/.test(s) && /\n[A-Z_]+=/.test(s)) return "bash";
      if (/^apis:|^openapi:|^info:/m.test(s)) return "yaml";
      return null;
    }

    function enhance() {
      if (!window.hljs) return;
      document.querySelectorAll("pre.mp-code-block").forEach(function (pre) {
        var code = pre.querySelector("code");
        if (!code || code.dataset.enhanced === "1") return;

        var text = code.textContent;

        var explicit = null;
        code.classList.forEach(function (c) {
          if (c.indexOf("language-") === 0) explicit = c.replace("language-", "");
        });
        var lang = explicit || pre.dataset.lang || detectLangFromText(text);
        if (lang === "js") lang = "javascript";
        if (lang === "py") lang = "python";
        if (lang === "curl") lang = "bash";
        if (lang === "sh" || lang === "shell") lang = "bash";

        var resultHtml;
        try {
          if (lang && window.hljs.getLanguage(lang)) {
            resultHtml = window.hljs.highlight(text, { language: lang, ignoreIllegals: true }).value;
          } else {
            resultHtml = window.hljs.highlightAuto(text).value;
          }
        } catch (e) {
          resultHtml = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
        }

        var lines = resultHtml.split("\n");
        if (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();
        var out = "";
        for (var i = 0; i < lines.length; i++) {
          out += '<span class="mp-code-block__ln">' + (i + 1) + '</span>'
               + '<span class="mp-code-block__line">' + (lines[i] || "&#8203;") + '</span>\n';
        }

        code.innerHTML = out;
        code.className = "hljs language-" + (lang || "plaintext");
        code.dataset.enhanced = "1";
        pre.classList.add("mp-code-block--numbered");

        if (!pre.dataset.lang) {
          var label = LANG_LABEL[lang] || (lang ? lang.toUpperCase() : "");
          if (label) pre.dataset.lang = label;
        }
      });
    }

    // MyParcel-branded theme is inlined in developer-portal.css — no CDN stylesheet.
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js";
    s.onload = enhance;
    s.onerror = function () { /* silently keep plain text if CDN blocked */ };
    document.head.appendChild(s);
  })();


  /* ----------------------------------------------------------
     0c. Language tabs for request code examples
        Tabs share a preferred language across endpoints on the
        same page, persisted in sessionStorage.
  ---------------------------------------------------------- */
  var preferredLang = (function () {
    try { return sessionStorage.getItem("mp-code-lang") || "curl"; }
    catch (e) { return "curl"; }
  })();

  function activateLang(group, lang) {
    var tabs = group.querySelectorAll(".mp-code-tab");
    var panels = group.querySelectorAll(".mp-code-panel");
    var matched = false;
    var activeLabel = "";

    tabs.forEach(function (tab) {
      var isMatch = tab.getAttribute("data-lang") === lang;
      tab.classList.toggle("mp-code-tab--active", isMatch);
      tab.setAttribute("aria-selected", isMatch ? "true" : "false");
      if (isMatch) {
        matched = true;
        activeLabel = tab.textContent.trim();
      }
    });
    panels.forEach(function (panel) {
      panel.classList.toggle("mp-code-panel--active", panel.getAttribute("data-lang") === lang);
    });

    if (!matched && tabs.length) {
      var first = tabs[0].getAttribute("data-lang");
      activateLang(group, first);
      return;
    }

    // Update the dropdown toggle label so it reflects the active language.
    if (activeLabel) {
      group.querySelectorAll(".mp-code-langswitch__current").forEach(function (el) {
        el.textContent = activeLabel;
      });
    }
  }

  function closeAllLangSwitches(except) {
    document.querySelectorAll(".mp-code-langswitch--open").forEach(function (el) {
      if (el !== except) {
        el.classList.remove("mp-code-langswitch--open");
        var t = el.querySelector(".mp-code-langswitch__toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initCodeTabs(root) {
    (root || document).querySelectorAll("[data-code-tabs]").forEach(function (group) {
      if (group.dataset.tabsInited === "1") {
        activateLang(group, preferredLang);
        return;
      }
      group.dataset.tabsInited = "1";
      activateLang(group, preferredLang);

      // Wire the dropdown toggle — click to open/close.
      var switchEl = group.querySelector(".mp-code-langswitch");
      var toggle = group.querySelector(".mp-code-langswitch__toggle");
      if (toggle && switchEl) {
        toggle.addEventListener("click", function (e) {
          e.stopPropagation();
          var willOpen = !switchEl.classList.contains("mp-code-langswitch--open");
          closeAllLangSwitches(switchEl);
          switchEl.classList.toggle("mp-code-langswitch--open", willOpen);
          toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
        });
      }

      // Language selection — click, close dropdown, update all groups.
      group.querySelectorAll(".mp-code-tab").forEach(function (tab) {
        tab.addEventListener("click", function (e) {
          e.stopPropagation();
          var lang = tab.getAttribute("data-lang");
          try { sessionStorage.setItem("mp-code-lang", lang); } catch (err) { /* ignore */ }
          preferredLang = lang;
          document.querySelectorAll("[data-code-tabs]").forEach(function (g) {
            activateLang(g, lang);
          });
          closeAllLangSwitches();
        });
      });
    });
  }
  initCodeTabs(document);

  // Click outside a language dropdown closes any that are open.
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest(".mp-code-langswitch")) {
      closeAllLangSwitches();
    }
  });

  // Expose to other sections of this IIFE that need to re-init after cloning.
  window.__mpInitCodeTabs = initCodeTabs;


  /* ----------------------------------------------------------
     0d. View modes (Quickstart / Code-first / By role)
  ---------------------------------------------------------- */
  var viewModeGroup = document.querySelector("[data-view-modes]");
  if (viewModeGroup) {
    var viewButtons = viewModeGroup.querySelectorAll(".mp-view-mode");
    var viewPanels = document.querySelectorAll("[data-view-panel]");

    function activateView(mode) {
      viewButtons.forEach(function (btn) {
        btn.classList.toggle("mp-view-mode--active", btn.getAttribute("data-mode") === mode);
        btn.setAttribute("aria-selected", btn.getAttribute("data-mode") === mode ? "true" : "false");
      });
      viewPanels.forEach(function (panel) {
        panel.classList.toggle("mp-view-panel--active", panel.getAttribute("data-view-panel") === mode);
      });
    }

    viewButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activateView(btn.getAttribute("data-mode"));
      });
    });
  }


  /* ----------------------------------------------------------
     1. Endpoint accordion — single-select, with sticky code rail
  ---------------------------------------------------------- */
  var codeRail = document.getElementById("mp-code-rail");
  var emptyRailHTML = codeRail ? codeRail.innerHTML : "";

  function updateRail(endpoint) {
    if (!codeRail) return;
    if (!endpoint) {
      codeRail.innerHTML = emptyRailHTML;
      return;
    }
    var code = endpoint.querySelector(".mp-endpoint__code");
    if (!code) {
      codeRail.innerHTML = emptyRailHTML;
      return;
    }
    // Clone into rail and reset tab-init marker so listeners rebind on the clone.
    var clone = code.cloneNode(true);
    clone.querySelectorAll("[data-code-tabs]").forEach(function (g) {
      delete g.dataset.tabsInited;
    });
    codeRail.innerHTML = "";
    codeRail.appendChild(clone);
    if (typeof window.__mpInitCodeTabs === "function") {
      window.__mpInitCodeTabs(codeRail);
    }
  }

  document.querySelectorAll("[data-toggle]").forEach(function (header) {
    header.addEventListener("click", function () {
      var endpoint = header.closest(".mp-endpoint");
      if (!endpoint) return;
      var wasOpen = endpoint.classList.contains("mp-endpoint--open");
      // Close all others first (single-select accordion)
      document.querySelectorAll(".mp-endpoint.mp-endpoint--open").forEach(function (el) {
        if (el !== endpoint) el.classList.remove("mp-endpoint--open");
      });
      endpoint.classList.toggle("mp-endpoint--open", !wasOpen);
      updateRail(!wasOpen ? endpoint : null);
    });
  });

  // Auto-open + populate rail if page loaded with #anchor pointing at an endpoint
  (function openFromHash() {
    if (!codeRail) return;
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    try {
      var target = document.querySelector(hash);
      if (target && target.classList && target.classList.contains("mp-endpoint")) {
        target.classList.add("mp-endpoint--open");
        updateRail(target);
      }
    } catch (e) { /* invalid selector — ignore */ }
  })();

  /* ----------------------------------------------------------
     2. Sidebar: mark active item on click + smooth scroll
  ---------------------------------------------------------- */
  document.querySelectorAll(".mp-sidebar__item").forEach(function (item) {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".mp-sidebar__item--active")
        .forEach(function (el) {
          el.classList.remove("mp-sidebar__item--active");
        });
      item.classList.add("mp-sidebar__item--active");

      var targetId = item.getAttribute("href");
      if (targetId && targetId.charAt(0) === "#") {
        var target = document.querySelector(targetId);
        if (target) {
          // Close other endpoints first (single-select)
          document.querySelectorAll(".mp-endpoint.mp-endpoint--open").forEach(function (el) {
            if (el !== target) el.classList.remove("mp-endpoint--open");
          });
          target.classList.add("mp-endpoint--open");
          if (typeof updateRail === "function") updateRail(target);
        }
      }
    });
  });

  /* ----------------------------------------------------------
     3. Language toggle — chrome only, API content stays
        Translations live as JSON files in /translations/<code>.json
        and are fetched on demand + cached in-memory.
  ---------------------------------------------------------- */
  var dictCache = { en: {} };

  /* Compute the relative path back to site root — mirrors chrome.js.
     Used as a fallback URL prefix if inline translations aren't available. */
  function translationsRoot() {
    var p = window.location.pathname;
    if (/\/pages\/docs\/platforms\//.test(p)) return "../../../";
    if (/\/pages\/docs\//.test(p))            return "../../";
    if (/\/pages\//.test(p))                  return "../";
    return "";
  }

  function loadLang(lang) {
    if (dictCache[lang]) return Promise.resolve(dictCache[lang]);

    // Prefer inline tables (works via file:// too).
    if (window.MP_TRANSLATIONS && window.MP_TRANSLATIONS[lang]) {
      dictCache[lang] = window.MP_TRANSLATIONS[lang];
      return Promise.resolve(dictCache[lang]);
    }

    // Fallback: fetch relative to the page's root.
    return fetch(translationsRoot() + "translations/" + lang + ".json", { cache: "default" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (table) { dictCache[lang] = table; return table; })
      .catch(function () { dictCache[lang] = {}; return dictCache[lang]; });
  }

  /* Legacy compat: callers can still read dict.en (empty) while translations
     for other languages come from /translations/*.json via loadLang(). */
  var dict = { en: {} };

  var langButtons = document.querySelectorAll(".mp-lang-btn");
  var savedLang = (function () {
    try { return sessionStorage.getItem("mp-lang") || "en"; }
    catch (e) { return "en"; }
  })();

  function paintLang(lang, table) {
    langButtons.forEach(function (btn) {
      btn.classList.toggle(
        "mp-lang-btn--active",
        btn.getAttribute("data-lang") === lang
      );
    });

    // Swap the flag in the dropdown toggle for the active language's flag.
    var flagSvg = (window.MP_FLAG_SVG && window.MP_FLAG_SVG[lang]) || (window.MP_FLAG_SVG && window.MP_FLAG_SVG.en);
    if (flagSvg) {
      document.querySelectorAll(".mp-lang-dropdown__flag-slot").forEach(function (el) {
        el.innerHTML = flagSvg;
      });
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table && table[key]) {
        if (el.dataset.original === undefined) el.dataset.original = el.textContent;
        el.textContent = table[key];
      } else if (el.dataset.original !== undefined) {
        el.textContent = el.dataset.original;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (table && table[key]) {
        if (el.dataset.originalPlaceholder === undefined) {
          el.dataset.originalPlaceholder = el.placeholder;
        }
        el.placeholder = table[key];
      } else if (el.dataset.originalPlaceholder !== undefined) {
        el.placeholder = el.dataset.originalPlaceholder;
      }
    });

    try { sessionStorage.setItem("mp-lang", lang); } catch (e) { /* ignore */ }
    document.documentElement.setAttribute("lang", lang);
  }

  function applyLang(lang) {
    // EN = original strings; no fetch needed.
    if (lang === "en") { paintLang("en", null); return; }
    loadLang(lang).then(function (table) { paintLang(lang, table); });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(savedLang);

  /* ----------------------------------------------------------
     3b. Right-column TOC scrollspy (docs pages)
  ---------------------------------------------------------- */
  var tocEl = document.querySelector(".mp-docs-toc");
  if (tocEl && "IntersectionObserver" in window) {
    var tocLinks = Array.prototype.slice.call(tocEl.querySelectorAll("a[href^='#']"));
    var targets = tocLinks
      .map(function (a) {
        var id = a.getAttribute("href").slice(1);
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean);

    if (targets.length) {
      var current = targets[0].id;
      var setActive = function (id) {
        if (id === current) return;
        current = id;
        tocLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
        });
      };

      var observer = new IntersectionObserver(function (entries) {
        // Find the entry with the smallest positive top — i.e. the closest heading just above viewport-top.
        var visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top; });
        if (visible[0]) setActive(visible[0].target.id);
      }, {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0
      });

      targets.forEach(function (t) { observer.observe(t); });
      // Seed the first link as active
      if (tocLinks[0]) tocLinks[0].classList.add("is-active");
    }
  }

  /* ----------------------------------------------------------
     4. Search popup — Cmd/Ctrl+K, click nav search field, or "/"
  ---------------------------------------------------------- */
  function pagesPrefix() {
    var p = window.location.pathname;
    if (/\/pages\/docs\/platforms\//.test(p)) return "../../";
    if (/\/pages\/docs\//.test(p))            return "../";
    if (/\/pages\//.test(p))                  return "";
    return "pages/";
  }

  var searchInput = document.getElementById("mp-search-input");
  var searchModalEl = null;
  var searchModalInput = null;
  var searchModalResults = null;
  var searchActiveIdx = -1;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function highlightText(text, term) {
    if (!term) return escapeHtml(text);
    var re = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return escapeHtml(text).replace(new RegExp("(" + re + ")", "gi"), "<mark>$1</mark>");
  }
  function methodClassFor(m) { return "mp-method--" + m.toLowerCase(); }

  function buildSearchModal() {
    if (searchModalEl) return;
    var wrap = document.createElement("div");
    wrap.className = "mp-search-modal";
    wrap.id = "mp-search-modal";
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="mp-search-modal__backdrop" data-close></div>'
      + '<div class="mp-search-modal__dialog" role="dialog" aria-label="Search" aria-modal="true">'
      + '  <div class="mp-search-modal__input-wrap">'
      + '    <svg class="mp-search-modal__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>'
      + '    <input type="search" class="mp-search-modal__input" id="mp-search-modal-input" placeholder="Search endpoints, docs, SDKs…" autocomplete="off" />'
      + '    <kbd class="mp-search-modal__kbd" data-close>ESC</kbd>'
      + '  </div>'
      + '  <ul class="mp-search-modal__results" id="mp-search-modal-results" role="listbox"></ul>'
      + '  <div class="mp-search-modal__footer">'
      + '    <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>'
      + '    <span><kbd>↵</kbd> to open</span>'
      + '    <span><kbd>ESC</kbd> to close</span>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(wrap);
    searchModalEl = wrap;
    searchModalInput = wrap.querySelector("#mp-search-modal-input");
    searchModalResults = wrap.querySelector("#mp-search-modal-results");

    wrap.addEventListener("click", function (e) {
      if (e.target && e.target.hasAttribute && e.target.hasAttribute("data-close")) closeSearchModal();
    });
    searchModalInput.addEventListener("input", renderSearchResults);
    searchModalInput.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
      else if (e.key === "Enter")   { e.preventDefault(); openActive(); }
      else if (e.key === "Escape")  { e.preventDefault(); closeSearchModal(); }
    });
  }

  function renderSearchResults() {
    var q = (searchModalInput.value || "").trim();
    var qLower = q.toLowerCase();
    var list = (typeof SEARCH_INDEX !== "undefined" ? SEARCH_INDEX : []);
    var matches;
    if (!qLower) {
      matches = list.slice(0, 8);
    } else {
      matches = list.filter(function (r) {
        return r.path.toLowerCase().indexOf(qLower) !== -1
            || r.desc.toLowerCase().indexOf(qLower) !== -1
            || (r.api && r.api.toLowerCase().indexOf(qLower) !== -1)
            || r.method.toLowerCase() === qLower;
      }).slice(0, 30);
    }
    searchActiveIdx = matches.length ? 0 : -1;
    if (!matches.length) {
      searchModalResults.innerHTML =
        '<li class="mp-search-modal__empty">No results. Try <code>token</code>, <code>shipment</code> or <code>carrier</code>.</li>';
      return;
    }
    var prefix = pagesPrefix();
    searchModalResults.innerHTML = matches.map(function (r, i) {
      return (
        '<li class="mp-search-modal__item' + (i === 0 ? " is-active" : "") + '" role="option" data-href="' + prefix + r.href + '">'
        + '  <span class="mp-method ' + methodClassFor(r.method) + '">' + escapeHtml(r.method) + '</span>'
        + '  <div class="mp-search-modal__item-body">'
        + '    <div class="mp-search-modal__item-top">'
        + '      <span class="mp-search-modal__item-path">' + highlightText(r.path, q) + '</span>'
        + '      <span class="mp-search-modal__item-api">' + escapeHtml(r.api || "") + '</span>'
        + '    </div>'
        + '    <div class="mp-search-modal__item-desc">' + highlightText(r.desc, q) + '</div>'
        + '  </div>'
        + '</li>'
      );
    }).join("");

    searchModalResults.querySelectorAll(".mp-search-modal__item").forEach(function (li, idx) {
      li.addEventListener("mouseenter", function () { setActive(idx); });
      li.addEventListener("click", function () { setActive(idx); openActive(); });
    });
  }

  function setActive(i) {
    var items = searchModalResults.querySelectorAll(".mp-search-modal__item");
    items.forEach(function (el, idx) { el.classList.toggle("is-active", idx === i); });
    searchActiveIdx = i;
    if (items[i]) items[i].scrollIntoView({ block: "nearest" });
  }
  function moveActive(delta) {
    var items = searchModalResults.querySelectorAll(".mp-search-modal__item");
    if (!items.length) return;
    var next = (searchActiveIdx + delta + items.length) % items.length;
    setActive(next);
  }
  function openActive() {
    var items = searchModalResults.querySelectorAll(".mp-search-modal__item");
    var el = items[searchActiveIdx];
    if (!el) return;
    window.location.href = el.getAttribute("data-href");
  }

  function openSearchModal(seedQuery) {
    buildSearchModal();
    searchModalEl.hidden = false;
    document.documentElement.style.overflow = "hidden";
    if (typeof seedQuery === "string") searchModalInput.value = seedQuery;
    renderSearchResults();
    setTimeout(function () { searchModalInput.focus(); searchModalInput.select(); }, 0);
  }
  function closeSearchModal() {
    if (!searchModalEl) return;
    searchModalEl.hidden = true;
    document.documentElement.style.overflow = "";
    if (searchInput) searchInput.blur();
  }

  if (searchInput) {
    searchInput.addEventListener("mousedown", function (e) {
      e.preventDefault();
      openSearchModal(searchInput.value || "");
    });
    searchInput.addEventListener("focus", function () {
      // Mouse click already handled; keyboard-tab focus should still open modal.
      openSearchModal(searchInput.value || "");
    });
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); openSearchModal(searchInput.value || ""); }
    });

    document.addEventListener("keydown", function (e) {
      var isCmdK = (e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K");
      if (isCmdK) { e.preventDefault(); openSearchModal(""); return; }
      if (e.key === "Escape" && searchModalEl && !searchModalEl.hidden) {
        e.preventDefault(); closeSearchModal(); return;
      }
      if (e.key === "/" && (!searchModalEl || searchModalEl.hidden)) {
        var tag = (document.activeElement && document.activeElement.tagName) || "";
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
          e.preventDefault();
          openSearchModal("");
        }
      }
    });
  }

  /* ----------------------------------------------------------
     5a. Search index (shared by search.html + nav search popup)
  ---------------------------------------------------------- */
  var SEARCH_INDEX = [
      { api: "MyParcel API", method: "GET", path: "/", desc: "Status page", href: "myparcel-api.html#get-root" },
      { api: "MyParcel API", method: "GET", path: "/shipments", desc: "Gets a list of Shipments, optionally filtered using parameters.", href: "myparcel-api.html#get-shipments" },
      { api: "MyParcel API", method: "POST", path: "/shipments", desc: "Add Shipment", href: "myparcel-api.html#post-shipments" },
      { api: "MyParcel API", method: "PUT", path: "/shipments", desc: "Update Shipment", href: "myparcel-api.html#put-shipments" },
      { api: "MyParcel API", method: "GET", path: "/shipments/{ids}", desc: "Get shipments by id.", href: "myparcel-api.html#get-shipments-ids" },
      { api: "MyParcel API", method: "DELETE", path: "/shipments/{ids}", desc: "Delete Shipment", href: "myparcel-api.html#delete-shipments-ids" },
      { api: "MyParcel API", method: "POST", path: "/shipments/capabilities", desc: "List shipment capabilities (Beta)", href: "myparcel-api.html#post-shipments-capabilities" },
      { api: "MyParcel API", method: "POST", path: "/shipments/capabilities/contract-definitions", desc: "List a superset of available capabilities for the carriers and contracts associated with the logged-in user. (Beta)", href: "myparcel-api.html#post-shipments-capabilities-contract-definitions" },
      { api: "MyParcel API", method: "POST", path: "/shipments/rates", desc: "List shipment rates", href: "myparcel-api.html#post-shipments-rates" },
      { api: "MyParcel API", method: "GET", path: "/shipment_labels/{ids}", desc: "Get Shipment labels", href: "myparcel-api.html#get-shipment-labels-ids" },
      { api: "MyParcel API", method: "GET", path: "/delivery_options", desc: "Get Delivery Options", href: "myparcel-api.html#get-delivery-options" },
      { api: "MyParcel API", method: "GET", path: "/drop_off_points", desc: "Get drop off points", href: "myparcel-api.html#get-drop-off-points" },
      { api: "MyParcel API", method: "GET", path: "/pickup_locations", desc: "Get Pickup Locations", href: "myparcel-api.html#get-pickup-locations" },
      { api: "MyParcel API", method: "GET", path: "/tracktraces", desc: "Track Shipment", href: "myparcel-api.html#get-tracktraces" },
      { api: "MyParcel API", method: "GET", path: "/tracktraces/{ids}", desc: "Track Shipment", href: "myparcel-api.html#get-tracktraces-ids" },
      { api: "MyParcel API", method: "POST", path: "/return_shipments", desc: "Generate unrelated return shipment URL", href: "myparcel-api.html#post-return-shipments" },
      { api: "MyParcel API", method: "GET", path: "/notification_groups", desc: "Get notification groups", href: "myparcel-api.html#get-notification-groups" },
      { api: "MyParcel API", method: "POST", path: "/notification_groups", desc: "Create notification groups", href: "myparcel-api.html#post-notification-groups" },
      { api: "MyParcel API", method: "DELETE", path: "/notification_groups/{ids}", desc: "Delete notification groups", href: "myparcel-api.html#delete-notification-groups-ids" },
      { api: "MyParcel API", method: "GET", path: "/notification_groups/{notification_group_id}/notification_templates", desc: "Get notification templates", href: "myparcel-api.html#get-notification-groups-notification-group-id-notification-templates" },
      { api: "MyParcel API", method: "PUT", path: "/notification_groups/{notification_group_id}/notification_templates/{notification_template_id}", desc: "Update notification template", href: "myparcel-api.html#put-notification-groups-notification-group-id-notification-templates-notification-template-id" },
      { api: "MyParcel API", method: "PUT", path: "/notification_groups/{notification_group_id}/notification_templates/disable", desc: "Disable all notification templates in a notification group", href: "myparcel-api.html#put-notification-groups-notification-group-id-notification-templates-disable" },
      { api: "MyParcel API", method: "PUT", path: "/notification_groups/{notification_group_id}/notification_templates/enable", desc: "Enable all notification templates in a notification group", href: "myparcel-api.html#put-notification-groups-notification-group-id-notification-templates-enable" },
      { api: "MyParcel API", method: "PUT", path: "/notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/disable", desc: "Disable notification template", href: "myparcel-api.html#put-notification-groups-notification-group-id-notification-templates-notification-template-id-disable" },
      { api: "MyParcel API", method: "PUT", path: "/notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/enable", desc: "Enable notification template", href: "myparcel-api.html#put-notification-groups-notification-group-id-notification-templates-notification-template-id-enable" },
      { api: "MyParcel API", method: "POST", path: "/notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/test", desc: "Send test notification", href: "myparcel-api.html#post-notification-groups-notification-group-id-notification-templates-notification-template-id-test" },
      { api: "MyParcel API", method: "GET", path: "/webhook_subscriptions", desc: "Get webhook subscriptions", href: "myparcel-api.html#get-webhook-subscriptions" },
      { api: "MyParcel API", method: "POST", path: "/webhook_subscriptions", desc: "Create webhook subscriptions", href: "myparcel-api.html#post-webhook-subscriptions" },
      { api: "MyParcel API", method: "GET", path: "/webhook_subscriptions/{ids}", desc: "Get webhook subscriptions by id.", href: "myparcel-api.html#get-webhook-subscriptions-ids" },
      { api: "MyParcel API", method: "DELETE", path: "/webhook_subscriptions/{ids}", desc: "Delete webhook subscriptions", href: "myparcel-api.html#delete-webhook-subscriptions-ids" },
      { api: "IAM API", method: "GET", path: "/whoami", desc: "Find out who you are and what you can.", href: "iam-api.html#get-whoami" },
      { api: "Rule API", method: "GET", path: "/shops/{shopId}/order-rules", desc: "List all order rule groups", href: "rule-api.html#get-shops-shopid-order-rules" },
      { api: "Rule API", method: "POST", path: "/shops/{shopId}/order-rules", desc: "Create an order rule group", href: "rule-api.html#post-shops-shopid-order-rules" },
      { api: "Rule API", method: "PUT", path: "/shops/{shopId}/order-rules/{ruleGroupId}", desc: "Update an order rule group", href: "rule-api.html#put-shops-shopid-order-rules-rulegroupid" },
      { api: "Rule API", method: "DELETE", path: "/shops/{shopId}/order-rules/{ruleGroupId}", desc: "Delete an order rule group", href: "rule-api.html#delete-shops-shopid-order-rules-rulegroupid" },
      { api: "Address API", method: "GET", path: "/addresses", desc: "List addresses by query parameters.", href: "address-api.html#get-addresses" },
      { api: "Address API", method: "GET", path: "/validate", desc: "Validate an address by query parameters.", href: "address-api.html#get-validate" },
      { api: "Printing API", method: "GET", path: "/printer-groups", desc: "Get the list accessible printer groups", href: "printing-api.html#get-printer-groups" },
      { api: "Printing API", method: "GET", path: "/printers", desc: "Get the list of available printers", href: "printing-api.html#get-printers" },
      { api: "Printing API", method: "GET", path: "/status", desc: "Get the direct printing account status", href: "printing-api.html#get-status" },
      { api: "Printing API", method: "POST", path: "/allow-shops-access-to-printer-group", desc: "Allows shop IDs to access a printer group", href: "printing-api.html#post-allow-shops-access-to-printer-group" },
      { api: "Printing API", method: "POST", path: "/assign-printer-to-group", desc: "Assign a printer to a printer group", href: "printing-api.html#post-assign-printer-to-group" },
      { api: "Printing API", method: "POST", path: "/create-printer-group", desc: "Create printer group", href: "printing-api.html#post-create-printer-group" },
      { api: "Printing API", method: "POST", path: "/enable-direct-printing", desc: "Enable direct printing", href: "printing-api.html#post-enable-direct-printing" },
      { api: "Printing API", method: "POST", path: "/remove-printer-group", desc: "Remove printer group", href: "printing-api.html#post-remove-printer-group" },
      { api: "Printing API", method: "POST", path: "/rename-printer-group", desc: "Rename printer group", href: "printing-api.html#post-rename-printer-group" },
      { api: "Printing API", method: "POST", path: "/sync-printers", desc: "Synchronize printers", href: "printing-api.html#post-sync-printers" },
      { api: "Printing API", method: "POST", path: "/unassign-printer-from-group", desc: "Unassign a printer from a printer group", href: "printing-api.html#post-unassign-printer-from-group" },
      { api: "Product API", method: "POST", path: "/create-product", desc: "Create a product.", href: "product-api.html#post-create-product" },
      { api: "Product API", method: "GET", path: "/products", desc: "Query and/or filter products.", href: "product-api.html#get-products" },
      { api: "Product API", method: "POST", path: "/manage-inventory", desc: "Manage inventory of a product.", href: "product-api.html#post-manage-inventory" },
      { api: "Product API", method: "POST", path: "/update-product", desc: "Update a product.", href: "product-api.html#post-update-product" },
      { api: "Order API", method: "POST", path: "/add-note", desc: "Add a note to an order.", href: "order-api.html#post-add-note" },
      { api: "Order API", method: "POST", path: "/assign-to-user", desc: "Assign orders to an user. Only possible if the order has `status=OPEN`.", href: "order-api.html#post-assign-to-user" },
      { api: "Order API", method: "POST", path: "/cancel", desc: "Cancel orders.", href: "order-api.html#post-cancel" },
      { api: "Order API", method: "POST", path: "/create-from-shippable-packages", desc: "Create an order from shippable packages.", href: "order-api.html#post-create-from-shippable-packages" },
      { api: "Order API", method: "POST", path: "/add-packages", desc: "Add packages to orders", href: "order-api.html#post-add-packages" },
      { api: "Order API", method: "POST", path: "/prepare-packages-for-shipment", desc: "Prepares packages for shipment", href: "order-api.html#post-prepare-packages-for-shipment" },
      { api: "Order API", method: "POST", path: "/unprepare-packages-for-shipment", desc: "Unprepares packages for shipment", href: "order-api.html#post-unprepare-packages-for-shipment" },
      { api: "Order API", method: "POST", path: "/edit-note", desc: "Edit a note of an order.", href: "order-api.html#post-edit-note" },
      { api: "Order API", method: "POST", path: "/import", desc: "Import an order after it is discovered from a sales channel.", href: "order-api.html#post-import" },
      { api: "Order API", method: "GET", path: "/orders", desc: "Query and/or filter orders.", href: "order-api.html#get-orders" },
      { api: "Order API", method: "GET", path: "/packing-slips", desc: "Generate packing slips for 1 or more orders.", href: "order-api.html#get-packing-slips" },
      { api: "Order API", method: "GET", path: "/picklist", desc: "Generate a picklist for 1 or more orders.", href: "order-api.html#get-picklist" },
      { api: "Order API", method: "POST", path: "/remove-notes", desc: "Remove notes from an order.", href: "order-api.html#post-remove-notes" },
      { api: "Order API", method: "POST", path: "/unassign-from-user", desc: "Unassign orders from an user. Only possible if the order has `status=OPEN`", href: "order-api.html#post-unassign-from-user" },
      { api: "Delegation API", method: "POST", path: "/delegation-requests/api-key", desc: "Register API Key for a delegation request.", href: "delegation-api.html#post-delegation-requests-api-key" },
      { api: "Delegation API", method: "POST", path: "/delegation-requests/api-key-without-secret", desc: "Register API Key for a delegation request (without secret).", href: "delegation-api.html#post-delegation-requests-api-key-without-secret" },
      { api: "Purchase Order API", method: "POST", path: "/add-lines", desc: "Add lines to a purchase order.", href: "purchase-order-api.html#post-add-lines" },
      { api: "Purchase Order API", method: "POST", path: "/cancel", desc: "Cancel a purchase order.", href: "purchase-order-api.html#post-cancel" },
      { api: "Purchase Order API", method: "POST", path: "/create", desc: "Create a purchase order.", href: "purchase-order-api.html#post-create" },
      { api: "Purchase Order API", method: "GET", path: "/purchase-orders", desc: "Query and/or filter purchase orders.", href: "purchase-order-api.html#get-purchase-orders" },
      { api: "Purchase Order API", method: "GET", path: "/purchase-orders/{purchaseOrderId}/packing-slip", desc: "Download a packing slip.", href: "purchase-order-api.html#get-purchase-orders-purchaseorderid-packing-slip" },
      { api: "Purchase Order API", method: "POST", path: "/remove", desc: "Remove purchase order.", href: "purchase-order-api.html#post-remove" },
      { api: "Purchase Order API", method: "POST", path: "/remove-lines", desc: "Remove lines from a purchase order.", href: "purchase-order-api.html#post-remove-lines" },
      { api: "Purchase Order API", method: "POST", path: "/set-delivery-supplier-details", desc: "Set delivery supplier details of a purchase order.", href: "purchase-order-api.html#post-set-delivery-supplier-details" },
      { api: "Purchase Order API", method: "POST", path: "/set-delivery-type", desc: "Set delivery type of a purchase order.", href: "purchase-order-api.html#post-set-delivery-type" },
      { api: "Purchase Order API", method: "POST", path: "/set-expected-delivery", desc: "Set expected delivery of a purchase order.", href: "purchase-order-api.html#post-set-expected-delivery" },
      { api: "Purchase Order API", method: "POST", path: "/register", desc: "Register a purchase order.", href: "purchase-order-api.html#post-register" },
      { api: "Purchase Order API", method: "POST", path: "/update-line-quantity", desc: "Update quantity of a purchase order line.", href: "purchase-order-api.html#post-update-line-quantity" },

      // Documentation, SDKs, Platforms
      { api: "Documentation", method: "DOC", path: "Getting started",    desc: "Sign up, obtain credentials and create your first shipment in three steps.",           href: "docs/getting-started.html" },
      { api: "Documentation", method: "DOC", path: "Authentication",     desc: "Exchange client credentials for a bearer token, manage scopes, refresh and revoke.",   href: "docs/authentication.html" },
      { api: "Documentation", method: "DOC", path: "Shipments",          desc: "Lifecycle, creating shipments, labels, and cancellation rules.",                        href: "docs/shipments.html" },
      { api: "Documentation", method: "DOC", path: "Delivery options",   desc: "Pickup points, evening delivery, signed-for, insurance, age-check.",                    href: "docs/delivery-options.html" },
      { api: "Documentation", method: "DOC", path: "Webhooks",           desc: "Subscribe to shipment events, verify HMAC signatures, handle retries.",                 href: "docs/webhooks.html" },
      { api: "Documentation", method: "DOC", path: "Data types",         desc: "Money in cents, RFC3339 timestamps, ISO country codes, carrier codes, error shape.",   href: "docs/data-types.html" },
      { api: "SDKs", method: "SDK", path: "PHP SDK",           desc: "Typed PHP client. composer require myparcelnl/sdk. PHP 8.1+.",                                  href: "docs/php-sdk.html" },
      { api: "SDKs", method: "SDK", path: "JavaScript SDK",    desc: "Promise-based TypeScript client. npm i @myparcelnl/sdk. Node 18+.",                             href: "docs/javascript-sdk.html" },
      { api: "Platforms", method: "INT", path: "WooCommerce",       desc: "MyParcel for WooCommerce plugin — checkout widget, bulk labels, tracking emails.",        href: "docs/platforms/woocommerce.html" },
      { api: "Platforms", method: "INT", path: "Shopify",           desc: "Shopify integration — coming soon in this portal.",                                       href: "docs/platforms/coming-soon.html?p=Shopify" },
      { api: "Platforms", method: "INT", path: "Magento 2",         desc: "MyParcel for Magento 2 plugin — vervoerderinstellingen, checkout-bezorgopties, bulk labels en productoverrides.", href: "docs/platforms/magento2.html" },
      { api: "Platforms", method: "INT", path: "PrestaShop",        desc: "MyParcel for PrestaShop module — PDK-based checkout, carrier setup, product overrides en bulk labels.",  href: "docs/platforms/prestashop.html" },
      { api: "Platforms", method: "INT", path: "Shopware",          desc: "Shopware integration — coming soon in this portal.",                                      href: "docs/platforms/coming-soon.html?p=Shopware" }
];

  /* ----------------------------------------------------------
     5. Search results page — render matches from a fake index
  ---------------------------------------------------------- */
  var resultsContainer = document.getElementById("mp-results-container");
  if (resultsContainer) {
    var index = SEARCH_INDEX;

var params = new URLSearchParams(window.location.search);
    var q = (params.get("q") || "shipment").trim();
    var qLower = q.toLowerCase();

    var queryEl = document.getElementById("mp-search-query");
    if (queryEl) queryEl.textContent = q;
    if (searchInput) searchInput.value = q;

    var matches = index.filter(function (row) {
      return (
        row.path.toLowerCase().indexOf(qLower) !== -1 ||
        row.desc.toLowerCase().indexOf(qLower) !== -1 ||
        row.method.toLowerCase() === qLower
      );
    });

    var countEl = document.getElementById("mp-search-count");
    if (countEl) countEl.textContent = matches.length;

    if (matches.length === 0) {
      resultsContainer.innerHTML =
        '<div class="mp-search-empty">No results. Try another term — e.g. <code>token</code>, <code>shipment</code> or <code>carrier</code>.</div>';
      return;
    }

    function highlight(text, term) {
      if (!term) return text;
      var escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return text.replace(new RegExp("(" + escaped + ")", "gi"), "<mark>$1</mark>");
    }

    function methodClass(m) {
      return "mp-method--" + m.toLowerCase();
    }

    resultsContainer.innerHTML = matches.map(function (row) {
      return (
        '<a class="mp-result" href="' + row.href + '">' +
          '<div class="mp-result__top">' +
            '<span class="mp-result__api">' + row.api + '</span>' +
            '<span class="mp-method ' + methodClass(row.method) + '">' + row.method + '</span>' +
            '<span class="mp-result__path">' + highlight(row.path, q) + '</span>' +
          '</div>' +
          '<div class="mp-result__desc">' + highlight(row.desc, q) + '</div>' +
        '</a>'
      );
    }).join("");
  }
})();
