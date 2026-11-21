import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact | S.E. Brown',
  description: 'Get in touch with S.E. Brown for reader questions, book clubs, author services, media inquiries, or just to say hello.',
  alternates: {
    canonical: 'https://sebrownbooks.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Me</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.header}>
              <p className={styles.intro}>
                Have a question about a book, a content note, or just want to say hello? Send a
                message. I read every one.
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
        </div>
      </section>
    </main>
  )
}
