import Link from 'next/link'
import NewsletterForm from './NewsletterForm'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <NewsletterForm />
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/books" className={styles.link}>
              Books
            </Link>
            <Link href="/blog" className={styles.link}>
              Blog
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
            <Link href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>
          </div>
          <div className={styles.social}>
            <a 
              href="https://www.facebook.com/sebrownbooks" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sebrownbooks/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@sebrownbooks"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="TikTok"
            >
              TikTok
            </a>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} S.E. Brown. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

