import Link from 'next/link'
import styles from './page.module.css'

export default function ForYouContentWarnings() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/books/for-you" className={styles.backButton}>
            ← Back to For You
          </Link>
          <h1 className={styles.heroTitle}>Content Warnings</h1>
          <p className={styles.heroTagline}>A note before you dive into For You</p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.intro}>
              <p>
                My books are meant to be an escape. A place where love wins and the hard stuff is worth it. But I also write stories that reflect real life, and real life isn&apos;t always easy.
              </p>
              <p>
                This page exists because you deserve to decide what you&apos;re ready for. I&apos;ve done my best to identify the content in this book that some readers may find difficult, but I want to be honest: what feels heavy is personal. What I&apos;ve listed here reflects my own read of the story.
              </p>
              <p className={styles.contactNote}>
                If you&apos;re ever unsure, feel free to{' '}
                <Link href="/contact" className={styles.contactLink}>
                  reach out
                </Link>
                .
              </p>
            </div>

            <h2 className={styles.listHeading}>In This Book</h2>
            <div className={styles.warningsList}>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Teen pregnancy</span>
                <span className={styles.warningType}>on-page</span>
              </div>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Drug overdose</span>
                <span className={styles.warningType}>on-page</span>
              </div>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Parental abandonment</span>
                <span className={styles.warningType}>on-page</span>
              </div>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Grief and loss</span>
                <span className={styles.warningType}>on-page</span>
              </div>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Threat of violence, minor</span>
                <span className={styles.warningType}>on-page</span>
              </div>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Addiction</span>
                <span className={styles.warningType}>referenced in conversation</span>
              </div>
              <div className={styles.warningItem}>
                <span className={styles.warningLabel}>Incarceration</span>
                <span className={styles.warningType}>referenced in conversation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
