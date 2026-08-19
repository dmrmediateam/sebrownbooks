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
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About the Author</h1>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
