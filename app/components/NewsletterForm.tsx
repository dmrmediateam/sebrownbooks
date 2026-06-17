'use client'

import { FormEvent, useState } from 'react'
import styles from './Footer.module.css'

const KIT_FORM_URL = 'https://app.kit.com/forms/9554133/subscriptions'
const SUCCESS_MESSAGE = "You're in! Check your inbox to confirm your subscription."

export default function NewsletterForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData()
    formData.append('fields[first_name]', firstName.trim())
    formData.append('email_address', email.trim())

    try {
      const response = await fetch(KIT_FORM_URL, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      setStatus('success')
      setFirstName('')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.newsletter}>
        <p className={styles.newsletterSuccess} role="status">
          {SUCCESS_MESSAGE}
        </p>
      </div>
    )
  }

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.newsletterTitle}>Stay in the loop</h2>
      <p className={styles.newsletterText}>
        Be the first to know about new releases, cover reveals, and an honest look at the indie
        author life.
      </p>
      <form className={styles.newsletterForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.newsletterFields}>
          <label className={styles.newsletterLabel}>
            <span className={styles.srOnly}>First Name</span>
            <input
              type="text"
              name="fields[first_name]"
              placeholder="First Name"
              required
              autoComplete="given-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className={styles.newsletterInput}
              disabled={status === 'loading'}
            />
          </label>
          <label className={styles.newsletterLabel}>
            <span className={styles.srOnly}>Email Address</span>
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.newsletterInput}
              disabled={status === 'loading'}
            />
          </label>
        </div>
        <button
          type="submit"
          className={styles.newsletterButton}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting…' : 'Count me in!'}
        </button>
        {status === 'error' && (
          <p className={styles.newsletterError} role="alert">
            {errorMessage}
          </p>
        )}
      </form>
      <p className={styles.newsletterDisclaimer}>
        We respect your privacy. Unsubscribe at anytime.
      </p>
    </div>
  )
}
