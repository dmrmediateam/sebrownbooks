import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'The Shore, Chapter 1 | S.E. Brown Books',
  description: "Read the first chapter of The Shore, a heartfelt contemporary romance set in North Carolina's Outer Banks, where friendship, found family, and unexpected love change everything.",
}

export default function TheShoreChapterOne() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Shore</h1>
          <p className={styles.heroTagline}>
            Chapter 1
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookDetails}>
            <div className={styles.bookImageWrapper}>
              <Link href="/books/the-shore" className={styles.coverLink}>
                <Image
                  src="/TheShore-cover.jpg"
                  alt="The Shore book cover"
                  width={500}
                  height={750}
                  className={styles.bookImage}
                  priority
                />
              </Link>
              <div className={styles.buyStack}>
                <h2 className={styles.buyStackHeading}>Choose Your Format</h2>
                <a
                  href="https://www.amazon.com/gp/product/B0G1TXP2RD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle eBook
                </a>
                <p className={styles.kindleUnlimited}>Included with Kindle Unlimited</p>
                <a
                  href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V12F9T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Paperback
                </a>
              </div>
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.bookNumber}>Book 1</div>

              <div className={styles.chapterText}>
                <p>“FUCK!”</p>
                <p>
                  Ryan pressed harder on the gas, praying her car would lurch forward. Instead, the tires spun and sank even deeper into the sand.
                </p>
                <p>
                  “You’ve got to be kidding me.” She slammed her palm against the steering wheel, then dropped her forehead onto it with a groan.
                </p>
                <p>
                  This was not how her return to the Outer Banks was supposed to go. She’d driven the five-plus hours from Charlotte to Nags Head with the top down, Berkley’s ears flapping in the wind, and the music blasting. The whole point was to clear her head after months of deadlines and the endless pressure of leading a rebranding project at the design house in Charlotte. All she wanted now was to cross the dune and feel sand under her feet. And maybe let the Atlantic wash everything away.
                </p>
                <p>
                  Instead, she was stuck.
                </p>
                <p>
                  Ryan lifted her head, catching Berkley’s curious reflection in the rearview mirror. The border collie’s ears were perked and her head cocked, silently judging Ryan’s every move.
                </p>
                <p>
                  “Don’t look at me like that.” Ryan gave the steering wheel another crank as she eased on the gas. For a heartbeat the tires kicked up sand like they might grip. Then, they sank deeper.
                </p>
                <p>
                  That worked in Wisconsin snow. Apparently North Carolina sand didn’t play by the same rules.
                </p>
                <p>
                  She exhaled hard, wanting to punch something. Half her childhood summers had been spent here, barefoot, salt-skinned, and inseparable from Abby. They had built sandcastles and chased waves. And when the school years pulled them apart, they’d filled entire notebooks with notes to each other. But time had erased the connection.
                </p>
                <p>
                  <em>Was Abby even still here?</em>
                </p>
                <p>
                  Ryan shoved the thought aside, dug her phone out of her bag, and prayed for a signal. Three bars.
                </p>
                <p>
                  <em>Hallelujah.</em>
                </p>
                <p>
                  She stepped out to survey the damage. Both back tires were buried to the rim. The front tires weren’t much better. “Shit.”
                </p>
                <p>
                  Berkley’s ears perked again, like she was agreeing.
                </p>
                <p>
                  The wind whipped her medium-brown hair across her face, sticking to her lip gloss. She swiped it away with a huff as her blue eyes flashed with the kind of determination that came out when nothing else was working.
                </p>
                <p>
                  She had just typed “tow company Nags Head” into her browser when the low rumble of a truck made her stomach drop.
                </p>
                <p>
                  <em>Perfect! Now I have witnesses.</em>
                </p>
                <p>
                  A horn blared. She glanced up, bracing for laughter, but the driver wasn’t even smirking. He slowed and pointed toward her vehicle.
                </p>
                <p>
                  Her phone lit with a list of tow companies, but before she could call, the horn sounded again. This time she noticed the window was rolled down.
                </p>
                <p>
                  “Need some help?”
                </p>
                <p>
                  Ryan’s breath hitched.
                </p>
                <p>
                  The voice belonged to a man with carved forearms, a faded Chicago Cubs cap pushed low over soft brown curls, and eyes the exact shade of milk chocolate. Broad shoulders stretched his black t-shirt in a way that made her pulse skip before she could stop it.
                </p>
                <p>
                  “Oh, holy hell,” she whispered before realizing she’d said it out loud.
                </p>
                <p>
                  “I’m sorry, what?” he asked, leaning on the door, a smile tugging at his mouth.
                </p>
                <p>
                  Her brain blanked. “Sorry, yes. Some help would be great.”
                </p>
                <p>
                  A low chuckle slipped from him, and Ryan wanted to sink into the sand herself.
                </p>
                <p>
                  <em>Of course. Because being stuck in the sand wasn’t humiliating enough..</em>
                </p>
                <p>
                  “Don’t worry,” he said easily. “This happens more than you’d think.” His eyes softened as he nodded toward her car. “Let us give you a hand.”
                </p>
                <p>
                  Ryan blinked.
                </p>
                <p>
                  <em>Us?</em>
                </p>
                <p>
                  The passenger door opened, and only then did she realize there was someone else in the truck. A blond man climbed out, tall and broad-shouldered, offering a quiet nod in greeting.
                </p>
                <p>
                  But Ryan’s attention snapped right back to the first man, who was now close enough that the heat of him cut through the ocean breeze.
                </p>
                <p>
                  He extended his hand. “I’m Cody. This is my brother, Riley.”
                </p>
                <p>
                  Ryan slid her palm into his. The tingle that shot up her arm made her cheeks heat instantly. “Ryan. Thanks for stopping.”
                </p>
                <p>
                  “Not a problem.” Cody crouched to let Berkley sniff his hand. “And who’s this?”
                </p>
                <p>
                  “That’s Berkley.”
                </p>
                <p>
                  The dog leaned forward, sniffed, and melted under his scratch.
                </p>
                <p>
                  “Not much of a guard dog, huh?”
                </p>
                <p>
                  “More of the lick-you-to-death type,” Ryan admitted, smiling despite herself.
                </p>
                <p>
                  Her fingers brushed his as she reached down to pet Berkley too, and a jolt shot through her chest.
                </p>
                <p>
                  Then Berkley growled. Both men noticed, but soon her tail wagged wildly at the golden retriever in the back of their truck.
                </p>
                <p>
                  Cody ruffled Berkley’s head with a chuckle. “Easy, girl. That’s Wrigley. I’ll let him down once your car is sorted out.”
                </p>
                <p>
                  <em>How did I miss the giant dog in the bed of the truck? Maybe because you were too busy staring at his arms,</em> she answered herself.
                </p>
                <p>
                  “Hey Riley, grab the chains,” Cody called.
                </p>
                <p>
                  His brother wordlessly grabbed them from the truck, and Ryan stepped back, watching the men work. They were pretty damn efficient, almost as though they’d done this a dozen or so times before.
                </p>
                <p>
                  Cody glanced over his shoulder. “Alright, Ryan. Hop in and give it a little gas when I say.”
                </p>
                <p>
                  She hesitated. “Are you sure? What if I overdo it and smash into your truck?”
                </p>
                <p>
                  He grinned, brushing sand from his hands. “Then you’ll owe me more than a beer. Don’t worry, I’ll talk you through it.”
                </p>
                <p>
                  His confidence was infuriatingly contagious. Ryan slid behind the wheel, muttering to herself. “Please don’t let me hit this guy’s truck.”
                </p>
                <p>
                  Cody’s voice was steady. “Okay. Put it in reverse, then lightly step on the gas. Nice and easy.”
                </p>
                <p>
                  She eased the pedal down. At first, the tires spun. Then finally, they caught. The car groaned free, crawling onto firmer sand. Ryan braked. Her heart was hammering, and she let her forehead drop against the steering wheel.
                </p>
                <p>
                  “See? No problem.” Cody grinned.
                </p>
                <p>
                  Ryan exhaled, only then realizing how tightly she’d been holding her breath. Her car was free, the truck was unscathed, and the knot in her stomach had finally loosened.
                </p>
                <p>
                  “You were right. Thank you, seriously. You saved me.” She grabbed for her purse. “At least let me pay you.”
                </p>
                <p>
                  He shook his head. “Not necessary.” Then, almost as if the idea hit him fresh, he leaned against her car and lowered his voice. “Unless…you want to buy us a beer instead? We were heading down the road for burgers. Riley’s wife is meeting us. One more at the table would save me from being the third wheel.”
                </p>
                <p>
                  Ryan arched a brow.
                </p>
                <p>
                  “What?” He feigned offense. “We’re not serial killers. I promise.”
                </p>
                <p>
                  It was ridiculous. But he was ridiculously gorgeous. And she was starving. And if she was being honest, something about him had her curious.
                </p>
                <p>
                  “Besides, I promised Berkley she could meet Wrigley. I’m trying to be a man of my word.”
                </p>
                <p>
                  Ryan bit her lip to hide a smile. “Manipulating me with the dogs? That’s low.”
                </p>
                <p>
                  He grinned wider. “So, that’s a yes?”
                </p>
                <p>
                  She sighed, trying to be dramatic. “Fine. But if you ditch me with the whole check, I’ll assume this whole chivalry thing was a scam.”
                </p>
                <p>
                  He chuckled, already walking back toward the truck. “Not my style.”
                </p>
                <p>
                  Ryan watched him go, biting back a grin she hadn’t felt in far too long.
                </p>
                <p>
                  It was only a beer. But it didn’t feel like only anything.
                </p>
              </div>

              <div className={styles.buySection}>
                <h2 className={styles.sectionHeading}>Get Your Copy</h2>
                <div className={styles.buyButtons}>
                  <a
                    href="https://www.amazon.com/gp/product/B0G1TXP2RD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bottomBuyButton}
                  >
                    Kindle
                  </a>
                  <a
                    href="https://www.amazon.com/Shore-S-Brown/dp/B0G1V12F9T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bottomBuyButton}
                  >
                    Paperback
                  </a>
                </div>
                <p className={styles.bottomKindleUnlimited}>Available on Kindle Unlimited</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
