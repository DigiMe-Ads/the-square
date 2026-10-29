import Layout from '../components/layout/Layout'
import HeroBanner from '../components/home/HeroBanner'
import IntroSection from '../components/home/IntroSection'
import SpacesShowcase from '../components/home/SpacesShowcase'
import ExperienceSection from '../components/home/ExperienceSection'
import StoriesSection from '../components/home/StoriesSection'
import ContactSection from '../components/contact/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <IntroSection />
      <SpacesShowcase />
      <ExperienceSection />
      <StoriesSection />
      <ContactSection />
    </Layout>
  )
}
