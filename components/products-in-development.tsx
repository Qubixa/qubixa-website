import { Shield, Mic, Star, Zap } from "lucide-react"

export function ProductsInDevelopment() {
  const products = [
    {
      name: "Qubixa Asset Pro",
      description: "Comprehensive asset management solution for enterprises",
      keyFeatures: [
        "Real-time asset tracking",
        "Automated maintenance scheduling",
        "Advanced analytics dashboard",
        "Mobile-first design",
        "Integration with existing systems",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      icon: Shield,
      status: "In Development",
      progress: 75,
    },
    {
      name: "Qubixa Speech Pro",
      description: "AI-powered speech recognition and analysis platform",
      keyFeatures: [
        "Multi-language support",
        "Real-time transcription",
        "Sentiment analysis",
        "Voice biometrics",
        "Custom model training",
      ],
      techStack: ["Python", "TensorFlow", "FastAPI", "Redis", "Kubernetes"],
      icon: Mic,
      status: "In Development",
      progress: 60,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Products in Development
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions currently being crafted to revolutionize how businesses operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <product.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-1">
                    {product.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Development Progress</span>
                  <span className="text-sm font-medium text-blue-600">{product.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${product.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-blue-500 mr-2" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
