import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { spaces } from '../../data/spaces'
import 'swiper/css'

// Home "Our Spaces" section: intro copy on the left, autoplaying carousel on
// the right (replaces the original jQuery slick slider with Swiper).
export default function SpacesSlider() {
  // Repeat the four spaces so the loop has enough slides at 3-per-view.
  const slides = [...spaces, ...spaces]

  return (
    <div className="slider-wrapper">
      <div className="dropdown-menu-container space-dropdown-menu-container">
        <div className="dropdown-menu-left space-dropdown-menu-left">
          <div className="spaces-menu-left-container">
            <div className="blog-left-container">
              <div className="space-left">
                <div className="spaces-banner-details">
                  <div className="space-banner-header">
                    <h1 className="cmn-header">Explore The Square</h1>
                  </div>
                  <div className="space-banner-sub">
                    <h2 className="cmn-sub-title">ONE DESTINATION. DIFFERENT EXPERIENCES.</h2>
                  </div>
                  <div className="space-banner-description">
                    <p className="cmn-text">
                      Discover a collection of spaces, each with its own character, atmosphere and
                      story.
                    </p>
                  </div>
                  <div className="space-banner-link" style={{ justifyContent: 'flex-start' }}>
                    <Link to="/spaces" className="cmn-link">
                      Explore The Spaces
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-menu-right space-dropdown-menu-right">
          <Swiper
            className="autoplay"
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {slides.map((space, i) => (
              <SwiperSlide key={`${space.slug}-${i}`}>
                <div className="hover-div">
                  <img src={space.slide} alt={space.name} />
                  <div className="slider-img-bottom">
                    <div className="slider-img-v-line"></div>
                    <div className="slider-img-v-num">{space.number}</div>
                    <div className="slider-img-v-text">{space.name}</div>
                    <div className="space-slide-tagline">{space.tagline}</div>
                    {space.note && <div className="space-slide-tagline">{space.note}</div>}
                    <Link to={`/${space.slug}`}>{space.cta} →</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
