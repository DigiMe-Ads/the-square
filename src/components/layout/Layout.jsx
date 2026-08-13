import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ReservationModal from '../common/ReservationModal'

// App shell shared by every page: fixed navbar, page content, footer and the
// global reservation modal. `footerBg` shows the decorative footer background
// (used on inner pages, hidden on the home page to match the original design).
export default function Layout({ children, footerBg = false }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer showBg={footerBg} />
      <ReservationModal />
    </>
  )
}
