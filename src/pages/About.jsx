import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import TextSection from '../components/common/TextSection'
import ContactSection from '../components/common/ContactSection'

export default function About() {
  return (
    <Layout footerBg>
      <PageBanner
        title="ABOUT"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
        ]}
      />

      <TextSection
        image="/img/spacse-banner.png"
        imageAlt="Dining room at The Square"
        header="Where History Meets Contemporary Colombo"
        paragraphs={[
          'A destination in the heart of Colombo where dining, culture and contemporary experiences come together within the distinctive setting of Independence Square.',
        ]}
      />

      <TextSection
        tone="gold"
        image="/img/gallery_f.png"
        imageAlt="Bar team at work"
        reverse
        header="Our Story"
        sub="MORE THAN A PLACE TO VISIT."
        paragraphs={[
          'The Square brings together a collection of experiences designed for people to meet, discover, dine and spend time together.',
          "Set within the Arcade Clock Tower Building at Independence Square, The Square creates a unique meeting point between Colombo's historic surroundings and the energy of modern city life.",
          'From distinctive dining experiences to coffee, drinks and social moments, every space offers its own character while contributing to one destination.',
        ]}
      />

      <TextSection
        image="/img/festival1.png"
        imageAlt="Thai dish served at the table"
        header="The Experience"
        sub="ONE DESTINATION. MANY EXPERIENCES."
        paragraphs={[
          'The Square is designed around the simple idea that the best places give people a reason to stay a little longer.',
        ]}
        lines={[
          'Come for a meal.',
          'Meet someone over coffee.',
          'Unwind with a drink.',
          'Celebrate an occasion.',
          'Or simply discover something new.',
        ]}
      >
        <p className="cmn-text">
          Whatever brings you here, The Square is a place to experience Colombo differently.
        </p>
      </TextSection>

      <TextSection
        tone="gold"
        image="/img/banner.png"
        imageAlt="The Arcade Clock Tower Building at Independence Square, lit up at night"
        reverse
        header="Our Location"
        sub="IN THE HEART OF COLOMBO."
        paragraphs={[
          "Located at the Arcade Clock Tower Building, Independence Square, Colombo 07, The Square places contemporary dining and social experiences within one of Colombo's most distinctive settings.",
          'The location allows visitors to experience the character of Independence Square while enjoying a modern destination built around food, connection and discovery.',
        ]}
        ctas={[{ label: 'Find Us', href: '#contact' }]}
      />

      <TextSection
        image="/img/festival2.png"
        imageAlt="Chef cooking over an open flame"
        header="Come To The Square"
        sub="DISCOVER A PLACE MADE FOR YOUR MOMENTS."
        paragraphs={[
          "Whether you're here for food, coffee, drinks, conversation or celebration, there's always something to experience.",
        ]}
        ctas={[{ label: 'Explore The Spaces', to: '/spaces' }]}
      />

      <ContactSection />
    </Layout>
  )
}
