import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
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
          </div>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} S.E. Brown. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

