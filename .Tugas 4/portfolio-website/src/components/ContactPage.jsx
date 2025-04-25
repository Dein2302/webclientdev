"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8">
        <div className="text-gray-800 font-medium">@Ayush Barnwal</div>
        <div className="flex gap-8">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <a href="/#about" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="/#work" className="text-gray-800 hover:text-gray-600">
            Work
          </a>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Profile and Contact Details */}
        <div>
          <div className="mb-10">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
              <img src="/images/BottomHeroPNG.png" alt="Ayush Barnwal" className="object-cover w-full h-full" />
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Contact Details</h3>
              <p className="text-gray-800 mb-2">ayush.barnwal@brightscout.com</p>
              <p className="text-gray-800">+91 8651447521</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Social</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Instagram
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Twitter
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Webflow
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Figma
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <h2 className="text-4xl font-medium mb-10">Let's build something cool together</h2>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-medium text-green-800 mb-2">Thank you!</h3>
              <p className="text-green-700">Your message has been sent successfully. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="James Robert"
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:ring-0 focus:border-gray-900 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ayush.barnwal@brightscout.com"
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:ring-0 focus:border-gray-900 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="For web design work Enquire"
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:ring-0 focus:border-gray-900 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your Message"
                  rows={4}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:ring-0 focus:border-gray-900 outline-none transition resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              Build with{" "}
              <span className="inline-block mx-1 text-red-500">
                <Heart size={14} fill="currentColor" />
              </span>{" "}
              by Alwi
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Webflow
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
