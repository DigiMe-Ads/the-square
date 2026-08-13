// Two-column intro used on the May's Table detail page: story copy + image,
// with a download-menu link and QR code.
export default function SpaceIntro() {
  return (
    <div className="table_wrapper">
      <div className="table_container">
        <div className="table_inner">
          <div className="table_banner_left">
            <div className="table-banner-details">
              <div className="table-banner-header">
                <h1 className="cmn-header">MAY's TABLE</h1>
              </div>
              <div className="table-banner-sub">
                <h2 className="cmn-sub-title">SUB HEADING IN HERE - MAY'S TABLE</h2>
              </div>
              <div className="cc-description">
                <p>
                  From Street Food to Global Flavors: The MAY's Story MAY's journey began in 2009
                  with a humble street food stall in Bangkok, founded by May, the youngest daughter
                  of Thai farmers. Fueled by passion and creativity, this small venture quickly grew
                  into MAY's Garden House, capturing the hearts of food lovers everywhere.
                </p>
                <p>
                  Recognized as a "global gastrodiplomat," May has since expanded her culinary
                  vision across the world. Today, MAY's restaurants span from Bali to Mexico City,
                  each offering a unique fusion of Thai cuisine with local flavors.
                </p>
                <p>
                  Our commitment to innovation never wavers. Even through global challenges, we've
                  continued to grow, most recently opening MAY's Table in Colombia in 2024.
                </p>
                <p>
                  At MAY's, every dish tells a story of cultural exchange and culinary adventure. We
                  blend May's secret ingredients with locally-sourced flavors, creating unforgettable
                  dining experiences that bridge cultures and palates.
                </p>
                <p>Join us at MAY's - where love, passion, and global inspiration meet on every plate.</p>
              </div>
              <div className="table-link">
                <a
                  href="https://www.mayspattaya.com/mays-table"
                  target="_blank"
                  rel="noreferrer"
                  className="cmn-link"
                >
                  <p>DOWNLOAD MENU</p>
                  <img src="/img/download.png" alt="Download" />
                </a>
                <div className="qr-link">
                  <span>Scan and download menu here</span>
                  <img src="/img/qr.png" alt="Menu QR code" />
                </div>
              </div>
            </div>
          </div>
          <div className="table_banner_right">
            <div className="table-bg">
              <img src="/img/table.png" alt="May's Table" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
