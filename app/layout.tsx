import type { Metadata } from 'next'
import Script from 'next/script'
import { Lora, Source_Sans_3 } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

config.autoAddCss = false

const lora = Lora({
  subsets: ['latin'],
  weight: ['600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SE Brown Books',
  description: 'SE Brown Books - Author Website',
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'S.E. Brown' }],
  publisher: 'S.E. Brown Books',
  icons: {
    icon: '/favicon.png',
  },
}

const GA_MEASUREMENT_ID = 'G-753SVKMVB1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dgv7koi.css" />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

