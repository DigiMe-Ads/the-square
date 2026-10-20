import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import './BlogCard.css'

// Story card: image, category, title, excerpt and a "Read the story" link.
export default function BlogCard({ post, delay = 0 }) {
  return (
    <Reveal as="article" delay={delay} className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link zoom-host">
        <div className="blog-card__media zoom-media">
          <img src={post.image} alt="" loading="lazy" />
        </div>
        <div className="blog-card__body">
          {post.category && <span className="blog-card__cat">{post.category}</span>}
          <h3 className="blog-card__title">{post.title}</h3>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <span className="blog-card__more">
            Read the story <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
