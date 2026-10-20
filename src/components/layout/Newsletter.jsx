import { useState } from 'react'
import './Newsletter.css'

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

// Footer email sign-up. No backend yet — validates and confirms locally.
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isEmail(email)) {
      setStatus({ ok: false, text: 'Please enter a valid email address.' })
      return
    }
    setStatus({ ok: true, text: 'Thank you for subscribing!' })
    setEmail('')
  }

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <div className="newsletter__field">
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" aria-label="Subscribe">
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </button>
      </div>
      {status && (
        <p className={`newsletter__msg ${status.ok ? 'is-ok' : 'is-error'}`} role="status">
          {status.text}
        </p>
      )}
    </form>
  )
}
