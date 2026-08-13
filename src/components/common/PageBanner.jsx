import { Link } from 'react-router-dom'

// Inner-page hero banner with title + breadcrumb trail.
// `crumbs` is an array of { label, to } (last item is the current page).
export default function PageBanner({ title, crumbs = [] }) {
  return (
    <div className="main-banner-wrapper main-banner-wrapper-spaces">
      <div className="main-banner-container banner_spaces">
        <div className="main-banner-inner">
          <div className="main-banner-details">
            <div className="main-banner-header">
              <h1 className="cmn-header">{title}</h1>
            </div>
            <div className="main-banner-link space-banner-link">
              {crumbs.map((crumb, i) => (
                <span key={crumb.label} style={{ display: 'contents' }}>
                  <Link to={crumb.to} className="cmn-link">
                    {crumb.label}
                  </Link>
                  {i < crumbs.length - 1 && (
                    <span className="main-banner-link-arrow">
                      <img className="grater-arrow" src="/img/grater.png" alt=">" />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
