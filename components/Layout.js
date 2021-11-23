import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl m-auto px-7">{children}</main>
      <Footer/>
    </>
  )
}