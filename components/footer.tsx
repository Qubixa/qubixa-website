"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technology", href: "/technology" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@qubixatechl.com" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-900/95 border-t border-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <Image src="/logo.png" alt="Qubixa Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-white">Qubixa</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-emerald-400">The Box of Solutions</h3>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Delivering intelligent software to transform ideas into innovation. We craft smart, scalable solutions
                that solve real-world problems through cutting-edge technology.
              </p>
              <div className="flex items-center space-x-2 text-slate-400">
                <span>📍</span>
                <span>Mumbai, India</span>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white font-semibold mb-6"
            >
              Company
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Legal Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white font-semibold mb-6"
            >
              Legal
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {footerLinks.legal.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-12 pt-8 border-t border-slate-800"
        >
          {footerLinks.social.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-slate-800/80 hover:bg-emerald-500/20 rounded-full flex items-center justify-center transition-colors duration-300 group border border-slate-700/50 hover:border-emerald-500/50"
            >
              <social.icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-slate-800"
        >
          <p className="text-slate-400">© 2025 Qubixa Technologies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
