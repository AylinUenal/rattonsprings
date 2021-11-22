import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="bg-primary py-5 sticky top-0 text-white font-semibold">
      <div className="flex justify-between max-w-screen-2xl m-auto px-7">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About us</a>
          </Link>
          <Link href="/news">
            <a>News</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/sites">
            <a>Our Sites</a>
          </Link>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
      </div>
    </nav>
  )
}
