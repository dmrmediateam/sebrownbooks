# SE Brown Books

A Next.js website for SE Brown Books.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home** (`/`) - Main landing page
- **About** (`/about`) - About the author
- **Books** (`/books`) - Books listing page
- **Blog** (`/blog`) - Blog posts (Sanity CMS integration planned)
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page

## Sanity CMS Integration (Planned)

The blog section will be integrated with Sanity CMS. The structure is outlined below:

### Planned Sanity Schema

- **Post** - Blog post content type
  - Title
  - Slug
  - Published date
  - Author
  - Content (rich text)
  - Featured image
  - Categories/Tags
  - SEO metadata

### Integration Steps (To be implemented)

1. Install Sanity dependencies:
   - `@sanity/client`
   - `@sanity/image-url`
   - `next-sanity`

2. Create Sanity configuration files
3. Set up environment variables for Sanity project ID and dataset
4. Create API routes or server components to fetch blog posts
5. Create dynamic blog post pages (`/blog/[slug]`)
6. Update sitemap to include dynamic blog post URLs

## Sitemap

The sitemap is automatically generated at `/sitemap.xml` using Next.js 14's sitemap feature.

