# SEO Implementatie — shopvirge.com

Gebaseerd op de SEO Analyse van 27 mei 2026 (score: 30/100).

## Wat is geimplementeerd

### HOOG prioriteit

| # | Actie | Status | Toelichting |
|---|-------|--------|-------------|
| 1 | **robots.txt** | Geimplementeerd | `public/robots.txt` aangemaakt met `Allow: /` en verwijzing naar sitemap. Zonder dit bestand kan Google niet efficient crawlen. |
| 2 | **sitemap.xml** | Geimplementeerd | `@astrojs/sitemap` integratie geinstalleerd en geconfigureerd in `astro.config.mjs`. Genereert automatisch een `sitemap-index.xml` met alle pagina's in NL en EN, inclusief hreflang-annotaties in de sitemap zelf. |
| 3 | **Homepage redirect verbeteren** | Geimplementeerd | De root `index.astro` had geen SEO-waarde (geen meta tags, geen canonical). Nu toegevoegd: `<title>`, `<meta name="description">`, `<link rel="canonical">` naar `/nl/`, en hreflang + x-default tags. Een echte 301-redirect is niet mogelijk op GitHub Pages (static hosting), dus de client-side redirect blijft behouden. |
| 4 | **Meta descriptions op alle pagina's** | Geimplementeerd | Unieke, beschrijvende meta descriptions (150-160 tekens) toegevoegd aan: NL homepage, EN homepage, NL/EN functies, NL/EN prijzen, NL/EN contact. Over-ons en privacy hadden al descriptions. Blogposts hadden al descriptions via frontmatter. De default description in `Layout.astro` is ook verbeterd (was generiek Engels, nu taalafhankelijk NL/EN). |
| 5 | **Hreflang tags** | Geimplementeerd | De hardcoded hreflang tags in `Layout.astro` (die altijd naar root wezen) zijn vervangen door dynamische tags die de huidige pagina en zijn vertaalde equivalent gebruiken. Dus `/nl/functies/` linkt nu correct naar `/en/features/` en vice versa. Ook `hreflang="x-default"` toegevoegd (wijst naar NL-versie als fallback). |
| 6 | **Canonical URLs** | Geimplementeerd | `<link rel="canonical">` toegevoegd op elke pagina in `Layout.astro`. Elke taalversie wijst naar zichzelf als canonical, wat voorkomt dat Google NL/EN als duplicaten ziet. |
| 7 | **Open Graph tags** | Geimplementeerd | Per pagina: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, `og:site_name`. De `image` prop is toegevoegd aan Layout zodat blogposts hun hero-afbeelding als OG image kunnen meegeven. |

### MEDIUM prioriteit

| # | Actie | Status | Toelichting |
|---|-------|--------|-------------|
| 8 | **Organization schema** | Geimplementeerd | JSON-LD `Organization` structured data op elke pagina via `Layout.astro`. Bevat bedrijfsnaam, URL, logo, adres en contactgegevens. |
| 9 | **BlogPosting schema** | Geimplementeerd | JSON-LD `BlogPosting` structured data in `BlogPostNL.astro` en `BlogPostEN.astro`. Bevat headline, datePublished, author, publisher, image, url en inLanguage. Maakt rich results in Google mogelijk. |
| 10 | **Product/Offer schema** | Geimplementeerd | JSON-LD `ItemList` met `Product` + `Offer` schema op NL en EN prijzenpagina's. Alle drie abonnementen (Small/Medium/Large) met naam, beschrijving, prijs en valuta. |
| 11 | **FAQPage schema** | Geimplementeerd | JSON-LD `FAQPage` schema op NL en EN prijzenpagina's met alle 6 veelgestelde vragen en antwoorden. FAQ rich results nemen veel ruimte in op de SERP. |
| 12 | **Image alt-teksten** | Geimplementeerd | Logo alt-tekst verbeterd van "ShopVirge" naar "ShopVirge logo — meertalig webshop platform" (header) en "ShopVirge logo" (footer). De hero-afbeelding op de homepages had al beschrijvende alt-teksten. |
| 13 | **Dubbele H1 fixen** | Geimplementeerd | De functiepagina's (NL en EN) hadden twee H1 tags. Gecombineerd tot een enkele H1: "Functies — Alles wat je nodig hebt voor een meertalige webshop" / "Features — Everything you need for a multilingual webshop". |
| 14 | **GA4 + Search Console** | Niet geimplementeerd | Vereist een GA4 Measurement ID en Search Console verificatiecode. Dit zijn credentials die handmatig moeten worden ingesteld. Aanbeveling: maak een GA4 property aan en voeg het script toe aan `Layout.astro`. |

### LAAG prioriteit

| # | Actie | Status | Toelichting |
|---|-------|--------|-------------|
| 15 | **Twitter Card tags** | Geimplementeerd | `twitter:card`, `twitter:title`, `twitter:description` en `twitter:image` tags op elke pagina via `Layout.astro`. |
| 16 | **Blog social sharing knoppen** | Niet geimplementeerd | Vergt aparte UI-componenten. Relatief lage SEO-impact, meer een UX-verbetering. |

## Wat nog handmatig moet gebeuren

1. **Google Analytics 4 instellen** — Maak een GA4 property aan op analytics.google.com, kopieer het Measurement ID (G-XXXXXXX), en voeg het script toe aan `Layout.astro` `<head>`.
2. **Google Search Console** — Verifieer het domein via DNS of HTML-tag, dien de sitemap in (`https://shopvirge.com/sitemap-index.xml`).
3. **Social sharing afbeelding** — De OG:image valt nu terug op het logo. Voor betere social previews: maak een 1200x630px branded afbeelding en plaats die als `public/images/og-default.jpg`.
4. **Blog interne links** — Het rapport noemt beperkte cross-linking in blogposts. Voeg links toe naar productpagina's (`/nl/functies/`, `/nl/prijzen/`) vanuit relevante blogartikelen.

## Gewijzigde bestanden

- `astro.config.mjs` — sitemap integratie toegevoegd
- `package.json` — `@astrojs/sitemap` dependency
- `public/robots.txt` — nieuw bestand
- `src/layouts/Layout.astro` — canonical, hreflang, OG, Twitter, Organization schema, alt-teksten
- `src/layouts/BlogPostNL.astro` — BlogPosting schema, image prop
- `src/layouts/BlogPostEN.astro` — BlogPosting schema, image prop
- `src/pages/index.astro` — meta tags en canonical op root redirect
- `src/pages/nl/index.astro` — meta description
- `src/pages/en/index.astro` — meta description
- `src/pages/nl/functies/index.astro` — meta description, H1 fix
- `src/pages/en/features/index.astro` — meta description, H1 fix
- `src/pages/nl/prijzen/index.astro` — meta description, Product/Offer + FAQPage schema
- `src/pages/en/pricing/index.astro` — meta description, Product/Offer + FAQPage schema
- `src/pages/nl/contact/index.astro` — meta description
- `src/pages/en/contact/index.astro` — meta description
