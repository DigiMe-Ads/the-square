import { useEffect } from 'react'

// Shared behaviour for full-screen overlays (menu, modal): locks page scroll
// while open and closes on Escape.
export default function useOverlay(open, onClose) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])
}
