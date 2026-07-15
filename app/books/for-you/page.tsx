import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function ForYou() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
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
                      Bright and a little chaotic, Madison uses charm and one-night stands to keep anyone from
                      getting close enough to hurt her. She&apos;s the friend who always has a comeback ready and
                      never lets the conversation get too serious. But underneath the jokes is someone still
                      running from a past she hasn&apos;t dealt with.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Declan Healy</h3>
                    <p className={styles.characterDesc}>
                      Patient and steady, Declan doesn&apos;t push. He&apos;s the kind of man who notices what people
                      don&apos;t say and sticks around anyway. With Madison, he&apos;s willing to wait her out, to stand
                      there when her walls finally crack, and to prove that not everyone leaves when things get
                      hard. He&apos;s not fixing her, he&apos;s just there.
                    </p>
                  </div>
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
