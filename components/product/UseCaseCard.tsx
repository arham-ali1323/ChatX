import React from 'react';
import Head from 'next/head';

// Mock data to keep the component clean
const useCases = [
  {
    title: "Healthcare",
    description: "Power secure, HIPAA-compliant communication with chat and calling APIs that support private messaging, video consultations, file sharing, and collaborative care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Marketplace",
    description: "Enable secure, moderated buyer-seller chat and calling with multimedia sharing and order-context messaging to build trust and streamline transactions.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1 row-span-1"
  },
  {
    title: "On-demand services",
    description: "Build real-time customer-provider coordination with secure, moderated chat and calling optimized for high concurrency and bandwidth.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80",
    size: "col-span-2"
  },
  {
    title: "Dating & social apps",
    description: "Build a safe, engaging platform with AI-powered moderation, rich messaging, real-time translation, and high-quality in-app calls.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1"
  },
  {
    title: "Social and communities",
    description: "Enable vibrant, well-moderated community discussions with group chats, presentation and broadcast modes, polls, and rich media.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1"
  }
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      <Head>
        <title>Use Cases | Communication Stack</title>
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="mb-16 max-w-2xl">
          <h2 className="text-purple-500 font-semibold mb-4 tracking-wide">Use Cases</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Universally compatible. <br />
            <span className="text-gray-400">Infinitely adaptable.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Build your ideal in-app communication stack with flexible voice, video, and messaging components, optimized for every use case.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((item, index) => (
            <div 
              key={index} 
              className={`${item.size} group relative overflow-hidden rounded-3xl bg-[#0f0f12] border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col`}
            >
              {/* Text Content */}
              <div className="p-8 pb-4 z-10">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                  {item.description}
                </p>
                <a href="#" className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors inline-flex items-center group-hover:gap-2 duration-300">
                  Learn more 
                  <span className="ml-1">→</span>
                </a>
              </div>

              {/* Image/UI Placeholder */}
              <div className="mt-auto relative h-64 w-full px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-transparent z-10" />
                <div className="bg-[#1a1a20] rounded-t-2xl h-full w-full border-t border-x border-white/10 p-4 transition-transform duration-700 group-hover:scale-[1.02]">
                    {/* Simulated App UI */}
                    <div className="w-full h-full rounded-xl bg-gray-900/50 overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover opacity-60 grayscale-[50%] group-hover:grayscale-0 transition-all"
                        />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}