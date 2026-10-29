import { Link } from 'react-router-dom'
import { brandLink } from '../../data/spaces'

// Link for a brand menu item: its Instagram (new tab) or, for MAY's Table and
// brands without Instagram, its page on this site.
export default function BrandLink({ brand, className, children }) {
  const { to, href } = brandLink(brand)

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" aria-label={`${brand.label} on Instagram`}>
      {children}
    </a>
  )
}
