import Reveal from '../ui/Reveal'
import CtaRow from '../ui/CtaRow'
import SpaceTile from '../ui/SpaceTile'
import './SpaceIntro.css'

// Story block on a space page: brand tile + copy on the left, and either the
// space's intro photo or a highlights panel on the right (so spaces with only
// one photo never repeat it).
export default function SpaceIntro({ space }) {
  const ctas = [
    space.menuUrl && { label: 'View Menu', href: space.menuUrl, icon: 'book-open' },
    space.reservable && { label: 'Reserve A Table', reserve: true, icon: 'calendar-check' },
    space.contactCta && { label: space.contactCta, href: '#visit', icon: 'phone' },
    space.instagram && { label: 'Instagram', href: space.instagram, icon: 'fa-brands fa-instagram' },
  ].filter(Boolean)

  return (
    <section className="section tone-paper space-intro">
      <div className="container space-intro__grid">
        <div className="space-intro__copy">
          <Reveal className="space-intro__brand">
            <SpaceTile space={space} />
            <span className="eyebrow">{space.kind}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="title">{space.heading}</h2>
          </Reveal>
          <Reveal delay={160}>
            {space.body.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead' : 'body-text'}>
                {p}
              </p>
            ))}
            {space.closing && <p className="subtitle space-intro__closing">{space.closing}</p>}
          </Reveal>
          <Reveal delay={240}>
            <CtaRow ctas={ctas} />
          </Reveal>
        </div>

        {space.image ? (
          <Reveal variant="zoom" className="space-intro__media">
            <img src={space.image} alt={`Inside ${space.label}`} loading="lazy" />
          </Reveal>
        ) : (
          <Reveal variant="right" className="space-intro__panel tone-dark">
            <span className="eyebrow">At a glance</span>
            <p className="space-intro__tagline">{space.tagline}</p>
            <ul>
              {(space.highlights || []).map((h) => (
                <li key={h}>
                  <i className="fa-solid fa-check" aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>
            <p className="body-text">{space.summary}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
