import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import SpaceIntro from '../components/spaces/SpaceIntro'
import OpeningHours from '../components/spaces/OpeningHours'
import Gallery from '../components/spaces/Gallery'
import ShowcaseSlider from '../components/spaces/ShowcaseSlider'
import ContactSection from '../components/common/ContactSection'

// Detail page shared by every space; content comes from data/spaces.js.
export default function SpaceDetail({ space }) {
  return (
    <Layout>
      <PageBanner
        title={space.name}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Spaces', to: '/spaces' },
          { label: space.name, to: `/${space.slug}` },
        ]}
      />
      <SpaceIntro space={space} />
      <OpeningHours space={space} />
      {space.gallery && <Gallery images={space.gallery} />}
      <ShowcaseSlider currentSlug={space.slug} />
      <ContactSection />
    </Layout>
  )
}
