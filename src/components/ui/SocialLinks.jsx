import { site } from '../../data/site'
import './SocialLinks.css'

const LINKS = [
  { key: 'facebook', label: 'Facebook', icon: 'fa-facebook-f' },
  { key: 'instagram', label: 'Instagram', icon: 'fa-instagram' },
]

// Facebook / Instagram icons in equal circular buttons so they always line up.
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`}>
      {LINKS.filter((l) => site.social[l.key]).map((link) => (
        <li key={link.key}>
          <a href={site.social[link.key]} target="_blank" rel="noreferrer" aria-label={`The Square on ${link.label}`}>
            <i className={`fa-brands ${link.icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
