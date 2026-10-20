import { useCallback, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { useReservation } from '../../context/ReservationContext'
import useScrolled from '../../hooks/useScrolled'
import SocialLinks from '../ui/SocialLinks'
import MenuToggle from './MenuToggle'
import BrandMenu from './BrandMenu'
import './Navbar.css'

// Floating glass navbar: page links left, logo centred, socials + Reserve +
// the brands menu (hamburger) on the right.
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastPath, setLastPath] = useState(null)
  const scrolled = useScrolled(40)
  const { open: openReservation } = useReservation()
  const { pathname } = useLocation()
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close the menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname)
    if (menuOpen) setMenuOpen(false)
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${menuOpen ? ' nav--open' : ''}`}>
      <div className="nav__bar glass">
        <nav className="nav__links" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav__link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="nav__logo" aria-label="The Square — home">
          <img src="/img/logo.png" alt="The Square" width="232" height="90" />
        </Link>

        <div className="nav__actions">
          <SocialLinks className="nav__social" />
          <button type="button" className="btn btn--gold btn--sm nav__reserve" onClick={openReservation}>
            Reserve
          </button>
          <MenuToggle open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </div>

      <BrandMenu open={menuOpen} onClose={closeMenu} />
    </header>
  )
}
