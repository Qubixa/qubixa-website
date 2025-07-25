import { Code, Monitor, Server, Brain, Smartphone, Cloud } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: [
        "React & Next.js Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful desktop solutions for Windows, macOS, and Linux platforms.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Offline Functionality",
        "System Integration",
        "Custom UI/UX Design",
      ],
      technologies: ["Electron", "Python", "C++", "Qt", "JavaFX"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust and scalable backend systems that power your applications.",
      features: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Database Design & Optimization",
        "Microservices Architecture",
        "Real-time Communication",
      ],
      technologies: ["Node.js", "Python", "Django", "FastAPI", "MongoDB"],
    },
    // {
    //   icon: Brain,
    //   title: "AI Integration",
    //   description: "Intelligent solutions that leverage artificial intelligence and machine learning.",
    //   features: [
    //     "Natural Language Processing",
    //     "Computer Vision",
    //     "Predictive Analytics",
    //     "Chatbot Development",
    //     "Custom AI Models",
    //   ],
    //   technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Python"],
    // },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native Development",
        "Native iOS & Android",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Mobile UI/UX Design",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    },
    // {
    //   icon: Cloud,
    //   title: "Cloud Solutions",
    //   description: "Scalable cloud infrastructure and deployment solutions.",
    //   features: [
    //     "AWS/Azure/GCP Deployment",
    //     "DevOps & CI/CD",
    //     "Container Orchestration",
    //     "Serverless Architecture",
    //     "Cloud Migration",
    //   ],
    //   technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    // },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
