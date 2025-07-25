import Image from "next/image"
import { ChevronRight, Lightbulb, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

export function WhyChooseQubixa() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions using the latest technologies",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Empowering businesses through digital transformation",
    },
    {
      icon: Shield,
      title: "Trustworthiness",
      description: "Reliable partnerships built on trust and transparency",
    },
    {
      icon: Zap,
      title: "Versatility",
      description: "Adaptable solutions for diverse business needs",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <div className="h-px bg-gradient-to-r from-blue-500 to-purple-600 flex-1"></div>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Why Choose Qubixa?</h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Founded in 2025, The Box Of Solution is a dynamic team of 10+ passionate developers, each bringing 2–3 years of hands-on experience to the table. Though young, our team combines fresh thinking with solid technical skills to deliver smart, scalable software solutions. Proudly based in Mumbai, we're deeply connected to the local business landscape and committed to helping forward-thinking companies thrive through technology.
              </p>
            </div>

            {/* Features Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {features.map((feature, index) => (
    <div key={index} className="flex items-start space-x-4">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
        <feature.icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

            {/* CTA Button - Fixed Perfect Circle */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center group relative h-14 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
                  Know more
                  <ChevronRight className="ml-2 w-5 h-5" />
                </span>
                <span className="absolute left-0 top-0 h-14 w-14 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
              <Image
                src="/why-choose-team.png"
                alt="Why Choose Qubixa - Professional Team"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}