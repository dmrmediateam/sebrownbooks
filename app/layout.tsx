import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'SE Brown Books',
  description: 'SE Brown Books - Author Website',
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
    <html lang="en">
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

