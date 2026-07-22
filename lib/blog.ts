// Blog post data structure from Sanity CMS
import { client } from './sanity'

export interface BlogPost {
  _id: string
  _type: 'post'
  slug: {
    current: string
  }
  title: string
  category: string
  description: string
  mainImage?: {
    asset?: {
      url: string
    }
    alt?: string
  }
  publishedAt: string
  author?: {
    name: string
    image?: string
    bio?: string
  }
  readTime?: string
  body?: any[]
  tags?: string[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

const postFields = `
  _id,
  _type,
  slug,
  title,
  category,
  description,
  "mainImage": {
    "asset": {
      "url": mainImage.asset->url
    },
    "alt": mainImage.alt
  },
  publishedAt,
  "author": author->{
    name,
    "image": image.asset->url,
    bio
  },
  readTime,
  tags,
  seo
`

// Fetch all blog posts from Sanity
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc){${postFields}}`

  try {
    const posts = await client.fetch(query)

    if (!posts || !Array.isArray(posts)) {
      console.warn('No blog posts found or invalid response format')
      return []
    }

    return posts.filter((post) => post.slug?.current)
  } catch (error: any) {
    console.error('Error fetching blog posts:', error?.message || error)
    return []
  }
}

// Fetch single blog post by slug from Sanity
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    ${postFields},
    "body": body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{
          _id,
          url,
          metadata { dimensions }
        }
      }
    }
  }`

  try {
    const post = await client.fetch(query, { slug })

    if (!post) {
      console.warn(`Blog post not found for slug: ${slug}`)
      return null
    }

    return post
  } catch (error: any) {
    console.error('Error fetching blog post:', error?.message || error)
    return null
  }
}
