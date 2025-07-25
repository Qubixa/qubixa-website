import { Code, Monitor, Server, Brain } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description:
        "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful desktop solutions that provide seamless functionality across different operating systems.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust and scalable backend systems that power your applications with reliability and security.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Intelligent solutions that leverage artificial intelligence to automate processes and enhance user experiences.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
