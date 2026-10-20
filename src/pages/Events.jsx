import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CtaRow from '../components/ui/CtaRow'
import CtaBanner from '../components/ui/CtaBanner'
import OccasionGrid from '../components/events/OccasionGrid'
import ContactSection from '../components/contact/ContactSection'

export default function Events() {
  return (
    <Layout>
      <PageHero
        size="lg"
        image="/img/spacse-banner.png"
        title="Make your next occasion memorable."
        subtitle="Your event. Your people. Your space."
        text="The Square offers a distinctive setting for gatherings, celebrations, meetings and special occasions in the heart of Colombo."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Events', to: '/events' },
        ]}
      >
        <CtaRow ctas={[{ label: 'Send An Enquiry', reserve: true, icon: 'envelope' }]} />
      </PageHero>

      <section className="section tone-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Occasions"
            title="A setting for every moment."
            text="From birthdays and private dinners to corporate gatherings, every occasion finds its place at The Square."
            className="section-heading--spaced"
          />
          <OccasionGrid />
        </div>
      </section>

      <CtaBanner
        image="/img/banner.png"
        eyebrow="Plan With Us"
        title="Let's create something memorable."
        text="Tell us about your event and our team will help you find the right space and experience."
        ctas={[{ label: 'Send An Enquiry', reserve: true, icon: 'envelope' }]}
      />

      <ContactSection tone="paper" />
    </Layout>
  )
}
