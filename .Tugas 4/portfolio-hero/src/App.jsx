"use client"

import { useEffect, useRef } from "react"
import "./App.css"

function App() {
  const textRef = useRef(null)

  useEffect(() => {
    const scrollText = () => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth
        const animationDuration = textWidth * 0.02 // Adjust speed based on width

        textRef.current.style.animationDuration = `${animationDuration}s`
      }
    }

    scrollText()
    window.addEventListener("resize", scrollText)

    return () => {
      window.removeEventListener("resize", scrollText)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#e6eaed]">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8">
        <div className="text-gray-800 font-medium">@Ayush Barnwal</div>
        <div className="flex gap-8">
          <a href="#about" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="#work" className="text-gray-800 hover:text-gray-600">
            Work
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/images/hero.png" alt="Portrait" className="h-full object-contain z-10" />
        </div>

        {/* Running Text Container */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div
            ref={textRef}
            className="running-text whitespace-nowrap text-[10rem] font-bold text-white opacity-90 z-20"
          >
            Webflow Developer — UI/UX Designer — Web Designer —
          </div>
        </div>

        {/* Waving Hand */}
        <div className="absolute bottom-8 right-8 z-30">
          <img src="/images/hand.png" alt="Waving Hand" className="w-16 h-16 animate-wave" />
        </div>
      </div>
    </div>
  )
}

export default App
