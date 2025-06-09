"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Users, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every line of code and communication. Trust is the foundation of our relationships.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Scalability",
    description:
      "We design our architectures with future growth in mind, ensuring our solutions can adapt to evolving demands.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Lightbulb,
    title: "Simplicity",
    description:
      "We believe in creating intuitive user experiences and elegant designs that make technology accessible to all.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We maintain open communication and provide clear visibility into our progress, fostering trust and collaboration.",
    color: "from-cyan-500 to-blue-600",
  },
]

const stats = [
  { number: "2025", label: "Founded" },
  { number: "100%", label: "Remote Team" },
  { number: "2", label: "Products in Development" },
  { number: "10+", label: "Technologies Mastered" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Circuit Pattern Background */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navigation */}
      <Navigation currentPage="About" />

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              A Team of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Builders
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto"
            >
              Thinkers, and Innovators driven by the desire to create impactful and intelligent software products.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 px-6 py-12 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our <span className="text-emerald-400">Story</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    Qubixa is an emerging technology company based in Mumbai, India, founded in 2025 with a mission to
                    solve real-world problems through smart, scalable software solutions.
                  </p>
                  <p>
                    We specialize in the development of web applications, desktop software, AI tools, and mobile-first
                    products. Our products are currently in the development and architectural phase, but our vision and
                    technical capability are firmly rooted in cutting-edge technology and quality delivery.
                  </p>
                  <p>
                    Operating without a physical office, we embrace a modern, remote-first approach that fosters a
                    culture of collaboration, flexibility, and efficient product development. This allows us to attract
                    top talent from across the globe and maintain a dynamic and innovative work environment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/90">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">What We Do</h3>
                    <ul className="space-y-4">
                      {[
                        "Develop scalable business software",
                        "Build AI-powered standalone desktop applications",
                        "Design responsive web and mobile applications",
                        "Deliver smart backend solutions and APIs",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span className="text-slate-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-emerald-400">Values</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/90 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/90 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Target className="w-8 h-8 text-emerald-400 mr-3" />
                      <h3 className="text-3xl font-bold text-white">Vision</h3>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      To become a trusted product studio recognized for developing intelligent, ethical, and scalable
                      software that empowers individuals and organizations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/90 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Users className="w-8 h-8 text-green-400 mr-3" />
                      <h3 className="text-3xl font-bold text-white">Mission</h3>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      To deliver quality-first, AI-capable applications that solve modern challenges in asset
                      management, automation, and digital transformation, while adhering to the highest standards of
                      ethical development and data privacy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
