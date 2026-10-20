import { useParams, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts, getPost } from '../data/blogPosts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  // Unknown slug → send the visitor back to the blog listing.
  if (!post) return <Navigate to="/blog" replace />

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <Layout>
      <PageHero
        size="sm"
        image={post.hero || '/img/spacse-banner.png'}
        title={post.category || 'Blog'}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: 'Story', to: `/blog/${post.slug}` },
        ]}
      />

      <article className="section tone-paper post">
        <div className="container post__inner">
          <Reveal>
            <h2 className="post__title">{post.title}</h2>
          </Reveal>
          <Reveal delay={120} className="post__body">
            {post.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'lead' : 'body-text'}>
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Button to="/blog" variant="link" icon="arrow-left">
            Back to all stories
          </Button>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section tone-light">
          <div className="container post__more">
            {more.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}
