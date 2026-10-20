import { createContext, useCallback, useContext, useMemo, useState } from 'react'

// Holds the open/closed state of the global reservation modal so any component
// (navbar RESERVE button, etc.) can trigger it without prop-drilling.
const ReservationContext = createContext(null)

export function ReservationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useReservation() {
  const ctx = useContext(ReservationContext)
  if (!ctx) throw new Error('useReservation must be used within a ReservationProvider')
  return ctx
}
