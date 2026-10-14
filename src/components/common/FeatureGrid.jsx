// Responsive grid of short { title, text } items.
export default function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <div className="feature-grid-item" key={item.title}>
          <h3>{item.title}</h3>
          <p className="cmn-text">{item.text}</p>
        </div>
      ))}
    </div>
  )
}
