# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Astro dev server (http://localhost:4321)
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built `dist/` locally

No test, lint, or typecheck scripts are defined. TypeScript is configured via `astro/tsconfigs/strict` and runs as part of `astro build`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `npm install && npm run build` and publishes `dist/` to GitHub Pages. Custom domain is `shopvirge.com` (`public/CNAME`).

## Architecture

Astro 5 static marketing site with Tailwind CSS v4. No CMS, no JS framework, no backend — just `.astro` pages, `.md` blog posts, and a tiny bit of vanilla `<script>` in `Layout.astro`.

### i18n routing

`astro.config.mjs` sets `defaultLocale: 'nl'` with `prefixDefaultLocale: false`, but in practice **every page lives under `/nl/` or `/en/`** (mirrored directories under `src/pages/`). The root `src/pages/index.astro` is a meta-refresh + JS redirect that sniffs `navigator.language` and sends the user to `/nl/` or `/en/`.

Slug pairs are NOT auto-derived from the directory structure — they are hand-maintained in two places:

1. **Directory names**: `src/pages/nl/functies/` ↔ `src/pages/en/features/`, `nl/prijzen/` ↔ `en/pricing/`.
2. **`slugMap` in `src/layouts/Layout.astro`** (around line 17): a bidirectional map used by the header/footer language switcher so the user stays on the equivalent page when toggling languages. **When adding a new translated page or blog post, you must add both directions to this map** — otherwise the language switcher falls back to the literal URL with the language prefix swapped, which 404s.

### Blog posts

Markdown files under `src/pages/{nl,en}/blog/`. Each post sets `layout:` in frontmatter — **NL posts must use `../../../layouts/BlogPostNL.astro`, EN posts must use `BlogPostEN.astro`** (the unused `BlogPost.astro` is a legacy variant). Frontmatter fields read by the layouts: `title`, `description`, `date`, `author`, `tags`, `image` (URL or relative path).

`blog/index.astro` enumerates posts with `import.meta.glob('./*.md', { eager: true })` and sorts by `frontmatter.date` descending.

### Layout & styling

- `src/layouts/Layout.astro` is the single chrome shell (header + lang switcher + footer + mobile menu). Pages pass `lang="nl"` or `lang="en"`.
- `src/styles/global.css` defines Tailwind v4 `@theme` color tokens (`--color-brand`, `--color-accent`, etc.) — reference these via Tailwind utilities like `bg-brand`, `text-text-heading`. Custom utility classes `.btn-primary`, `.btn-secondary`, `.card`, `.hero` are also defined there.
- Always prefix asset and internal URLs with `const base = import.meta.env.BASE_URL;` (e.g. `${base}images/logo.png`, `${base}nl/contact/`). `base` is `/` in production but is the correct way to construct paths.

### Icons

`src/components/Icon.astro` reads SVGs directly from `node_modules/lucide-static/icons/<name>.svg` at build time. If a requested icon doesn't exist in `lucide-static`, the component silently renders an HTML comment — pick a name that exists in that package (e.g. `git-fork`, not `github`).
