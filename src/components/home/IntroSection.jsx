import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import './IntroSection.css'

// "More than a place to visit" — the sketched clock tower and stamp logo from
// the original site, set on warm paper.
export default function IntroSection() {
  return (
    <section id="intro" className="section intro tone-paper">
      <div className="container intro__grid">
        <div className="intro__copy">
          <Reveal>
            <span className="eyebrow">Introduction</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="title">
              More than a place to visit. <strong>A space to experience.</strong>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              The Square brings together food, culture, people and experiences in one of Colombo&apos;s most
              distinctive settings.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="body-text">
              Set within the historic Arcade Clock Tower Building at Independence Square, The Square offers a
              collection of spaces designed for different moments — from relaxed meals and coffee breaks to
              celebrations, conversations and evenings worth remembering.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <Button to="/about" variant="link">
              Discover The Story
            </Button>
          </Reveal>
        </div>

        <Reveal variant="zoom" className="intro__art">
          <img className="intro__sketch" src="/img/creative_baner.png" alt="Sketch of the Arcade Clock Tower Building" loading="lazy" />
          <img className="intro__stamp" src="/img/squre.png" alt="" loading="lazy" />
        </Reveal>
      </div>
    </section>
  )
}
