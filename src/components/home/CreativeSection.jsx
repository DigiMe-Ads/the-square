import { Link } from 'react-router-dom'

// "More Than A Place To Visit" intro block on the home page.
export default function CreativeSection() {
  return (
    <div className="creative-wrapper">
      <div className="creative-bg-wrapper">
        <img src="/img/creative_baner.png" alt="" />
      </div>
      <div className="creative-container">
        <div className="creative-inner">
          <div className="creative-banner-details">
            <div className="creative-banner-header">
              <h1 className="cmn-header">More Than A Place To Visit</h1>
            </div>
            <div className="creative-banner-sub">
              <h2 className="cmn-sub-title">A SPACE TO EXPERIENCE.</h2>
            </div>
            <div className="creative-banner-description">
              <p className="cmn-text">
                The Square brings together food, culture, people and experiences in one of
                Colombo's most distinctive settings.
              </p>
              <p className="cmn-text" style={{ marginTop: 20 }}>
                Set within the historic Arcade Clock Tower Building at Independence Square, The
                Square offers a collection of spaces designed for different moments — from relaxed
                meals and coffee breaks to celebrations, conversations and evenings worth
                remembering.
              </p>
            </div>
            <div className="creative-link" style={{ marginTop: 30 }}>
              <Link to="/about" className="cmn-link">
                Discover The Story
              </Link>
            </div>
            <div className="creative-img">
              <img src="/img/squre.png" alt="The Square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
