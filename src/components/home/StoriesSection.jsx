import { blogPosts } from '../../data/blogPosts'
import { blogCategories } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import IconCards from '../ui/IconCards'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import BlogCard from '../blog/BlogCard'
import './StoriesSection.css'

// "Stay in The Square" — blog categories plus the latest two stories.
export default function StoriesSection() {
  return (
    <section className="section tone-dark stories">
      <div className="container">
        <div className="stories__head">
          <SectionHeading
            eyebrow="Stay in The Square"
            title="Stories, flavours & experiences."
            text="Go beyond the table and discover the people, flavours, cultures and experiences that make The Square what it is."
          />
          <Reveal delay={200}>
            <Button to="/blog" variant="outline">
              Read The Blog
            </Button>
          </Reveal>
        </div>

        <IconCards items={blogCategories} />

        <div className="stories__posts">
          {blogPosts.slice(0, 2).map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
