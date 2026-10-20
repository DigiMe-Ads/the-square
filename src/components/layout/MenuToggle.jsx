import './MenuToggle.css'

// Animated hamburger ↔ close button for the brands menu.
export default function MenuToggle({ open, onClick }) {
  return (
    <button
      type="button"
      className={`menu-toggle${open ? ' is-open' : ''}`}
      onClick={onClick}
      aria-expanded={open}
      aria-controls="brand-menu"
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <span className="menu-toggle__label">{open ? 'Close' : 'Our Spaces'}</span>
      <span className="menu-toggle__icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </button>
  )
}
