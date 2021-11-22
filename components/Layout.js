import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl m-auto px-7">{children}</main>
      <Footer/>
    </>
  )
}