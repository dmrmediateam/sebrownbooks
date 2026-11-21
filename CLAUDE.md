# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start the Next.js dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # next lint (extends next/core-web-vitals)
npm run sanity   # Run Sanity Studio locally (studio is otherwise hosted at sebrownbooks.sanity.studio)
```

There is no test suite/runner configured in this repo (no `test` script, no Jest/Vitest/Playwright dependency).

A dev-server launch config for the Claude Code preview tool already exists at `.claude/launch.json` (name `sebrownbooks-dev`, port 3000).

`npm run build` writes to the same `.next/` folder the dev server uses. Stop the dev server before building, and delete `.next/` before starting it again. The build downloads the Lora and Source Sans 3 fonts from Google at build time (it needs network access); a one-off "error occurred in `next/font`" failure has happened once and passed on retry.

## Architecture

**Stack:** Next.js 14 (App Router, TypeScript), CSS Modules for styling (no Tailwind, no CSS-in-JS — `styled-components` is an installed dependency but is not actually used anywhere), Sanity CMS for the blog, Twilio SendGrid for the contact form, FontAwesome (React SVG components) for icons, Lora + Source Sans 3 (via `next/font/google`) for type.

### Page structure and styling convention

Every route is `app/<route>/page.tsx` + a co-located `page.module.css` of the same name. There are no shared layout components between sibling pages beyond the root `Nav`/`Footer` — **each page's JSX and CSS module is self-contained and duplicated rather than abstracted into shared components.** For example, the book pages (`app/books/the-shore`, `for-you`, `beside-us`, `CALDER`) and their `chapter-1`/`content-warnings` sub-routes independently re-declare nearly identical class names (`.bookDetails`, `.bookImageWrapper`, `.bookInfo`, `.sectionHeading`, `.buyStack`, etc.) in their own `page.module.css` files with the same values. This is the established pattern in this codebase: when adding a new page or section, **copy the structure of the most similar existing sibling page** rather than extracting a shared component/hook, so the pages stay independently editable. A global style change therefore means editing every page's stylesheet (grep for the shared class names).

Only a few components are actually shared and imported across pages, all in `app/components/`: `Nav`, `Footer`, `NewsletterForm`, `ContactForm`. Of these, `Nav`, `NewsletterForm`, and `ContactForm` are `'use client'` components (state/interactivity); everything else in the app, including every page, is a server component.

Page families: `app/books/<title>/` (book page + `chapter-1` + `content-warnings`), `app/series/<series>/` (the-shore-series, the-pittsburgh-forge-series: a hero plus `bookCard`s), and the homepage, whose Feature card and two Series cards exist only in `app/page.module.css`.

**Card look.** Cards (book/series cards, the homepage cards, and the About and Contact content) share one look: white background, `border-radius: 8px`, `box-shadow: 0 2px 12px rgba(26, 42, 58, 0.08)`, `border: 1px solid rgba(26, 42, 58, 0.1)`, 3rem padding (2rem 1.5rem on phones).

**Spacing rhythm.** Hero sections use `padding: 4rem 2rem` with no margin under the last hero element. The last content section of each page uses `padding-bottom: 2.5rem` (1.5rem on phones) and the footer has `margin-top: 2rem`, which gives a consistent 72px gap above the footer on every page. The homepage's stacked sections are separated by 4rem.

### Global styles and design tokens

`app/globals.css` defines the color palette as CSS custom properties (`--color-dark-blue`, `--color-off-black`, `--color-white` (`#FFFFFF`), `--color-accent-blue`, plus semantic aliases) and `--font-body` / `--font-heading`.

- **Source Sans 3** (weights 400/500/600) — body text, nav, buttons, labels. **Lora** (600) — all headings (`h1`–`h6`). Both are loaded in `app/layout.tsx` and exposed as CSS variables on `<html>`.
- Heading sizes live **only** in the global `h1`/`h2`/`h3` rules (`clamp(2.25rem, 3.5vw, 2.75rem)` / `clamp(1.5rem, 2.5vw, 1.875rem)` / `clamp(1.25rem, 2vw, 1.375rem)`). Don't set `font-size` or `font-weight` on a heading's page-level class.
- Descriptive body text (book descriptions, character text, card text, privacy and content-warnings text) uses `font-size: clamp(.9rem, 1.5vw, 1.0rem); line-height: 1.5; font-weight: 400`.
- The "S.E. Brown" script logo in `Nav` still uses the Adobe Typekit font `shelby` (the `<link>` in `app/layout.tsx`'s `<head>`). The `AmazonEndure` `@font-face` rules and `public/Fonts/*.otf` are leftovers and no longer used by any text.

One recurring CSS gotcha: only Source Sans 3 weights 400/500/600 are loaded, so `font-weight: 300` renders as 400, and a `<strong>` inside a paragraph declared at 300 resolves to 400 and does **not** look bold. Several stylesheets add an explicit `strong { font-weight: 600; }` scoped to the containing class; do the same when bolding text.

### Nav and hidden pages

`app/components/Nav.tsx` hardcodes its own link list (`navLinks`) — adding a new top-level page does **not** automatically add it to the nav or footer. Some pages are intentionally excluded from navigation and reachable only by direct URL: the `chapter-1` sample-chapter pages under `app/books/*/chapter-1` (also `noindex`) and `/links` (a standalone link-in-bio page). `/books/CALDER/chapter-1` does not exist yet; its button on the CALDER page is commented out.

### Metadata and SEO

`app/layout.tsx` sets `robots` ("index, follow"), `authors` and `publisher` for the whole site. Every page defines its own `metadata` (title, description) plus an absolute `alternates.canonical` of the form `https://sebrownbooks.com/<path>` (no `www`). `chapter-1` pages override `robots` to `noindex`. `app/sitemap.ts` is a **hand-maintained list of static routes** (only blog posts are generated from Sanity), so add new pages to it yourself. When you add a page, set its title, description and canonical.

### Blog (Sanity CMS)

Blog content is fetched from Sanity via `lib/sanity.ts` (client) and `lib/blog.ts` (`getAllBlogPosts`, `getBlogPostBySlug` — GROQ queries, used by `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, and `app/sitemap.ts`). The Sanity project ID/dataset default to hardcoded fallbacks (`343gj1ge` / `production`) if the `NEXT_PUBLIC_SANITY_PROJECT_ID`/`NEXT_PUBLIC_SANITY_DATASET` env vars aren't set. Sanity schemas live in `sanity/schemas/` and are wired up via `sanity.config.ts` at the repo root; `/studio` redirects (in `next.config.js`) to the separately-hosted Studio rather than serving it from this app.

### Contact form

`app/components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which validates/sanitizes input and calls `sendContactFormEmail` in `lib/email.ts` (Twilio SendGrid, HTML + plaintext email templates inline in that file). Required env vars are documented in `.env.example`: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `SENDGRID_FROM_NAME`, `CONTACT_FORM_EMAIL`.

### Redirects

`next.config.js` defines two permanent redirects: `/books` → `/` (the old combined books-listing page was retired in favor of individual `/books/<title>` pages) and `/studio` → the hosted Sanity Studio.

### Images

Images live in `public/` as flat files and are referenced by absolute path (`/TheShore-cover.jpg`) from `next/image`, not imported. Book covers are named `<Title>-cover.jpg` (`TheShore`, `ForYou`, `BesideUs`, `CALDER`, `HAYES`, `ROWAN`, `KINCAID`, `PIERCE`, `THEFORGE`) and all share one 1575 × 2400 size; series banners are `the-shore-series.jpg` and `the-pittsburgh-forge-series.jpg` (1200 × 630).

- Cover alt text is the same everywhere a cover appears, e.g. `Cover of 'The Shore,' the first contemporary romance in The Shore Series by S.E. Brown`. If you change one, grep for the file name and change every occurrence.
- Cover sizing: book-page covers are capped at `max-height: 570px`, series-page covers at `420px` (`width: auto; max-width: 100%`).
- **Dev-only gotcha:** `next dev` has twice served the wrong cover for a URL (a stale or crossed entry in the image cache). If a cover looks wrong, delete `.next/cache/images` and restart the dev server; the file in `public/` is fine.
