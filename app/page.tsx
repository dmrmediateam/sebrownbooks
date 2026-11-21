import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'S.E. Brown Books | Contemporary Romance Author',
  description: 'Welcome to S.E. Brown Books, home of contemporary romance novels featuring realistic characters with big feelings working through real-life problems.',
  alternates: {
    canonical: 'https://sebrownbooks.com/',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'S.E. Brown' }],
  publisher: 'S.E. Brown Books',
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>S.E. Brown</h1>
          <p className={styles.heroText}>
            Contemporary romance author.<br />
            Realistic characters with big feelings working through real-life problems.
</p>
        </div>
      </section>

      {/* Feature Section */}
      <section className={styles.featureSection}>
        <div className={styles.featureCard}>
          <Link href="/books/CALDER" className={styles.coverLink}>
            <Image
              src="/CALDER-cover.jpg"
              alt="Cover of 'CALDER,' the first hockey romance in The Pittsburgh Forge Series by S.E. Brown"
              width={380}
              height={570}
              className={styles.featureImage}
              priority
            />
          </Link>
          <div className={styles.featureContent}>
            <p className={styles.featureLabel}>The Pittsburgh Forge Series, Book 1</p>
            <h2 className={styles.featureTitle}>CALDER</h2>
            <p className={styles.featureText}>
              <i>CALDER</i> introduces top defenseman and NHL team captain Gage Calder, a man who’s spent years carrying the responsibility for everyone around him. When a potentially career-ending injury takes him off the ice, he’ll need the help of experienced physical therapist Julianne Shaw. As their feelings grow, they’ll have to weigh the potential consequences of their choice to be together.
            </p>
            <p className={styles.featureDates}>
              <strong>Pre-order: November 30</strong>
              <br />
              Available: January 13
            </p>
            <Link href="/books/CALDER" className={styles.bookPageLink}>
              More About <i>CALDER</i>
            </Link>
          </div>
        </div>
      </section>

      {/* Series Section */}
      <section className={styles.seriesCardsSection}>
        <div className={styles.seriesCards}>
          <div className={styles.seriesCard}>
            <h2 className={styles.seriesCardTitle}>
              <Link href="/series/the-shore-series">The Shore Series</Link>
            </h2>
            <Link href="/series/the-shore-series" className={styles.coverLink}>
              <Image
                src="/the-shore-series.jpg"
                alt="Covers of the Shore Series, including 'The Shore,' 'For You,' and 'Beside Us' by S.E. Brown"
                width={1200}
                height={630}
                className={styles.seriesCardImage}
              />
            </Link>
          </div>
          <div className={styles.seriesCard}>
            <h2 className={styles.seriesCardTitle}>
              <Link href="/series/the-pittsburgh-forge-series">The Pittsburgh Forge Series</Link>
            </h2>
            <Link href="/series/the-pittsburgh-forge-series" className={styles.coverLink}>
              <Image
                src="/the-pittsburgh-forge-series.jpg"
                alt="Cover of 'CALDER' by S.E. Brown"
                width={1200}
                height={630}
                className={styles.seriesCardImage}
              />
            </Link>
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

