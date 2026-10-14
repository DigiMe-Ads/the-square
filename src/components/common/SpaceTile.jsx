// Square brand tile for a space: its logo image, or a text tile in the same
// format until a logo is supplied.
export default function SpaceTile({ space }) {
  if (space.logo) return <img className="space-tile" src={space.logo} alt={space.name} />

  return (
    <div className="space-tile space-tile-text" style={{ background: space.tileColor }} role="img" aria-label={space.name}>
      <span>{space.name}</span>
    </div>
  )
}
