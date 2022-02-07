import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-primary py-5 sticky top-0 text-white font-semibold z-50">
      <div className="flex justify-between max-w-screen-2xl m-auto px-7">
          <Link href="/">
            <a className="link-decoration">Home</a>
          </Link>
          <Link href="/about">
            <a className="link-decoration">About us</a>
          </Link>
          <Link href="/team">
            <a className="link-decoration">Our Team</a>
          </Link>
          <Link href="/news">
            <a className="link-decoration">News</a>
          </Link>
          <Link href="/products">
            <a className="link-decoration">Products</a>
          </Link>
          <Link href="/sites">
            <a className="link-decoration">Our Sites</a>
          </Link>
          <Link href="/contact">
            <a className="link-decoration">Contact us</a>
          </Link>
      </div>
    </nav>
  )
}
