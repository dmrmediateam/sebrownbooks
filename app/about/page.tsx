import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>
          <h1 className={styles.title}>About the Author</h1>
          
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image
                src="/Sus-bw.png"
                alt="S.E. Brown"
                width={400}
                height={400}
                className={styles.authorImage}
                priority
              />
              <p className={styles.photoCredit}>Author photo by Brooke Eppa.</p>
            </div>
            
            <div className={styles.textContent}>
              <p className={styles.intro}>
                S.E. Brown is a
              </p>
              <p className={styles.trait}>
                back-roads-drivin&apos;,
              </p>
              <p className={styles.trait}>
                mac-and-cheese-lovin&apos;,
              </p>
              <p className={styles.trait}>
                flip-flop-wearin&apos;,
              </p>
              <p className={styles.trait}>
                Green-Bay-Packers-cheerin&apos;,
              </p>
              <p className={styles.trait}>
                sugar-cookie-icing-decoratin&apos;,
              </p>
              <p className={styles.trait}>
                music-cranked-up-singin&apos;
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
