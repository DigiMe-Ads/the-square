import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Full-screen video hero. Header/description/link fade in on a stagger,
// reproducing the original setTimeout reveal sequence.
export default function HeroBanner() {
  const [revealed, setRevealed] = useState({ header: false, desc: false, link: false })

  useEffect(() => {
    const timers = [
      setTimeout(() => setRevealed((r) => ({ ...r, header: true })), 1000),
      setTimeout(() => setRevealed((r) => ({ ...r, desc: true })), 1500),
      setTimeout(() => setRevealed((r) => ({ ...r, link: true })), 2500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="main-banner-wrapper">
      <div className="main-sliser-menu-right">
        <section className="main_slider">
          <div>
            <div className="video-container">
              <video src="/video/video_2.mp4" autoPlay muted loop playsInline />
            </div>
            <div className="slider-img-bottom-banner">
              <div className="main-banner-container">
                <div className="main-banner-inner">
                  <div className="main-banner-details">
                    <div className={`main-banner-header ${revealed.header ? 'show' : ''}`}>
                      <h1 className="cmn-header">WHERE COLOMBO COMES TOGETHER</h1>
                    </div>
                    <div
                      className={`main-banner-description ${revealed.desc ? 'show' : ''}`}
                      style={{ justifyContent: 'center' }}
                    >
                      <p className="cmn-text">
                        A destination for dining, discovery, connection and memorable moments in
                        the heart of Colombo.
                      </p>
                    </div>
                    <div className={`main-banner-link ${revealed.link ? 'show' : ''}`}>
                      <Link to="/spaces" className="cmn-link">
                        Explore The Square
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
