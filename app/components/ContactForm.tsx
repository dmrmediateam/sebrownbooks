'use client'

import { FormEvent, useRef, useState, type ChangeEvent } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setSubmitMessage('')
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (form && !form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to send message')

      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={styles.successPanel} role="status">
        <h2 className={styles.successTitle}>Thank you.</h2>
        <p className={styles.successText}>
          Your message is on its way. I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          className={styles.submitButton}
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className={styles.form}
      noValidate
    >
      <label className={styles.label} htmlFor="contact-name">
        Your name *
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={styles.input}
          disabled={isSubmitting}
        />
      </label>

      <label className={styles.label} htmlFor="contact-email">
        Email address *
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className={styles.input}
          disabled={isSubmitting}
        />
      </label>

      <label className={styles.label} htmlFor="contact-phone">
        Phone number
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 555-0123"
          className={styles.input}
          disabled={isSubmitting}
        />
      </label>

      <label className={styles.label} htmlFor="contact-message">
        Your message *
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className={styles.textarea}
          disabled={isSubmitting}
        />
      </label>

      {submitMessage ? (
        <p role="alert" className={styles.error}>
          {submitMessage}
        </p>
      ) : null}

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>

      <p className={styles.disclaimer}>I&apos;ll reply as soon as I can. No spam, ever.</p>
    </form>
  )
}
