import { NavLink } from 'react-router-dom'
import { brands } from '../../data/spaces'
import { navLinks } from '../../data/navigation'
import { site } from '../../data/site'
import useOverlay from '../../hooks/useOverlay'
import SpaceTile from '../ui/SpaceTile'
import BrandLink from '../ui/BrandLink'
import SocialLinks from '../ui/SocialLinks'
import './BrandMenu.css'

const menuSpace = brands.find((s) => s.menuQr)

// Full-screen frosted overlay opened by the hamburger: the brand tiles,
// page links (for smaller screens), the menu QR and visit details.
export default function BrandMenu({ open, onClose }) {
  useOverlay(open, onClose)

  return (
    <div id="brand-menu" className={`brand-menu${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="brand-menu__inner container">
        <div className="brand-menu__head">
          <span className="eyebrow">Our Experiences</span>
          <p className="brand-menu__title">Five experiences. One destination.</p>
        </div>

        <ul className="brand-menu__grid">
          {brands.map((space, i) => (
            <li key={space.slug} style={{ '--i': i }}>
              <BrandLink brand={space} className="brand-card">
                <span className="brand-card__tile">
                  <SpaceTile space={space} />
                </span>
                <span className="brand-card__meta">
                  <span className="brand-card__num">{space.number}</span>
                  <span className="brand-card__name">{space.name}</span>
                  <span className="brand-card__kind">
                    {space.kind}
                    {space.slug !== 'mays-table' && space.instagram && (
                      <i className="fa-brands fa-instagram brand-card__ig" aria-hidden="true" />
                    )}
                  </span>
                </span>
              </BrandLink>
            </li>
          ))}
        </ul>

        <div className="brand-menu__foot">
          <nav className="brand-menu__links" aria-label="Pages">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {menuSpace && (
            <a className="brand-menu__qr glass" href={menuSpace.menuUrl} target="_blank" rel="noreferrer">
              <img src={menuSpace.menuQr} alt={`${menuSpace.name} menu QR code`} />
              <span>
                <strong>Download our menu</strong>
                Scan for the {menuSpace.label} menu
              </span>
            </a>
          )}

          <div className="brand-menu__visit">
            <p>{site.contact.address.slice(0, 3).join(', ')}</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
