import Reveal from '../ui/Reveal'
import BrandLink from '../ui/BrandLink'
import { isInstagramLink } from '../../data/spaces'
import './SpaceCard.css'

// Tall photo card for a space. On hover the photo zooms and the summary
// slides up; on touch screens the summary is always shown.
export default function SpaceCard({ space, delay = 0 }) {
  return (
    <Reveal delay={delay} className="space-card-wrap">
      <BrandLink brand={space} className="space-card zoom-host">
        <div className="space-card__media zoom-media">
          <img src={space.slide} alt={`${space.label} at The Square`} loading="lazy" />
        </div>
        <div className="space-card__shade" aria-hidden="true" />

        <span className="space-card__num">{space.number}</span>
        <div className="space-card__body">
          <span className="space-card__kind">{space.kind}</span>
          <h3 className="space-card__name">{space.name}</h3>
          <p className="space-card__tagline">{space.tagline}</p>
          <div className="space-card__more">
            <p>{space.summary}</p>
            {space.note && <p className="space-card__note">{space.note}</p>}
          </div>
          <span className="space-card__cta">
            {space.cta} <i className={isInstagramLink(space) ? 'fa-brands fa-instagram' : 'fa-solid fa-arrow-right'} aria-hidden="true" />
          </span>
        </div>
      </BrandLink>
    </Reveal>
  )
}
