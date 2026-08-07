import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About | S.E. Brown',
  description: 'Meet S.E. Brown, author of heartfelt contemporary romance novels inspired by friendship, found family, and the moments that change our lives forever.',
}

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>About the Author</h1>
          
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image
                src="/Sus-LO.jpg"
                alt="S.E. Brown"
                width={400}
                height={400}
                className={styles.authorImage}
                priority
              />
            </div>
            
            <div className={styles.textContent}>
              <p className={styles.intro}>
                S.E. Brown is a
              </p>
              <p className={styles.trait}>
                flip-flop-wearin&apos;,
              </p>
              <p className={styles.trait}>
                back-roads-drivin&apos;,
              </p>
              <p className={styles.trait}>
                mac-and-cheese-lovin&apos;,
              </p>
              <p className={styles.trait}>
                romance-book-devourin&apos;,
              </p>
              <p className={styles.trait}>
                music-cranked-up-singin&apos;,
              </p>
              <p className={styles.trait}>
                Colorado-Avalanche-cheerin&apos;,
              </p>
              <p className={styles.outro}>
                writer of romance novels…with a little heat.
              </p>

              <div className={styles.connectSection}>
                <h2 id="connect" className={styles.connectHeading}>Stay connected!</h2>
                <ul className={styles.connectList}>
                  <li>
                    <a
                      href="https://sebrownbooks.kit.com/newsletter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      Get all the latest information with my newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/stores/S.-E.-Brown/author/B00USQEU0M"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      Find me on Amazon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/dp/B0G1V766NL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      Check out The Shore Series
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.goodreads.com/author/show/6425866.S_E_Brown"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      Let&apos;s read on Goodreads
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sebrownbooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      Visit the &apos;Gram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@sebrownbooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      TikTok Ya Don&apos;t Stop
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/sebrownbooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      The OG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sebrownbooks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectLink}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
