import "../styles/portfolio-showcase.css"

export default function PortfolioShowcase() {
  const portfolioItems = [
    {
      id: 1,
      image: "/images/portfolio/Porto2.png",
      title: "Glean",
      description: "Consistent metrics. Explorable in minutes.",
    },
    {
      id: 2,
      image: "/images/portfolio/Porto3.png",
      title: "Exostellar",
      description: "Build real-time data apps & services. Fast.",
    },
    {
      id: 3,
      image: "/images/portfolio/Porto4.png",
      title: "Nockknock",
      description: "Who's there?",
    },
    {
      id: 4,
      image: "/images/portfolio/Porto1.png",
      title: "Pixie Labs",
      description: "Instantly troubleshoot your applications on Kubernetes",
    },
  ]

  const portfolioItems2 = [
    {
      id: 5,
      image: "/images/portfolio/Porto5.png",
      title: "Blink",
      description: "No-code automation for CloudOps",
    },
    {
      id: 6,
      image: "/images/portfolio/Porto6.png",
      title: "Collections",
      description: "Buy, sell trade and form collections",
    },
    {
      id: 7,
      image: "/images/portfolio/Porto7.png",
      title: "RelationalAI",
      description: "First relational knowledge graph to power intelligent data apps",
    },
    {
      id: 8,
      image: "/images/portfolio/Porto8.png",
      title: "Phylum",
      description: "The future of software supply chain security",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-8 bg-[#C7D0D9] overflow-hidden">
      {/* First row - left to right */}
      <div className="portfolio-row">
        <div className="portfolio-track">
          {/* Original set */}
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {portfolioItems.map((item) => (
            <div key={`dup-${item.id}`} className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - right to left */}
      <div className="portfolio-row reverse">
        <div className="portfolio-track">
          {/* Original set */}
          {portfolioItems2.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {portfolioItems2.map((item) => (
            <div key={`dup-${item.id}`} className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
