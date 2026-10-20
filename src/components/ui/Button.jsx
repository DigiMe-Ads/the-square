import { Link } from 'react-router-dom'
import { useReservation } from '../../context/ReservationContext'

// One button for every call to action. Pass one of:
//   to      → internal route
//   href    → external / tel: / mailto: / #hash (external opens in a new tab)
//   reserve → opens the global reservation modal
//   onClick → plain button
// variant: 'gold' | 'outline' | 'link'
export default function Button({ to, href, reserve, onClick, variant = 'gold', size, icon = 'arrow-right', className = '', children }) {
  const { open: openReservation } = useReservation()
  const classes =
    variant === 'link'
      ? `text-link ${className}`
      : `btn btn--${variant}${size ? ` btn--${size}` : ''} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon && <i className={`fa-solid fa-${icon}`} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noreferrer' })}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={reserve ? openReservation : onClick}>
      {content}
    </button>
  )
}
