import Link from 'next/link'
import styles from './page.module.css'

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>
          
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className={styles.content}>
            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Introduction</h2>
              <p>
                S.E. Brown (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the SE Brown Books website (the &quot;Service&quot;). 
                This page informs you of our policies regarding the collection, use, and disclosure of 
                personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p>
                We are committed to protecting your privacy and ensuring you have a positive experience 
                on our website. This Privacy Policy explains how we collect, use, and safeguard your 
                information when you visit our website.
              </p>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Information We Collect</h2>
              <p>
                We currently do not collect personal information directly through our website. However, 
                if you interact with our website, certain information may be automatically collected, including:
              </p>
              <ul className={styles.list}>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of visits</li>
              </ul>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>How We Use Information</h2>
              <p>
                Any information we collect is used solely for the following purposes:
              </p>
              <ul className={styles.list}>
                <li>To improve and maintain our website</li>
                <li>To analyze website usage and trends</li>
                <li>To ensure website security and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites, including Amazon.com for book purchases. 
                We are not responsible for the privacy practices or content of these external sites. We encourage 
                you to review the privacy policies of any third-party sites you visit.
              </p>
              <p>
                When you click on links to purchase books on Amazon, you will be directed to Amazon&apos;s website, 
                which has its own privacy policy. We do not have access to or control over information collected 
                by Amazon or other third-party services.
              </p>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small data files stored on your device that help us understand how you use our website.
              </p>
              <p>
                You can choose to disable cookies through your browser settings. However, this may affect the 
                functionality of our website.
              </p>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your data, we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Children&apos;s Privacy</h2>
              <p>
                Our Service is not intended for children under the age of 18. We do not knowingly collect 
                personal information from children. If you are a parent or guardian and believe your child 
                has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the 
                top of this policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this 
                Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className={styles.sectionContent}>
              <h2 className={styles.heading}>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our website 
                or by visiting our <Link href="/about" className={styles.inlineLink}>About</Link> page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
