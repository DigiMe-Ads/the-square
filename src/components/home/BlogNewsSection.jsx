import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'
import { blogCategories } from '../../data/content'
import FeatureGrid from '../common/FeatureGrid'

// "Stay in The Square" feature block on the home page. Pulls the two most recent
// posts from the blog data so it stays in sync with the Blog page.
export default function BlogNewsSection() {
  const [first, second] = blogPosts

  return (
    <div className="festival-wrapper">
      <div className="festival-container">
        <div className="festival-inner">
          <div className="festival-top">
            <div className="festival-banner-header">
              <h1 className="cmn-header">Stay In The Square</h1>
            </div>
            <div className="festival-banner-text">
              <p className="cmn-text">
                Go beyond the table and discover the people, flavours, cultures and experiences that
                make The Square what it is.
              </p>
            </div>
            <FeatureGrid items={blogCategories} />
            <div className="festival-banner-link">
              <Link to="/blog" className="cmn-link">
                Read The Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="festival-container2">
        <div className="festival-img-left">
          <img src="/img/festival1.png" alt="" />
        </div>
        <div className="festival-inner">
          <div className="festival-bottom">
            <div className="festival-middle">
              <div className="festival-middle-top">
                <div className="festival-middle-top-container festival-middle-top-right">
                  <div className="festival-middle-top-title">
                    <h2>{first.title}</h2>
                  </div>
                  <div className="festival-middle-top-text">
                    <p className="cmn-text">{first.excerpt}</p>
                  </div>
                  <div className="festival-middle-top-link">
                    <Link to={`/blog/${first.slug}`} className="cmn-link">
                      More
                    </Link>
                  </div>
                </div>
                <div className="festival-middle-top-image">
                  <img src="/img/blog1.png" alt="" />
                </div>
              </div>
              <div className="festival-middle-bottom">
                <div className="festival-middle-bottom-image">
                  <img src="/img/blog2.png" alt="" />
                </div>
                <div className="festival-middle-top-container festival-middle-top-left">
                  <div className="festival-middle-top-title">
                    <h2>{second.title}</h2>
                  </div>
                  <div className="festival-middle-top-text">
                    <p className="cmn-text">{second.excerpt}</p>
                  </div>
                  <div className="festival-middle-top-link" style={{ justifyContent: 'flex-start' }}>
                    <Link to={`/blog/${second.slug}`} className="cmn-link">
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="festival-img-right">
          <img src="/img/festival2.png" alt="" />
        </div>
      </div>
    </div>
  )
}
