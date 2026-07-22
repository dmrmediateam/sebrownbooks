import Link from 'next/link'
import styles from './page.module.css'
import { getAllBlogPosts } from '@/lib/blog'

export const revalidate = 60

export default async function Blog() {
  const blogPosts = await getAllBlogPosts()

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Blog</h1>
          <p className={styles.heroSubtitle}>
            Stories, recommendations, and insights from the world of romance
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.container}>
          {blogPosts.length > 0 ? (
            <div className={styles.postsGrid}>
              {blogPosts.map((post) => (
                <article key={post._id} className={styles.postCard}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <time className={styles.date} dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.postExcerpt}>{post.description}</p>
                  <Link href={`/blog/${post.slug.current}`} className={styles.readMore}>
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className={styles.postExcerpt}>New posts are coming soon — check back shortly!</p>
          )}
        </div>
      </section>
    </main>
  )
}
