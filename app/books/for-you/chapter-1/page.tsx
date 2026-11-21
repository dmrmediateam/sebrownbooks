import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'For You, Chapter 1 | S.E. Brown Books',
  description: "Read the first chapter of For You, a contemporary romance set in North Carolina's Outer Banks where family, forgiveness, and love can change the course of a life.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://sebrownbooks.com/books/for-you/chapter-1',
  },
}

export default function ForYouChapterOne() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>For You</h1>
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
              <Link href="/books/for-you" className={styles.coverLink}>
                <Image
                  src="/ForYou-cover.jpg"
                  alt="Cover of 'For You,' the second contemporary romance in The Shore Series by S.E. Brown"
                  width={380}
                  height={570}
                  className={styles.bookImage}
                  priority
                />
              </Link>
              <div className={styles.buyStack}>
                <h2 className={styles.buyStackHeading}>Choose Your Format</h2>
                <a
                  href="https://www.amazon.com/You-Shore-Book-2-ebook/dp/B0G1Y6TGR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle eBook
                </a>
                <p className={styles.kindleUnlimited}>Included with Kindle+</p>
                <a
                  href="https://www.amazon.com/You-Shore-S-Brown/dp/B0G1YKD83J"
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
                <p>
                  Madison was patiently waiting to get the bartender’s attention when a guy slid up beside her. He placed his elbow on the bar like he owned the place.
                </p>
                <p>
                  “Hi.” His smile was nice enough, but it reeked of desperation.
                </p>
                <p>
                  She pasted on a polite smile and turned back to the bar.
                </p>
                <p>
                  <em>Strike one.</em>
                </p>
                <p>
                  “I was watching you dance earlier,” he pressed on. “You’ve got some nice moves.”
                </p>
                <p>
                  Another quick, fake smile. “Thanks.”
                </p>
                <p>
                  <em>Please, God, let the alcohol be faster than this man. Strike two.</em>
                </p>
                <p>
                  Finally, the bartender appeared, slinging a towel over his shoulder. “Hey, Madison. What can I get ya?”
                </p>
                <p>
                  “A water and a Jack and Coke, please.”
                </p>
                <p>
                  “You got it.”
                </p>
                <p>
                  As she moved down the bar, the guy stayed glued to her side. Like gum on a shoe.
                </p>
                <p>
                  “Madison, huh?”
                </p>
                <p>
                  She rolled her eyes inwardly. If she engaged too much, he’d never go away, but ignoring him outright felt like kicking a puppy. An eager, slightly sweaty puppy.
                </p>
                <p>
                  “Mind if I buy your drink?”
                </p>
                <p>
                  “I’ve got this one. Thanks, though.” Translation: back off, pal.
                </p>
                <p>
                  <em>Strike three.</em>
                </p>
                <p>
                  He wasn’t a creep, exactly. Just, not her type. Too eager. And she’d been down this road before. Guys like him never took no for an answer. Walk away, they’d follow. Hit the dance floor, they’d dance up from behind. Duck into the bathroom, they’d be waiting outside when you came out. If she wanted to shake him, she was going to need backup.
                </p>
                <p>
                  She looked across the club, aiming imaginary daggers at the back of Jessa’s head.
                </p>
                <p>
                  One of her best friends was perched at a table like she owned the place. Her legs crossed, a drink in hand, and chatting with their group. Jessa had that kind of presence. Big hair. Big laugh. Big personality that made people gravitate toward her. She was gorgeous, no doubt, but she was also the kind of friend who’d gleefully throw herself in front of a train for you, and then remind you for the next ten years how much you owed her. Equal parts ride-or-die and pain-in-the-ass.
                </p>
                <p>
                  And right now? Madison needed her pain-in-the-ass to save her ass.
                </p>
                <p>
                  As if she felt the laser focus, Jessa’s head popped up. She scanned the room, spotted Madison with drinks in hand and Mr. Persistent glued to her side. Her grin said <em>oh, this is gonna be fun.</em>
                </p>
                <p>
                  They hadn’t pulled this stunt in a while, but judging by that wicked gleam in her eye, Jessa had been <em>waiting</em> for the chance. The poor bastard had no idea what was coming.
                </p>
                <p>
                  Sliding off her chair, she excused herself from the others and beelined it toward Madison.
                </p>
                <p>
                  Madison spotted it instantly. That look. The one that meant Jessa was about to unleash pure, unfiltered chaos. She’d seen it a hundred times before, and if there was one thing Madison knew, it was not to blow the setup. Her pulse ticked faster, and she clamped her lips together, doing everything in her power not to grin and ruin it.
                </p>
                <p>
                  <em>Here it comes…three. Two. One.</em>
                </p>
                <p>
                  “Oh my God! Thank God I found you!” Jessa screeched, clutching Madison’s arm like she’d been rescued from a sinking ship. “You have to help me. I just shit my pants!”
                </p>
                <p>
                  Madison’s face lit with perfectly feigned horror. It was Oscar-worthy, really. “Come on!”
                </p>
                <p>
                  Jessa yanked her away, leaving the guy frozen in place, horrified, and probably already composing the world’s most traumatized group text.
                </p>
                <p>
                  By the time they reached the table, both women were laughing so hard they could barely breathe.
                </p>
                <p>
                  “You did the ‘I shit my pants’ thing again, didn’t you?” Ryan shook her head, though she was laughing right along with them.
                </p>
                <p>
                  “Yup. It was time for a Code Brown.” Jessa winked. “Besides, it’s cake o’clock anyway.”
                </p>

                <p className={styles.sceneBreak}>~ ~ ~ ~ ~</p>

                <p>
                  🎶 <em>Happy birthday to you…</em> 🎶
                </p>
                <p>
                  Thirty-six candles flickered in front of Madison. She drew in a deep breath, squeezed her eyes shut, and made her wish. She wanted to have a good time and enjoy her friends. And maybe, just maybe, get laid.
                </p>
                <p>
                  <em>Happy birthday to me. Not exactly Hallmark material, but hey, I’ve never been the candles-and-roses type.</em>
                </p>
                <p>
                  She blew them all out in one go, the group erupting in cheers.
                </p>
                <p>
                  Thirty-six. The number had been gnawing at her for weeks. She wasn’t afraid of aging. She lived fast and easy, and refused to act her age most days. But this birthday, this one felt heavy. It was like midlife had her in its crosshairs. She wasn’t ready. Not yet.
                </p>
                <p>
                  So tonight? Tonight she was living it up with a twenty-something energy in a thirty-something body. She had the drinks flowing and the music pumping. She’d shoved all her responsibilities into a dark corner.
                </p>
                <p>
                  She cut into her ice cream cake. Yes, ice cream cake at a bar, thankyouverymuch, and started serving slices while her friends teased. Ryan, Madison’s other best friend, had lobbied for something more “grown up,” but this had been Madison’s tradition since she was sixteen.
                </p>
                <p>
                  Madison leveled her with a look over the knife. “There are some things you don’t outgrow.”
                </p>
                <p>
                  Ryan arched a brow, smirking as she took her plate. “Like immaturity?”
                </p>
                <p>
                  “Like fun, bitch,” Madison shot back before Jessa slid in with a grin.
                </p>
                <p>
                  “Personally, I’m just here for the free cake. Tradition or not, keep it coming.”
                </p>
                <p>
                  They’d barely set their spoons down before a song with too much bass and not enough lyrics shook the club. Madison downed her drink, grabbed Ryan and Jessa’s hands, and hauled them to the floor. The place was packed, the bass so heavy it pounded through her chest, and she felt herself coming alive. There, under the pulsing lights, she could shed everything and just be.
                </p>
                <p>
                  A variety of guys tried to edge in, but the three of them formed an impenetrable circle. Eventually, Cody, Ryan’s freshly-minted husband, and Trent, Jessa’s, well, he was still a mystery to Madison, joined in. It felt easy, the group of them tangled up in the beat, all grins and sweat. It was the kind of joy that made the night stretch wider and was exactly what Madison had been hoping for.
                </p>
                <p>
                  But it didn’t take long before Ryan and Cody were so wrapped up in each other they looked about five seconds away from trying to set a world record for most public foreplay on a dance floor.
                </p>
                <p>
                  Madison groaned and threw her hands up. “Get a room, you two! Or at least a booth in the corner. Some of us are trying to drink without gagging.”
                </p>
                <p>
                  Ryan flushed tomato-red and buried her face in Cody’s chest, which only made Madison cackle louder.
                </p>
                <p>
                  Not long after, Ryan and Cody slipped out, all smiles and newlywed glow.
                </p>
                <p>
                  Madison hugged them both goodbye, leaning in to needle Ryan one last time. “You two were about three hip thrusts away from an indecent exposure charge. And don’t think I wouldn’t have testified.”
                </p>
                <p>
                  By the time Madison stumbled back onto the dance floor, the alcohol had fully claimed her. Jessa and Trent had drifted to the bar, lost in their own little bubble. Alone now, she danced wild and loose, completely oblivious to the eyes tracking her from across the club.
                </p>
                <p>
                  Jessa’s radar for Madison never shut off, so she was the first to notice him. A tall, broad-shouldered stranger with eyes locked on her best friend. Built like he was carved from stone and dressed in a plain shirt that stretched across his chest, he dismissed a woman trying to talk to him and set his drink down. Then he started walking.
                </p>
                <p>
                  Madison had her eyes closed, lost in the beat, when she felt someone step in behind her. She’d been to this bar more times than she could count, danced with half the regulars, and even taken a few home when the mood struck. So this, men sliding up close, wasn’t new.
                </p>
                <p>
                  Hands settled on her hips, tugging her back against a solid body. Normally she’d roll her eyes, shimmy away, and maybe toss a sharp elbow if they didn’t get the hint. But then his movements synced with hers. Fluid and confident, like he wasn’t just trying to keep up but knew the rhythm of her body already.
                </p>
                <p>
                  When she turned to see him, his blue eyes pinned her. That grin. That body.
                </p>
                <p>
                  Heat spiked low in her belly. “I know you from somewhere.” Her brain was so fogged by liquor and the press of him, she couldn’t place him. Was it the alcohol messing with her memory? Or was she imagining it? She chased the thought, but it was gone.
                </p>
                <p>
                  He only smiled wider. His hands slid down to cup her ass, pulling her closer. His voice, when he finally spoke, rumbled through her. “You like that?”
                </p>
                <p>
                  <em>Oh fuck…</em>
                </p>
                <p>
                  She nodded, breathless.
                </p>
                <p>
                  He chuckled low, the sound curling heat straight through her. His hand skimmed her hip, guiding her into the rhythm like the music belonged to them alone. The press of his body was solid, and every sway sent sparks crawling up her spine.
                </p>
                <p>
                  For a flash, she thought about asking his name, about making sure this wasn’t her whiskey-soaked brain short-circuiting. But then his mouth brushed her ear, his breath hot and teasing.
                </p>
                <p>
                  “You wanna get outta here?”
                </p>
                <p>
                  She should have asked his name. Should have clocked the familiarity in his face. Should have remembered him. But all she could focus on was the hard line of his body pressed against hers.
                </p>
                <p>
                  “Yes.”
                </p>
                <p>
                  The word slipped out too easily. Too fast. Not me, her sober self would’ve argued. Hookups like this weren’t usually her thing, but the alcohol fizzed in her veins. The bass thumped through her chest. Logic had long since left the building.
                </p>
                <p>
                  Reckless was exactly what she wanted for a night.
                </p>

                <p className={styles.sceneBreak}>~ ~ ~ ~ ~</p>

                <p>
                  Jessa spotted her at the edge of the crowd and wove through the bodies, zeroing in on Madison and the stranger’s hand still heavy on her hip. “You’re leaving?” She shouted over the music, her eyes sharp. “With him?”
                </p>
                <p>
                  Madison grinned, the kind of grin Jessa was all too familiar with. Too loose. Too giddy. It was a warning sign. “Yep.”
                </p>
                <p>
                  “What’s his name, Madison?”
                </p>
                <p>
                  Madison turned to the guy, shrugged, then looked back to Jessa with a tipsy laugh. “You want a name? Hell, I don’t even care if he has one.”
                </p>
                <p>
                  “You don’t even know his name!”
                </p>
                <p>
                  “Doesn’t matter,” Madison tossed back, a reckless sparkle in her eyes. Logic was a distant dot in the rearview, and honestly? She liked the way reckless felt tonight.
                </p>
                <p>
                  Jessa planted herself in front of her, crossing her arms. “It does matter. Since when do we let each other walk out with nameless men?”
                </p>
                <p>
                  <em>Since my birthday</em>, Madison thought. <em>Since the music and the alcohol and the heat made me forget I’m supposed to have rules.</em> Out loud, she said, “Since my birthday. Thirty-six, babe. Let me have this one.”
                </p>
                <p>
                  For a second Jessa held the line, and Madison braced for the tug-of-war she’d probably lose. Jessa was usually the voice of reason when Madison’s brain packed up and went home. But tonight, something in Jessa’s face wavered. Madison pressed her advantage, her stubborn streak blazing through her grin.
                </p>
                <p>
                  Madison snagged Jessa’s wrist, and gave her the crooked grin she knew would do the trick.
                </p>
                <p>
                  Jessa exhaled hard through her nose, her hands going up in surrender. “Fine. But if he so much as breathes wrong, I’ll castrate him with a butter knife.”
                </p>
                <p>
                  Madison kissed her cheek, triumphant. Victory never tasted this sweet, or this dangerous.
                </p>
              </div>

              <div className={styles.buySection}>
                <h2 className={styles.sectionHeading}>Get Your Copy</h2>
                <div className={styles.buyButtons}>
                  <a
                    href="https://www.amazon.com/You-Shore-Book-2-ebook/dp/B0G1Y6TGR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bottomBuyButton}
                  >
                    Kindle
                  </a>
                  <a
                    href="https://www.amazon.com/You-Shore-S-Brown/dp/B0G1YKD83J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bottomBuyButton}
                  >
                    Paperback
                  </a>
                </div>
                <p className={styles.bottomKindleUnlimited}>Available on Kindle+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
