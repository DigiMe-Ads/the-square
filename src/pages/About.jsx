import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import SplitSection from '../components/ui/SplitSection'
import CtaBanner from '../components/ui/CtaBanner'
import ContactSection from '../components/contact/ContactSection'
import { experienceLines } from '../data/content'

export default function About() {
  return (
    <Layout>
      <PageHero
        size="lg"
        image="/img/banner.png"
        title="Where history meets contemporary Colombo."
        text="A destination in the heart of Colombo where dining, culture and contemporary experiences come together within the distinctive setting of Independence Square."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
        ]}
      />

      <SplitSection
        tone="paper"
        image="/img/table.png"
        imageAlt="Dining room at The Square"
        eyebrow="Our Story"
        title="More than a place to visit."
        paragraphs={[
          'The Square brings together a collection of experiences designed for people to meet, discover, dine and spend time together.',
          "Set within the Arcade Clock Tower Building at Independence Square, The Square creates a unique meeting point between Colombo's historic surroundings and the energy of modern city life.",
          'From distinctive dining experiences to coffee, drinks and social moments, every space offers its own character while contributing to one destination.',
        ]}
      />

      <SplitSection
        tone="dark"
        reverse
        image="/img/nidahas-bar-hd.jpg"
        imageAlt="Bar team preparing drinks"
        eyebrow="The Experience"
        title="One destination. Many experiences."
        paragraphs={[
          'The Square is designed around the simple idea that the best places give people a reason to stay a little longer.',
        ]}
        lines={experienceLines}
      >
        <p className="body-text">Whatever brings you here, The Square is a place to experience Colombo differently.</p>
      </SplitSection>

      <SplitSection
        tone="light"
        image="/img/creative_baner.png"
        imageAlt="Sketch of the Arcade Clock Tower Building at Independence Square"
        eyebrow="Our Location"
        title="In the heart of Colombo."
        paragraphs={[
          "Located at the Arcade Clock Tower Building, Independence Square, Colombo 07, The Square places contemporary dining and social experiences within one of Colombo's most distinctive settings.",
          'The location allows visitors to experience the character of Independence Square while enjoying a modern destination built around food, connection and discovery.',
        ]}
        ctas={[{ label: 'Find Us', href: '#contact', icon: 'location-dot' }]}
      />

      <CtaBanner
        image="/img/spacse-banner.png"
        eyebrow="Come to The Square"
        title="Discover a place made for your moments."
        text="Whether you're here for food, coffee, drinks, conversation or celebration, there's always something to experience."
        ctas={[{ label: 'Explore The Experiences', to: '/experiences' }]}
      />

      <ContactSection tone="paper" />
    </Layout>
  )
}
