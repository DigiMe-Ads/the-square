import CtaLinks from './CtaLinks'

// Generic copy block: eyebrow header, sub heading, paragraphs and CTAs.
// `lines` renders a short stacked list (e.g. "Come for a meal. / Meet someone…").
// Children render below the copy (used for feature grids).
// `image` adds a photo beside the copy; `reverse` puts it on the left.
export default function TextSection({
  id,
  header,
  sub,
  paragraphs = [],
  lines = [],
  ctas = [],
  tone = 'light',
  image,
  imageAlt = '',
  reverse = false,
  children,
}) {
  const split = image ? `text-section-split${reverse ? ' text-section-reverse' : ''}` : ''

  return (
    <section className={`text-section text-section-${tone}`} id={id}>
      <div className={`text-section-inner ${split}`}>
        <div className="text-section-copy">
        {header && <h1 className="cmn-header">{header}</h1>}
        {sub && <h2 className="cmn-sub-title">{sub}</h2>}
        {paragraphs.map((p, i) => (
          <p className="cmn-text" key={i}>
            {p}
          </p>
        ))}
        {lines.length > 0 && (
          <p className="cmn-text text-section-lines">
            {lines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>
        )}
        <CtaLinks ctas={ctas} />
        {children}
        </div>
        {image && (
          <div className="text-section-media">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        )}
      </div>
    </section>
  )
}
