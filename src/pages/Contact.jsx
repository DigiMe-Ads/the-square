import Layout from '../components/layout/Layout'
import PageHero from '../components/layout/PageHero'
import ContactSection from '../components/contact/ContactSection'

export default function Contact() {
  return (
    <Layout>
      <PageHero
        size="sm"
        image="/img/banner.png"
        title="We'd love to hear from you."
        text="Whether you have a question, want to make a reservation or are planning an event, our team is here to help."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact', to: '/contact' },
        ]}
      />
      <ContactSection showHeading={false} tone="paper" />
    </Layout>
  )
}
