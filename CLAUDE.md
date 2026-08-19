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

## Architecture

**Stack:** Next.js 14 (App Router, TypeScript), CSS Modules for styling (no Tailwind, no CSS-in-JS — `styled-components` is an installed dependency but is not actually used anywhere), Sanity CMS for the blog, Twilio SendGrid for the contact form, FontAwesome (React SVG components) for icons, Adobe Typekit + local OTF files for fonts.

### Page structure and styling convention

Every route is `app/<route>/page.tsx` + a co-located `page.module.css` of the same name. There are no shared layout components between sibling pages beyond the root `Nav`/`Footer` — **each page's JSX and CSS module is self-contained and duplicated rather than abstracted into shared components.** For example, the three book pages (`app/books/the-shore`, `app/books/for-you`, `app/books/beside-us`) and their `chapter-1`/`content-warnings` sub-routes independently re-declare nearly identical class names (`.bookDetails`, `.bookImageWrapper`, `.bookInfo`, `.sectionHeading`, `.buyStack`, `.characterName`, etc.) in their own `page.module.css` files with the same values. This is the established pattern in this codebase: when adding a new page or section, **copy the structure of the most similar existing sibling page** rather than extracting a shared component/hook, so the pages stay independently editable.

Only a few components are actually shared and imported across pages, all in `app/components/`: `Nav`, `Footer`, `NewsletterForm`, `ContactForm`. Of these, `Nav`, `NewsletterForm`, and `ContactForm` are `'use client'` components (state/interactivity); everything else in the app, including every page, is a server component.

### Global styles and design tokens

`app/globals.css` defines the color palette as CSS custom properties (`--color-dark-blue`, `--color-off-black`, `--color-off-white`, `--color-accent-blue`, plus semantic aliases) and the two font families:
- **AmazonEndure** — body text, loaded from local `.otf` files in `public/Fonts/` at weights 300/400/600 (plus italics)
- **shelby** — all headings (`h1`–`h6`), loaded via the Adobe Typekit `<link>` in `app/layout.tsx`'s `<head>`

Base `h1`–`h6`/`p` sizing is set globally with `clamp()`; individual pages then override `font-size` on their own heading classes (e.g. `.sectionHeading`, `.characterName`) rather than relying on the bare tag styles.

One recurring CSS gotcha in this codebase: `<strong>` inside a paragraph with `font-weight: 300` does **not** render as visually bold by default — CSS's `bolder` keyword only steps 300 up to 400. Several stylesheets add an explicit `strong { font-weight: 600; }` override scoped to the containing class to fix this; do the same when bolding text inside a light-weight paragraph.

### Nav and hidden pages

`app/components/Nav.tsx` hardcodes its own link list (`navLinks`) — adding a new top-level page does **not** automatically add it to the nav or footer. Some pages are intentionally excluded from navigation and reachable only by direct URL (e.g. the `chapter-1` sample-chapter pages under `app/books/*/chapter-1`), and `/links` is a standalone page also left out of the nav intentionally.

### Blog (Sanity CMS)

Blog content is fetched from Sanity via `lib/sanity.ts` (client) and `lib/blog.ts` (`getAllBlogPosts`, `getBlogPostBySlug` — GROQ queries, used by `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, and `app/sitemap.ts`). The Sanity project ID/dataset default to hardcoded fallbacks (`343gj1ge` / `production`) if the `NEXT_PUBLIC_SANITY_PROJECT_ID`/`NEXT_PUBLIC_SANITY_DATASET` env vars aren't set. Sanity schemas live in `sanity/schemas/` and are wired up via `sanity.config.ts` at the repo root; `/studio` redirects (in `next.config.js`) to the separately-hosted Studio rather than serving it from this app.

### Contact form

`app/components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which validates/sanitizes input and calls `sendContactFormEmail` in `lib/email.ts` (Twilio SendGrid, HTML + plaintext email templates inline in that file). Required env vars are documented in `.env.example`: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `SENDGRID_FROM_NAME`, `CONTACT_FORM_EMAIL`.

### Redirects

`next.config.js` defines two permanent redirects: `/books` → `/` (the old combined books-listing page was retired in favor of individual `/books/<title>` pages) and `/studio` → the hosted Sanity Studio.

### Images

Book cover images live in `public/` as flat files (e.g. `TheShore-cover.jpg`, `ForYou-cover.jpg`, `Beside-Us-CoverComingSoon.jpg`) and are referenced by absolute path (`/TheShore-cover.jpg`) from `next/image`, not imported.
