import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'CALDER | S.E. Brown Books',
  description: 'CALDER is a hockey romance by S.E. Brown that introduces NHL team captain Gage Calder and physical therapist Julianne Shaw. As their feelings grow, they’ll have to weigh the potential consequences of their choice to be together.',
  alternates: {
    canonical: 'https://sebrownbooks.com/books/CALDER',
  },
}

export default function Calder() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>CALDER</h1>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/CALDER" className={styles.coverLink}>
                <Image
                  src="/CALDER-cover.jpg"
                  alt="Cover of 'CALDER,' the first hockey romance in The Pittsburgh Forge Series by S.E. Brown"
                  width={380}
                  height={570}
                  className={styles.bookImage}
                  priority
                />
              </Link>
              <div className={styles.sidebarCategories}>
                <p>Forbidden Romance</p>
                <p>• Found Family •</p>
                <p>Forced Proximity</p>
              </div>
              <hr className={styles.sidebarDivider} />
              <div className={styles.buyStack}>
                <h2 className={styles.buyStackHeading}>Pre-order: November 30</h2>
                <h2 className={styles.buyStackHeading}>Available: January 13</h2>
              </div>
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <div className={styles.bookNumber}>Book 1</div>
                <h2 className={styles.sectionHeading}>About the Book</h2>
                <div className={styles.description}>
                  <p>
                    <strong>Gage</strong><br />
                    I’m the captain of the Pittsburgh Forge. A top defenseman in the NHL. My life has centered around hockey since I learned to walk. The team considers me the reliable one. The one who carries the responsibility for everyone else. That is, until my hip takes me off the ice. Maybe permanently.
                  </p>
                  <p>
                    When Coach sends me to get checked out, I meet Julianne. She’s supposed to help heal my body. I don’t expect to fall for her. I don’t want to. But the more I get to know and trust her, the more I want to be near her. The more I lean on her.
                  </p>
                  <p>
                    <strong>Julianne</strong><br />
                    I’m a physical therapist who believes that people are messy and bodies make sense. Working with elite athletes, even the hot ones, is a daily occurrence. But I’ve never fallen for one of my patients before. Then Gage Calder walks into my clinic.
                  </p>
                  <p>
                    I’ve gotten to know him outside the clinic and spent time with his teammates. I don’t care that he’s a professional hockey player. I just want…him. To talk to, to share my day with, to work through the hard things with.
                  </p>
                  <p>
                    The problem is, I’m making decisions that could put my career at risk. How much of everything I’ve worked for am I willing to risk to be with him?
                  </p>
                </div>
                {/* <Link href="/books/CALDER/chapter-1" className={`${styles.outlineButton} ${styles.chapterButton}`}>
                  Read Chapter 1
                </Link> */}
              </div>

              <div className={styles.beforeYouReadSection}>
                <h2 className={styles.sectionHeading}>Before You Read</h2>
                <p className={styles.beforeYouReadText}>
                  If you&apos;d like to check the content warnings before you begin, you can view them here.
                </p>
                <Link href="/books/CALDER/content-warnings" className={styles.outlineButton}>
                  View Content Warnings
                </Link>
              </div>

              <div className={styles.seriesSection}>
                <h2 className={styles.sectionHeading}>The Pittsburgh Forge Series</h2>
                <p className={styles.seriesText}>
                  Six planned books featuring the players and people of the Pittsburgh Forge.
                </p>
                <div className={styles.seriesBooks}>
                  <Link href="/books/CALDER" className={styles.seriesBook}>
                    <Image
                      src="/CALDER-cover.jpg"
                      alt="Cover of 'CALDER,' the first hockey romance in The Pittsburgh Forge Series by S.E. Brown"
                      width={380}
                      height={579}
                      className={styles.seriesCoverImage}
                    />
                  </Link>
                  <div className={styles.seriesBook}>
                    <Image
                      src="/HAYES-cover.jpg"
                      alt="Cover of 'HAYES' by S.E. Brown"
                      width={380}
                      height={579}
                      className={styles.seriesCoverImage}
                    />
                  </div>
                  <div className={styles.seriesBook}>
                    <Image
                      src="/ROWAN-cover.jpg"
                      alt="Cover of 'ROWAN' by S.E. Brown"
                      width={380}
                      height={579}
                      className={styles.seriesCoverImage}
                    />
                  </div>
                  <div className={styles.seriesBook}>
                    <Image
                      src="/KINCAID-cover.jpg"
                      alt="Cover of 'KINCAID' by S.E. Brown"
                      width={380}
                      height={579}
                      className={styles.seriesCoverImage}
                    />
                  </div>
                  <div className={styles.seriesBook}>
                    <Image
                      src="/PIERCE-cover.jpg"
                      alt="Cover of 'PIERCE' by S.E. Brown"
                      width={380}
                      height={579}
                      className={styles.seriesCoverImage}
                    />
                  </div>
                  <div className={styles.seriesBook}>
                    <Image
                      src="/THEFORGE-cover.jpg"
                      alt="Cover of 'THE FORGE' by S.E. Brown"
                      width={380}
                      height={579}
                      className={styles.seriesCoverImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
