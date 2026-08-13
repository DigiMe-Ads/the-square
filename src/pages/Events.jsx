import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactSection from '../components/common/ContactSection'
import { events } from '../data/events'

export default function Events() {
  return (
    <Layout footerBg>
      <PageBanner
        title="OUR EVENTS"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Events', to: '/events' },
        ]}
      />

      <div className="event-wrapper">
        <div className="event-container">
          <div className="event-inner">
            <div className="event-container-top">
              <div className="event-container-img">
                <img src="/img/logo.png" alt="The Square" />
              </div>
              <div className="event-container-description cmn-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat, maxime
                  deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo nesciunt
                  ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat,
                  maxime deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo
                  nesciunt ipsa Fugit repellat, maxime deleniti ad aspernatur quasi voluptates, quia
                  placeat consectetur
                </p>
              </div>
              <div className="event-container-contact">
                <div className="event-container-email">
                  <div className="event-container-conatct-img">
                    <img src="/img/email.png" alt="Email" />
                  </div>
                  <a href="mailto:contact@thesqure.com" className="cmn-link">
                    contact@thesqure.com
                  </a>
                </div>
                <div className="event-container-mobile">
                  <div className="event-container-conatct-img">
                    <img src="/img/phone.png" alt="Phone" />
                  </div>
                  <a href="tel:+94123456789" className="cmn-link">
                    +94 123 456 789
                  </a>
                </div>
              </div>
            </div>
            <div className="event-container-bottom">
              <div className="event-bottom-container">
                {events.map((event) => (
                  <div className="event-bottom-row" key={event.id}>
                    <div className="event-bottom-column">
                      <div
                        className="event-bottom-image"
                        style={{ backgroundImage: `url('${event.image}')` }}
                      ></div>
                    </div>
                    <div className="event-bottom-column">
                      <div className="event-bottom-content">
                        <div className="event-bottom-date">{event.date}</div>
                        <div className="event-bottom-title">{event.title}</div>
                        <div className="event-bottom-description cmn-text">{event.description}</div>
                        <button className="event-bottom-button">Read More</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection header="Creating Heading in Here" sub="SUB HEADING IN HERE - OUR EVENTS" />
    </Layout>
  )
}
