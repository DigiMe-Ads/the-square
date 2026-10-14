import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import SpaceTile from '../components/common/SpaceTile'
import { spaces } from '../data/spaces'

export default function Spaces() {
  return (
    <Layout footerBg>
      <PageBanner
        title="EXPLORE THE SPACES"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Spaces', to: '/spaces' },
        ]}
      />

      <div className="spaces_wrapper_page">
        <div className="container">
          <div className="title-text">Explore The Spaces</div>
          <div className="sub-heading">FOUR SPACES. MANY WAYS TO EXPERIENCE THE SQUARE.</div>
          <div className="description">
            From authentic Thai cuisine to relaxed social moments, explore the individual
            destinations that make The Square unique.
          </div>
          <div className="image-row">
            {spaces.map((space) => (
              <Link to={`/${space.slug}`} key={space.slug}>
                <SpaceTile space={space} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
