import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import './Gallery.css'

// Masonry photo gallery that opens a full-screen lightbox on click.
export default function Gallery({ images, title = 'A taste of the table.' }) {
  const [index, setIndex] = useState(-1)

  return (
    <section className="section tone-deep gallery">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title={title} className="section-heading--spaced" />
        <div className="gallery__grid">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 90} className="gallery__item">
              <button type="button" className="gallery__btn zoom-host" onClick={() => setIndex(i)} aria-label={`View photo: ${img.alt}`}>
                <span className="zoom-media">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </span>
                <span className="gallery__hint" aria-hidden="true">
                  <i className="fa-solid fa-expand" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </section>
  )
}
