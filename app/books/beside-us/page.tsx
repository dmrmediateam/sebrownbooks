import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Beside Us | S.E. Brown Books',
  description: 'Beside Us is the emotional conclusion to The Shore Series, where Abby and Luke discover that love is worth fighting for, even when the past refuses to let go.',
}

export default function BesideUs() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Beside Us</h1>
          <p className={styles.heroTagline}>
            Some people walk away. Others quietly choose to stay.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/Beside-Us-CoverComingSoon.jpg"
                alt="Beside Us book cover"
                width={500}
                height={750}
                className={styles.bookImage}
                priority
              />
              <div className={styles.sidebarCategories}>
                <p>Single Mom</p>
                <p>• Found Family •</p>
                <p>Protective Hero</p>
              </div>
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <div className={styles.bookNumber}>Book 3</div>
                <h2 className={styles.sectionHeading}>About the Book</h2>
                <div className={styles.description}>
                  <p>
                    Abby Maxwell spent ten years building a life she never expected to have.
                  </p>
                  <p>
                    With her son, Jake, a thriving ice cream shop, and the family who stood beside her when everything else fell apart, she found peace. Falling in love again wasn&apos;t part of the plan.
                  </p>
                  <p>
                    Then Luke Keil quietly changed everything.
                  </p>
                  <p>
                    Patient and quietly longing for a family of his own, Luke loves Abby exactly as she is. He never asks her to forget the past. He simply shows up, proving that the strongest promises aren&apos;t spoken. They&apos;re lived.
                  </p>
                  <p>
                    But when the past comes looking for Abby, threatening everything she&apos;s fought to protect, she&apos;ll have to decide if she&apos;s ready to believe that some people really do stay.
                  </p>
                  <p>
                    Because love isn&apos;t about rescuing someone.
                  </p>
                  <p>
                    It&apos;s about choosing them. Every single day.
                  </p>
                  <p>
                    <strong>Coming September 2026</strong>
                  </p>
                </div>
                <Link href="/books/beside-us/chapter-1" className={`${styles.outlineButton} ${styles.chapterButton}`}>
                  Read Chapter 1
                </Link>
              </div>

              <div className={styles.charactersSection}>
                <h2 className={styles.sectionHeading}>The Characters</h2>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Abby Maxwell</h3>
                    <p className={styles.characterDesc}>
                      Warm, capable, and fiercely devoted to the people she loves, Abby has spent years building
                      a quiet life for herself and her son. She doesn&apos;t dwell on what she&apos;s lost, choosing
                      instead to pour her heart into the family she&apos;s found and the community she&apos;s helped
                      create. Protecting the life she&apos;s built has always mattered more than risking it.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Luke Keil</h3>
                    <p className={styles.characterDesc}>
                      Quietly observant and deeply intentional, Luke has learned that showing up matters more
                      than standing out. He gives his trust carefully and his heart even more
                      carefully. Once someone becomes his family, walking away is never an option. He&apos;s not
                      looking to change Abby&apos;s world. He just wants to be worth a place in it.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.beforeYouReadSection}>
                <h2 className={styles.sectionHeading}>Before You Read</h2>
                <p className={styles.beforeYouReadText}>
                  If you&apos;d like to check the content warnings before you begin, you can view them here.
                </p>
                <Link href="/books/beside-us/content-warnings" className={styles.outlineButton}>
                  View Content Warnings
                </Link>
              </div>

              <div className={styles.seriesSection}>
                <h2 className={styles.sectionHeading}>Also in this Series</h2>
                <div className={styles.seriesImages}>
                  <Link href="/books/the-shore" className={styles.seriesCoverLink}>
                    <Image
                      src="/TheShore-cover.jpg"
                      alt="The Shore book cover"
                      width={100}
                      height={150}
                      className={styles.seriesCoverImage}
                    />
                  </Link>
                  <Link href="/books/for-you" className={styles.seriesCoverLink}>
                    <Image
                      src="/ForYou-cover.jpg"
                      alt="For You book cover"
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
