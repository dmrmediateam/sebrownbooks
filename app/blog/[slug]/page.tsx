import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

// Blog posts data (will be replaced with Sanity CMS later)
const blogPosts: { [key: string]: any } = {
  'top-5-small-town-romance-books': {
    title: 'Top 5 Small Town Romance Books You Need to Read',
    date: '2024-11-30',
    category: 'Book Recommendations',
    content: `
      <p>There's something magical about small town romance novels. The close-knit communities, the charming settings, and the way love seems to bloom in the most unexpected places. If you're looking for your next great read, here are five small town romance books that will sweep you off your feet.</p>

      <h2>1. The Shore by S.E. Brown</h2>
      <p>Set against the stunning backdrop of the Outer Banks, <em>The Shore</em> tells the story of Ryan Blake and Cody Calloway. Ryan comes to the Carolina coast seeking peace after years of running from her past, but when she breaks down on the side of the road, it's Cody—the boy she once knew, now a man she can't forget—who shows up.</p>
      <p>This is a beautiful second chance romance that explores grief, healing, and the power of love to transform. The small coastal town setting adds layers of warmth and community that make this story unforgettable. With its emotional depth and compelling characters, <em>The Shore</em> is a must-read for anyone who loves small town romance with heart.</p>
      <p><strong>Why it's perfect for small town romance lovers:</strong> The Outer Banks setting creates an intimate, close-knit community feel where everyone knows everyone, and the bonds of friendship and family run deep.</p>

      <h2>2. For You by S.E. Brown</h2>
      <p>In the second book of The Shore Series, we meet Madison Quinn and Declan Healy. Madison doesn't do vulnerable—her quick wit and string of one-night stands have kept her heart safe. But when Declan walks into her life with his steady hands and quiet strength, he sees through every wall she's built.</p>
      <p>This friends-to-lovers romance set in the same charming coastal town explores themes of trust, healing, and finding the courage to love again. The small town setting means that Madison can't outrun her past, and the community becomes both a challenge and a source of support as she learns to open her heart.</p>
      <p><strong>Why it's perfect for small town romance lovers:</strong> The interconnected community ties all the characters together, creating that perfect small town feel where relationships matter and everyone has a story.</p>

      <h2>3. It Happened One Summer by Tessa Bailey</h2>
      <p>When socialite Piper Bellinger is cut off by her stepfather, she's sent to a small fishing town in Washington to learn responsibility. There, she meets Brendan, a gruff sea captain who's everything she's not. This opposites-attract romance is filled with humor, heart, and the kind of small town charm that makes you want to pack your bags and move there.</p>
      <p>The small coastal town of Westport is a character in itself, with its quirky residents and tight-knit fishing community. Bailey perfectly captures the way small towns can both embrace and challenge newcomers, making this a delightful read.</p>
      <p><strong>Why it's perfect for small town romance lovers:</strong> The town's fishing community creates a unique, authentic small town atmosphere where traditions matter and everyone looks out for each other.</p>

      <h2>4. The Simple Wild by K.A. Tucker</h2>
      <p>When city girl Calla Fletcher travels to Alaska to reconnect with her estranged father, she finds herself in a remote small town where life moves at a different pace. There, she meets Jonah, a gruff pilot who challenges everything she thought she knew about herself and what she wants from life.</p>
      <p>This book beautifully captures the isolation and intimacy of small town life in Alaska, where the community is small but the bonds are strong. The setting is almost a character itself, with the wild Alaskan landscape playing a crucial role in the story.</p>
      <p><strong>Why it's perfect for small town romance lovers:</strong> The remote Alaskan setting creates an extreme version of small town life where community is everything and everyone knows everyone's business.</p>

      <h2>5. Virgin River by Robyn Carr</h2>
      <p>The first book in Robyn Carr's beloved Virgin River series introduces us to Melinda Monroe, a nurse practitioner who moves to the small mountain town of Virgin River to start over. There, she meets Jack Sheridan, a former Marine who runs the local bar.</p>
      <p>This classic small town romance is the perfect example of how a small community can heal and support its members. The town of Virgin River is so well-drawn that readers return book after book to visit with the characters they've come to love.</p>
      <p><strong>Why it's perfect for small town romance lovers:</strong> This is the quintessential small town romance, with a community that feels like family and a setting that becomes home to both the characters and the readers.</p>

      <h2>What Makes Small Town Romance So Special?</h2>
      <p>Small town romance novels offer something unique: a sense of community, belonging, and the idea that in a small place, love stories are witnessed and supported by everyone around. These books remind us that sometimes the best love stories happen in the places where everyone knows your name.</p>
      <p>Whether you're drawn to coastal towns, mountain communities, or remote Alaskan villages, there's a small town romance out there waiting to capture your heart. Each of these books offers a different take on small town life, but they all share that essential ingredient: a community that becomes part of the love story itself.</p>

      <h2>Start Your Small Town Romance Journey</h2>
      <p>If you're new to small town romance, I'd recommend starting with <em>The Shore</em> or <em>For You</em> from The Shore Series. These books perfectly capture the essence of small town romance while telling deeply emotional, character-driven stories that will stay with you long after you've turned the last page.</p>
      <p>Happy reading, and may you find your own small town love story between these pages!</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <time className={styles.date} dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </header>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Love Small Town Romance?</h2>
            <p className={styles.ctaText}>
              Check out The Shore Series, where love finds its way home on the Carolina coast.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/books" className={styles.ctaButton}>
                View All Books
              </Link>
              <Link href="/" className={styles.ctaButtonSecondary}>
                Visit Home
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

