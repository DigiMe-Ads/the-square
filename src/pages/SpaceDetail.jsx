import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import CtaRow from '../components/ui/CtaRow'
import SpaceIntro from '../components/spaces/SpaceIntro'
import SpaceInfo from '../components/spaces/SpaceInfo'
import Gallery from '../components/spaces/Gallery'
import OtherSpaces from '../components/spaces/OtherSpaces'

// Detail page shared by every space; content comes from data/spaces.js.
export default function SpaceDetail({ space }) {
  const heroCtas = [
    space.reservable ? { label: 'Reserve A Table', reserve: true, icon: 'calendar-check' } : { label: space.contactCta || 'Visit', href: '#visit', icon: 'location-dot' },
    space.menuUrl && { label: 'View Menu', href: space.menuUrl, icon: 'book-open' },
  ].filter(Boolean)

  return (
    <Layout>
      <PageHero
        size="lg"
        image={space.hero}
        portrait={space.heroPortrait}
        title={space.name}
        subtitle={space.tagline}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Spaces', to: '/spaces' },
          { label: space.label, to: `/${space.slug}` },
        ]}
      >
        {space.note && <p className="lead">{space.note}</p>}
        <CtaRow ctas={heroCtas} />
      </PageHero>
      <SpaceIntro space={space} />
      <SpaceInfo space={space} />
      {space.gallery && <Gallery images={space.gallery} />}
      <OtherSpaces currentSlug={space.slug} />
    </Layout>
  )
}
