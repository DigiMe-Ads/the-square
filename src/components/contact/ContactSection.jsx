import { site } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import './ContactSection.css'

// "Get in touch": visit details + map on the left, "Let's talk" form on the right.
export default function ContactSection({
  id = 'contact',
  tone = 'light',
  eyebrow = 'Get in touch',
  title = "We'd love to hear from you.",
  text = 'Whether you have a question, want to make a reservation or are planning an event, our team is here to help.',
  showHeading = true,
}) {
  return (
    <section id={id} className={`section contact tone-${tone}`}>
      <div className="container">
        {showHeading && (
          <SectionHeading eyebrow={eyebrow} title={title} text={text} className="section-heading--spaced" />
        )}

        <div className="contact__grid">
          <div className="contact__info">
            <ContactDetails />
            <Reveal variant="zoom" delay={120} className="contact__map">
              <iframe
                title="The Square on Google Maps"
                src={site.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
          <Reveal variant="right" delay={160}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
