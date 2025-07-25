import Image from "next/image";
import { Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users size={16} />
                <span>About Qubixa</span>
              </div>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                The Box of Solution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Founded in 2025, Qubixa is a technology company building smart,
                scalable, and impactful digital solutions. Our remote team of
                10+ skilled professionals brings 2–3 years of experience and a
                problem-solving mindset to every project. We help businesses
                turn ideas into real-world success through thoughtful strategy,
                design, and engineering.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  2025
                </div>
                <div className="text-gray-700 font-medium">Founded In</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-medium">Remote Team</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  10+
                </div>
                <div className="text-gray-700 font-medium">Team Size</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-medium">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
              <Image
                src="/aboutus.png"
                alt="Qubixa Team"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
