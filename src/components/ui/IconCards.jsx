import Reveal from './Reveal'
import './IconCards.css'

// Grid of { icon, title, text } cards with a numbered corner and hover lift.
// Used for the Home experience pillars and the blog categories.
export default function IconCards({ items, columns = 4 }) {
  return (
    <ul className="icon-cards" style={{ '--cols': columns }}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 90}>
          <div className="icon-card">
            <span className="icon-card__index">{String(i + 1).padStart(2, '0')}</span>
            <span className="icon-card__icon" aria-hidden="true">
              <i className={`fa-solid fa-${item.icon}`} />
            </span>
            <h3 className="icon-card__title">{item.title}</h3>
            <p className="icon-card__text">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}
