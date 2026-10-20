import Reveal from './Reveal'
import './SectionHeading.css'

// Eyebrow + title + italic subtitle + intro copy, revealed on a short stagger.
// `text` may be a string or an array of paragraphs.
export default function SectionHeading({ eyebrow, title, subtitle, text, align = 'left', as: Tag = 'h2', className = '' }) {
  const paragraphs = Array.isArray(text) ? text : text ? [text] : []
  const centered = align === 'center'

  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow${centered ? ' eyebrow--center' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={80}>
          <Tag className="title">{title}</Tag>
        </Reveal>
      )}
      {subtitle && (
        <Reveal delay={160}>
          <p className="subtitle">{subtitle}</p>
        </Reveal>
      )}
      {paragraphs.map((p, i) => (
        <Reveal key={i} delay={220 + i * 60}>
          <p className="lead">{p}</p>
        </Reveal>
      ))}
    </div>
  )
}
