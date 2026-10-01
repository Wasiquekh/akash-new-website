#!/usr/bin/env node
// Structured-data check. Run after `next build`:
//   node scripts/validate-jsonld.mjs
// Reads the prerendered HTML in .next/server/app, extracts every
// <script type="application/ld+json"> and validates it. No dependencies.
import fs from "node:fs";
import path from "node:path";

const ROOT = ".next/server/app";
const SITE = "https://www.asbconsulting.in/";
const ORG_ID = `${SITE}#organization`;
const WEBSITE_ID = `${SITE}#website`;
const URL_KEYS = new Set(["@id", "url", "item", "logo", "image", "sameAs", "target"]);
const BANNED_TYPES = new Set([
  "AggregateRating", "Review", "Rating", "Product", "Offer", "SearchAction", "FAQPage", "LocalBusiness",
]);
const BANNED_KEYS = new Set(["aggregateRating", "review", "ratingValue", "reviewCount", "offers", "sameAs"]);

if (!fs.existsSync(ROOT)) {
  console.error(`${ROOT} not found – run "npm run build" first.`);
  process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html") && !e.name.startsWith("_")) htmlFiles.push(p);
  }
})(ROOT);

// route for an html file: index.html -> "/", operation/qms.html -> "/operation/qms"
const routeOf = (f) => {
  const r = path.relative(ROOT, f).replace(/\.html$/, "").split(path.sep).join("/");
  return r === "index" ? "/" : `/${r}`;
};
const routes = new Set(htmlFiles.map(routeOf));
const publicFile = (pathname) => fs.existsSync(path.join("public", decodeURI(pathname)));

let errors = 0;
let blocks = 0;
const typeCount = {};
const fail = (route, msg) => { errors++; console.error(`  ✗ ${route}: ${msg}`); };

for (const file of htmlFiles.sort()) {
  const route = routeOf(file);
  if (route === "/404" || route === "/500") continue;
  const html = fs.readFileSync(file, "utf8");
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]?.replace(/&amp;/g, "&");
  const nodes = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    blocks++;
    try {
      const data = JSON.parse(m[1]);
      for (const n of Array.isArray(data) ? data : data["@graph"] ?? [data]) nodes.push(n);
    } catch (e) {
      fail(route, `invalid JSON (${e.message})`);
    }
    if (/\bundefined\b|\bnull\b/.test(m[1])) fail(route, "block contains undefined/null");
  }
  if (!nodes.length) { fail(route, "no JSON-LD in server HTML"); continue; }

  // walk every value
  const defined = {}; // @id -> count of full definitions (more than just a reference)
  const walk = (v, key, top) => {
    if (Array.isArray(v)) return v.forEach((x) => walk(x, key, false));
    if (v && typeof v === "object") {
      const t = v["@type"];
      if (t) {
        if (top) typeCount[t] = (typeCount[t] || 0) + 1;
        if (BANNED_TYPES.has(t)) fail(route, `unsupported type ${t}`);
      }
      if (v["@id"] && Object.keys(v).length > 1) defined[v["@id"]] = (defined[v["@id"]] || 0) + 1;
      for (const [k, x] of Object.entries(v)) {
        if (BANNED_KEYS.has(k)) fail(route, `unsupported property ${k}`);
        if (x === "" || x === undefined || x === null) fail(route, `empty value for ${k}`);
        walk(x, k, false);
      }
      return;
    }
    if (typeof v === "string" && URL_KEYS.has(key)) {
      if (!v.startsWith(SITE)) return fail(route, `${key} is not on ${SITE}: ${v}`);
      const u = new URL(v);
      const p = decodeURI(u.pathname).replace(/\/$/, "") || "/";
      if (!routes.has(p) && !publicFile(u.pathname)) fail(route, `${key} points to a non-existent path: ${v}`);
    }
  };
  nodes.forEach((n) => walk(n, undefined, true));

  for (const [id, n] of Object.entries(defined)) if (n > 1) fail(route, `${id} defined ${n} times`);
  if (defined[ORG_ID] !== 1) fail(route, "Organization entity missing");
  if (defined[WEBSITE_ID] !== 1) fail(route, "WebSite entity missing");

  const byType = (t) => nodes.filter((n) => n["@type"] === t);
  if (byType("BreadcrumbList").length > 1) fail(route, "duplicate BreadcrumbList");
  if (byType("Service").length > 1) fail(route, "duplicate Service");

  for (const b of byType("BreadcrumbList")) {
    const items = b.itemListElement || [];
    if (items.length < 2) fail(route, "BreadcrumbList needs at least 2 items");
    items.forEach((it, i) => { if (it.position !== i + 1) fail(route, `breadcrumb position ${it.position} at index ${i}`); });
    const last = items[items.length - 1];
    if (canonical && last && last.item !== canonical) fail(route, `last breadcrumb ${last.item} ≠ canonical ${canonical}`);
  }

  const pages = nodes.filter((n) => typeof n["@id"] === "string" && n["@id"].endsWith("#webpage"));
  if (pages.length !== 1) fail(route, `expected 1 WebPage-type node, found ${pages.length}`);
  for (const p of pages) {
    if (canonical && p.url !== canonical) fail(route, `WebPage url ${p.url} ≠ canonical ${canonical}`);
    if (p["@id"] !== `${p.url}#webpage`) fail(route, `WebPage @id ${p["@id"]} does not match url`);
    if (p.isPartOf?.["@id"] !== WEBSITE_ID) fail(route, "WebPage.isPartOf is not #website");
  }
  for (const s of byType("Service")) {
    if (canonical && s.url !== canonical) fail(route, `Service url ≠ canonical`);
    if (s["@id"] !== `${s.url}#service`) fail(route, `Service @id does not match url`);
    if (s.provider?.["@id"] !== ORG_ID) fail(route, "Service.provider is not #organization");
  }
}

console.log(`\n${htmlFiles.length} HTML files, ${blocks} JSON-LD blocks`);
console.log("Top-level types:", JSON.stringify(typeCount));
if (errors) { console.error(`\n${errors} structured-data error(s)`); process.exit(1); }
console.log("All structured data valid ✓");
