import CtaLinks from '../common/CtaLinks'

// Two-column intro used on space detail pages: story copy + image, with the
// space's CTAs (menu, reservation, contact). MAY's Table also shows its menu QR.
export default function SpaceIntro({ space }) {
  const ctas = [
    space.menuUrl && { label: 'View Menu', href: space.menuUrl },
    space.reservable && { label: 'Reserve A Table', reserve: true },
    space.contactCta && { label: space.contactCta, href: '#contact' },
  ].filter(Boolean)

  return (
    <div className="table_wrapper">
      <div className="table_container">
        <div className="table_inner">
          <div className="table_banner_left">
            <div className="table-banner-details">
              <div className="table-banner-header">
                <h1 className="cmn-header">{space.name}</h1>
              </div>
              <div className="table-banner-sub">
                <h2 className="cmn-sub-title">{space.heading}</h2>
              </div>
              <div className="cc-description">
                {space.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="table-link">
                <CtaLinks ctas={ctas} />
                {space.menuUrl && (
                  <div className="qr-link">
                    <span>Scan and download menu here</span>
                    <img src="/img/qr.png" alt="Menu QR code" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="table_banner_right">
            <div className="table-bg">
              <img src={space.image} alt={space.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
