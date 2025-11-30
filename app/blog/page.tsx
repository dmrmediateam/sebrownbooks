import Link from 'next/link'
import styles from './page.module.css'

// Blog posts data (will be replaced with Sanity CMS later)
const blogPosts = [
  {
    slug: 'top-5-small-town-romance-books',
    title: 'Top 5 Small Town Romance Books You Need to Read',
    excerpt: 'Discover the best small town romance novels that will sweep you off your feet, from coastal Carolina shores to charming mountain towns.',
    date: '2024-11-30',
    category: 'Book Recommendations',
  },
]

export default function Blog() {
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
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <time className={styles.date} dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
