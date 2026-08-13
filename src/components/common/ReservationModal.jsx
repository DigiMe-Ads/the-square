import { useEffect } from 'react'
import { spaces } from '../../data/spaces'
import { useReservation } from '../../context/ReservationContext'

export default function ReservationModal() {
  const { isOpen, close } = useReservation()

  // Lock body scroll while the modal is open + allow Esc to close.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to a backend/email service here. For now just close the modal.
    close()
  }

  return (
    <div
      className="reservation-modal"
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="close-wrapper">
        <div
          className="reservation-close"
          style={{ backgroundImage: "url('/img/close.png')", backgroundSize: '30px' }}
          onClick={close}
          role="button"
          aria-label="Close reservation form"
        ></div>
      </div>

      <div className="reservation-wrapper">
        <div className="res-logo">
          <img src="/img/logo.png" alt="The Square" />
        </div>
        <div className="reservation-container">
          <div className="reservation-title">
            <h1>MAKE YOUR RESERVATION</h1>
          </div>
          <div className="reservation-description">
            <p>
              ea neque cupiditate autem ab exercitationem voluptatem molestias! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Fugit repellat,
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="reservation-row">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Phone No" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="reservation-row">
              <select defaultValue="">
                <option value="" disabled>
                  Select the Space
                </option>
                {spaces.map((space) => (
                  <option key={space.slug} value={space.slug}>
                    {space.name}
                  </option>
                ))}
              </select>
              <input type="date" placeholder="Date" />
              <input type="number" placeholder="No of People" />
            </div>
            <div className="reservation-row">
              <textarea
                rows="4"
                cols="50"
                placeholder="Special Remark"
                style={{ width: '100%', margin: '5px', padding: '15px' }}
              ></textarea>
            </div>
            <div className="reservation-submit-row">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
