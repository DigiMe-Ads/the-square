import Layout from '../components/layout/Layout'
import ComingSoon from '../components/common/ComingSoon'

const COMING_SOON_TEXT =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat, maxime deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo nesciunt ipsa ea neque cupiditate autem ab exercitationem voluptatem.'

// Renders the shared Coming Soon template for a not-yet-open space.
export default function SpaceComingSoon({ space }) {
  return (
    <Layout footerBg>
      <ComingSoon image={space.thumb} alt={space.name} text={COMING_SOON_TEXT} />
    </Layout>
  )
}
