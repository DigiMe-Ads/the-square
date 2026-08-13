import { Link } from 'react-router-dom'

// A single blog post card used on the Blog listing page.
export default function BlogCard({ post }) {
  return (
    <div className="blog-item">
      <div className="blog-item-wrapper">
        <div className="blog-item-img">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="blog-item-details">
          <div className="blog-item-title">
            <h4>{post.title}</h4>
          </div>
          <div className="blog-item-text">
            <p>{post.excerpt}</p>
          </div>
          <div className="blog-item-link">
            <Link to={`/blog/${post.slug}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
