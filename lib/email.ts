import sgMail from '@sendgrid/mail'

// Lazily set the API key — deferred until first use so build-time evaluation
// doesn't throw when the env var isn't present in the build environment.
function initSendGrid() {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is required for sending emails')
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return sgMail
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Send Contact Form Email via Twilio SendGrid
 */
export async function sendContactFormEmail(data: ContactFormData) {
  const { name, email, phone, message } = data
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone || 'Not provided')
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  const emailContent = {
    to: process.env.CONTACT_FORM_EMAIL || 'dxautomate@gmail.com',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'S.E. Brown Books',
    },
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a2a3a 0%, #2d4a5f 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .value { color: #111; font-size: 16px; }
            .message-box { background: #f9f9f9; padding: 20px; border-left: 4px solid #1a2a3a; margin-top: 20px; }
            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
            .divider { height: 1px; background: #e5e5e5; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p style="color: #666; margin-bottom: 30px;">You have received a new contact form submission from sebrownbooks.com.</p>

              <div class="field">
                <div class="label">Name</div>
                <div class="value">${safeName}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${safeEmail}" style="color: #1a2a3a; text-decoration: none;">${safeEmail}</a></div>
              </div>

              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${safePhone}</div>
              </div>

              <div class="divider"></div>

              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  ${safeMessage}
                </div>
              </div>

              <div class="divider"></div>

              <div class="field">
                <div class="label">Submitted</div>
                <div class="value">${new Date().toLocaleString('en-US', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on sebrownbooks.com</p>
              <p style="color: #1a2a3a; font-weight: 600;">Reply directly to this email to respond to ${safeName}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
    `,
  }

  try {
    await initSendGrid().send(emailContent)
    return { success: true }
  } catch (error: unknown) {
    const sgError = error as { response?: { body?: unknown } }
    console.error('SendGrid Error:', sgError.response?.body || error)
    throw new Error('Failed to send email')
  }
}
