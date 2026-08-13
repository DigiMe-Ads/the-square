// "Where History Meets Modern Indulgence" intro block on the home page.
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
              <h1 className="cmn-header">Creating Heading in Here</h1>
            </div>
            <div className="creative-banner-sub">
              <h2 className="cmn-sub-title">Where History Meets Modern Indulgence</h2>
            </div>
            <div className="creative-banner-description">
              <p className="cmn-text">
                Steeped in colonial heritage, The Square stands as a testament to Sri Lanka's rich
                past. Originally conceived as the city's Asylum in 1875, this architectural gem later
                housed government offices, bearing witness to the nation's evolution. Today, this
                monumental building has been transformed into a vibrant hub of culinary delights and
                social gatherings. We invite you to step through our historic doors and become part
                of The Square's next chapter.
              </p>
            </div>
            <div className="creative-link"></div>
            <div className="creative-img">
              <img src="/img/squre.png" alt="The Square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
