"use client"

import { motion } from "framer-motion"
import { CheckCircle, Database, Mic } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

const products = [
  {
    title: "Qubixa ManagePro",
    subtitle: "Comprehensive Asset Lifecycle Management",
    description:
      "A robust, web-based platform meticulously designed to empower organizations to efficiently manage their physical assets throughout their lifecycle. From initial acquisition to disposal, our system provides a comprehensive suite of tools for tracking, monitoring, and optimizing asset utilization.",
    status: "In Development",
    statusColor: "bg-emerald-500/20 text-emerald-400",
    icon: Database,
    features: [
      "Department-wise asset allocation & transfer",
      "Maintenance & depreciation logs",
      "Reports for audit and tracking",
      "Custom tagging and QR integration",
      "Scalable role-based access",
      "Real-time asset monitoring",
    ],
    techStack: ["Python", "Flask", "Next.js", "PostgreSQL"],
    useCases: [
      "Enterprise asset tracking",
      "Government inventory management",
      "Educational institution assets",
      "Healthcare equipment management",
    ],
  },
  {
    title: "Speech-to-Text & Translation Tool",
    subtitle: "AI-Powered Multilingual Communication",
    description:
      "A cutting-edge executable application designed to capture user speech and convert it into text with exceptional accuracy. Going beyond simple transcription, the tool offers real-time translation capabilities, supporting a range of Indian languages.",
    status: "Architecture Phase",
    statusColor: "bg-blue-500/20 text-blue-400",
    icon: Mic,
    features: [
      "Multi-language speech recognition",
      "Real-time translation",
      "Offline capability",
      "High accuracy transcription",
      "Indian language support",
      "Desktop application",
    ],
    techStack: ["Python", "NLP", "Speech Recognition", "Translation APIs"],
    useCases: [
      "Education & accessibility",
      "Local government documentation",
      "Field research & journalism",
      "Multilingual business meetings",
    ],
  },
]

const languages = [
  { name: "Hindi", flag: "🇮🇳", code: "hi" },
  { name: "Marathi", flag: "🇮🇳", code: "mr" },
  { name: "Tamil", flag: "🇮🇳", code: "ta" },
  { name: "English", flag: "🇺🇸", code: "en" },
]

const roadmapItems = [
  {
    phase: "Q1 2025",
    title: "Foundation & Core Development",
    description: "Complete core architecture and basic functionality",
    status: "current",
    items: ["System architecture", "Database design", "Core APIs", "Basic UI components"],
  },
  {
    phase: "Q2 2025",
    title: "Feature Implementation",
    description: "Implement advanced features and integrations",
    status: "upcoming",
    items: ["Asset tracking", "QR integration", "Role-based access", "Reporting system"],
  },
  {
    phase: "Q3 2025",
    title: "Testing & Optimization",
    description: "Comprehensive testing and performance optimization",
    status: "upcoming",
    items: ["Security testing", "Performance optimization", "User testing", "Bug fixes"],
  },
  {
    phase: "Q4 2025",
    title: "Launch & Deployment",
    description: "Production deployment and market launch",
    status: "upcoming",
    items: ["Production deployment", "Documentation", "Training materials", "Support system"],
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Qubixa Logo"
                  width={100}
                  height={100}
                  className="rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-md"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  Qubixa
                </h1>
                <p className="text-sm text-gray-600 font-medium">The Box of Solutions</p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Solutions", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 group ${
                  item === "Solutions" ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                <span className="relative z-10">{item}</span>
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    item === "Solutions"
                      ? "bg-emerald-50 border border-emerald-200"
                      : "bg-transparent group-hover:bg-emerald-50 group-hover:border group-hover:border-emerald-200"
                  }`}
                />
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                    item === "Solutions" ? "w-8 bg-emerald-600" : "w-0 bg-emerald-600 group-hover:w-8"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Intelligent{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
            >
              In the Making - Innovative solutions currently being crafted to solve real-world challenges.
            </motion.p>

            {/* New Call-to-Action Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block px-8 py-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 mb-12 backdrop-blur-sm"
            >
              <p className="text-emerald-400 font-semibold text-lg">
                We are ready to take on projects and customize them according to your requirements. Contact us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="relative z-10 px-6 py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg p-3">
                            <product.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                            <p className="text-emerald-400">{product.subtitle}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${product.statusColor}`}>
                          {product.status}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3">Use Cases</h4>
                          <ul className="space-y-2">
                            {product.useCases.map((useCase, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{useCase}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-700">
                        <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                      <product.icon className="w-24 h-24 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Language Support Section */}
        <section className="relative z-10 px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Language <span className="text-emerald-400">Support</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our Speech-to-Text tool supports multiple Indian languages, breaking down communication barriers.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.code}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {language.flag}
                      </div>
                      <h3 className="text-white font-medium text-sm">{language.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
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
                Development <span className="text-emerald-400">Roadmap</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our planned timeline for bringing these innovative solutions to market.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform -translate-y-1/2" />

              <div className="grid md:grid-cols-4 gap-8">
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                        item.status === "current" ? "bg-emerald-400" : "bg-slate-600"
                      } border-4 border-slate-900`}
                    />

                    <Card
                      className={`mt-8 ${
                        item.status === "current"
                          ? "bg-emerald-500/10 border-emerald-500/50"
                          : "bg-slate-800/80 border-slate-700/50"
                      } backdrop-blur-sm`}
                    >
                      <CardContent className="p-6">
                        <div className="text-emerald-400 font-semibold mb-2">{item.phase}</div>
                        <h3 className="text-white font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-300 text-sm mb-4">{item.description}</p>
                        <ul className="space-y-1">
                          {item.items.map((subItem, idx) => (
                            <li key={idx} className="text-slate-400 text-xs flex items-center space-x-2">
                              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800/50 to-emerald-900/50 rounded-2xl p-12 border border-emerald-500/20 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Interested in Our Solutions?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Get early access to our products or discuss custom development for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Get Early Access
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
