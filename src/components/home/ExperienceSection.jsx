import { experiences } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import IconCards from '../ui/IconCards'

// "Your Moment. Your Way." — the four ways to experience The Square.
export default function ExperienceSection() {
  return (
    <section className="section tone-light">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="The Experience"
          title="Your moment. Your way."
          text="Whether you're meeting friends, enjoying a meal, taking a break or celebrating something special, The Square gives every occasion a place to belong."
          className="section-heading--spaced"
        />
        <IconCards items={experiences} />
      </div>
    </section>
  )
}
