// Opening hours / contact / location strip shown on space detail pages.
// Items without data (e.g. an unconfirmed email) are left out.
export default function OpeningHours({ space }) {
  const items = [
    { key: 'hours', icon: '/img/opening.png', title: 'Opening Hours', lines: space.hours },
    space.phone && {
      key: 'phone',
      icon: '/img/phonenumber.png',
      title: 'Contact',
      lines: [<a key="tel" href={`tel:${space.phone.replace(/\s/g, '')}`}>{space.phone}</a>],
    },
    space.email && {
      key: 'email',
      icon: '/img/email.png',
      title: 'Email',
      lines: [<a key="mail" href={`mailto:${space.email}`}>{space.email}</a>],
    },
    space.location && { key: 'location', icon: '/img/location.png', title: 'Location', lines: [space.location] },
  ].filter(Boolean)

  return (
    <div className="time-wrapper">
      <div className="time-container">
        <div className="time-items">
          {items.map((item) => (
            <div className="time-item" key={item.key}>
              <div className="time-item-inner">
                <div className="time-item-img">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="time-item-title">
                  <h4>{item.title}</h4>
                </div>
                <div className="time-item-description">
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
