import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Books() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Shore Series</h1>
          <p className={styles.heroSubtitle}>
            Where love finds its way home on the Carolina coast
          </p>
          <p className={styles.heroText}>
            The Shore had always been more than just a place. It was a pulse. The steady beat of friends 
            who became family and love that outlasted the tide. Ryan and Cody. Madison and Declan. Luke and Abby. 
            Each found their way back to themselves, and to each other, by standing shoulder to shoulder 
            through the storms.
          </p>
          <p className={styles.heroText}>
            Some stories end with a kiss. Theirs ended with a promise: to live, to love, to keep showing up. 
            They&apos;d learned that family isn&apos;t blood, or vows, or even names carved in sand. It&apos;s the people 
            who stand beside you. Always.
          </p>
        </div>
      </section>

      {/* Book 1: The Shore */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookHeader}>
            <div className={styles.bookNumber}>Book 1</div>
            <h2 className={styles.bookTitle}>The Shore</h2>
            <p className={styles.bookTagline}>
              She never believed in forever. Until him.
            </p>
          </div>

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
                <h3 className={styles.sectionHeading}>About the Book</h3>
                <div className={styles.description}>
                  <p>
                    Ryan Blake didn&apos;t come to the Outer Banks looking for love. She came for quiet, for space 
                    to breathe after years of running from heartbreak, from her past, and from herself. But the 
                    shore has a way of pulling truths to the surface, and when she breaks down on the side of 
                    the road, it&apos;s Cody Calloway who shows up. The boy she once knew. But now he&apos;s the man she 
                    can&apos;t seem to forget.
                  </p>
                  <p>
                    Cody has already lost once. He buried the love of his life, and with her, the future he 
                    thought he&apos;d have. Yet when Ryan stumbles back into his world, with her sharp wit, wild 
                    spirit, and haunted eyes, something shifts. She makes him want again. She makes him believe.
                  </p>
                  <p>
                    But second chances don&apos;t come without ghosts. Between old scars and new temptations, between 
                    the weight of the past and the fragile hope of tomorrow, Ryan and Cody will have to fight. 
                    For honesty. For healing. For the kind of love that doesn&apos;t let go.
                  </p>
                  <p>
                    On these Carolina shores, where waves break and begin again, two people discover that sometimes 
                    the hardest battles lead to the sweetest homecoming.
                  </p>
                </div>
              </div>

              <div className={styles.charactersSection}>
                <h3 className={styles.sectionHeading}>The Characters</h3>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h4 className={styles.characterName}>Ryan Blake</h4>
                    <p className={styles.characterDesc}>
                      A woman running from her past, seeking solace on the Outer Banks. Sharp-witted, independent, 
                      and haunted by heartbreak, she&apos;s determined to build a new life—alone. But the shore has 
                      other plans.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h4 className={styles.characterName}>Cody Calloway</h4>
                    <p className={styles.characterDesc}>
                      A man who&apos;s already lost the love of his life. Grief has shaped him, but when Ryan returns, 
                      he finds himself wanting to believe in second chances—and in a future he thought was gone forever.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.themesSection}>
                <h3 className={styles.sectionHeading}>Themes & Tropes</h3>
                <div className={styles.themes}>
                  <div className={styles.themeList}>
                    <span className={styles.themeTag}>Second Chance Romance</span>
                    <span className={styles.themeTag}>Grief & Healing</span>
                    <span className={styles.themeTag}>Small Town Romance</span>
                    <span className={styles.themeTag}>Beach Setting</span>
                    <span className={styles.themeTag}>Found Family</span>
                    <span className={styles.themeTag}>Emotional Journey</span>
                    <span className={styles.themeTag}>Slow Burn</span>
                    <span className={styles.themeTag}>Strong Heroine</span>
                  </div>
                </div>
              </div>

              <div className={styles.categoriesSection}>
                <h3 className={styles.sectionHeading}>Categories</h3>
                <div className={styles.categories}>
                  <span className={styles.categoryTag}>Contemporary Romance</span>
                  <span className={styles.categoryTag}>Small Town Romance</span>
                  <span className={styles.categoryTag}>Second Chance Romance</span>
                  <span className={styles.categoryTag}>Beach Romance</span>
                  <span className={styles.categoryTag}>Emotional Romance</span>
                  <span className={styles.categoryTag}>Found Family</span>
                </div>
              </div>

              <div className={styles.buySection}>
                <h3 className={styles.sectionHeading}>Get Your Copy</h3>
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
          </div>
        </div>
      </section>

      {/* Book 2: For You */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookHeader}>
            <div className={styles.bookNumber}>Book 2</div>
            <h2 className={styles.bookTitle}>For You</h2>
            <p className={styles.bookTagline}>
              She never believed in forever. Until him.
            </p>
          </div>

          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Image
                src="/For You - cover only.jpg"
                alt="For You book cover"
                width={500}
                height={750}
                className={styles.bookImage}
              />
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.descriptionSection}>
                <h3 className={styles.sectionHeading}>About the Book</h3>
                <div className={styles.description}>
                  <p>
                    Madison Quinn doesn&apos;t do vulnerable. Her quick wit, guarded smile, and string of one-night 
                    stands have always kept her safe from the mess love leaves behind. But when her past collides 
                    with her present, Madison discovers that the truth she&apos;s buried isn&apos;t something she can outrun.
                  </p>
                  <p>
                    Declan Healy isn&apos;t just the man who sees through her armor, he&apos;s the one willing to stand there 
                    when it all comes crashing down. With him, Madison finds laughter in the silence, tenderness in 
                    the storm, and a passion that makes her question everything she thought she knew about love.
                  </p>
                  <p>
                    As old secrets rise and new ties take root, Madison has to decide if she can trust Declan not 
                    only with her body but with her heart. Because with him, she doesn&apos;t just want tonight, she 
                    wants forever.
                  </p>
                </div>
              </div>

              <div className={styles.charactersSection}>
                <h3 className={styles.sectionHeading}>The Characters</h3>
                <div className={styles.characters}>
                  <div className={styles.character}>
                    <h4 className={styles.characterName}>Madison Quinn</h4>
                    <p className={styles.characterDesc}>
                      Quick-witted and fiercely independent, Madison has built walls around her heart with one-night 
                      stands and sharp humor. But when her past catches up, she discovers that running isn&apos;t the 
                      answer—and that maybe, just maybe, forever isn&apos;t a lie.
                    </p>
                  </div>
                  <div className={styles.character}>
                    <h4 className={styles.characterName}>Declan Healy</h4>
                    <p className={styles.characterDesc}>
                      A man with steady hands and quiet strength, Declan sees through every wall Madison has built. 
                      He&apos;s patient, he&apos;s persistent, and he&apos;s willing to stand there when everything comes crashing 
                      down. With him, Madison finds the courage to trust again.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.themesSection}>
                <h3 className={styles.sectionHeading}>Themes & Tropes</h3>
                <div className={styles.themes}>
                  <div className={styles.themeList}>
                    <span className={styles.themeTag}>Friends to Lovers</span>
                    <span className={styles.themeTag}>Slow Burn</span>
                    <span className={styles.themeTag}>Beach Town Romance</span>
                    <span className={styles.themeTag}>Found Family</span>
                    <span className={styles.themeTag}>Emotional Romance</span>
                    <span className={styles.themeTag}>Strong Female Lead</span>
                    <span className={styles.themeTag}>Healing & Forgiveness</span>
                    <span className={styles.themeTag}>Second Chance</span>
                  </div>
                </div>
              </div>

              <div className={styles.categoriesSection}>
                <h3 className={styles.sectionHeading}>Categories</h3>
                <div className={styles.categories}>
                  <span className={styles.categoryTag}>Contemporary Romance</span>
                  <span className={styles.categoryTag}>Friends to Lovers</span>
                  <span className={styles.categoryTag}>Slow Burn Romance</span>
                  <span className={styles.categoryTag}>Beach Town Romance</span>
                  <span className={styles.categoryTag}>Emotional Romance</span>
                  <span className={styles.categoryTag}>Found Family</span>
                </div>
              </div>

              <div className={styles.buySection}>
                <h3 className={styles.sectionHeading}>Get Your Copy</h3>
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
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className={styles.comingSoonSection}>
        <div className={styles.container}>
          <div className={styles.comingSoon}>
            <div className={styles.bookNumber}>Book 3</div>
            <h2 className={styles.comingSoonTitle}>Beside You</h2>
            <p className={styles.comingSoonText}>Coming 2026</p>
            <p className={styles.comingSoonSubtext}>
              Every story leaves a ripple. Here&apos;s what comes next.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
