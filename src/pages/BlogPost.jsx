import { useParams, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import { getPost } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  // Unknown slug → send the visitor back to the blog listing.
  if (!post) return <Navigate to="/blog" replace />

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
              <div className="blog-content">
                <h2>{post.title}</h2>
                {post.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
