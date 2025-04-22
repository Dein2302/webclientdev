import { ArrowUpRight } from "lucide-react"

export default function RecentWorkSection() {
  const projects = [
    {
      name: "Decodable.co",
      tags: "Brand Design - Webflow Development - Web Design",
      link: "#",
    },
    {
      name: "Gofirefly.io",
      tags: "Brand Design - Webflow Development - Web Design",
      link: "#",
    },
    {
      name: "Blinkops.com",
      tags: "Brand Design - Webflow Development - Web Design",
      link: "#",
    },
    {
      name: "Withkanvas.com",
      tags: "Brand Design - Webflow Development - Web Design",
      link: "#",
    },
  ]

  return (
    <section id="work" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="section-heading">Recent Work</h2>
        </div>
        <div className="md:col-span-9">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-gray-300 pb-8">
                <div className="flex justify-between items-center">
                  <h3 className="project-title">{project.name}</h3>
                  <a
                    href={project.link}
                    className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <p className="project-tag text-gray-600 mt-2">{project.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
