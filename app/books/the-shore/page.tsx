import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function TheShore() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>
          <h1 className={styles.heroTitle}>The Shore</h1>
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
                src="/The Shore - cover only.jpg"
                alt="The Shore book cover"
                width={400}
                height={600}
                className={styles.bookImage}
                priority
              />
            </div>
            <div className={styles.bookContent}>
              <div className={styles.bookDescription}>
                <p>
                  Ryan Blake didn&apos;t come to the Outer Banks looking for love.
                </p>
                <p>
                  She came for quiet, for space to breathe after years of running from heartbreak, from her past, and from herself. But the shore has a way of pulling truths to the surface, and when she breaks down on the side of the road, it&apos;s Cody Calloway who shows up. The boy she once knew. But now he&apos;s the man she can&apos;t seem to forget.
                </p>
                <p>
                  Cody has already lost once. He buried the love of his life, and with her, the future he thought he&apos;d have. Yet when Ryan stumbles back into his world, with her sharp wit, wild spirit, and haunted eyes, something shifts. She makes him want again. She makes him believe.
                </p>
                <p>
                  But second chances don&apos;t come without ghosts. Between old scars and new temptations, between the weight of the past and the fragile hope of tomorrow, Ryan and Cody will have to fight. For honesty. For healing. For the kind of love that doesn&apos;t let go.
                </p>
                <p>
                  On these Carolina shores, where waves break and begin again, two people discover that sometimes the hardest battles lead to the sweetest homecoming.
                </p>
              </div>

              <div className={styles.bookCategories}>
                <span className={styles.categoryTag}>Contemporary Romance</span>
                <span className={styles.categoryTag}>Small Town Romance</span>
                <span className={styles.categoryTag}>Second Chance Romance</span>
                <span className={styles.categoryTag}>Beach Romance</span>
              </div>

              <div className={styles.buyButtons}>
                <a
                  href="https://www.amazon.com/gp/product/B0G1TXP2RD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle
                </a>
                <a
                  href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V12F9T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Paperback
                </a>
                <a
                  href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V1WJSY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Hardcover
                </a>
              </div>
              <p className={styles.kindleUnlimited}>Available on Kindle Unlimited</p>
              <Link href="/books/the-shore/content-warnings" className={styles.contentWarningLink}>
                Content Warnings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
