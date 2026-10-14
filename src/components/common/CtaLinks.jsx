import { Link } from 'react-router-dom'
import { useReservation } from '../../context/ReservationContext'

// Row of call-to-action links. Each cta is { label } plus one of:
// `to` (internal route), `href` (external / tel / mailto / #hash) or
// `reserve: true` (opens the global reservation modal).
export default function CtaLinks({ ctas = [], className = '' }) {
  const { open: openReservation } = useReservation()
  if (!ctas.length) return null

  return (
    <div className={`cta-row ${className}`}>
      {ctas.map((cta) => {
        if (cta.reserve) {
          return (
            <button key={cta.label} type="button" className="cmn-link cta-link" onClick={openReservation}>
              {cta.label}
            </button>
          )
        }
        if (cta.to) {
          return (
            <Link key={cta.label} to={cta.to} className="cmn-link cta-link">
              {cta.label}
            </Link>
          )
        }
        const external = /^https?:/.test(cta.href)
        return (
          <a
            key={cta.label}
            href={cta.href}
            className="cmn-link cta-link"
            {...(external && { target: '_blank', rel: 'noreferrer' })}
          >
            {cta.label}
          </a>
        )
      })}
    </div>
  )
}
