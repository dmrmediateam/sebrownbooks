# Sanity CMS Integration Outline

## Overview
The blog section will be powered by Sanity CMS, allowing content editors to manage blog posts through Sanity Studio.

## Planned Structure

### Sanity Studio Setup
- Location: `/studio` directory (or separate Sanity project)
- Access: Content editing interface for blog posts

### Content Schema

#### Post Schema
```javascript
{
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    }
  }
}
```

#### Author Schema
```javascript
{
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
```

#### Category Schema
```javascript
{
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

### Next.js Integration Points

1. **API Routes** (or Server Components)
   - Fetch all posts: `/api/posts` or server component
   - Fetch single post: `/api/posts/[slug]` or dynamic route
   - Fetch posts by category: `/api/posts/category/[category]`

2. **Dynamic Routes**
   - `/blog/[slug]` - Individual blog post page
   - `/blog/category/[category]` - Category archive page

3. **Environment Variables**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token (for server-side only)
   ```

4. **Dependencies to Install**
   ```bash
   npm install @sanity/client @sanity/image-url next-sanity
   ```

### Sitemap Updates
When integrated, the sitemap will need to dynamically include:
- All published blog posts (`/blog/[slug]`)
- Category pages (`/blog/category/[category]`)

This will require fetching posts from Sanity and generating sitemap entries dynamically.

