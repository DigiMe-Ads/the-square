import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import { spaces } from '../data/spaces'

export default function Spaces() {
  return (
    <Layout footerBg>
      <PageBanner
        title="OUR SPACES"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Spaces', to: '/spaces' },
        ]}
      />

      <div className="spaces_wrapper_page">
        <div className="container">
          <div className="title-text">Our Spaces</div>
          <div className="sub-heading">SUB HEADING IN HERE - ABOUT THE SQUARE</div>
          <div className="description">
            Explore The Square's diverse spaces, each offering a unique experience. Sample global
            cuisines, engage in cultural happenings, or simply unwind. Here, history and modernity
            converge, creating a dynamic urban retreat in the heart of Colombo.
          </div>
          <div className="image-row">
            {spaces.map((space) => (
              <Link to={`/${space.slug}`} key={space.slug}>
                <img src={space.thumb} alt={space.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
