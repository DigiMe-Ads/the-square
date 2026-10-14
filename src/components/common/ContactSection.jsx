import { site } from '../../data/site'

// Reused across every page: intro copy, "Get in touch" details, map and form.
export default function ContactSection({
  id = 'contact',
  header = "We'd Love To Hear From You",
  sub = 'GET IN TOUCH',
  text = 'Whether you have a question, want to make a reservation or are planning an event, our team is here to help.',
  mapSrc = site.map,
}) {
  const onSubmit = (e) => e.preventDefault()
  const { phone, email, hours, address } = site.contact

  return (
    <div className="contact-wrapper" id={id}>
      <div className="contact-container">
        <div className="contact-inner">
          <div className="contact-top">
            <div className="contact-banner-header">
              <h1 className="cmn-header">{header}</h1>
            </div>
            <div className="contact-banner-sub">
              <h2 className="cmn-sub-title">{sub}</h2>
            </div>
            <div className="contact-banner-text">
              <p className="cmn-text">{text}</p>
            </div>
            <div className="contact-banner-text contact-details-block">
              <p className="cmn-text">
                <strong>{site.name.toUpperCase()}</strong>
                {address.map((line) => (
                  <span key={line} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </p>
              {phone && (
                <p className="cmn-text">
                  <strong>PHONE</strong> <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </p>
              )}
              {email && (
                <p className="cmn-text">
                  <strong>EMAIL</strong> <a href={`mailto:${email}`}>{email}</a>
                </p>
              )}
              {hours && (
                <p className="cmn-text">
                  <strong>OPENING HOURS</strong> {hours}
                </p>
              )}
            </div>
          </div>
          <div className="contact-bottom">
            <div className="contact-map">
              <iframe
                title="The Square location"
                src={mapSrc}
                width="100%"
                height="900"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-form-wrapper">
              <div className="contact-form">
                <h1>Let's Talk</h1>
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <input type="text" placeholder="First Name" name="firstname" />
                    <input type="text" placeholder="Last Name" name="lastname" />
                  </div>
                  <div className="form-row">
                    <input type="email" placeholder="Email Address" name="email" />
                    <input type="tel" placeholder="Phone Number" name="phone" />
                  </div>
                  <div className="form-row">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                  <div className="form-row">
                    <textarea placeholder="Message" name="message"></textarea>
                  </div>
                  <div className="submit-row">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
