import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Spaces from './pages/Spaces'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Events from './pages/Events'
import Contact from './pages/Contact'
import SpaceDetail from './pages/SpaceDetail'
import { spaces } from './data/spaces'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experiences" element={<Spaces />} />
      <Route path="/spaces" element={<Navigate to="/experiences" replace />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />

      {/* One detail page per space */}
      {spaces.map((space) => (
        <Route key={space.slug} path={`/${space.slug}`} element={<SpaceDetail space={space} />} />
      ))}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
