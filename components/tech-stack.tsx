"use client"

export function TechStack() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "TensorFlow",
    "PyTorch",
    "GraphQL",
    "REST API",
    "Microservices",
    "DevOps",
    "CI/CD",
  ]

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Powered by Modern Tech</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
          </p>
        </div>

        {/* Scrolling Tech Stack */}
        <div className="relative">
          <div className="flex space-x-8 scroll-animation">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
