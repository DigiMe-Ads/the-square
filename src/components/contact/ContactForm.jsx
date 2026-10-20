import { useState } from 'react'

const FIELDS = [
  { name: 'firstname', label: 'First Name', type: 'text', autoComplete: 'given-name', required: true },
  { name: 'lastname', label: 'Last Name', type: 'text', autoComplete: 'family-name' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
  { name: 'subject', label: 'Subject', type: 'text', full: true },
]

// "Let's talk" form. No backend yet — shows a confirmation on submit.
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to a backend / email service here.
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h3 className="contact-form__title">Let&apos;s talk</h3>
      <div className="contact-form__grid">
        {FIELDS.map((field) => (
          <label key={field.name} className={field.full ? 'is-full' : ''}>
            <span>{field.label}</span>
            <input name={field.name} type={field.type} autoComplete={field.autoComplete} required={field.required} />
          </label>
        ))}
        <label className="is-full">
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>
      </div>
      <div className="contact-form__foot">
        <button type="submit" className="btn btn--gold">
          Send Message <i className="fa-solid fa-paper-plane" aria-hidden="true" />
        </button>
        {sent && (
          <p className="contact-form__ok" role="status">
            Thank you — we&apos;ll be in touch soon.
          </p>
        )}
      </div>
    </form>
  )
}
