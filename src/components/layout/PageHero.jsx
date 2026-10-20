import { Link } from 'react-router-dom'
import './PageHero.css'
import './PageHeroPortrait.css'

// Full-bleed banner for inner pages: slow zoom-in image, breadcrumb trail,
// title, italic subtitle and optional intro line + children (e.g. CTAs).
// `crumbs` is [{ label, to }] — the last item is the current page.
// `portrait` shows a tall photo as a framed panel beside the copy instead of
// stretching it full-width (keeps small portrait photos sharp).
export default function PageHero({ image, portrait, title, subtitle, text, crumbs = [], size = 'md', children }) {
  return (
    <section className={`page-hero page-hero--${size}${portrait ? ' page-hero--portrait' : ''}`}>
      {image && (
        <div className="page-hero__media" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      )}
      <div className="page-hero__shade" aria-hidden="true" />
      {portrait && (
        <div className="page-hero__portrait container" aria-hidden="true">
          <img src={portrait} alt="" />
        </div>
      )}

      <div className="page-hero__content container">
        {crumbs.length > 0 && (
          <nav className="page-hero__crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, i) =>
              i < crumbs.length - 1 ? (
                <span key={crumb.label}>
                  <Link to={crumb.to}>{crumb.label}</Link>
                  <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                </span>
              ) : (
                <span key={crumb.label} aria-current="page">
                  {crumb.label}
                </span>
              ),
            )}
          </nav>
        )}
        <h1 className="display page-hero__title">{title}</h1>
        {subtitle && <p className="subtitle page-hero__subtitle">{subtitle}</p>}
        {text && <p className="lead page-hero__text">{text}</p>}
        {children}
      </div>
    </section>
  )
}
