import { site } from '../../data/site'

// Reused across Home / About / Blog / Events / MaysTable.
export default function ContactSection({
  id = 'contact',
  header = 'Contact Us',
  sub = 'SUB HEADING IN HERE - CONTACT',
  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat, maxime deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo nesciunt ipsa',
  mapSrc = site.map.default,
}) {
  const onSubmit = (e) => e.preventDefault()

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
            <div className="contact-banner-link">
              <a href="#contact" className="cmn-link">
                Explore
              </a>
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
                <h1>Contact Us</h1>
                <h3>
                  adipisicing elit. Fugit repellat, maxime deleniti ad aspernatur quasi voluptates,
                  quia placeat consectetur
                </h3>
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <input type="text" placeholder="First Name" name="firstname" />
                    <input type="text" placeholder="Last Name" name="lastname" />
                  </div>
                  <div className="form-row">
                    <input type="email" placeholder="Email" name="email" />
                    <input type="tel" placeholder="Phone" name="phone" />
                  </div>
                  <div className="form-row">
                    <textarea placeholder="Message" name="message"></textarea>
                  </div>
                  <div className="submit-row">
                    <button type="submit">Submit</button>
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
