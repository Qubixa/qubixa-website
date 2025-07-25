"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X ,ChevronRight} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    // { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Qubixa Logo"
              width={160}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
  href="/contact"
  className="inline-flex items-center group relative h-12 pl-5 pr-6 font-bold transition duration-300 overflow-hidden"
>
  <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
    Get Started
    <ChevronRight className="ml-2 w-4 h-4" />
  </span>
  <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white/95 border-t border-gray-100 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 px-3">
            <Link
              href="/contact"
              className="relative inline-block w-full text-center px-6 py-2 font-bold text-black rounded overflow-hidden group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute left-0 top-0 h-full w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:rounded-full"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
