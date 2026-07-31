import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function BesideUs() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Beside Us</h1>
          <p className={styles.heroTagline}>
            Every story leaves a ripple. Here&apos;s what comes next.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/Beside-Us-CoverComingSoon.jpg"
                alt="Beside Us book cover"
                width={500}
                height={750}
                className={styles.bookImage}
                priority
              />
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <div className={styles.bookNumber}>Book 3</div>
                <h2 className={styles.sectionHeading}>About the Book</h2>
                <div className={styles.description}>
                  <p>
                    Abby Maxwell spent ten years building a life she never expected to have.
                  </p>
                  <p>
                    With her son, Jake, a thriving ice cream shop, and the family who stood beside her when everything else fell apart, she found peace. Falling in love again wasn&apos;t part of the plan.
                  </p>
                  <p>
                    Then Luke Keil quietly changed everything.
                  </p>
                  <p>
                    Patient and quietly longing for a family of his own, Luke loves Abby exactly as she is. He never asks her to forget the past. He simply shows up, proving that the strongest promises aren&apos;t spoken. They&apos;re lived.
                  </p>
                  <p>
                    But when the past comes looking for Abby, threatening everything she&apos;s fought to protect, she&apos;ll have to decide if she&apos;s ready to believe that some people really do stay.
                  </p>
                  <p>
                    Because love isn&apos;t about rescuing someone.
                  </p>
                  <p>
                    It&apos;s about choosing them. Every single day.
                  </p>
                  <p>
                    <strong>Coming September 2026</strong>
                  </p>
                </div>
              </div>

              <Link href="/books/beside-us/content-warnings" className={styles.contentWarningLink}>
                Content Warnings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
