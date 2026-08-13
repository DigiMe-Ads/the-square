import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { dropdownSpaces, dropdownLinks } from '../../data/navigation'
import { site } from '../../data/site'
import { useReservation } from '../../context/ReservationContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [qrVisible, setQrVisible] = useState(false)
  const { open: openReservation } = useReservation()
  const location = useLocation()

  // Recreate the original scroll-color effect (navbar turns solid past 50px).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the dropdown whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="navbar-wrapper">
      <div id="navbar" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'navcolor' : ''}`}>
        <nav className="navbar">
          <div className="navbar-left">
            <a href={site.social.facebook} className="icon-link" target="_blank" rel="noreferrer">
              <img className="social-f" src="/img/social.png" alt="Facebook" />
            </a>
            <a href={site.social.instagram} className="icon-link" target="_blank" rel="noreferrer">
              <img className="social-i" src="/img/instagram.png" alt="Instagram" />
            </a>
            <button className="reserve-btn" onClick={openReservation}>
              RESERVE
            </button>
          </div>
          <div className="navbar-middle">
            <Link
              to="/"
              id="middle_logo"
              className={scrolled ? 'logo scrolled_logo' : 'logo'}
            >
              <img src="/img/logo.png" alt="The Square" />
            </Link>
          </div>
          <div className="navbar-right">
            <button
              className="hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <img className="hb_close" src="/img/close.png" alt="Close menu" />
              ) : (
                <img className="hb_menu" src="/img/menu.png" alt="Open menu" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`} id="dropdown-menu">
        <div className="dropdown-menu-container">
          <div className="dropdown-menu-inner">
            <div className="dropdown-menu-inner-items">
              <div className="dropdown-menu-inner-items-top">
                {dropdownSpaces.map((space) => (
                  <div className="dropdown-menu-inner-items-wrapper" key={space.to}>
                    <Link
                      to={space.to}
                      className="dropdown-menu-inner-items-menu water-effect"
                      onMouseEnter={() => setQrVisible(true)}
                      onMouseLeave={() => setQrVisible(false)}
                    >
                      <img src={space.img} alt={space.alt} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="dropdown-menu-inner-items-bottom bottom-nav">
                <div className="dropdown-menu-inner-items-bottom-details">
                  <ul className="menu-links">
                    {dropdownLinks.map((link) => (
                      <li className="menu-link" key={link.label}>
                        <Link to={link.to}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu_qr">
          <div className={`menu_qr_inner ${qrVisible ? 'show' : ''}`}>
            <span>Download Our Menu</span>
            <img src="/img/qr.png" alt="Menu QR code" />
          </div>
        </div>
      </div>
    </div>
  )
}
