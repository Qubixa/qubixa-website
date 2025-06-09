"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, Database, Globe, Smartphone, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const techLogos = [
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "Next.js", icon: "⚡", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Flask", icon: "🌶️", category: "Backend" },
  { name: "AI/ML", icon: "🤖", category: "AI" },
]

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable, responsive web solutions built with modern frameworks",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Desktop Applications",
    description: "AI-powered standalone applications for enhanced productivity",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Database,
    title: "Backend Solutions",
    description: "Robust APIs and database architectures for enterprise needs",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Intelligent features powered by machine learning and NLP",
    color: "from-cyan-500 to-blue-600",
  },
]

const products = [
  {
    title: "Qubixa Asset Pro",
    description: "Comprehensive platform for tracking and managing physical assets throughout their lifecycle",
    status: "In Development",
    tech: ["Python", "Flask", "Next.js", "PostgreSQL"],
    features: ["Department-wise allocation", "Maintenance logs", "Audit reports", "QR integration"],
  },
  {
    title: "Qubixa Speech Pro",
    description: "AI-powered desktop application for real-time speech recognition and multi-language translation",
    status: "Architecture Phase",
    tech: ["Python", "NLP", "Speech Recognition", "Translation APIs"],
    features: ["Multi-language support", "Offline capability", "Real-time translation", "High accuracy"],
  },
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTech, setCurrentTech] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techLogos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Navigation */}
      <Navigation currentPage="Home" />

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative z-10 px-6 py-24">
          <div className="max-w-7xl mx-auto text-center">
            {/* Welcome Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-8 backdrop-blur-sm">
                <span className="text-emerald-400 text-sm font-semibold tracking-wide">
                  Welcome to the Future of Software
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            >
              The Box of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Smart software. Scalable solutions. We craft intelligent applications that solve real-world problems
              through cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            >
              <Link href="/solutions">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 font-semibold text-lg"
                >
                  Explore Solutions
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Floating 3D Cubes Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-lg backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 20}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                What We <span className="text-emerald-400">Build</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                From AI-powered desktop applications to scalable web platforms, we deliver intelligent solutions that
                drive innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full backdrop-blur-sm hover:bg-slate-800/90">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products in Development */}
        <section className="relative z-10 px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Products in <span className="text-emerald-400">Development</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Innovative solutions currently being crafted to solve real-world challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full backdrop-blur-sm hover:bg-slate-800/90">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                        <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/30">
                          {product.status}
                        </span>
                      </div>
                      <p className="text-slate-300 mb-8 leading-relaxed text-lg">{product.description}</p>

                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4 text-lg">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                              <span className="text-slate-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-3">
                          {product.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-slate-700/80 text-slate-300 rounded-full text-sm font-medium border border-slate-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Powered by <span className="text-emerald-400">Modern Tech</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
                We leverage cutting-edge technologies to build robust, scalable, and intelligent solutions.
              </p>
            </motion.div>

            <div className="flex justify-center items-center space-x-8 overflow-hidden">
              {techLogos.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center p-8 rounded-2xl transition-all duration-500 ${
                    currentTech === index
                      ? "bg-emerald-500/10 border-2 border-emerald-500/50 scale-110 shadow-xl shadow-emerald-500/20"
                      : "bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800/80"
                  }`}
                >
                  <div className="text-5xl mb-3">{tech.icon}</div>
                  <span className="text-white font-semibold text-lg">{tech.name}</span>
                  <span className="text-emerald-400 text-sm font-medium">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800/80 to-emerald-900/40 rounded-3xl p-16 border border-emerald-500/20 backdrop-blur-sm"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Transform Your Ideas?</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Let's collaborate and build intelligent solutions that drive your business forward.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-16 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 font-semibold text-lg"
                >
                  Start Your Project
                  <Zap className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sticky CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
