import Link from "next/link";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero_background.jpg')" }} // Make sure this image exists in /public/images
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-50 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            <span>Welcome to Qubixa</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              The Box Of Solution{" "}
              <span className="gradient-text">
                "Transforming Business Challenges into Digital Success."
              </span>
            </h1>
            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
              Delivering <span className="gradient-text">Innovative Solutions</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-cormorant">
            Where Vision Transforms into Reality
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Smart software. Scalable solutions. We craft intelligent applications that solve real-world problems through cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/solutions"
              className="inline-flex items-center group relative h-12 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">Explore Solutions 
                <ChevronRight className="ml-2 w-5 h-5" />
              </span>
              <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
            </Link>


            <Link
              href="/contact"
              className="inline-flex items-center group relative h-12 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">Get in Touch
                  <ChevronRight className="ml-2 w-5 h-5" />
              </span>
              <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
