import { Users, Target, Award, Heart } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with our clients to understand their needs and exceed expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about technology and committed to making a positive impact through our work.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Qubixa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Box of Solutions - Where Innovation Meets Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story : "Qubixa" The Box Of Solution</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, The Box of Solution began with a clear vision: to simplify technology and deliver smart, scalable, and meaningful software solutions that drive real business outcomes.
                </p>
                <p>
                 What started as a small team of passionate developers has grown into a tight-knit group of 10+ skilled professionals, each bringing 2–3 years of hands-on experience across diverse technologies. Operating fully remotely, our team embraces agility, collaboration, and a problem-solving mindset to help clients transform ideas into impactful digital products.
                </p>
                <p>
                  Our name, “The Box of Solution,” reflects our core philosophy — we are the space where ideas are transformed into results, and challenges are met with innovative, structured, and forward-thinking solutions.
                </p>
               <p>Today, we proudly serve as a trusted technology partner for startups, enterprises, and agencies that value quality, reliability, and innovation.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                  <div className="text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Services We Provide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver comprehensive solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technologies We Master</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
                  <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS, Vue.js</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                  <p className="text-gray-600">Node.js, Python, Django, FastAPI, Express.js</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Databases</h4>
                  <p className="text-gray-600">PostgreSQL, MongoDB, Redis, MySQL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cloud & DevOps</h4>
                  <p className="text-gray-600">AWS, Docker, Kubernetes, CI/CD</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">AI & Machine Learning</h4>
                  <p className="text-gray-600">TensorFlow, PyTorch, OpenAI, Computer Vision</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Services We Offer</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Custom Software Development</h4>
                  <p className="text-gray-600">Tailored solutions designed to meet your specific business needs.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Digital Transformation</h4>
                  <p className="text-gray-600">Modernize your business processes with cutting-edge technology.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">AI Integration</h4>
                  <p className="text-gray-600">Implement intelligent automation to enhance your operations.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Consulting</h4>
                  <p className="text-gray-600">Expert guidance on technology strategy and implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
