import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function TheShore() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Shore</h1>
          <p className={styles.heroTagline}>
            She never believed in forever. Until him.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/The Shore - cover only.jpg"
                alt="The Shore book cover"
                width={500}
                height={750}
                className={styles.bookImage}
                priority
              />
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <div className={styles.bookNumber}>Book 1</div>
                <h2 className={styles.sectionHeading}>About the Book</h2>
                <div className={styles.description}>
                  <p>
                    Some people come to the Outer Banks for the sand and surf. Ryan Blake came for the quiet.
                  </p>
                  <p>
                    After running from heartbreak, she wasn&apos;t looking for love. She certainly wasn&apos;t looking for Cody Calloway, the steady, charismatic man who shows up when her car breaks down and refuses to make a big deal out of it.
                  </p>
                  <p>
                    Cody has spent years building something solid from his own loss. He wasn&apos;t looking either. But Ryan has a way of finding the cracks in walls people think are permanent.
                  </p>
                  <p>
                    Between the salt air and the string lights, between the people who become family before you realize it&apos;s happening, Ryan and Cody discover that sometimes the life you stopped hoping for has been waiting at the shore all along.
                  </p>
                  <p>
                    The Shore Series begins here.
                  </p>
                </div>
              </div>

              <div className={styles.charactersSection}>
                <h2 className={styles.sectionHeading}>The Characters</h2>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Ryan Blake</h3>
                    <p className={styles.characterDesc}>
                      Sharp-witted and fiercely independent, Ryan has never needed anyone to take care of her, and
                      she&apos;s proud of it. She notices everything and says exactly what she thinks, but underneath
                      the guarded exterior is someone who loves hard once she lets someone in. She isn&apos;t looking
                      to be rescued, just someone who can keep up with her.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h3 className={styles.characterName}>Cody Calloway</h3>
                    <p className={styles.characterDesc}>
                      Steady, low-key, and impossible to rattle, Cody is the guy who shows up without making a thing
                      of it. He&apos;s spent years building a quiet, solid life after loss, and he&apos;s good at taking
                      care of everyone but himself. Cody doesn&apos;t chase, he shows up, again and again, until Ryan
                      realizes he&apos;s not going anywhere.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.buySection}>
                <h2 className={styles.sectionHeading}>Get Your Copy</h2>
                <div className={styles.buyButtons}>
                  <a
                    href="https://www.amazon.com/gp/product/B0G1TXP2RD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyButton}
                  >
                    Kindle
                  </a>
                  <a
                    href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V12F9T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyButton}
                  >
                    Paperback
                  </a>
                  <a
                    href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V1WJSY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyButton}
                  >
                    Hardcover
                  </a>
                </div>
                <p className={styles.kindleUnlimited}>Available on Kindle Unlimited</p>
              </div>

              <Link href="/books/the-shore/content-warnings" className={styles.contentWarningLink}>
                Content Warnings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
