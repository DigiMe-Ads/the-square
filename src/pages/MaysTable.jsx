import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import SpaceIntro from '../components/spaces/SpaceIntro'
import OpeningHours from '../components/spaces/OpeningHours'
import Gallery from '../components/spaces/Gallery'
import ShowcaseSlider from '../components/spaces/ShowcaseSlider'
import ContactSection from '../components/common/ContactSection'

export default function MaysTable() {
  return (
    <Layout>
      <PageBanner
        title="MAY's TABLE"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'spaces', to: '/spaces' },
          { label: "May's Table", to: '/mays-table' },
        ]}
      />
      <SpaceIntro />
      <OpeningHours />
      <Gallery />
      <ShowcaseSlider />
      <ContactSection header="Creating Heading in Here" sub="SUB HEADING IN HERE - OUR EVENTS" />
    </Layout>
  )
}
