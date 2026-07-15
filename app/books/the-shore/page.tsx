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
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/The Shore - cover only.jpg"
                alt="The Shore book cover"
                width={500}
                height={750}
                className={styles.bookImage}
                priority
              />
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <div className={styles.bookNumber}>Book 1</div>
                <h2 className={styles.sectionHeading}>About the Book</h2>
                <div className={styles.description}>
                  <p>
                    Some people come to the Outer Banks for the sand and surf. Ryan Blake came for the quiet.
                  </p>
                  <p>
                    After running from heartbreak, she wasn&apos;t looking for love. She certainly wasn&apos;t looking for Cody Calloway, the steady, charismatic man who shows up when her car breaks down and refuses to make a big deal out of it.
                  </p>
                  <p>
                    Cody has spent years building something solid from his own loss. He wasn&apos;t looking either. But Ryan has a way of finding the cracks in walls people think are permanent.
                  </p>
                  <p>
                    Between the salt air and the string lights, between the people who become family before you realize it&apos;s happening, Ryan and Cody discover that sometimes the life you stopped hoping for has been waiting at the shore all along.
                  </p>
                  <p>
                    The Shore Series begins here.
                  </p>
                </div>
              </div>

              <div className={styles.charactersSection}>
                <h2 className={styles.sectionHeading}>The Characters</h2>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Ryan Blake</h3>
                    <p className={styles.characterDesc}>
                      A woman running from her past seeks solace on the Outer Banks. Sharp-witted, independent,
                      and haunted by heartbreak, she&apos;s determined to build a new life, alone. But the shore has
                      other plans.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Cody Calloway</h3>
                    <p className={styles.characterDesc}>
                      A man who&apos;s already lost the love of his life. Grief has shaped him, but when Ryan returns,
                      he finds himself wanting to believe in second chances, and in a future he thought was gone forever.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.themesSection}>
                <h2 className={styles.sectionHeading}>Themes & Tropes</h2>
                <div className={styles.themeList}>
                  <span className={styles.themeTag}>Second Chance Romance</span>
                  <span className={styles.themeTag}>Grief & Healing</span>
                  <span className={styles.themeTag}>Small Town Romance</span>
                  <span className={styles.themeTag}>Beach Setting</span>
                  <span className={styles.themeTag}>Found Family</span>
                  <span className={styles.themeTag}>Emotional Journey</span>
                  <span className={styles.themeTag}>Slow Burn</span>
                  <span className={styles.themeTag}>Strong Heroine</span>
                </div>
              </div>

              <div className={styles.categoriesSection}>
                <h2 className={styles.sectionHeading}>Categories</h2>
                <div className={styles.categories}>
                  <span className={styles.categoryTag}>Contemporary Romance</span>
                  <span className={styles.categoryTag}>Small Town Romance</span>
                  <span className={styles.categoryTag}>Second Chance Romance</span>
                  <span className={styles.categoryTag}>Beach Romance</span>
                  <span className={styles.categoryTag}>Emotional Romance</span>
                  <span className={styles.categoryTag}>Found Family</span>
                </div>
              </div>

              <div className={styles.buySection}>
                <h2 className={styles.sectionHeading}>Get Your Copy</h2>
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
              </div>

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
