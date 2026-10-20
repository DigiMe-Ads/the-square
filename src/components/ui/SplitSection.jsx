import Reveal from './Reveal'
import CtaRow from './CtaRow'
import './SplitSection.css'

// Two-column copy + photo block used across pages. `reverse` puts the photo on
// the left; `lines` renders a short stacked list; children render below the copy.
export default function SplitSection({
  id,
  tone = 'dark',
  image,
  imageAlt = '',
  reverse = false,
  eyebrow,
  title,
  subtitle,
  paragraphs = [],
  lines = [],
  ctas = [],
  children,
}) {
  return (
    <section id={id} className={`section split tone-${tone}${reverse ? ' split--reverse' : ''}`}>
      <div className="container split__grid">
        <div className="split__copy">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h2 className="title">{title}</h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={140}>
              <p className="subtitle">{subtitle}</p>
            </Reveal>
          )}
          <Reveal delay={200} className="split__body">
            {paragraphs.map((p, i) => (
              <p className="body-text" key={i}>
                {p}
              </p>
            ))}
            {lines.length > 0 && (
              <ul className="split__lines">
                {lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
            {children}
          </Reveal>
          <Reveal delay={260}>
            <CtaRow ctas={ctas} />
          </Reveal>
        </div>

        {image && (
          <Reveal variant="zoom" className="split__media">
            <img src={image} alt={imageAlt} loading="lazy" />
            <span className="split__frame" aria-hidden="true" />
          </Reveal>
        )}
      </div>
    </section>
  )
}
