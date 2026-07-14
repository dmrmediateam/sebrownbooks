import { NextResponse } from 'next/server'
import { sendContactFormEmail, type ContactFormData } from '@/lib/email'

/**
 * Contact Form API Route
 * Handles form submissions from ContactForm component via Twilio SendGrid
 */
export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const sanitizedData: ContactFormData = {
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone?.trim().substring(0, 20) || '',
      message: body.message.trim().substring(0, 5000),
    }

    await sendContactFormEmail(sanitizedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}
