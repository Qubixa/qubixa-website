import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Adjusted logo section only */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Qubixa Logo"
                width={180}
                height={60}
                className="h-auto w-[180px]"
                priority
                style={{marginTop:"-10%"}}
              />
            </div>
            <p className="text-black text-sm">
              Smart software. Scalable solutions. We craft intelligent applications that solve real-world problems
              through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/qubixatech" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://www.facebook.com/qubixatech/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/qubixatech?utm_source=qr&igsh=MTZrcW5kcGE1bTV4eA==" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-black hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-black hover:text-blue-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-black hover:text-blue-600 transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-black">Web Applications</span>
              </li>
              <li>
                <span className="text-black">Desktop Applications</span>
              </li>
              <li>
                <span className="text-black">Backend Development</span>
              </li>
              <li>
                <span className="text-black">AI Integration</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-black text-sm">info@qubixa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-black text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-black text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-black text-sm">
            © {new Date().getFullYear()} Qubixa. All rights reserved. | The Box of Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}