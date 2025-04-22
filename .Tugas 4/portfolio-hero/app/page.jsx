import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RecentWorkSection from "@/components/recent-work-section"
import PortfolioShowcase from "@/components/portfolio-showcase"
import TestimonialsSection from "@/components/testimonials-section"
import FooterSection from "@/components/footer-section"
import Navbar from "@/components/navbar"
import MenuOverlay from "@/components/menu-overlay"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MenuOverlay />
      <HeroSection />
      <div className="bg-white">
        <AboutSection />
        <RecentWorkSection />
        <PortfolioShowcase />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </main>
  )
}
