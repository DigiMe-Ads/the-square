import { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerLinks, footerSpaceLinks } from '../../data/navigation'
import { site } from '../../data/site'

// `showBg` renders the decorative background image used on inner pages.
export default function Footer({ showBg = false }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase())

  const subscribe = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setMessage({ text: 'Please enter a valid email address.', color: 'red' })
      return
    }
    setMessage({ text: 'Thank you for subscribing!', color: 'green' })
    setEmail('')
  }

  return (
    <div className="footer-wrapper cmn-wrapper">
      {showBg && (
        <div className="footer-bg-wrapper">
          <img src="/img/creative_baner.png" alt="" />
        </div>
      )}
      <div className="footer-container-wrapper">
        <div className="footer-container cmn-container">
          <div className="footer-inner">
            <div className="footer-left">
              <div className="footer-left-details">
                <div className="footer-left-img">
                  <img src="/img/logo.png" alt="The Square" />
                </div>
                <div className="footer-left-description">
                  <p className="cmn-text">
                    <strong>{site.tagline}</strong>
                    <br />
                    {site.description}
                  </p>
                </div>
                <div className="footer-left-social">
                  <a href={site.social.facebook} className="icon-link" target="_blank" rel="noreferrer">
                    <img className="social-f" src="/img/social.png" alt="Facebook" />
                  </a>
                  <a href={site.social.instagram} className="icon-link" target="_blank" rel="noreferrer">
                    <img className="social-i" src="/img/instagram.png" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-right-container">
                <div className="footer-right-top">
                  <div className="footer-right-menus">
                    {footerLinks.map((link) => (
                      <div className="footer-right-menu" key={link.label}>
                        <Link to={link.to}>{link.label}</Link>
                      </div>
                    ))}
                  </div>
                  <div className="footer-right-menus footer-space-menus">
                    {footerSpaceLinks.map((link) => (
                      <div className="footer-right-menu" key={link.label}>
                        <Link to={link.to}>{link.label}</Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="footer-right-bottom">
                  <div className="footer-right-bottom-left">
                    <div className="contact-details">
                      {site.contact.phone && (
                        <div className="contact-number">
                          <img src="/img/phone.png" alt="Phone" />
                          <div className="contact-number-text">
                            <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>{site.contact.phone}</a>
                          </div>
                        </div>
                      )}
                      {site.contact.email && (
                        <div className="contact-emails">
                          <img src="/img/mail.png" alt="Email" />
                          <div className="contact-emails-text">
                            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                          </div>
                        </div>
                      )}
                      <div className="contact-address">
                        <img src="/img/location.png" alt="Address" />
                        <div className="contact-address-text">
                          <p>
                            {site.contact.address.map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < site.contact.address.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-right-bottom-right">
                    <div className="footer-right-bottom-right-text">
                      <p>Get the freshest news</p>
                    </div>
                    <div className="footer-right-bottom-right-input">
                      <form className="subscription-form" onSubmit={subscribe}>
                        <input
                          type="email"
                          placeholder="Enter your email here"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe</button>
                        {message && (
                          <div className="message" style={{ color: message.color }}>
                            {message.text}
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-line"></div>
            <div className="footer-bottom-text">
              <p>{site.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
