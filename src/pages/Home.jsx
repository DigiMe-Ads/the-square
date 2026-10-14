import Layout from '../components/layout/Layout'
import HeroBanner from '../components/home/HeroBanner'
import CreativeSection from '../components/home/CreativeSection'
import SpacesSlider from '../components/home/SpacesSlider'
import BlogNewsSection from '../components/home/BlogNewsSection'
import TextSection from '../components/common/TextSection'
import FeatureGrid from '../components/common/FeatureGrid'
import ContactSection from '../components/common/ContactSection'
import { experiences } from '../data/content'

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <div className="clear">&nbsp;</div>
      <CreativeSection />
      <SpacesSlider />

      <TextSection
        header="Your Moment. Your Way."
        paragraphs={[
          "Whether you're meeting friends, enjoying a meal, taking a break or celebrating something special, The Square gives every occasion a place to belong.",
        ]}
      >
        <FeatureGrid items={experiences} />
      </TextSection>

      <TextSection
        tone="gold"
        image="/img/gallery_a.png"
        imageAlt="Private dining table set for a gathering"
        header="Make It A Moment"
        sub="YOUR OCCASION. OUR SPACE."
        paragraphs={[
          'From intimate gatherings and special dinners to corporate events and celebrations, The Square provides a distinctive setting for moments that deserve to be remembered.',
          "Tell us what you're planning, and we'll help you find the right space for your occasion.",
        ]}
        ctas={[
          { label: 'Plan An Event', to: '/events' },
          { label: 'Enquire Now', reserve: true },
        ]}
      />

      <BlogNewsSection />
      <ContactSection />
    </Layout>
  )
}
