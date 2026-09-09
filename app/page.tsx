import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'S.E. Brown Books',
  description: 'Welcome to S.E. Brown Books, home of heartfelt contemporary romance novels featuring friendship, found family, second chances, and unforgettable happily ever afters.',
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>S.E. Brown Books</h1>
          <p className={styles.heroText}>
            Small-town romance with found family, heart, and a little heat.
          </p>
        </div>
      </section>

      {/* Series Coming Soon Image */}
      <section className={styles.seriesImageSection}>
        <Image
          src="/the-shore-series.jpg"
          alt="Covers of the Shore Series, including 'The Shore,' 'For You,' and 'Beside Us'"
          width={1200}
          height={630}
          className={styles.seriesComingImage}
          priority
        />
      </section>

      {/* Books Section */}
      <section className={styles.booksSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Shore Series</h2>
          <p className={styles.sectionTagline}>
            <strong><i>Some people come to the Outer Banks for the sand and surf.<br />
            The people who stay find something they weren&apos;t looking for.</i></strong>
          </p>
          <p className={styles.sectionIntro}>
            The Shore Series is a contemporary small-town romance set on North Carolina&apos;s Outer Banks, following a found family of friends who become each other&apos;s anchors through heartbreak, second chances, and the slow work of choosing to stay. If you love slow-burn romance, coastal settings, and found family stories where every couple gets their happily ever after, you&apos;re in the right place.
          </p>

          {/* Book 1: The Shore */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/the-shore" className={styles.coverLink}>
                <Image
                  src="/TheShore-cover.jpg"
                  alt="Cover of 'The Shore' by S.E. Brown"
                  width={400}
                  height={600}
                  className={styles.bookImage}
                  priority
                />
              </Link>
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>The Shore (Book 1)</h3>

              <div className={styles.bookDescription}>
                <p>
                  Ryan Blake came to the Outer Banks looking for quiet. Cody Calloway wasn&apos;t looking for anything at all. But between the salt air, found family, and unexpected love, they discover that sometimes home is the place you never planned to stay.
                </p>
              </div>

              <Link href="/books/the-shore" className={styles.bookPageLink}>
                More About <i>The Shore</i>
              </Link>
            </div>
          </div>

          {/* Book 2: For You */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/for-you" className={styles.coverLink}>
                <Image
                  src="/ForYou-cover.jpg"
                  alt="Cover of 'For You' by S.E. Brown"
                  width={400}
                  height={600}
                  className={styles.bookImage}
                />
              </Link>
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>For You (Book 2)</h3>

              <div className={styles.bookDescription}>
                <p>
                  Madison Quinn doesn&apos;t do vulnerable. Her quick wit and guarded smile have kept her safe from the mess love leaves behind, until Declan Healy, the one man who sees through her armor and stays anyway. As old secrets rise and new ties take root, Madison has to decide if she&apos;s willing to risk the one thing she&apos;s spent years avoiding.
                </p>
              </div>

              <Link href="/books/for-you" className={styles.bookPageLink}>
                More About <i>For You</i>
              </Link>
            </div>
          </div>

          {/* Book 3: Beside Us */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/beside-us" className={styles.coverLink}>
                <Image
                  src="/BesideUs-cover.jpg"
                  alt="Cover of 'Beside Us' by S.E. Brown"
                  width={400}
                  height={600}
                  className={styles.bookImage}
                />
              </Link>
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>Beside Us (Book 3)</h3>

              <div className={styles.bookDescription}>
                <p>
                  Abby Maxwell built a life she loves, one that finally feels safe for both her and her son. Luke Keil isn&apos;t interested in changing that. He simply wants to be part of it. Together, they&apos;re learning that the hardest part of love isn&apos;t falling. It&apos;s deciding, every single day, to stay.
                </p>
              </div>

              <Link href="/books/beside-us" className={styles.bookPageLink}>
                More about <i>Beside Us</i>
              </Link>
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

