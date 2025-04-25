export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Ayush Raj",
      title: "VP of Marketing @ Webflow",
      image: "/images/testimonials/Ayush-Raj.png",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Alex Cattoni",
      title: "Founder @ CopyPosse",
      image: "/images/testimonials/Alex-Cattoni.png",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="testimonial-heading">Testimonials</h2>
        </div>
        <div className="md:col-span-9 space-y-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p className="testimonial-quote mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                </div>
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-title text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
