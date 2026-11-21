import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'The Pittsburgh Forge Series | S.E. Brown Books',
  description: 'The Pittsburgh Forge series will consist of six hockey romance books that follow professional hockey players as they navigate love, family, friendship, and the lives they build on and off the ice.',
  alternates: {
    canonical: 'https://sebrownbooks.com/series/the-pittsburgh-forge-series',
  },
}

export default function ThePittsburghForgeSeries() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Pittsburgh Forge Series</h1>
        </div>
      </section>

      {/* Books Section */}
      <section className={styles.booksSection}>
        <div className={styles.container}>
          <p className={styles.sectionIntro}>
            The Pittsburgh Forge series follows a group of professional hockey players as they navigate love, family, friendship, and the lives they build on and off the ice.
          </p>

          {/* Book 1: CALDER */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/CALDER" className={styles.coverLink}>
                <Image
                  src="/CALDER-cover.jpg"
                  alt="Cover of 'CALDER,' the first hockey romance in The Pittsburgh Forge Series by S.E. Brown"
                  width={400}
                  height={600}
                  className={styles.bookImage}
                  priority
                />
              </Link>
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}><i>CALDER</i> (Book 1)</h3>

              <div className={styles.bookDescription}>
                <p>
                  <i>CALDER</i> introduces top defenseman and NHL team captain Gage Calder, a man who’s spent years carrying the responsibility for everyone around him. When a potentially career-ending injury takes him off the ice, he’ll need the help of experienced physical therapist Julianne Shaw. As their feelings grow, they’ll have to weigh the potential consequences of their choice to be together.
                </p>
              </div>

              <Link href="/books/CALDER" className={styles.bookPageLink}>
                More About <i>CALDER</i>
              </Link>

              <p className={styles.bookDates}>
                <strong>Pre-order: November 30</strong>
                <br />
                Available: January 13
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section — removed from homepage; full version lives on /about.
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About the Author</h2>

          <div className={styles.aboutContent}>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/Sus-LO.jpg"
                alt="Relaxed image of author, S.E. Brown"
                width={300}
                height={300}
                className={styles.aboutAuthorImage}
              />
              <p className={styles.aboutPhotoCredit}>Author photo by Brooke Eppa.</p>
            </div>

            <div className={styles.aboutTextContent}>
              <p className={styles.aboutIntro}>
                S.E. Brown is a
              </p>
              <p className={styles.aboutTrait}>
                flip-flop-wearin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                back-roads-drivin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                mac-and-cheese-lovin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                romance-book-devourin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                music-cranked-up-singin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                Colorado-Avalanche-cheerin&apos;,
              </p>
              <p className={styles.aboutOutro}>
                writer of romance novels…with a little heat.
              </p>
              <a href="/about" className={styles.aboutLink}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      */}
    </main>
  )
}

