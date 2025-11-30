import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Shore Series</h1>
          <p className={styles.heroIntro}>
            Welcome to my little corner of the internet. I&apos;m so glad you&apos;re here.
          </p>
          <p className={styles.heroText}>
            The Shore had always been more than just a place.
          </p>
          <p className={styles.heroText}>
            It was a pulse. The steady beat of friends who became family and love that outlasted the tide.
          </p>
          <p className={styles.heroText}>
            Ryan and Cody. Madison and Declan. Luke and Abby.
          </p>
          <p className={styles.heroText}>
            Each found their way back to themselves, and to each other, by standing shoulder to shoulder through the storms.
          </p>
          <p className={styles.heroText}>
            Some stories end with a kiss.
          </p>
          <p className={styles.heroText}>
            Theirs ended with a promise: to live, to love, to keep showing up.
          </p>
          <p className={styles.heroText}>
            They&apos;d learned that family isn&apos;t blood, or vows, or even names carved in sand.
          </p>
          <p className={styles.heroText}>
            It&apos;s the people who stand beside you. Always.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className={styles.booksSection}>
        <div className={styles.container}>
          <div className={styles.personalNote}>
            <p className={styles.personalNoteText}>
              These stories came from a place of wanting to explore what happens when people find their way back to themselves—and to each other. I hope they feel like coming home.
            </p>
          </div>
          <h2 className={styles.sectionTitle}>The Shore Series</h2>
          
          {/* Book 1: The Shore */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/The Shore - cover only.jpg"
                alt="The Shore book cover"
                width={400}
                height={600}
                className={styles.bookImage}
                priority
              />
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>The Shore</h3>
              
              <div className={styles.bookDescription}>
                <p>
                  Ryan Blake didn&apos;t come to the Outer Banks looking for love.
                </p>
                <p>
                  She came for quiet, for space to breathe after years of running from heartbreak, from her past, and from herself. But the shore has a way of pulling truths to the surface, and when she breaks down on the side of the road, it&apos;s Cody Calloway who shows up. The boy she once knew. But now he&apos;s the man she can&apos;t seem to forget.
                </p>
                <p>
                  Cody has already lost once. He buried the love of his life, and with her, the future he thought he&apos;d have. Yet when Ryan stumbles back into his world, with her sharp wit, wild spirit, and haunted eyes, something shifts. She makes him want again. She makes him believe.
                </p>
                <p>
                  But second chances don&apos;t come without ghosts. Between old scars and new temptations, between the weight of the past and the fragile hope of tomorrow, Ryan and Cody will have to fight. For honesty. For healing. For the kind of love that doesn&apos;t let go.
                </p>
                <p>
                  On these Carolina shores, where waves break and begin again, two people discover that sometimes the hardest battles lead to the sweetest homecoming.
                </p>
              </div>

              <div className={styles.bookCategories}>
                <span className={styles.categoryTag}>Contemporary Romance</span>
                <span className={styles.categoryTag}>Small Town Romance</span>
                <span className={styles.categoryTag}>Second Chance Romance</span>
                <span className={styles.categoryTag}>Beach Romance</span>
              </div>

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
          </div>

          {/* Book 2: For You */}
          <div className={styles.bookCard}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/For You - cover only.jpg"
                alt="For You book cover"
                width={400}
                height={600}
                className={styles.bookImage}
              />
            </div>
            <div className={styles.bookContent}>
              <h3 className={styles.bookTitle}>For You</h3>
              
              <div className={styles.bookDescription}>
                <p>
                  Madison Quinn doesn&apos;t do vulnerable. Her quick wit, guarded smile, and string of one-night stands have always kept her safe from the mess love leaves behind. But when her past collides with her present, Madison discovers that the truth she&apos;s buried isn&apos;t something she can outrun.
                </p>
                <p>
                  Declan Healy isn&apos;t just the man who sees through her armor, he&apos;s the one willing to stand there when it all comes crashing down. With him, Madison finds laughter in the silence, tenderness in the storm, and a passion that makes her question everything she thought she knew about love.
                </p>
                <p>
                  As old secrets rise and new ties take root, Madison has to decide if she can trust Declan not only with her body but with her heart. Because with him, she doesn&apos;t just want tonight, she wants forever.
                </p>
              </div>

              <div className={styles.bookCategories}>
                <span className={styles.categoryTag}>Contemporary Romance</span>
                <span className={styles.categoryTag}>Friends to Lovers</span>
                <span className={styles.categoryTag}>Slow Burn Romance</span>
                <span className={styles.categoryTag}>Beach Town Romance</span>
              </div>

              <div className={styles.buyButtons}>
                <a 
                  href="https://www.amazon.com/You-Shore-Book-2-ebook/dp/B0G1Y6TGR9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle
                </a>
                <a 
                  href="https://www.amazon.com/You-Shore-S-Brown/dp/B0G1YKD83J" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Paperback
                </a>
                <a 
                  href="https://www.amazon.com/gp/product/B0G1YMPSQ6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Hardcover
                </a>
              </div>
              <p className={styles.kindleUnlimited}>Available on Kindle Unlimited</p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className={styles.comingSoon}>
            <h3 className={styles.comingSoonTitle}>Beside You</h3>
            <p className={styles.comingSoonText}>Coming 2026</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About the Author</h2>
          
          <div className={styles.aboutContent}>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/Sus-bw.png"
                alt="S.E. Brown"
                width={300}
                height={300}
                className={styles.aboutAuthorImage}
              />
              <p className={styles.aboutPhotoCredit}>Author photo by Brooke Eppa.</p>
            </div>
            
            <div className={styles.aboutTextContent}>
              <p className={styles.aboutIntro}>
                S.E. Brown is a
              </p>
              <p className={styles.aboutTrait}>
                back-roads-drivin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                mac-and-cheese-lovin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                flip-flop-wearin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                Green-Bay-Packers-cheerin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                sugar-cookie-icing-decoratin&apos;,
              </p>
              <p className={styles.aboutTrait}>
                music-cranked-up-singin&apos;
              </p>
              <p className={styles.aboutOutro}>
                writer of romance novels…with a little heat.
              </p>
              <a href="/about" className={styles.aboutLink}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

