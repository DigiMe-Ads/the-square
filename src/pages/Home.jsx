import Layout from '../components/layout/Layout'
import HeroBanner from '../components/home/HeroBanner'
import IntroSection from '../components/home/IntroSection'
import SpacesShowcase from '../components/home/SpacesShowcase'
import ExperienceSection from '../components/home/ExperienceSection'
import StoriesSection from '../components/home/StoriesSection'
import SplitSection from '../components/ui/SplitSection'
import ContactSection from '../components/contact/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <IntroSection />
      <SpacesShowcase />
      <ExperienceSection />

      <SplitSection
        tone="gold"
        image="/img/blog3.png"
        imageAlt="Private dining room set for a gathering"
        eyebrow="Make It A Moment"
        title="Your occasion. Our space."
        paragraphs={[
          'From intimate gatherings and special dinners to corporate events and celebrations, The Square provides a distinctive setting for moments that deserve to be remembered.',
          "Tell us what you're planning, and we'll help you find the right space for your occasion.",
        ]}
        ctas={[
          { label: 'Plan An Event', to: '/events' },
          { label: 'Enquire Now', reserve: true, icon: 'envelope' },
        ]}
      />

      <StoriesSection />
      <ContactSection />
    </Layout>
  )
}
