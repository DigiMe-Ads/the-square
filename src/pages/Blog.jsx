import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactSection from '../components/common/ContactSection'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts } from '../data/blogPosts'

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
                <div className="blog-container-description cmn-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat, maxime
                    deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo nesciunt
                    ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat,
                    maxime deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo
                    nesciunt ipsa Fugit repellat, maxime deleniti ad aspernatur quasi voluptates,
                    quia placeat consectetur
                  </p>
                </div>
              </div>
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

      <ContactSection header="Creating Heading in Here" sub="SUB HEADING IN HERE - OUR EVENTS" />
    </Layout>
  )
}
