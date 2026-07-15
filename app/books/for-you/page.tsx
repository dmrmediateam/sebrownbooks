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
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/For You - cover only.jpg"
                alt="For You book cover"
                width={500}
                height={750}
                className={styles.bookImage}
                priority
              />
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <div className={styles.bookNumber}>Book 2</div>
                <h2 className={styles.sectionHeading}>About the Book</h2>
                <div className={styles.description}>
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
              </div>

              <div className={styles.charactersSection}>
                <h2 className={styles.sectionHeading}>The Characters</h2>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Madison Quinn</h3>
                    <p className={styles.characterDesc}>
                      Quick-witted and fiercely independent, Madison has built walls around her heart with one-night
                      stands and sharp humor. But when her past catches up, she discovers that running isn&apos;t the
                      answer—and that maybe, just maybe, forever isn&apos;t a lie.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Declan Healy</h3>
                    <p className={styles.characterDesc}>
                      A man with steady hands and quiet strength, Declan sees through every wall Madison has built.
                      He&apos;s patient, he&apos;s persistent, and he&apos;s willing to stand there when everything comes crashing
                      down. With him, Madison finds the courage to trust again.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.themesSection}>
                <h2 className={styles.sectionHeading}>Themes & Tropes</h2>
                <div className={styles.themeList}>
                  <span className={styles.themeTag}>Friends to Lovers</span>
                  <span className={styles.themeTag}>Slow Burn</span>
                  <span className={styles.themeTag}>Beach Town Romance</span>
                  <span className={styles.themeTag}>Found Family</span>
                  <span className={styles.themeTag}>Emotional Romance</span>
                  <span className={styles.themeTag}>Strong Female Lead</span>
                  <span className={styles.themeTag}>Healing & Forgiveness</span>
                  <span className={styles.themeTag}>Second Chance</span>
                </div>
              </div>

              <div className={styles.categoriesSection}>
                <h2 className={styles.sectionHeading}>Categories</h2>
                <div className={styles.categories}>
                  <span className={styles.categoryTag}>Contemporary Romance</span>
                  <span className={styles.categoryTag}>Friends to Lovers</span>
                  <span className={styles.categoryTag}>Slow Burn Romance</span>
                  <span className={styles.categoryTag}>Beach Town Romance</span>
                  <span className={styles.categoryTag}>Emotional Romance</span>
                  <span className={styles.categoryTag}>Found Family</span>
                </div>
              </div>

              <div className={styles.buySection}>
                <h2 className={styles.sectionHeading}>Get Your Copy</h2>
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

              <Link href="/books/for-you/content-warnings" className={styles.contentWarningLink}>
                Content Warnings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
