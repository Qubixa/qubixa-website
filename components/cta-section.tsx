import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white text-gray-900 overflow-hidden">
      {/* Decorative elements - using Tailwind only */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-[blob_7s_infinite]" />
        <div className="absolute top-0 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-[blob_7s_infinite_2s]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-[blob_7s_infinite_4s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-8 text-white shadow-md">
            <Sparkles size={16} className="fill-white" />
            <span>Ready to Transform Your Ideas?</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your vision into reality with our expert team. We're here to help you navigate the digital
            landscape and create solutions that drive success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center group relative h-12 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
                Start Your Project <ArrowRight size={20} className="ml-2 w-4 h-4" />
              </span>
              <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>

            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center group relative h-12 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
                View Our Solutions <ArrowRight size={20} className="ml-2 w-4 h-4" />
              </span>
              <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>

            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}