import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import RecentWorkSection from "../components/RecentWorkSection"
import PortfolioShowcase from "../components/PortfolioShowcase"
import TestimonialsSection from "../components/TestimonialsSection"
import FooterSection from "../components/FooterSection"
import MenuOverlay from "../components/MenuOverlay"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MenuOverlay />
      <HeroSection />
      <div>
        <AboutSection />
        <RecentWorkSection />
        <PortfolioShowcase />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </main>
  )
}
