import { useState } from 'react'
import { spaces } from '../../data/spaces'
import { useReservation } from '../../context/ReservationContext'
import useOverlay from '../../hooks/useOverlay'
import './ReservationModal.css'

// Global reservation / enquiry dialog, opened from any "Reserve" or "Enquire" CTA.
export default function ReservationModal() {
  const { isOpen, close } = useReservation()
  const [sent, setSent] = useState(false)
  useOverlay(isOpen, close)

  const onClose = () => {
    close()
    setSent(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to a backend / email service here.
    setSent(true)
  }

  return (
    <div
      className={`res-modal${isOpen ? ' is-open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div className="res-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="res-title">
        <button type="button" className="res-modal__close" onClick={onClose} aria-label="Close reservation form">
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        <img className="res-modal__logo" src="/img/logo.png" alt="" width="232" height="90" />
        <h2 id="res-title" className="res-modal__title">
          {sent ? 'Thank you' : 'Make Your Reservation'}
        </h2>
        <p className="res-modal__intro">
          {sent
            ? "We've received your request and our team will be in touch shortly to confirm."
            : "Reserve a table or tell us what you're planning, and we'll help you find the right space for your occasion."}
        </p>

        {sent ? (
          <button type="button" className="btn btn--gold" onClick={onClose}>
            Close
          </button>
        ) : (
          <form className="res-form" onSubmit={onSubmit}>
            <label>
              <span>Your name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" name="phone" required autoComplete="tel" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              <span>Space</span>
              <select name="space" defaultValue="" required>
                <option value="" disabled>
                  Select a space
                </option>
                {spaces.map((space) => (
                  <option key={space.slug} value={space.slug}>
                    {space.label}
                  </option>
                ))}
                <option value="event">Event / private occasion</option>
              </select>
            </label>
            <label>
              <span>Date</span>
              <input type="date" name="date" required />
            </label>
            <label>
              <span>Guests</span>
              <input type="number" name="guests" min="1" required />
            </label>
            <label className="res-form__full">
              <span>Special requests</span>
              <textarea name="remarks" rows="3" />
            </label>
            <div className="res-form__full res-form__submit">
              <button type="submit" className="btn btn--gold">
                Send Request <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
