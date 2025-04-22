"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
        if (isOpen) setIsOpen(false)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isOpen])

  return (
    <>
      {/* Hand with black background that triggers the menu */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40" onClick={() => setIsOpen(true)}>
        <div className="bg-black rounded-l-full py-3 px-4 flex items-center cursor-pointer">
          <img src="/images/hand.png" alt="Menu" className="w-10 h-10 wave-animation" />
        </div>
      </div>

      {/* Menu overlay */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#0B0C0E] text-white z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "w-[900px]" : "w-0 opacity-0"
        }`}
      >
        <div className="p-12 h-full flex flex-col">
          <button onClick={() => setIsOpen(false)} className="absolute top-7 right-7 text-white hover:text-gray-300">
            <X size={24} />
          </button>

          <nav className="flex flex-col space-y-8 mt-32">
            <Link href="/" className="text-[60px] font-medium hover:text-gray-300">
              Home
            </Link>
            <Link href="#about" className="text-[60px] font-medium hover:text-gray-300">
              About
            </Link>
            <Link href="#work" className="text-[60px] font-medium hover:text-gray-300">
              Work
            </Link>
            <Link href="/contact" className="text-[60px] font-medium hover:text-gray-300">
              Contact
            </Link>
          </nav>

          <div className="mt-auto mb-8">
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Webflow
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
