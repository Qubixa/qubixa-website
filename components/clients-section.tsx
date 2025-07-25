// // 1. Import icons
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiNodedotjs,
//   SiPython,
//   SiDjango,
//   SiFastapi,
//   SiPostgresql,
//   SiMongodb,
//   SiRedis,
//   SiAmazon,
//   SiDocker,
//   SiKubernetes,
//   SiTensorflow,
//   SiPytorch,
//   SiGraphql,
// } from "react-icons/si"

// const technologies = [
//   { name: "React", category: "Frontend", icon: SiReact },
//   { name: "Next.js", category: "Framework", icon: SiNextdotjs },
//   { name: "TypeScript", category: "Language", icon: SiTypescript },
//   { name: "Node.js", category: "Backend", icon: SiNodedotjs },
//   { name: "Python", category: "Language", icon: SiPython },
//   { name: "Django", category: "Framework", icon: SiDjango },
//   { name: "FastAPI", category: "API", icon: SiFastapi },
//   { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
//   { name: "MongoDB", category: "Database", icon: SiMongodb },
//   { name: "Redis", category: "Cache", icon: SiRedis },
//   // You can add the rest if needed
// ];

// export function ClientsSection() {
//   const firstGroup = technologies.slice(0, 5);
//   const secondGroup = technologies.slice(5, 10);

//   function ScrollingClientsRow({ clients }: { clients: typeof firstGroup }) {
//     const duplicatedClients = [...clients, ...clients];

//     return (
//       <div className="overflow-hidden whitespace-nowrap">
//         <div className="inline-flex animate-marquee">
//           {duplicatedClients.map((client, idx) => {
//             const Icon = client.icon;
//             return (
//               <div
//                 key={idx}
//                 className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[160px] mx-3 hover:bg-gray-700/50 transition-transform duration-300 hover:scale-105 min-h-[120px]"
//               >
//                 <Icon className="text-4xl text-white mb-3" />
//                 <div className="text-white font-semibold text-lg text-center">{client.name}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="py-20 clients-grid text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="font-cormorant text-5xl sm:text-6xl font-bold mb-6">
//             Powered by Modern Tech
//           </h2>
//           <p className="text-xl text-gray-300 max-w-4xl mx-auto">
//             We leverage cutting-edge technologies to build robust, scalable, and future-ready
//             solutions that drive your business forward.
//           </p>
//         </div>

//         {/* Two scrolling rows */}
//         <ScrollingClientsRow clients={firstGroup} />
//         <div className="h-10" />
//         <ScrollingClientsRow clients={secondGroup} />
//       </div>
//     </section>
//   );
// }



// new 
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiGraphql,
} from "react-icons/si"

const technologies = [
  { name: "React", category: "Frontend", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", category: "Framework", icon: SiNextdotjs, color: "text-gray-100" },
  { name: "TypeScript", category: "Language", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", category: "Language", icon: SiPython, color: "text-yellow-400" },
  { name: "Django", category: "Framework", icon: SiDjango, color: "text-emerald-500" },
  { name: "FastAPI", category: "API", icon: SiFastapi, color: "text-teal-400" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "text-blue-300" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "text-green-400" },
  { name: "Redis", category: "Cache", icon: SiRedis, color: "text-red-500" },
  { name: "AWS", category: "Cloud", icon: SiAmazon, color: "text-orange-400" },
  { name: "Docker", category: "DevOps", icon: SiDocker, color: "text-blue-400" },
  { name: "Kubernetes", category: "DevOps", icon: SiKubernetes, color: "text-blue-400" },
  { name: "TensorFlow", category: "AI/ML", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", category: "AI/ML", icon: SiPytorch, color: "text-red-500" },
  { name: "GraphQL", category: "API", icon: SiGraphql, color: "text-pink-500" },
];

export function ClientsSection() {
  const firstGroup = technologies.slice(0, 8);
  const secondGroup = technologies.slice(8, 16);

  function ScrollingClientsRow({ clients }: { clients: typeof firstGroup }) {
    const duplicatedClients = [...clients, ...clients];

    return (
      <div className="relative overflow-hidden py-6">
        {/* Gradient fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        
        <div className="inline-flex animate-marquee [animation-duration:40s] hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className={`
                  backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 
                  rounded-2xl p-8 flex flex-col items-center justify-center 
                  w-[240px] mx-5 transition-all duration-300 h-[200px]
                  hover:bg-gray-700/40 hover:shadow-lg hover:border-gray-600/70
                  hover:scale-[1.02] hover:z-20 relative
                `}
              >
                <div className={`${client.color} group-hover:text-current`}>
                  <Icon className="text-5xl mb-4 transition-all duration-300 hover:scale-110" />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-xl mb-1">{client.name}</div>
                  <div className="text-gray-400 text-sm font-medium px-3 py-1 rounded-full bg-gray-800/50">
                    {client.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cormorant text-5xl sm:text-6xl font-bold mb-6">
            Powered by Modern Tech
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-ready
            solutions that drive your business forward.
          </p>
        </div>

        {/* Two scrolling rows */}
        <div className="mb-10">
          <ScrollingClientsRow clients={firstGroup} />
        </div>
        <div className="mb-10">
          <ScrollingClientsRow clients={secondGroup} />
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          {/* <button className="
            inline-flex items-center relative h-14 pl-8 pr-10 font-bold 
            transition-all duration-300 overflow-hidden bg-gradient-to-r 
            from-blue-600 to-indigo-600 rounded-full group
          ">
            <span className="relative z-10 flex items-center text-white">
              Explore Our Tech Stack
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" 
                strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="
              absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              rounded-full
            "></span>
          </button> */}
           {/* <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center group relative h-14 pl-6 pr-8 font-bold transition duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center text-blue-800 group-hover:text-white">
                  Explore Our Tech Stack
                  <ChevronRight className="ml-2 w-5 h-5" />
                </span>
                <span className="absolute left-0 top-0 h-14 w-14 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-full group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"></span>
              </Link>
            </div> */}
        </div>
      </div>
    </section>
  );
}
