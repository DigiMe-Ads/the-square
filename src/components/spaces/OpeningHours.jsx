// Opening hours / email / phone trio shown on space detail pages.
export default function OpeningHours() {
  return (
    <div className="time-wrapper">
      <div className="time-container">
        <div className="time-items">
          <div className="time-item">
            <div className="time-item-inner">
              <div className="time-item-img">
                <img src="/img/opening.png" alt="Opening hours" />
              </div>
              <div className="time-item-title">
                <h4>Opening Hours</h4>
              </div>
              <div className="time-item-description">
                <p>
                  MONDAY to FRIDAY : <span>01.00</span>AM - <span>12.00</span>
                </p>
                <p>
                  WEEKENDs : <span>10.00</span>AM - <span>12.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="time-item">
            <div className="time-item-inner">
              <div className="time-item-img">
                <img src="/img/email.png" alt="Email" />
              </div>
              <div className="time-item-title">
                <h4>E mail</h4>
              </div>
              <div className="time-item-description">
                <p>contact@thesqure.com</p>
              </div>
            </div>
          </div>
          <div className="time-item">
            <div className="time-item-inner">
              <div className="time-item-img">
                <img src="/img/phonenumber.png" alt="Phone number" />
              </div>
              <div className="time-item-title">
                <h4>Phone Number</h4>
              </div>
              <div className="time-item-description">
                <p>
                  <span>+94 123 456 789</span>
                </p>
                <p>
                  <span>+94 123 456 789</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
