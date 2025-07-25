"use client";
import { Code, Monitor, Server, Brain, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function ServicesOverviewNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description: "Responsive and scalable web apps with modern technologies.",
      features: ["Next.js & React", "Progressive Web Apps", "E-commerce Solutions"],
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
      tags: ["Frontend", "Full Stack"],
      image: "/web-apps.jpg"
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful cross-platform desktop software with native performance.",
      features: ["Electron & Tauri", "System Integration", "Native Experience"],
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
      tags: ["Desktop", "Cross-platform"],
      image: "/desktop-apps.jpg"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Reliable and secure backends tailored for performance.",
      features: ["Node.js, Python", "RESTful APIs & Microservices", "Database Architecture"],
      gradient: "bg-gradient-to-br from-purple-600 to-fuchsia-600",
      tags: ["Backend", "API Development"],
      image: "/backend.jpg"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Smart solutions using cutting-edge AI and ML technology.",
      features: ["Machine Learning", "Computer Vision", "NLP Models"],
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500",
      tags: ["AI/ML", "Data Science"],
      image: "/ai-integration.jpg"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Server size={16} />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            End-to-End Technology Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Empowering your digital presence through modern, scalable, and intelligent software services.
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Side - Service Related Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px] relative">
                {/* Service Related Image */}
                <div className="h-full w-full">
                  <Image 
                    src={currentService.image}
                    alt={`${currentService.title} Preview`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with service info */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        currentIndex === 0 ? 'bg-blue-600' :
                        currentIndex === 1 ? 'bg-emerald-600' :
                        currentIndex === 2 ? 'bg-purple-600' :
                        'bg-pink-600'
                      }`}>
                        <currentService.icon size={14} />
                        <span>{currentService.title}</span>
                      </div>
                      <h4 className="text-lg font-semibold">Professional {currentService.title}</h4>
                      <p className="text-sm text-gray-200 mt-1">Expert solutions for your business needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? currentIndex === 0 ? 'bg-blue-600' :
                          currentIndex === 1 ? 'bg-emerald-600' :
                          currentIndex === 2 ? 'bg-purple-600' :
                          'bg-pink-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentService.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentService.tags.map((tag, idx) => (
                  <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentIndex === 0 ? 'bg-blue-100 text-blue-800' :
                    currentIndex === 1 ? 'bg-emerald-100 text-emerald-800' :
                    currentIndex === 2 ? 'bg-purple-100 text-purple-800' :
                    'bg-pink-100 text-pink-800'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {currentService.description}
              </p>

              <div className="space-y-4 mb-8">
                {currentService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-4 ${
                      currentIndex === 0 ? 'bg-blue-600' :
                      currentIndex === 1 ? 'bg-emerald-600' :
                      currentIndex === 2 ? 'bg-purple-600' :
                      'bg-pink-600'
                    }`}></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Get Started Button - Fixed */}
              <div className="w-fit">
                <Link
                  href="/contact"
                  className="inline-flex items-center group relative h-12 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
                    Know More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </span>
                  <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
                </Link>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-end space-x-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group"
                >
                  <ChevronLeft 
                    size={20} 
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group"
                >
                  <ChevronRight 
                    size={20} 
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link 
            href="/services"
            className="inline-flex items-center group relative h-12 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
              Explore All Services
              <ArrowRight size={18} className="ml-2 w-4 h-4" />
            </span>
            <span className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
