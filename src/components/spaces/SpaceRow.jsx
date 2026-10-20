import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import SpaceTile from '../ui/SpaceTile'
import Button from '../ui/Button'
import './SpaceRow.css'

// Large alternating feature row for a space on the Spaces page.
export default function SpaceRow({ space, reverse = false }) {
  return (
    <article className={`space-row${reverse ? ' space-row--reverse' : ''}`}>
      <Reveal variant={reverse ? 'right' : 'left'} className="space-row__media">
        <Link to={`/${space.slug}`} className="zoom-host" tabIndex={-1} aria-hidden="true">
          <span className="zoom-media">
            <img src={space.slide} alt="" loading="lazy" />
          </span>
        </Link>
        <span className="space-row__num">{space.number}</span>
      </Reveal>

      <div className="space-row__copy">
        <Reveal className="space-row__brand">
          <SpaceTile space={space} />
          <span className="eyebrow">{space.kind}</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="title">{space.name}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="subtitle">{space.tagline}</p>
        </Reveal>
        <Reveal delay={200}>
          <p className="body-text">{space.summary}</p>
          <p className="space-row__hours">
            <i className="fa-regular fa-clock" aria-hidden="true" /> {space.hours.join(' · ')}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <Button to={`/${space.slug}`} variant="link">
            {space.cta}
          </Button>
        </Reveal>
      </div>
    </article>
  )
}
