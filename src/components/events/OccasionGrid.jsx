import { occasions } from '../../data/events'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import './OccasionGrid.css'

// Events page occasions as a bento grid of photo cards. The first card spans
// two rows; every card opens the enquiry form.
export default function OccasionGrid() {
  return (
    <div className="occasions">
      {occasions.map((occasion, i) => (
        <Reveal key={occasion.id} delay={(i % 3) * 90} className={`occasion occasion--${i}`}>
          <article className="occasion__card zoom-host">
            <div className="occasion__media zoom-media">
              <img src={occasion.image} alt="" loading="lazy" />
            </div>
            <div className="occasion__shade" aria-hidden="true" />
            <div className="occasion__body">
              <span className="occasion__icon" aria-hidden="true">
                <i className={`fa-solid fa-${occasion.icon}`} />
              </span>
              <h3 className="occasion__title">{occasion.title}</h3>
              <p className="occasion__text">{occasion.description}</p>
              <Button reserve variant="link" className="occasion__cta">
                Enquire
              </Button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
