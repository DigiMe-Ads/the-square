import { spaces } from '../../data/spaces'
import SectionHeading from '../ui/SectionHeading'
import SpaceCard from './SpaceCard'
import './OtherSpaces.css'

// "Explore The Square" on a space page: the other three spaces, each once.
export default function OtherSpaces({ currentSlug }) {
  const others = spaces.filter((s) => s.slug !== currentSlug)

  return (
    <section className="section tone-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Explore The Square"
          title="One destination. Different experiences."
          text="Discover a collection of spaces, each with its own character, atmosphere and story."
          className="section-heading--spaced"
        />
        <div className="other-spaces">
          {others.map((space, i) => (
            <SpaceCard key={space.slug} space={space} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
