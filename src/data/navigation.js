// Navigation data: the space thumbnails shown in the hamburger dropdown,
// the dropdown text links, and the footer link columns.
import { spaces } from './spaces'

// Thumbnails on the left of the dropdown menu (link straight to each space).
export const dropdownSpaces = spaces.map((s) => ({ to: `/${s.slug}`, img: s.thumb, alt: s.name }))

// Text links at the bottom of the dropdown menu.
export const dropdownLinks = [
  { to: '/about', label: 'About' },
  { to: '/spaces', label: 'Spaces' },
  { to: '/events', label: 'Events' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

// Footer "Quick Links" column.
export const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/spaces', label: 'Spaces' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

// Footer "Spaces" column.
export const footerSpaceLinks = [
  { to: '/mays-table', label: "MAY's Table" },
  { to: '/nidahas', label: 'Nidahas' },
  { to: '/summer-colombo', label: 'Summer Colombo' },
  { to: '/barista', label: 'Barista' },
]
