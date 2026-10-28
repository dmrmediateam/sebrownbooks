import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'For You | S.E. Brown Books',
  description: "For You is a heartfelt contemporary romance set in North Carolina's Outer Banks, where forgiveness, family, and unexpected love prove it's never too late for a second chance.",
}

export default function ForYou() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>For You</h1>
          <p className={styles.heroTagline}>
            She didn&apos;t believe in forever. Until him.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/for-you" className={styles.coverLink}>
                <Image
                  src="/ForYou-cover.jpg"
                  alt="Cover of 'For You' by S.E. Brown"
                  width={500}
                  height={750}
                  className={styles.bookImage}
                  priority
                />
              </Link>
              <div className={styles.sidebarCategories}>
                <p>Friends to Lovers</p>
                <p>• Found Family •</p>
                <p>Emotional Romance</p>
              </div>
              <hr className={styles.sidebarDivider} />
              <div className={styles.buyStack}>
                <h2 className={styles.buyStackHeading}>Choose Your Format</h2>
                <a
                  href="https://www.amazon.com/You-Shore-Book-2-ebook/dp/B0G1Y6TGR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle eBook
                </a>
                <p className={styles.kindleUnlimited}>Included with Kindle+</p>
                <a
                  href="https://www.amazon.com/You-Shore-S-Brown/dp/B0G1YKD83J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Paperback
                </a>
              </div>
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
                <Link href="/books/for-you/chapter-1" className={`${styles.outlineButton} ${styles.chapterButton}`}>
                  Read Chapter 1
                </Link>
              </div>

              <div className={styles.charactersSection}>
                <h2 className={styles.sectionHeading}>The Characters</h2>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Madison Quinn</h3>
                    <p className={styles.characterDesc}>
                      Bright and a little chaotic, Madison uses charm and one-night stands to keep anyone from
                      getting close enough to hurt her. She&apos;s the friend who always has a comeback ready and
                      a joke waiting whenever things get too serious. But underneath the jokes is someone still
                      running from a past she hasn&apos;t dealt with.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Declan Healy</h3>
                    <p className={styles.characterDesc}>
                      Declan runs two gyms and has spent most of his adult life building something worth being
                      proud of. He&apos;s the kind of man who shows up, follows through, and doesn&apos;t say things he
                      doesn&apos;t mean. He knows exactly who he is, and that&apos;s always been enough. He hasn&apos;t
                      made much room for love. Nobody&apos;s ever made him want to.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.beforeYouReadSection}>
                <h2 className={styles.sectionHeading}>Before You Read</h2>
                <p className={styles.beforeYouReadText}>
                  If you&apos;d like to check the content warnings before you begin, you can view them here.
                </p>
                <Link href="/books/for-you/content-warnings" className={styles.outlineButton}>
                  View Content Warnings
                </Link>
              </div>

              <div className={styles.seriesSection}>
                <h2 className={styles.sectionHeading}>Also in this Series</h2>
                <div className={styles.seriesImages}>
                  <Link href="/books/the-shore" className={styles.seriesCoverLink}>
                    <Image
                      src="/TheShore-cover.jpg"
                      alt="Cover of 'The Shore' by S.E. Brown"
                      width={100}
                      height={150}
                      className={styles.seriesCoverImage}
                    />
                  </Link>
                  <Link href="/books/beside-us" className={styles.seriesCoverLink}>
                    <Image
                      src="/BesideUs-cover.jpg"
                      alt="Cover of 'Beside Us' by S.E. Brown"
                      width={100}
                      height={150}
                      className={styles.seriesCoverImage}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
