import { Link } from 'react-router-dom'
import BrandLink from '../ui/BrandLink'
import { footerLinks } from '../../data/navigation'
import { brands } from '../../data/spaces'
import { site } from '../../data/site'
import SocialLinks from '../ui/SocialLinks'
import Newsletter from './Newsletter'
import './Footer.css'

export default function Footer() {
  const { phone, email, hours, address } = site.contact

  return (
    <footer className="footer tone-deep">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" aria-label="The Square — home">
              <img src="/img/logo.png" alt="The Square" width="232" height="90" />
            </Link>
            <p className="footer__tagline">{site.tagline}</p>
            <p className="footer__desc">{site.description}</p>
            <SocialLinks />
          </div>

          <div className="footer__col">
            <h3>Quick Links</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Experiences</h3>
            <ul>
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <BrandLink brand={brand}>{brand.label}</BrandLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Visit</h3>
            <address>
              {address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            {phone && <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>}
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {hours && <p>{hours}</p>}
          </div>

          <div className="footer__col footer__col--news">
            <h3>Stay in The Square</h3>
            <p>Get the freshest news on events, flavours and what&apos;s on.</p>
            <Newsletter />
          </div>
        </div>

        <div className="footer__bottom">
          <p>{site.copyright}</p>
          <button type="button" className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <i className="fa-solid fa-arrow-up" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
