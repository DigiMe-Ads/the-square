import { site } from '../../data/site'
import Reveal from '../ui/Reveal'

// Address / phone / email / hours list. Empty fields (not yet supplied by the
// client) are hidden.
export default function ContactDetails() {
  const { phone, email, hours, address } = site.contact
  const items = [
    { icon: 'location-dot', title: site.name, lines: address },
    phone && { icon: 'phone', title: 'Phone', lines: [phone], href: `tel:${phone.replace(/\s/g, '')}` },
    email && { icon: 'envelope', title: 'Email', lines: [email], href: `mailto:${email}` },
    hours && { icon: 'clock', title: 'Opening Hours', lines: [hours] },
  ].filter(Boolean)

  return (
    <ul className="contact__details">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 80} className="contact__detail">
          <span className="contact__icon" aria-hidden="true">
            <i className={`fa-solid fa-${item.icon}`} />
          </span>
          <div>
            <h3>{item.title}</h3>
            {item.href ? (
              <a href={item.href}>{item.lines[0]}</a>
            ) : (
              item.lines.map((line) => <p key={line}>{line}</p>)
            )}
          </div>
        </Reveal>
      ))}
    </ul>
  )
}
