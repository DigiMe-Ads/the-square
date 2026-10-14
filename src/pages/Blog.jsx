import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactSection from '../components/common/ContactSection'
import FeatureGrid from '../components/common/FeatureGrid'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts } from '../data/blogPosts'
import { blogCategories } from '../data/content'

export default function Blog() {
  return (
    <Layout footerBg>
      <PageBanner
        title="BLOG"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
        ]}
      />

      <div className="blog-wrapper">
        <div className="blog-container">
          <div className="blog-site-inner">
            <div className="blog-header">
              <div className="blog-container-top">
                <div className="blog-container-img">
                  <div className="blog-container-img-inner">
                    <img src="/img/logo.png" alt="The Square" />
                  </div>
                </div>
                <div className="blog-container-description">
                  <h2 className="cmn-sub-title">STORIES, FLAVOURS &amp; EXPERIENCES</h2>
                </div>
                <div className="blog-container-description cmn-text">
                  <p>
                    Go beyond the table and discover the people, flavours, cultures and experiences
                    that make The Square what it is.
                  </p>
                </div>
              </div>
              <FeatureGrid items={blogCategories} />
            </div>
            <div className="blog-items-wrapper">
              <div className="blog-items-container">
                <div className="blog-items">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </Layout>
  )
}
