"use client"

import { Code, Database, Cloud, Cpu } from "lucide-react"

export function TechStackNew() {
  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Next.js", category: "Framework", icon: "▲" },
    { name: "TypeScript", category: "Language", icon: "📘" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Python", category: "Language", icon: "🐍" },
    { name: "Django", category: "Framework", icon: "🎯" },
    { name: "FastAPI", category: "API", icon: "⚡" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "Redis", category: "Cache", icon: "🔴" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "Kubernetes", category: "Orchestration", icon: "⚙️" },
    { name: "TensorFlow", category: "AI/ML", icon: "🧠" },
    { name: "PyTorch", category: "AI/ML", icon: "🔥" },
    { name: "GraphQL", category: "API", icon: "📊" },
  ]

  const categories = [
    { name: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Backend", icon: Database, color: "from-green-500 to-emerald-500" },
    { name: "Cloud", icon: Cloud, color: "from-purple-500 to-pink-500" },
    { name: "AI/ML", icon: Cpu, color: "from-orange-500 to-red-500" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu size={16} />
            <span>Technology Stack</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold mb-6">Powered by Modern Tech</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions that drive your
            business forward.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Scrolling Technologies */}
        <div className="relative mb-16">
          <div className="flex space-x-6 scroll-animation">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 min-w-[200px]"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <div className="text-white font-semibold">{tech.name}</div>
                    <div className="text-gray-300 text-sm">{tech.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-300">Modern Stack</div>
          </div>
        </div>
      </div>
    </section>
  )
}
