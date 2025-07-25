import { Shield, Mic, Star, Zap, CheckCircle, Clock } from "lucide-react"

export default function Products() {
  const products = [
    {
      name: "Qubixa Asset Pro",
      tagline: "Enterprise Asset Management Redefined",
      description:
        "A comprehensive asset management solution designed for enterprises to track, manage, and optimize their assets with real-time insights and automated workflows.",
      keyFeatures: [
        "Real-time asset tracking with IoT integration",
        "Automated maintenance scheduling and alerts",
        "Advanced analytics and reporting dashboard",
        "Mobile-first responsive design",
        "Seamless integration with existing ERP systems",
        "Barcode and QR code scanning capabilities",
        "Multi-location asset management",
        "Compliance and audit trail management",
      ],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Redis",
        "GraphQL",
        "Prisma",
      ],
      icon: Shield,
      status: "In Development",
      progress: 75,
      expectedLaunch: "Q2 2024",
      targetMarket: "Enterprise & Mid-size Companies",
    },
    {
      name: "Qubixa Speech Pro",
      tagline: "AI-Powered Speech Intelligence Platform",
      description:
        "An advanced speech recognition and analysis platform that leverages cutting-edge AI to provide real-time transcription, sentiment analysis, and voice biometrics.",
      keyFeatures: [
        "Multi-language speech recognition (15+ languages)",
        "Real-time transcription with 95%+ accuracy",
        "Advanced sentiment and emotion analysis",
        "Voice biometrics and speaker identification",
        "Custom model training for domain-specific vocabulary",
        "API-first architecture for easy integration",
        "Batch processing for large audio files",
        "GDPR compliant data processing",
      ],
      techStack: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "FastAPI",
        "Redis",
        "Kubernetes",
        "OpenAI Whisper",
        "Hugging Face",
        "Docker",
        "PostgreSQL",
      ],
      icon: Mic,
      status: "In Development",
      progress: 60,
      expectedLaunch: "Q3 2024",
      targetMarket: "Call Centers & Media Companies",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Products in Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions currently being crafted to revolutionize how businesses operate and thrive in the
            digital age.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                      <product.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h2>
                      <p className="text-lg text-blue-600 font-medium">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full font-medium">
                      {product.status}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-medium">
                      Launch: {product.expectedLaunch}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

                {/* Progress and Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Development Progress</span>
                      <span className="text-sm font-bold text-blue-600">{product.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${product.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Expected Launch</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{product.expectedLaunch}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Target Market</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{product.targetMarket}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      Key Features
                    </h3>
                    <div className="space-y-3">
                      {product.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Zap className="w-6 h-6 text-blue-600 mr-3" />
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {product.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            More Products Coming Soon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're constantly innovating and developing new solutions. Stay tuned for more exciting products that will
            transform your business operations.
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full">
            <Clock size={20} />
            <span className="font-medium">Subscribe for updates on new product launches</span>
          </div>
        </div>
      </section>
    </div>
  )
}
