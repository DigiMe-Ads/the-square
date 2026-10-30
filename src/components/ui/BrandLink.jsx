import { Link } from 'react-router-dom'
import { brandLink } from '../../data/spaces'

// Link for a brand item: its Instagram (new tab), or its page on this site
// when the brand has no Instagram.
export default function BrandLink({ brand, className, children, ...rest }) {
  const { to, href } = brandLink(brand)

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" aria-label={`${brand.label} on Instagram`} {...rest}>
      {children}
    </a>
  )
}
