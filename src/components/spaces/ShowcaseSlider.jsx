import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { showcaseSlides } from '../../data/spaces'
import 'swiper/css'

// Generic "featured spaces" carousel used on space detail pages. Repeats the
// base showcase slides so the autoplay loop always has enough items.
export default function ShowcaseSlider() {
  const slides = [...showcaseSlides, ...showcaseSlides, ...showcaseSlides, ...showcaseSlides]

  return (
    <div className="slider-wrapper">
      <div className="dropdown-menu-container space-dropdown-menu-container space-slider">
        <div className="festival-container">
          <div className="festival-inner">
            <div className="festival-top">
              <div className="festival-banner-header">
                <h1 className="cmn-header">Creating Heading in Here</h1>
              </div>
              <div className="festival-banner-sub">
                <h2 className="cmn-sub-title">SUB HEADING IN HERE - OUR EVENTS</h2>
              </div>
              <div className="festival-banner-text">
                <p className="cmn-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat, maxime
                  deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo nesciunt
                  ipsa
                </p>
              </div>
              <div className="festival-banner-link">
                <a href="#contact" className="cmn-link">
                  Explore
                </a>
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
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="slide-image-spaces">
                  <img src={slide.img} alt={slide.text} />
                  <div className="slider-img-bottom">
                    <div className="slider-img-v-line"></div>
                    <div className="slider-img-v-num">{slide.number}</div>
                    <div className="slider-img-v-text">{slide.text}</div>
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
