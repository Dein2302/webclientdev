"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    // Clean implementation of the marquee effect
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    // Clear any existing content first to prevent duplication
    marqueeElement.innerHTML = ""

    // Create the text element
    const text = document.createElement("div")
    text.className = "inline-block whitespace-nowrap"
    text.innerHTML = "Webflow Developer — UI/UX Designer — Web Designer —&nbsp;"

    // Calculate how many copies we need to fill the screen width
    const textWidth = text.offsetWidth || 1000 // Fallback width if can't calculate
    const screenWidth = window.innerWidth
    const copiesNeeded = Math.ceil(screenWidth / textWidth) * 2 + 2 // Add extra copies for safety

    // Add the copies
    for (let i = 0; i < copiesNeeded; i++) {
      const clone = text.cloneNode(true)
      marqueeElement.appendChild(clone)
    }
  }, [])

  return (
    <div className="relative h-screen bg-[#e6eaed] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img src="/images/hero.png" alt="Portrait" className="h-full object-contain z-10" />
      </div>

      {/* Running Text Container */}
      <div className="absolute w-full overflow-hidden z-20 top-[70%] transform -translate-y-1/2">
        <div
          ref={marqueeRef}
          className="marquee-text-container"
          style={{
            animation: "marquee 60s linear infinite",
            display: "inline-block",
            whiteSpace: "nowrap",
            fontSize: "10rem",
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
          }}
        >
          {/* Content will be added by JavaScript */}
        </div>
      </div>
    </div>
  )
}
