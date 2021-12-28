// TODO: when active mark underline

import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-primary py-5 sticky top-0 text-white font-semibold z-50">
      <div className="flex justify-between max-w-screen-2xl m-auto px-7">
          <Link href="/">
            <a className="nav__link-decoration">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav__link-decoration">About us</a>
          </Link>
          <Link href="/team">
            <a className="nav__link-decoration">Our Team</a>
          </Link>
          <Link href="/news">
            <a className="nav__link-decoration">News</a>
          </Link>
          <Link href="/products">
            <a className="nav__link-decoration">Products</a>
          </Link>
          <Link href="/sites">
            <a className="nav__link-decoration">Our Sites</a>
          </Link>
          <Link href="/contact">
            <a className="nav__link-decoration">Contact us</a>
          </Link>
      </div>
    </nav>
  )
}
