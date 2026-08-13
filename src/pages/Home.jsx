import Layout from '../components/layout/Layout'
import HeroBanner from '../components/home/HeroBanner'
import CreativeSection from '../components/home/CreativeSection'
import SpacesSlider from '../components/home/SpacesSlider'
import BlogNewsSection from '../components/home/BlogNewsSection'
import ContactSection from '../components/common/ContactSection'
import { site } from '../data/site'

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <div className="clear">&nbsp;</div>
      <CreativeSection />
      <SpacesSlider />
      <BlogNewsSection />
      <ContactSection mapSrc={site.map.home} />
    </Layout>
  )
}
