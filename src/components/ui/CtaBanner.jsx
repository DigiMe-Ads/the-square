import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CtaRow from './CtaRow'
import './CtaBanner.css'

// Full-bleed closing banner: photo with a fixed-feel parallax, centred
// heading and CTAs.
export default function CtaBanner({ image, eyebrow, title, subtitle, text, ctas = [] }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__media" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />
      <div className="cta-banner__shade" aria-hidden="true" />
      <div className="container cta-banner__content">
        <SectionHeading align="center" eyebrow={eyebrow} title={title} subtitle={subtitle} text={text} />
        <Reveal delay={300}>
          <CtaRow ctas={ctas} className="cta-banner__ctas" />
        </Reveal>
      </div>
    </section>
  )
}
