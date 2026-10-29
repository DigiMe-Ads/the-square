import { spaces } from '../../data/spaces'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SpaceCard from '../spaces/SpaceCard'
import './SpacesShowcase.css'

// "Explore The Square" — the four spaces as photo cards (each photo used once).
export default function SpacesShowcase() {
  return (
    <section className="section showcase tone-dark">
      <div className="container">
        <div className="showcase__head">
          <SectionHeading
            eyebrow="Explore The Square"
            title="One destination. Different experiences."
            text="Discover a collection of spaces, each with its own character, atmosphere and story."
          />
          <Reveal delay={200}>
            <Button to="/experiences" variant="outline">
              Explore The Experiences
            </Button>
          </Reveal>
        </div>

        <div className="showcase__grid">
          {spaces.map((space, i) => (
            <SpaceCard key={space.slug} space={space} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
