import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import SpaceRow from '../components/spaces/SpaceRow'
import { spaces } from '../data/spaces'

export default function Spaces() {
  return (
    <Layout>
      <PageHero
        image="/img/spacse-banner.png"
        title="Explore the experiences."
        subtitle="Many ways to experience The Square."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Experiences', to: '/experiences' },
        ]}
      />

      <section className="section tone-paper">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our Experiences"
            title="Four destinations. One address."
            text="From authentic Thai cuisine to relaxed social moments, explore the individual destinations that make The Square unique."
            className="section-heading--spaced"
          />
          {spaces.map((space, i) => (
            <SpaceRow key={space.slug} space={space} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

    </Layout>
  )
}
