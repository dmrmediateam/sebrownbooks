import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Beside Us, Chapter 1 | S.E. Brown Books',
  description: 'Read the first chapter of Beside Us, the emotional conclusion to The Shore Series, where Abby and Luke discover that love is worth fighting for, even when the past refuses to let go.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://sebrownbooks.com/books/beside-us/chapter-1',
  },
}

export default function BesideUsChapterOne() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Beside Us</h1>
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
              <Link href="/books/beside-us" className={styles.coverLink}>
                <Image
                  src="/BesideUs-cover.jpg"
                  alt="Cover of 'Beside Us,' the third and final contemporary romance in The Shore Series by S.E. Brown"
                  width={380}
                  height={570}
                  className={styles.bookImage}
                  priority
                />
              </Link>
              <div className={styles.buyStack}>
                <h2 className={styles.buyStackHeading}>Choose Your Format</h2>
                <a
                  href="https://www.amazon.com/gp/product/B0HHWPDZNK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Kindle eBook
                </a>
                <p className={styles.kindleUnlimited}>Included with Kindle+</p>
                <a
                  href="https://www.amazon.com/Beside-Us-Shore-S-Brown/dp/B0HHXV2YLW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Paperback
                </a>
              </div>
            </div>

            <div className={styles.bookInfo}>
              <div className={styles.bookNumber}>Book 3</div>

              <div className={styles.chapterText}>
                <p>
                  “Abby?”
                </p>
                <p>
                  Her head lifted lazily.
                </p>
                <p>
                  “Abby!”
                </p>
                <p>
                  She frowned, twisting to look past the rock she was sprawled on.
                </p>
                <p>
                  “Abigail Maxwell!”
                </p>
                <p>
                  <em>What the hell?</em>
                </p>
                <p>
                  A figure broke through the dense trees, striding toward her with an unthinking, practiced precision of someone who could track a ghost on a windy day. Even messy, even distracted, there was something controlled about the way he came toward her.
                </p>
                <p>
                  “Abby,” the voice called again, relief evident in its tone.
                </p>
                <p>
                  She blinked against the glare off the mountain stream. The sun kept him in silhouette. Tall and solid. Every line of him carved from effort and held there by tension. His cargo shorts were dusted from the trail, his gray t-shirt clinging just enough to show he’d been moving hard, darkened with sweat that the sun caught and warmed instead of cooling. His hair was damp from exertion, the breeze off the stream teasing the ends like he’d run a hand through it too many times.
                </p>
                <p>
                  But it was his eyes that finally hit her.
                </p>
                <p>
                  The blue cut through the sunlight first. Intense, scanning, and a little haunted. Focused on her the second he realized whose car he’d seen at the pullout. The kind of look that registers before the brain catches up. A flash of recognition mixed with something sharper.
                </p>
                <p>
                  “Luke?” The name came out half breath, half question.
                </p>
                <p>
                  He stepped fully into the light, and the rest of his face came into view. Sharp angles, tired around the edges, stubble softening what would’ve otherwise been intimidation. He still looked like himself, but today she sensed a rawness beneath his restraint, something he wasn’t letting anywhere near the surface.
                </p>
                <p>
                  Her pulse stuttered with a familiarity she wasn’t ready to name. They’d danced around each other in group gatherings for years. Glances held too long. Inside jokes that lived in the pauses. Nothing ever crossed the line into certainty.
                </p>
                <p>
                  Standing there, her sunbathing solitude fractured by him emerging from the woods like some wild-edged guardian she hadn’t asked for?
                </p>
                <p>
                  Yeah. She felt it.
                </p>
                <p>
                  He froze, too. She was leaning back against the sun-warmed rock, her legs stretched out, copper hair twisted up and messy from the fall breeze. The navy bikini she wore wasn’t anything flashy, but it hit him anyway, an awareness he didn’t have a name for. He’d seen her in a swimsuit before, plenty of times, but this was different. She wasn’t distracted, or corralling Jake, or laughing with the others. She was just…her. A woman in the sun. Bare shoulders prickling with goosebumps from the October air. And for a second too long, he forgot every wall he’d built.
                </p>
                <p>
                  She pushed to her feet, wrapping the towel instinctively around her waist, her heart still pounding. “What are you doing out here?”
                </p>
                <p>
                  He shook his head once, his eyes tracking her like he needed the visual confirmation she was in one piece. “Saw your car. Wanted to make sure you were alright.”
                </p>
                <p>
                  He was steady, but something in the way he swallowed said the day hadn’t been steady for him at all. His tension had nothing to do with her and everything to do with whatever he’d been carrying before he found her.
                </p>
                <p>
                  She adjusted the towel at her waist, more for something to do with her hands than for modesty. Though now that the breeze hit her skin, she was suddenly very aware of the temperature. “I’m fine. Just out here hiding from deadlines and responsibility.”
                </p>
                <p>
                  His mouth twitched, barely, but it was the closest thing to a smile she’d seen from him in weeks.
                </p>
                <p>
                  “You could’ve texted,” she teased.
                </p>
                <p>
                  “Phone’s in the Jeep.” He rubbed his thumb along the seam of his cargo pocket. A restless tell she’d never seen on him, and one she wouldn’t have expected. “Didn’t think. Just saw your car and—”
                </p>
                <p>
                  He cut himself off.
                </p>
                <p>
                  <em>And what? Ran toward the distraction? Went with instinct before thought?</em>
                </p>
                <p>
                  He didn’t finish the sentence, and she didn’t push.
                </p>
                <p>
                  Up close, he looked…off. Stretched thin, like something had been pulling at him since dawn. His gaze kept drifting. Not scanning for threats, but slipping somewhere far away. Somewhere painful.
                </p>
                <p>
                  “You okay?” Abby asked, the question gentle but not casual.
                </p>
                <p>
                  Luke dropped his gaze to the water between them. A breeze cut across the stream, sharp enough that it lifted the hem of his shirt and raised goosebumps along her arms in sympathy. The sunlight warmed the rock beneath her, but the air, that was unmistakably fall.
                </p>
                <p>
                  “Yeah.”
                </p>
                <p>
                  The lie was shaped so carefully she almost didn’t catch it. But she did. Because this was Luke, and paying attention to him had become second nature.
                </p>
                <p>
                  He finally met her eyes again, and for a second the armor slipped. Something old and aching flickered there. Grief, maybe? Or a memory? Or the kind of guilt that lived in him long enough to feel permanent.
                </p>
                <p>
                  “What are you doing here?” Abby asked again, softer this time.
                </p>
                <p>
                  “I could ask you the same.” His jaw stayed tight, his gaze never lingering anywhere for long.
                </p>
                <p>
                  “Working on my tan, obviously.” She stretched her arm across the rock like she was modeling for a photoshoot, half-grinning as if that explained everything. The move made the towel slip, the contrast between warm stone and open air raising goosebumps along her spine. She tucked it tighter.
                </p>
                <p>
                  Luke didn’t even bother responding. Yet, his face said <em>What in the hell are you doing out here alone</em> all on its own.
                </p>
                <p>
                  <em>And why now? Why today?</em>
                </p>
                <p>
                  He stayed planted where he was, his attention already sweeping the space around her instead of settling on her.
                </p>
                <p>
                  She rolled her eyes with a smile. “It was too beautiful to be cooped up in a cabin. So, I drove, found this little spot, and, voilà.” She gestured toward her bikini and the crisp autumn sun. “How’d you find me anyway? Did my sister tell you? How’d you know I was here?”
                </p>
                <p>
                  He hadn’t. Mac, Abby’s sister, didn’t even know he was in the area.
                </p>
                <p>
                  “I was driving past and saw a woman lying on a rock in the middle of a mountain stream. Didn’t think much of it until I recognized your car.”
                </p>
                <p>
                  “So you thought you’d stop by and say hi?” Her tone was playful. “That was awfully nice of you.”
                </p>
                <p>
                  <em>No, not even close,</em> Luke thought grimly. Finding her car here, on this day, had snapped him out of a place he didn’t want to be.
                </p>
                <p>
                  She stood, shaking out her towel before wrapping it around her waist again, then stepped carefully into the water, yelping softly as the October chill shot up her legs. She crossed fast, splashing through the current and back onto the bank where the sun felt warmer.
                </p>
                <p>
                  Luke’s eyes scanned the trees automatically, checking the shadows. It was habit. Noticing too much, as always. Especially on days like this.
                </p>
                <p>
                  “Where’s Jake?” Luke asked, half-expecting Abby’s ten-year-old son to spring out from the trees.
                </p>
                <p>
                  “With his grandparents,” she said easily. “They took him to Florida for his birthday.”
                </p>
                <p>
                  Luke nodded, his shoulders dropping a fraction. There was no threat and no danger. It was just Abby. Still, he stayed keyed up and alert in a way he didn’t bother masking.
                </p>
                <p>
                  “So, since the ice cream shop was quiet and Jake was off on an adventure, I thought I’d have one of my own.”
                </p>
                <p>
                  “Which brought you here? To the mountains of North Carolina?” His tone was more bewildered than curious.
                </p>
                <p>
                  “Something like that.” She echoed his words with a mischievous grin. “I’ve always wanted to see the foliage, and the timing seemed right.”
                </p>
                <p>
                  Luke followed her gaze to the blaze of reds, oranges, and golds that surrounded them. A wind stirred the canopy, sending a scatter of leaves drifting across the water. This time of year was always beautiful. And always cruel. The forest had grown older, but the sounds hadn’t changed. The rush of water. The hush of leaves. He carried those sounds in his bones.
                </p>
                <p>
                  He hadn’t expected anyone, least of all Abby, to cross his path today.
                </p>
                <p>
                  “What about you?” she asked. “What brings you here?”
                </p>
                <p>
                  Luke’s jaw ticked.
                </p>
                <p>
                  <em>Not today. Not her.</em>
                </p>
                <p>
                  “I had a few things to take care of.” His words landed flat, almost as if he’d practiced them.
                </p>
                <p>
                  No room for conversation. No room for the truth.
                </p>
                <p>
                  It didn’t surprise Abby. She’d known Luke for years, and while he could joke, hang with the guys, and was a great baseball coach for her son and the team, the deeper topics always stayed locked behind those blue eyes.
                </p>
                <p>
                  Today the lock looked welded shut.
                </p>
                <p>
                  “Gotcha.” She didn’t push, though part of her wanted to. Something in his stance, in the way he carried himself, felt different today. But if Luke wasn’t offering, prying wouldn’t get her far.
                </p>
                <p>
                  “Well, I was about to call it quits anyway.” She lifted her bag from the rock. “The concierge at the resort told me about a place to get a good steak. Wanna join me later?”
                </p>
                <p>
                  He wanted to say yes. God, he liked the idea of spending time with her, but not today. Not when everything in him felt tight and wrong. Her invitation hit someplace he didn’t have the bandwidth to examine. The words stuck somewhere between his chest and throat.
                </p>
                <p>
                  “Thanks, but I can’t.”
                </p>
                <p>
                  Abby nodded, masking the small pang of disappointment. “Okay, then. Enjoy the rest of your stay.”
                </p>
                <p>
                  She smiled, though it felt strange. She considered Luke a friend, someone she’d always felt safe with. But today he seemed even more guarded than usual, like he’d pulled back further than usual, further than she’d ever seen. Like she’d accidentally stumbled across something raw beneath his armor.
                </p>
                <p>
                  “I guess I’ll see you back at the shore,” she added.
                </p>
                <p>
                  He only nodded, the silence pressing heavy between them.
                </p>
                <p>
                  Luke came back every year. To the same place, on the same day. The only exceptions were when he was on deployment, and even then, he’d stopped and remembered. He carried the weight with him no matter where he was.
                </p>
                <p>
                  Because some things you don’t forget. Some things won’t let you.
                </p>
                <p>
                  And now Abby had stumbled straight into it.
                </p>
                <p>
                  The breeze cut colder as she reached her car, and she tugged her towel tighter around her waist. By the time Abby pulled away, Luke still hadn’t returned to the pullout.
                </p>
                <p>
                  He was still standing in the trees, breathing through whatever this day always cost him, until her license plate forced him back into the present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
