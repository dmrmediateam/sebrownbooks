import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Shore Series</h1>
          <p className={styles.heroText}>
            <i>Some people come to the Outer Banks for the sand and surf. The people who stay find something they weren&apos;t looking for.</i>
          </p>
          <p className={styles.heroText}>
            The Shore Series is a contemporary small-town romance set on North Carolina&apos;s Outer Banks, following the found family of friends who become each other&apos;s anchors through heartbreak, second chances, and the slow work of choosing to stay. If you love slow-burn romance, small-town settings, and found family stories where the whole friend group gets its own happy ending, you&apos;re in the right place.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className={styles.booksSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Shore Series</h2>

          {/* Book 1: The Shore */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/The Shore - cover only.jpg"
                alt="Cover of The Shore by S.E. Brown"
                width={400}
                height={600}
                className={styles.bookImage}
                priority
              />
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>The Shore (Book 1)</h3>

              <div className={styles.bookDescription}>
                <p>
                  Ryan Blake came to the Outer Banks for the quiet. She wasn&apos;t looking for Cody Calloway, the steady, charismatic man who shows up when her car breaks down and refuses to make a big deal out of it. Between the salt air and the people who become family before you realize it&apos;s happening, they find out the life they&apos;d stopped hoping for was waiting at the shore all along.
                </p>
              </div>

              <Link href="/books/the-shore" className={styles.bookPageLink}>
                More About The Shore
              </Link>
            </div>
          </div>

          {/* Book 2: For You */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/For You - cover only.jpg"
                alt="Cover of For You by S.E. Brown"
                width={400}
                height={600}
                className={styles.bookImage}
              />
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>For You (Book 2)</h3>

              <div className={styles.bookDescription}>
                <p>
                  Madison Quinn doesn&apos;t do vulnerable. Her quick wit and guarded smile have kept her safe from the mess love leaves behind, until Declan Healy, the one man who sees through her armor and stays anyway. As old secrets rise and new ties take root, Madison has to decide if she can trust him with more than just tonight.
                </p>
              </div>

              <Link href="/books/for-you" className={styles.bookPageLink}>
                More About For You
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <div className={styles.comingSoon}>
            <h3 className={styles.comingSoonTitle}>Beside Us</h3>
            <p className={styles.comingSoonText}>Coming 2026</p>
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
                alt="S.E. Brown"
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

