import Reveal from '../ui/Reveal'
import './SpaceInfo.css'

// Opening hours / contact / email / location cards for a space page.
// Anything not yet confirmed (e.g. an email) is simply left out.
export default function SpaceInfo({ space }) {
  const items = [
    { key: 'hours', icon: 'clock', title: 'Opening Hours', lines: space.hours },
    space.phone && {
      key: 'phone',
      icon: 'phone',
      title: 'Contact',
      lines: [space.phone],
      href: `tel:${space.phone.replace(/\s/g, '')}`,
    },
    space.email && { key: 'email', icon: 'envelope', title: 'Email', lines: [space.email], href: `mailto:${space.email}` },
    space.location && { key: 'location', icon: 'location-dot', title: 'Location', lines: [space.location] },
  ].filter(Boolean)

  return (
    <section id="visit" className="space-info tone-dark">
      <div className="container">
        <ul className="space-info__grid" style={{ '--count': items.length }}>
          {items.map((item, i) => (
            <Reveal as="li" key={item.key} delay={i * 90} className="space-info__item">
              <span className="space-info__icon" aria-hidden="true">
                <i className={`fa-solid fa-${item.icon}`} />
              </span>
              <h3>{item.title}</h3>
              {item.href ? (
                <a href={item.href}>{item.lines[0]}</a>
              ) : (
                item.lines.map((line) => <p key={line}>{line}</p>)
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
