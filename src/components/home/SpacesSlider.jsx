import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { homeSpaceSlides } from '../../data/spaces'
import 'swiper/css'

// Home "Our Spaces" section: intro copy on the left, autoplaying carousel on
// the right (replaces the original jQuery slick slider with Swiper).
export default function SpacesSlider() {
  return (
    <div className="slider-wrapper">
      <div className="dropdown-menu-container space-dropdown-menu-container">
        <div className="dropdown-menu-left space-dropdown-menu-left">
          <div className="spaces-menu-left-container">
            <div className="blog-left-container">
              <div className="space-left">
                <div className="spaces-banner-details">
                  <div className="space-banner-header">
                    <h1 className="cmn-header">Our Spaces</h1>
                  </div>
                  <div className="space-banner-description">
                    <p className="cmn-text">
                      Explore The Square's diverse spaces, each offering a unique experience. Sample
                      global cuisines, engage in cultural happenings, or simply unwind. Here, history
                      and modernity converge, creating a dynamic urban retreat in the heart of
                      Colombo.
                    </p>
                  </div>
                  <div className="space-banner-link" style={{ justifyContent: 'flex-start' }}>
                    <Link to="/spaces" className="cmn-link">
                      Explore
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
            {homeSpaceSlides.map((slide) => (
              <SwiperSlide key={slide.number}>
                <div className="hover-div">
                  <img src={slide.img} alt={slide.text} />
                  <div className="slider-img-bottom">
                    <div className="slider-img-v-line"></div>
                    <div className="slider-img-v-num">{slide.number}</div>
                    <div className="slider-img-v-text">{slide.text}</div>
                    <Link to={slide.to}>See More</Link>
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
