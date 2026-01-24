"use client";
import { useState } from 'react';
import {
  SiReact,
  SiApple,
  SiFlutter,
  SiAngular,
  SiAndroid,
  SiWordpress,
  SiVuedotjs,
  SiKotlin,
  SiPhp,
  SiIonic,
  SiLaravel
} from "react-icons/si";


export default function TechnologiesShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
  [
    { id: "react", name: "React", icon: SiReact },
    { id: "ios", name: "iOS", icon: SiApple },
    { id: "flutter", name: "Flutter", icon: SiFlutter }
  ],
  [
    { id: "angular", name: "Angular", icon: SiAngular },
    { id: "android", name: "Android", icon: SiAndroid },
    { id: "wordpress", name: "WordPress", icon: SiWordpress }
  ],
  [
    { id: "vue", name: "Vue.js", icon: SiVuedotjs },
    { id: "kotlin", name: "Kotlin", icon: SiKotlin },
    { id: "php", name: "PHP", icon: SiPhp }
  ],
  [
    { id: "react-native", name: "React Native", icon: SiReact },
    { id: "ionic", name: "Ionic", icon: SiIonic },
    { id: "laravel", name: "Laravel", icon: SiLaravel }
  ]
];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/30 to-gray-950 py-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
              ChatX Technologies
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Built to integrate with<br />
            your tech stack
          </h2>
          
          <button className="text-white text-sm font-medium px-6 py-2 border border-gray-700 rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300">
            View ChatX Docs
          </button>
        </div>

        {/* Technologies Grid */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          {/* Connecting Lines SVG - Hidden on mobile */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            {/* Horizontal connections between columns */}
            {/* Row 1 connections */}
            <line x1="25%" y1="20%" x2="40%" y2="20%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            <line x1="60%" y1="20%" x2="75%" y2="20%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            
            {/* Row 2 connections */}
            <line x1="25%" y1="50%" x2="40%" y2="50%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            <line x1="60%" y1="50%" x2="75%" y2="50%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            
            {/* Row 3 connections */}
            <line x1="25%" y1="80%" x2="40%" y2="80%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            <line x1="60%" y1="80%" x2="75%" y2="80%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            
            {/* Diagonal connections to center */}
            <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            
            <line x1="40%" y1="20%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="40%" y1="50%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="40%" y1="80%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            
            <line x1="60%" y1="20%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="60%" y1="50%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="60%" y1="80%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            
            <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
            <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
          </svg>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden flex flex-col items-center gap-8 w-full">
            {/* Center Logo - Mobile */}
            <div className="relative" style={{ zIndex: 2 }}>
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl">
                <div className="relative">
                  <div className="relative bg-white text-gray-900 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg">
                    X
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md mx-auto">
              {technologies.flat().map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isHovered={hoveredTech === tech.id}
                  onHover={() => setHoveredTech(tech.id)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>
          </div>

          {/* Desktop Layout - Columns */}
          <div className="hidden lg:flex items-center justify-center gap-6 w-full">
            {/* Left Column */}
            <div className="relative flex flex-col gap-6" style={{ zIndex: 1 }}>
              {technologies[0].map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isHovered={hoveredTech === tech.id}
                  onHover={() => setHoveredTech(tech.id)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>

            {/* Center-Left Column */}
            <div className="relative flex flex-col gap-6" style={{ zIndex: 1 }}>
              {technologies[1].map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isHovered={hoveredTech === tech.id}
                  onHover={() => setHoveredTech(tech.id)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>

            {/* Center Logo - Desktop */}
            <div className="relative mx-8" style={{ zIndex: 2 }}>
              <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl">
                <div className="relative">
                  {/* Center Icon */}
                  <div className="relative bg-white text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold shadow-lg">
                    X
                  </div>
                </div>
              </div>
            </div>

            {/* Center-Right Column */}
            <div className="relative flex flex-col gap-6" style={{ zIndex: 1 }}>
              {technologies[2].map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isHovered={hoveredTech === tech.id}
                  onHover={() => setHoveredTech(tech.id)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="relative flex flex-col gap-6" style={{ zIndex: 1 }}>
              {technologies[3].map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isHovered={hoveredTech === tech.id}
                  onHover={() => setHoveredTech(tech.id)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TechCardProps {
  tech: { id: string; name: string; icon: React.ComponentType<any> };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function TechCard({ tech, isHovered, onHover, onLeave }: TechCardProps) {
  const Icon = tech.icon;
  
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative w-full sm:w-32 h-16 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border rounded-lg flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 transition-all duration-300 cursor-pointer ${
        isHovered 
          ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-105' 
          : 'border-gray-800 hover:border-gray-700'
      }`}
    >
      {/* Icon */}
      <div className={`transition-transform duration-300 ${
        isHovered ? 'scale-110' : ''
      }`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
          isHovered ? 'text-white' : 'text-gray-400'
        }`} />
      </div>

      {/* Text */}
      <div className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
        isHovered ? 'text-white' : 'text-gray-400'
      }`}>
        {tech.name}
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/0 to-primary/0 transition-all duration-300 pointer-events-none ${
        isHovered ? 'from-blue-500/10 to-primary/10' : ''
      }`}></div>
    </div>
  );
}
