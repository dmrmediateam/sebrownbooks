import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'CALDER Content Warnings | S.E. Brown Books',
  description: 'Review the content warnings for CALDER before reading. This page contains spoiler-free information to help you decide if the story is right for you.',
  alternates: {
    canonical: 'https://sebrownbooks.com/books/CALDER/content-warnings',
  },
}

export default function CalderContentWarnings() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Content Warnings</h1>
          <p className={styles.heroTagline}>A note before you dive into CALDER</p>
        </div>
      </section>

      {/* Content Section */}
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
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.intro}>
                <p>
                  My books are meant to be an escape. A place where love wins and the hard stuff is worth it. But I also write stories that reflect real life, and real life isn’t always easy.
                </p>
                <p>
                  <i>CALDER</i> contains content intended for adult readers. If that’s not your thing, I don’t want you to get surprised later.
                </p>
                <p>
                  Usually, I’d provide a list of potential triggers in this section. <i>CALDER</i> has only one type of content I consider potentially sensitive, and that’s mature content. That said, what can feel heavy is personal.
                </p>
                <p className={styles.contactNote}>
                  If you ever have a question about the content in my books, please{' '}
                  <Link href="/contact" className={styles.contactLink}>
                    reach out
                  </Link>
                  .
                </p>
                <p>
                  Happy reading!
                  <br />
                  Susie
                </p>
              </div>

              <div>
                <h2 className={styles.listHeading}>In This Book</h2>
                <div className={styles.warningsList}>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Mature content</span>
                    <span className={styles.warningType}>on-page</span>
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
