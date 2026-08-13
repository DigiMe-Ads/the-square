import { useNavigate } from 'react-router-dom'

// Shared template for spaces that aren't open yet (Nidahasa, Sono, Suisse Deli,
// Event Space). Only the image and copy differ per space.
export default function ComingSoon({ image, alt = 'Coming soon', text }) {
  const navigate = useNavigate()

  return (
    <div className="background">
      <div className="content">
        <img src={image} alt={alt} />
        <h1>COMING SOON!</h1>
        <p>{text}</p>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  )
}
