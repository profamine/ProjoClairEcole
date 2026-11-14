// Génère ar/index.html (version arabe, adresse /ar/) à partir de index.html.
// À relancer après chaque modification de index.html : node tools/build-ar.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SITE = "https://www.projoclairecole.online";
const TITLE = "إصلاح ومصابيح أجهزة العرض (داتا شو) في مراكش | ProjoClair École";
const DESC =
  "إصلاح وتنظيف واستبدال مصابيح أجهزة العرض (البروجيكتور، داتا شو) إبسون لمدارس مراكش. فحص مجاني، تدخل خلال 48 ساعة، فاتورة. واتساب 0657048071.";
const OG_DESC = "فحص مجاني، تنظيف، مصابيح إبسون وعقد صيانة سنوي لمدارس مراكش.";

const SEO_AR = `<!-- seo:start (généré par tools/build-ar.mjs, ne pas modifier ici) -->
<title>${TITLE}</title>
<meta name="description" content="${DESC}">
<link rel="canonical" href="${SITE}/ar/">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${OG_DESC}">
<meta property="og:url" content="${SITE}/ar/">
<meta property="og:locale" content="ar_MA">
<meta property="og:locale:alternate" content="fr_MA">
<!-- seo:end -->`;

const src = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const block = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
const html = '<html lang="fr" dir="ltr" data-page-lang="fr">';
if (!block.test(src) || !src.includes(html)) throw new Error("Repères seo:start/seo:end ou balise <html> introuvables dans index.html");

const out = src.replace(block, SEO_AR).replace(html, '<html lang="ar" dir="rtl" data-page-lang="ar">');
mkdirSync(new URL("../ar/", import.meta.url), { recursive: true });
writeFileSync(new URL("../ar/index.html", import.meta.url), out);
console.log("ar/index.html généré");
