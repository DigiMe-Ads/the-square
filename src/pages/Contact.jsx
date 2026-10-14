import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactSection from '../components/common/ContactSection'

export default function Contact() {
  return (
    <Layout footerBg>
      <PageBanner
        title="CONTACT"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact', to: '/contact' },
        ]}
      />
      <ContactSection />
    </Layout>
  )
}
