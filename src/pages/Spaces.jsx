import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import SpaceRow from '../components/spaces/SpaceRow'
import CtaBanner from '../components/ui/CtaBanner'
import { spaces } from '../data/spaces'

export default function Spaces() {
  return (
    <Layout>
      <PageHero
        image="/img/spacse-banner.png"
        title="Explore the spaces."
        subtitle="Four spaces. Many ways to experience The Square."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Spaces', to: '/spaces' },
        ]}
      />

      <section className="section tone-paper">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our Spaces"
            title="Four destinations. One address."
            text="From authentic Thai cuisine to relaxed social moments, explore the individual destinations that make The Square unique."
            className="section-heading--spaced"
          />
          {spaces.map((space, i) => (
            <SpaceRow key={space.slug} space={space} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CtaBanner
        image="/img/banner.png"
        eyebrow="Make It A Moment"
        title="Your occasion. Our space."
        text="Tell us what you're planning, and we'll help you find the right space for your occasion."
        ctas={[
          { label: 'Plan An Event', to: '/events' },
          { label: 'Enquire Now', reserve: true, icon: 'envelope' },
        ]}
      />
    </Layout>
  )
}
