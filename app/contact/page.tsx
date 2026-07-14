import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact | S.E. Brown Books',
  description: 'Get in touch with S.E. Brown — reader notes, book questions, and collaboration inquiries welcome.',
}

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>

          <div className={styles.header}>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.intro}>
              Have a question about a book, a content note, or just want to say hello? Send a
              message — I read every one.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.aside}>
              <h2 className={styles.asideTitle}>Say hello</h2>
              <p className={styles.asideText}>
                Prefer email? You can also reach me directly at{' '}
                <a href="mailto:seb@sebrownbooks.com" className={styles.emailLink}>
                  seb@sebrownbooks.com
                </a>
                .
              </p>
            </div>

            <div className={styles.formWrap}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
