import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function ForYou() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>
          <h1 className={styles.heroTitle}>For You</h1>
          <p className={styles.heroTagline}>
            She never believed in forever. Until him.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/For You - cover only.jpg"
                alt="For You book cover"
                width={400}
                height={600}
                className={styles.bookImage}
                priority
              />
            </div>
            <div className={styles.bookContent}>
              <div className={styles.bookDescription}>
                <p>
                  Madison Quinn doesn&apos;t do vulnerable. Her quick wit, guarded smile, and string of one-night stands have always kept her safe from the mess love leaves behind. But when her past collides with her present, Madison discovers that the truth she&apos;s buried isn&apos;t something she can outrun.
                </p>
                <p>
                  Declan Healy isn&apos;t just the man who sees through her armor, he&apos;s the one willing to stand there when it all comes crashing down. With him, Madison finds laughter in the silence, tenderness in the storm, and a passion that makes her question everything she thought she knew about love.
                </p>
                <p>
                  As old secrets rise and new ties take root, Madison has to decide if she can trust Declan not only with her body but with her heart. Because with him, she doesn&apos;t just want tonight, she wants forever.
                </p>
              </div>

              <div className={styles.bookCategories}>
                <span className={styles.categoryTag}>Contemporary Romance</span>
                <span className={styles.categoryTag}>Friends to Lovers</span>
                <span className={styles.categoryTag}>Slow Burn Romance</span>
                <span className={styles.categoryTag}>Beach Town Romance</span>
              </div>

              <div className={styles.buyButtons}>
                <a
                  href="https://www.amazon.com/You-Shore-Book-2-ebook/dp/B0G1Y6TGR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle
                </a>
                <a
                  href="https://www.amazon.com/You-Shore-S-Brown/dp/B0G1YKD83J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Paperback
                </a>
                <a
                  href="https://www.amazon.com/gp/product/B0G1YMPSQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Hardcover
                </a>
              </div>
              <p className={styles.kindleUnlimited}>Available on Kindle Unlimited</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
