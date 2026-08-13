import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Spaces from './pages/Spaces'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Events from './pages/Events'
import Faqs from './pages/Faqs'
import MaysTable from './pages/MaysTable'
import SpaceComingSoon from './pages/SpaceComingSoon'
import { spaces } from './data/spaces'

export default function App() {
  // Spaces that aren't open yet share the Coming Soon template, one route each.
  const comingSoonSpaces = spaces.filter((s) => s.status === 'coming-soon')

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/spaces" element={<Spaces />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/events" element={<Events />} />
      <Route path="/faqs" element={<Faqs />} />

      {/* Open space */}
      <Route path="/mays-table" element={<MaysTable />} />

      {/* Coming-soon spaces */}
      {comingSoonSpaces.map((space) => (
        <Route
          key={space.slug}
          path={`/${space.slug}`}
          element={<SpaceComingSoon space={space} />}
        />
      ))}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
