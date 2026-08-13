import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import ContactSection from '../components/common/ContactSection'

export default function About() {
  return (
    <Layout footerBg>
      <div className="main-banner-wrapper">
        <img src="/img/spacse-banner.png" alt="About The Square" />
        <div className="main-banner-container">
          <div className="main-banner-inner">
            <div className="main-banner-details">
              <div className="main-banner-header">
                <h1 className="cmn-header">About</h1>
              </div>
              <div className="main-banner-link space-banner-link">
                <Link to="/" className="cmn-link">
                  Home
                </Link>
                <span className="main-banner-link-arrow">
                  <img className="grater-arrow" src="/img/grater.png" alt=">" />
                </span>
                <Link to="/about" className="cmn-link">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection
        header="Creating Heading in Here"
        sub="SUB HEADING IN HERE - OUR EVENTS"
      />
    </Layout>
  )
}
