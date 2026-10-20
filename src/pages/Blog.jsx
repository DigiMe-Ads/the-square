import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import IconCards from '../components/ui/IconCards'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts } from '../data/blogPosts'
import { blogCategories } from '../data/content'
import './Blog.css'

export default function Blog() {
  return (
    <Layout>
      <PageHero
        image="/img/banner.png"
        title="Stories, flavours & experiences."
        text="Go beyond the table and discover the people, flavours, cultures and experiences that make The Square what it is."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
        ]}
      />

      <section className="section tone-paper">
        <div className="container">
          <SectionHeading eyebrow="Explore by topic" title="Stay in The Square." className="section-heading--spaced" />
          <IconCards items={blogCategories} />
        </div>
      </section>

      <section className="section tone-light">
        <div className="container">
          <SectionHeading eyebrow="Latest stories" title="From our kitchens & beyond." className="section-heading--spaced" />
          <div className="blog-list">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
