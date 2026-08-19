import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'The Shore | S.E. Brown Books',
  description: "The Shore is a contemporary romance set in North Carolina's Outer Banks, where friendship runs deep, found family heals old wounds, and love arrives when it's needed most.",
}

export default function TheShore() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Shore</h1>
          <p className={styles.heroTagline}>
            She came looking for quiet. She found home.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/the-shore" className={styles.coverLink}>
                <Image
                  src="/TheShore-cover.jpg"
                  alt="The Shore book cover"
                  width={500}
                  height={750}
                  className={styles.bookImage}
                  priority
                />
              </Link>
              <div className={styles.sidebarCategories}>
                <p>Small-Town Romance</p>
                <p>• Found Family •</p>
                <p>Slow Burn</p>
              </div>
              <hr className={styles.sidebarDivider} />
              <div className={styles.buyStack}>
                <h2 className={styles.buyStackHeading}>Choose Your Format</h2>
                <a
                  href="https://www.amazon.com/gp/product/B0G1TXP2RD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle eBook
                </a>
                <p className={styles.kindleUnlimited}>Included with Kindle Unlimited</p>
                <a
                  href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V12F9T"
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
                    <strong>The Shore Series begins here.</strong>
                  </p>
                </div>
                <Link href="/books/the-shore/chapter-1" className={`${styles.outlineButton} ${styles.chapterButton}`}>
                  Read Chapter 1
                </Link>
              </div>

              <div className={styles.charactersSection}>
                <h2 className={styles.sectionHeading}>The Characters</h2>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Ryan Blake</h3>
                    <p className={styles.characterDesc}>
                      Sharp-witted and fiercely independent, Ryan has always taken care of herself, and
                      she intends to keep it that way. She notices everything and says exactly what she thinks, but underneath
                      the guarded exterior is someone who loves hard once she lets someone in. She isn&apos;t looking
                      to be rescued, just someone who can keep up with her.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Cody Calloway</h3>
                    <p className={styles.characterDesc}>
                      Steady, low-key, and impossible to rattle, Cody is the guy who shows up without making a thing
                      of it. He&apos;s generous without expecting anything in
                      return, and the first person people trust when they need someone in their corner. Beneath his
                      easygoing nature is a quiet strength that makes people feel safe simply by being there.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.beforeYouReadSection}>
                <h2 className={styles.sectionHeading}>Before You Read</h2>
                <p className={styles.beforeYouReadText}>
                  If you&apos;d like to check the content warnings before you begin, you can view them here.
                </p>
                <Link href="/books/the-shore/content-warnings" className={styles.outlineButton}>
                  View Content Warnings
                </Link>
              </div>

              <div className={styles.seriesSection}>
                <h2 className={styles.sectionHeading}>Also in this Series</h2>
                <div className={styles.seriesImages}>
                  <Link href="/books/for-you" className={styles.seriesCoverLink}>
                    <Image
                      src="/ForYou-cover.jpg"
                      alt="For You book cover"
                      width={100}
                      height={150}
                      className={styles.seriesCoverImage}
                    />
                  </Link>
                  <Link href="/books/beside-us" className={styles.seriesCoverLink}>
                    <Image
                      src="/Beside-Us-CoverComingSoon.jpg"
                      alt="Beside Us book cover"
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
