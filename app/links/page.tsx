import type { Metadata } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHockeyPuck } from '@fortawesome/free-solid-svg-icons'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Links | S.E. Brown Books',
  description: 'Every way to stay connected with S.E. Brown — newsletter, books, and social links, all in one place.',
}

export default function Links() {
  return (
    <main className={styles.main}>
      <section className={styles.linksSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Stay Connected!</h1>

          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image
                src="/Sus-LO.jpg"
                alt="Relaxed image of author, S.E. Brown"
                width={400}
                height={400}
                className={styles.authorImage}
                priority
              />
            </div>

            <div className={styles.linksContent}>
              <ul className={styles.connectList}>
                <li className={styles.recentPost}>
                  <FontAwesomeIcon icon={faBook} className={styles.lineIcon} aria-hidden="true" /> Purchase{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B0G1TXP2RD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.connectLink}
                  >
                    <i>The Shore</i>
                  </a>
                  {', '}
                  <a
                    href="https://www.amazon.com/gp/product/B0G1Y6TGR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.connectLink}
                  >
                    <i>For You</i>
                  </a>
                  {', and '}
                  <a
                    href="https://www.amazon.com/gp/product/B0HHWPDZNK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.connectLink}
                  >
                    <i>Beside Us</i>
                  </a>
                </li>
                <li className={styles.recentPost}>
                  <FontAwesomeIcon icon={faHockeyPuck} className={styles.lineIcon} aria-hidden="true" /> Most recent blog post:{' '}
                  <a
                    href="https://www.sebrownbooks.com/blog/hockey-rabbit-hole"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.connectLink}
                  >
                    The Hockey Rabbit Hole
                  </a>
                </li>
                <li className={styles.lineBreak} aria-hidden="true"></li>
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
      </section>
    </main>
  )
}
