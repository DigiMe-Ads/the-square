import './SpaceTile.css'

// Square brand tile for a space: its logo, or a typographic tile in the
// brand colour until a logo file is supplied.
export default function SpaceTile({ space, className = '' }) {
  if (space.logo) {
    return <img className={`space-tile ${className}`} src={space.logo} alt={`${space.name} logo`} loading="lazy" />
  }

  return (
    <div
      className={`space-tile space-tile--text ${className}`}
      style={{ background: space.tileColor }}
      role="img"
      aria-label={`${space.name} logo`}
    >
      <span className="space-tile__name">{space.wordmark?.[0] ?? space.name}</span>
      {space.wordmark?.[1] && <span className="space-tile__sub">{space.wordmark[1]}</span>}
    </div>
  )
}
