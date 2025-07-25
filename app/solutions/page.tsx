import { Lightbulb, Target, Zap, Shield, TrendingUp, Users } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Modernize your business processes and embrace digital technologies to stay competitive in today's market.",
      benefits: [
        "Streamlined business processes",
        "Improved operational efficiency",
        "Enhanced customer experience",
        "Data-driven decision making",
      ],
      industries: ["Manufacturing", "Retail", "Healthcare", "Finance"],
    },
    {
      icon: Shield,
      title: "Enterprise Software Solutions",
      description:
        "Custom enterprise applications designed to meet your specific business requirements and scale with your growth.",
      benefits: [
        "Tailored to your business needs",
        "Scalable architecture",
        "Integration with existing systems",
        "Enhanced security and compliance",
      ],
      industries: ["Enterprise", "Government", "Education", "Non-profit"],
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description:
        "Leverage artificial intelligence to automate repetitive tasks and gain intelligent insights from your data.",
      benefits: [
        "Reduced manual workload",
        "Improved accuracy and consistency",
        "Predictive analytics capabilities",
        "Cost reduction and ROI improvement",
      ],
      industries: ["Manufacturing", "Logistics", "Customer Service", "HR"],
    },
    {
      icon: Users,
      title: "Customer Experience Enhancement",
      description:
        "Create exceptional customer experiences through intuitive interfaces and personalized interactions.",
      benefits: [
        "Increased customer satisfaction",
        "Higher conversion rates",
        "Improved brand loyalty",
        "Competitive advantage",
      ],
      industries: ["E-commerce", "SaaS", "Hospitality", "Banking"],
    },
    {
      icon: Target,
      title: "Data Analytics & Business Intelligence",
      description: "Transform your raw data into actionable insights that drive strategic business decisions.",
      benefits: [
        "Real-time data visualization",
        "Predictive analytics",
        "Performance monitoring",
        "Strategic planning support",
      ],
      industries: ["Retail", "Finance", "Healthcare", "Marketing"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Strategic guidance on emerging technologies and innovation opportunities for your business.",
      benefits: [
        "Technology roadmap planning",
        "Innovation strategy development",
        "Market opportunity analysis",
        "Risk assessment and mitigation",
      ],
      industries: ["Startups", "SMEs", "Enterprise", "Government"],
    },
  ]

  // const caseStudies = [
  //   {
  //     title: "E-commerce Platform Transformation",
  //     client: "Retail Company",
  //     challenge: "Legacy system causing slow performance and poor user experience",
  //     solution: "Modern React-based platform with microservices architecture",
  //     results: ["300% increase in page load speed", "45% increase in conversion rate", "60% reduction in bounce rate"],
  //   },
  //   {
  //     title: "AI-Powered Customer Service",
  //     client: "Telecommunications Provider",
  //     challenge: "High volume of customer inquiries overwhelming support team",
  //     solution: "Intelligent chatbot with natural language processing",
  //     results: ["70% reduction in response time", "40% decrease in support tickets", "85% customer satisfaction rate"],
  //   },
  //   {
  //     title: "Asset Management System",
  //     client: "Manufacturing Company",
  //     challenge: "Manual asset tracking leading to inefficiencies and losses",
  //     solution: "IoT-enabled asset tracking with real-time monitoring",
  //     results: [
  //       "95% improvement in asset visibility",
  //       "30% reduction in maintenance costs",
  //       "50% decrease in asset downtime",
  //     ],
  //   },
  // ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to solve real-world business challenges and drive digital
            transformation.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, industryIndex) => (
                      <span key={industryIndex} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how our solutions have transformed businesses and delivered measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{study.client}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Solution Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to understanding your challenges and delivering effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis",
                description: "Deep dive into your business challenges and requirements",
                icon: Target,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a comprehensive solution strategy and roadmap",
                icon: Lightbulb,
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the solution with agile development practices",
                icon: Zap,
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and optimization for best results",
                icon: TrendingUp,
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <phase.icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
