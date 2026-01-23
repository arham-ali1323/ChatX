"use client";
import React from "react";
import Head from "next/head";
import {
  Hexagon,
  Sparkles,
  Box,
  Layout,
  ArrowRight,
  Globe,
  ShieldCheck,
  Activity,
  Users,
  CheckCircle2,
} from "lucide-react";

// --- DATA STRUCTURES ---
const EnterpriseSecurity = [
  {
    title: "Healthcare",
    desc: "Power secure, HIPAA-compliant communication with chat and calling APIs that support private messaging, video consultations, file sharing, and collaborative care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-1",
  },
  {
    title: "Marketplace",
    desc: "Enable secure, moderated buyer-seller chat and calling with multimedia sharing and order-context messaging to build trust and streamline transactions.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-1",
  },
  {
    title: "On-demand services",
    desc: "Build real-time customer-provider coordination with secure, moderated chat and calling optimized for high concurrency and bandwidth.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80",
    size: "md:col-span-2",
  },
  {
    title: "Dating & social apps",
    desc: "Build a safe, engaging platform with AI-powered moderation, rich messaging, real-time translation, and high-quality in-app calls.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-1",
  },
  {
    title: "Social and communities",
    desc: "Enable vibrant, well-moderated community discussions with group chats, presentation and broadcast modes, threads, polls, and rich media.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-1",
  }
];

const INTEGRATIONS = [
  {
    title: "Widget Builder",
    desc: "No-code method to launch chat.",
    isFeatured: true,
    features: [
      "Customize entirely and toggle chat functions as needed",
      "Integrate with a single line of code",
      "Deploy and launch your in-app chat",
    ],
    icon: <Layout className="w-5 h-5 text-purple-400" />,
  },
  {
    title: "UI Kit Builder",
    desc: "The low code option to build in-app chat without the hassle",
    isFeatured: false,
    icon: <Hexagon className="w-5 h-5 text-gray-400" />,
  },
  {
    title: "Chat UI Kits",
    desc: "Pre-built UI components with modern and pixel perfect design that is completely customizable.",
    isFeatured: false,
    icon: <Sparkles className="w-5 h-5 text-gray-400" />,
  },
  {
    title: "Chat SDKs",
    desc: "Open source SDKs and APIs for all popular frameworks to build bespoke chat experiences.",
    isFeatured: false,
    icon: <Box className="w-5 h-5 text-gray-400" />,
  },
];

export default function CometChatLanding() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30 font-sans antialiased">
      <Head>
        <title>CometChat | Universally Compatible</title>
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* --- USE CASES SECTION --- */}
        <section className="mb-40">
          <div className="mb-16">
            <p className="text-purple-500 font-bold text-xs tracking-widest uppercase mb-4">
              Use Cases
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Universally compatible. <br />
              <span className="text-gray-500">Infinitely adaptable.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
              Build your ideal in-app communication stack with flexible voice, video, and messaging components, optimized for every use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            { EnterpriseSecurity.map((item, i) => (
              <div
                key={i}
                className={`${item.size} group bg-[#0A0A0B] border border-white/5 rounded-[2rem] overflow-hidden hover:border-purple-500/30 transition-all duration-500 flex flex-col`}
              >
                <div className="p-10 pb-0">
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                    {item.desc}
                  </p>
                  <button className="flex items-center gap-2 text-purple-400 text-sm font-bold group-hover:gap-3 transition-all mb-8">
                    Learn more <ArrowRight size={14} />
                  </button>
                </div>
                <div className="mt-auto px-6">
                  <div className="bg-[#111114] rounded-t-2xl border-t border-x border-white/10 p-4 h-64 relative overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover rounded-xl opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- INTEGRATION SECTION --- */}
        <section className="mb-40 relative">
          <div className="text-center mb-24">
            <p className="text-purple-500 font-bold text-xs tracking-widest uppercase mb-4">
              Integrating In-App Chat
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Integrate real-time messaging that <br /> grows with your needs
            </h2>
            <p className="text-gray-500 text-sm">
              Start with any integration method and scale to others as your needs evolve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[1px] bg-white/10" />
            
            {INTEGRATIONS.map((item, i) => (
              <div key={i} className="relative pt-12">
                {/* Node Dot */}
                <div className={`absolute top-[18px] left-0 w-2 h-2 rounded-full z-20 ${item.isFeatured ? 'bg-purple-500 shadow-[0_0_10px_#a855f7]' : 'bg-gray-800'}`} />
                
                <div className={`p-8 rounded-2xl h-full transition-all border ${item.isFeatured ? "bg-gradient-to-b from-purple-500/10 to-transparent border-purple-500/40" : "border-transparent"}`}>
                  <div className={`mb-6 w-10 h-10 rounded-lg border flex items-center justify-center ${item.isFeatured ? 'bg-[#111] border-purple-500/50' : 'bg-[#0f0f12] border-white/5'}`}>
                    {item.icon}
                  </div>
                  <h5 className="font-bold text-lg mb-3">{item.title}</h5>
                  {item.isFeatured ? (
                    <ul className="space-y-4 mb-8 text-sm text-gray-400">
                      {item.features?.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Sparkles size={14} className="text-purple-500 mt-1 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 leading-relaxed mb-8">{item.desc}</p>
                  )}
                  <a href="#" className="text-sm font-bold text-purple-500 hover:text-purple-400">
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- ENTERPRISE SECURITY SECTION --- */}
        <section className="relative pt-24 border-t border-white/5">
          <div className="text-center mb-20">
            <p className="text-purple-500 font-bold text-xs tracking-widest uppercase mb-4">
              Enterprise-Grade Security
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Security and scale you can trust
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Global edge network, iron-clad security, and 99.999% uptime.
              Battle-tested infrastructure that scales to billions of users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-white/10 rounded-[2.5rem] overflow-hidden bg-[#0A0A0B]">
            {/* Edge Network */}
            <div className="md:col-span-5 p-12 border-r border-b md:border-b-0 border-white/10 relative overflow-hidden group">
              <div className="mb-24 flex justify-center">
                <div className="relative">
                  <Globe className="w-40 h-40 text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">Edge network</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Lightning-fast chat delivery through 35+ edge locations
                worldwide, ensuring minimal latency for all users.
              </p>
            </div>

            {/* Stats */}
            <div className="md:col-span-3 border-r border-white/10 flex flex-col">
              <div className="p-12 border-b border-white/10 flex-1">
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <Activity size={14} /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Uptime SLA</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter">99.999%</div>
              </div>
              <div className="p-12 flex-1">
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <Users size={14} /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scalability</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter text-gray-300">5B+ chats</div>
              </div>
            </div>

            {/* Compliance Badge Grid */}
            <div className="md:col-span-4 p-12 bg-[#0C0C0E]">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-12">
                Enterprise security
              </h4>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "AICPA SOC", icon: <ShieldCheck /> },
                  { label: "GDPR", icon: <CheckCircle2 /> },
                  { label: "HIPAA", icon: <ShieldCheck /> },
                  { label: "GDPR", icon: <CheckCircle2 /> }
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-2 group hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="text-gray-600 group-hover:text-gray-400 transition-colors">
                      {React.cloneElement(badge.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1 } as any)}
                    </div>
                    <span className="text-[9px] font-bold text-gray-500">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}