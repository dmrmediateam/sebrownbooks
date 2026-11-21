import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Beside Us Content Warnings | S.E. Brown Books',
  description: 'Review the content warnings for Beside Us before reading. This page contains spoiler-free information to help you decide if the story is right for you.',
  alternates: {
    canonical: 'https://sebrownbooks.com/books/beside-us/content-warnings',
  },
}

export default function BesideUsContentWarnings() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Content Warnings</h1>
          <p className={styles.heroTagline}>A note before you dive into Beside Us</p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/beside-us" className={styles.coverLink}>
                <Image
                  src="/BesideUs-cover.jpg"
                  alt="Cover of 'Beside Us,' the third and final contemporary romance in The Shore Series by S.E. Brown"
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
                  My books are meant to be an escape. A place where love wins and the hard stuff is worth it. But I also write stories that reflect real life, and real life isn&apos;t always easy.
                </p>
                <p>
                  This page exists because you deserve to decide what you&apos;re ready for. I&apos;ve done my best to identify the content in this book that some readers may find difficult, but I want to be honest: what feels heavy is personal. What I&apos;ve listed here reflects my own read of the story.
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
                    <span className={styles.warningLabel}>Infidelity</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Emotional manipulation</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Coercive control and intimidation</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Parental abandonment</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Child in distress</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Grief and loss</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Death of a child</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Combat trauma / PTSD</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Pregnancy</span>
                    <span className={styles.warningType}>on-page</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Infant loss</span>
                    <span className={styles.warningType}>referenced in conversation</span>
                  </div>
                  <div className={styles.warningItem}>
                    <span className={styles.warningLabel}>Death of a spouse</span>
                    <span className={styles.warningType}>referenced in conversation</span>
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
