import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import styles from './page.module.css'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog'
import { urlFor } from '@/lib/sanity'

export const revalidate = 60
export const dynamicParams = true

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ''}
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '2rem 0' }}
        />
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug.current }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.description,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : undefined,
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <time className={styles.date} dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </header>

          <div className={styles.content}>
            {post.body && <PortableText value={post.body} components={portableTextComponents} />}
          </div>

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Love Small Town Romance?</h2>
            <p className={styles.ctaText}>
              Check out The Shore Series, where love finds its way home on the Carolina coast.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/books/the-shore" className={styles.ctaButton}>
                Start with The Shore
              </Link>
              <Link href="/" className={styles.ctaButtonSecondary}>
                Visit Home
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
