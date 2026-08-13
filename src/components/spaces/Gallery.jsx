import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { maysGallery } from '../../data/gallery'

// Image grid that opens a full-screen lightbox on click (replaces the original
// jQuery lightbox). `images` defaults to the May's Table gallery.
export default function Gallery({ images = maysGallery }) {
  const [index, setIndex] = useState(-1)

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <section className="gallery-section">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              onClick={() => setIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </section>

        <Lightbox
          open={index >= 0}
          index={index < 0 ? 0 : index}
          close={() => setIndex(-1)}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
          on={{ view: ({ index: i }) => setIndex(i) }}
        />
      </div>
    </div>
  )
}
