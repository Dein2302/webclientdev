"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-gray-800 font-medium">@Ayush Barnwal</div>
        <div className="flex gap-8">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <a href="#about" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="#work" className="text-gray-800 hover:text-gray-600">
            Work
          </a>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
