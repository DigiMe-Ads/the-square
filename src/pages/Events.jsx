import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import TextSection from '../components/common/TextSection'
import ContactSection from '../components/common/ContactSection'
import { occasions } from '../data/events'
import { useReservation } from '../context/ReservationContext'

export default function Events() {
  const { open: openReservation } = useReservation()

  return (
    <Layout footerBg>
      <PageBanner
        title="EVENTS"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Events', to: '/events' },
        ]}
      />

      <TextSection
        image="/img/spacse-banner.png"
        imageAlt="Dining room at The Square"
        header="Make Your Next Occasion Memorable"
        sub="YOUR EVENT. YOUR PEOPLE. YOUR SPACE."
        paragraphs={[
          'The Square offers a distinctive setting for gatherings, celebrations, meetings and special occasions in the heart of Colombo.',
        ]}
      />

      <div className="event-wrapper">
        <div className="event-container">
          <div className="event-inner">
            <div className="event-container-bottom">
              <div className="event-bottom-container">
                {occasions.map((occasion) => (
                  <div className="event-bottom-row" key={occasion.id}>
                    <div className="event-bottom-column">
                      <div
                        className="event-bottom-image"
                        style={{ backgroundImage: `url('${occasion.image}')` }}
                      ></div>
                    </div>
                    <div className="event-bottom-column">
                      <div className="event-bottom-content">
                        <div className="event-bottom-title">{occasion.title}</div>
                        <div className="event-bottom-description cmn-text">
                          {occasion.description}
                        </div>
                        <button className="event-bottom-button" onClick={openReservation}>
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TextSection
        tone="gold"
        image="/img/blog3.png"
        imageAlt="Table set for a private dinner"
        header="Let's Create Something Memorable"
        paragraphs={[
          'Tell us about your event and our team will help you find the right space and experience.',
        ]}
        ctas={[{ label: 'Send An Enquiry', reserve: true }]}
      />

      <ContactSection />
    </Layout>
  )
}
