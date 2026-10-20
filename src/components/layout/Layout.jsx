import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ReservationModal from '../reservation/ReservationModal'

// App shell shared by every page: glass navbar, page content, footer and the
// global reservation modal.
export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ReservationModal />
    </>
  )
}
