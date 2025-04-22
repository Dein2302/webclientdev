import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-4xl font-medium mb-4">Have something in mind?</h2>
            <div className="flex items-center">
              <Image
                src="/images/BottomHeroPNG.png"
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full object-cover mr-4"
              />
              <p className="text-2xl md:text-4xl font-normal">let's build it together.</p>
            </div>
          </div>
        </div>

        {/* Bottom section with credits and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="mb-6 md:mb-0">
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://webflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Webflow
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
