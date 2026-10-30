import { brands } from '../../data/spaces'
import Button from '../ui/Button'
import BrandLink from '../ui/BrandLink'
import SpaceTile from '../ui/SpaceTile'
import './HeroBanner.css'
import './HeroStrip.css'

// Full-screen video hero with a staggered copy reveal and a glass strip
// linking to each brand's Instagram.
export default function HeroBanner() {
  return (
    <section className="hero">
      <video className="hero__video" src="/video/video_2.mp4" poster="/img/banner.png" autoPlay muted loop playsInline />
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content container">
        <img className="hero__logo" src="/img/logo.png" alt="The Square" width="232" height="90" />
        <span className="eyebrow hero__eyebrow">Independence Square · Colombo 07</span>
        <h1 className="display hero__title">
          Where Colombo <em>Comes Together</em>
        </h1>
        <p className="lead hero__lead">
          A destination for dining, discovery, connection and memorable moments in the heart of Colombo.
        </p>
        <p className="hero__sub">
          Located at the iconic Arcade Clock Tower Building at Independence Square, The Square brings together
          distinctive experiences, flavours and spaces under one roof.
        </p>
        <div className="cta-row hero__ctas">
          <Button to="/experiences">Explore The Square</Button>
          <Button reserve variant="outline" icon="calendar-check">
            Reserve
          </Button>
        </div>
      </div>

      <div className="hero__strip container">
        <ul className="hero__spaces glass">
          {brands.map((space) => (
            <li key={space.slug}>
              <BrandLink brand={space}>
                <span className="hero__tile">
                  <SpaceTile space={space} />
                </span>
                <span className="hero__name">{space.label}</span>
                <span className="hero__kind">{space.kind}</span>
              </BrandLink>
            </li>
          ))}
        </ul>
        <a href="#intro" className="hero__scroll" aria-label="Scroll to content">
          <span />
        </a>
      </div>
    </section>
  )
}
