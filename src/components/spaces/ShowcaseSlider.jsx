import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { spaces } from '../../data/spaces'
import 'swiper/css'

// "Explore The Square" carousel on space detail pages, showing the other
// spaces. Repeats them so the autoplay loop always has enough items.
export default function ShowcaseSlider({ currentSlug }) {
  const others = spaces.filter((s) => s.slug !== currentSlug)
  const slides = [...others, ...others, ...others, ...others]

  return (
    <div className="slider-wrapper">
      <div className="dropdown-menu-container space-dropdown-menu-container space-slider">
        <div className="festival-container">
          <div className="festival-inner">
            <div className="festival-top">
              <div className="festival-banner-header">
                <h1 className="cmn-header">Explore The Square</h1>
              </div>
              <div className="festival-banner-sub">
                <h2 className="cmn-sub-title">ONE DESTINATION. DIFFERENT EXPERIENCES.</h2>
              </div>
              <div className="festival-banner-text">
                <p className="cmn-text">
                  Discover a collection of spaces, each with its own character, atmosphere and story.
                </p>
              </div>
              <div className="festival-banner-link">
                <Link to="/spaces" className="cmn-link">
                  Explore The Spaces
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-menu-right space-page-dropdown-menu-right">
          <Swiper
            className="autoplay"
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1600: { slidesPerView: 4 } }}
          >
            {slides.map((space, i) => (
              <SwiperSlide key={i}>
                <div className="slide-image-spaces">
                  <img src={space.slide} alt={space.name} />
                  <div className="slider-img-bottom">
                    <div className="slider-img-v-line"></div>
                    <div className="slider-img-v-num">{space.number}</div>
                    <div className="slider-img-v-text">{space.name}</div>
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
