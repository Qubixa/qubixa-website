"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2, AlertCircle, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/footer"

// Declare global ReCAPTCHA
declare global {
  interface Window {
    grecaptcha: any
  }
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@qubixatech.com",
    link: "mailto:support@qubixatech.com",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, India",
    link: "#",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Phone,
    title: "Website",
    value: "www.qubixatech.com",
    link: "https://www.qubixatech.com",
    color: "from-teal-500 to-cyan-600",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const recaptchaRef = useRef<HTMLDivElement>(null)

  // Load reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
      script.async = true
      script.defer = true

      window.onRecaptchaLoad = () => {
        setRecaptchaLoaded(true)
      }

      document.head.appendChild(script)
    }

    loadRecaptcha()
  }, [])

  // Initialize reCAPTCHA when loaded
  useEffect(() => {
    if (recaptchaLoaded && recaptchaRef.current && window.grecaptcha) {
      try {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // Test site key - replace with your actual site key
          callback: (token: string) => {
            setRecaptchaToken(token)
          },
          "expired-callback": () => {
            setRecaptchaToken("")
          },
        })
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error)
      }
    }
  }, [recaptchaLoaded])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate reCAPTCHA
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7d657e90-4b00-466b-b659-4bcbdb79974f",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Qubixa Website Contact Form",
          to_email: "support@qubixatech.com",
          "h-captcha-response": recaptchaToken, // Include reCAPTCHA token
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset()
          setRecaptchaToken("")
        }
        // Reset form after success
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          })
        }, 3000)
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setError("Failed to send message. Please try again or contact us directly.")
      // Reset reCAPTCHA on error
      if (window.grecaptcha) {
        window.grecaptcha.reset()
        setRecaptchaToken("")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError("")
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-lg border-b border-gray-100">
        <div className="mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Qubixa Logo"
                  width={150}
                  height={100}
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
                  item === "Contact" ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                <span className="relative z-10">{item}</span>
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    item === "Contact"
                      ? "bg-emerald-50 border border-emerald-200"
                      : "bg-transparent group-hover:bg-emerald-50 group-hover:border group-hover:border-emerald-200"
                  }`}
                />
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                    item === "Contact" ? "w-8 bg-emerald-600" : "w-0 bg-emerald-600 group-hover:w-8"
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
              Let's{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
            >
              Ready to transform your ideas into intelligent solutions? Let's collaborate and build something amazing
              together.
            </motion.p>

            {/* New Call-to-Action Text */}
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

        {/* Contact Info */}
        <section className="relative z-10 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-8">
                      <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                      <Shield className="w-6 h-6 text-emerald-400 ml-3" />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-red-400 text-sm">{error}</span>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* First Name and Last Name */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("firstName")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="bg-slate-700/80 border-slate-600/50 text-white placeholder-transparent peer pt-6 pb-2 focus:border-emerald-500 focus:ring-emerald-500"
                            placeholder=""
                          />
                          <label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                              focusedField === "firstName" || formData.firstName
                                ? "top-2 text-xs text-emerald-400"
                                : "top-4 text-slate-400"
                            }`}
                          >
                            First Name *
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("lastName")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="bg-slate-700/80 border-slate-600/50 text-white placeholder-transparent peer pt-6 pb-2 focus:border-emerald-500 focus:ring-emerald-500"
                            placeholder=""
                          />
                          <label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                              focusedField === "lastName" || formData.lastName
                                ? "top-2 text-xs text-emerald-400"
                                : "top-4 text-slate-400"
                            }`}
                          >
                            Last Name *
                          </label>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="bg-slate-700/80 border-slate-600/50 text-white placeholder-transparent peer pt-6 pb-2 focus:border-emerald-500 focus:ring-emerald-500"
                          placeholder=""
                        />
                        <label
                          className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                            focusedField === "email" || formData.email
                              ? "top-2 text-xs text-emerald-400"
                              : "top-4 text-slate-400"
                          }`}
                        >
                          Email Address *
                        </label>
                      </div>

                      {/* Subject */}
                      <div className="relative">
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="bg-slate-700/80 border-slate-600/50 text-white placeholder-transparent peer pt-6 pb-2 focus:border-emerald-500 focus:ring-emerald-500"
                          placeholder=""
                        />
                        <label
                          className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                            focusedField === "subject" || formData.subject
                              ? "top-2 text-xs text-emerald-400"
                              : "top-4 text-slate-400"
                          }`}
                        >
                          Subject *
                        </label>
                      </div>

                      {/* Message */}
                      <div className="relative">
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className="bg-slate-700/80 border-slate-600/50 text-white placeholder-transparent peer pt-6 pb-2 resize-none focus:border-emerald-500 focus:ring-emerald-500"
                          placeholder=""
                        />
                        <label
                          className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                            focusedField === "message" || formData.message
                              ? "top-2 text-xs text-emerald-400"
                              : "top-4 text-slate-400"
                          }`}
                        >
                          Message Content *
                        </label>
                      </div>

                      {/* reCAPTCHA */}
                      <div className="flex justify-center">
                        <div ref={recaptchaRef} className="transform scale-90 origin-center" />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || isSubmitted || !recaptchaToken}
                        className={`w-full py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          isSubmitted
                            ? "bg-green-600 hover:bg-green-600"
                            : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent Successfully!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <div className="text-center space-y-2">
                        <p className="text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
                        <p className="text-slate-500 text-xs flex items-center justify-center">
                          <Shield className="w-3 h-3 mr-1" />
                          Protected by reCAPTCHA and Web3Forms
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Why Choose Qubixa?</h3>
                        <ul className="space-y-3">
                          {[
                            "Expert team with cutting-edge technology",
                            "Custom solutions tailored to your needs",
                            "Transparent communication throughout",
                            "Scalable and future-proof applications",
                            "Dedicated support and maintenance",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                              <span className="text-slate-300">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Our Approach</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                          We believe in building long-term partnerships with our clients. Our remote-first approach
                          allows us to work efficiently while maintaining close collaboration throughout the development
                          process.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                          From initial consultation to final deployment, we ensure your vision is transformed into a
                          powerful, intelligent solution that drives your business forward.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Response Time</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                            <div className="text-2xl font-bold text-white">&lt; 24h</div>
                            <div className="text-slate-400 text-sm">Initial Response</div>
                          </div>
                          <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                            <div className="text-2xl font-bold text-white">&lt; 48h</div>
                            <div className="text-slate-400 text-sm">Detailed Proposal</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Security & Privacy</h3>
                        <div className="flex items-center space-x-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                          <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                          <div>
                            <p className="text-white font-medium">Secure Communication</p>
                            <p className="text-slate-300 text-sm">
                              Your data is protected with enterprise-grade security
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800/50 to-emerald-900/50 rounded-2xl p-12 border border-emerald-500/20 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you have a specific project in mind or want to explore how technology can transform your
                business, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/solutions">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    View Our Solutions
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Learn About Us
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
