"use client";

import { useState } from 'react';

export default function EnterpriseSecurity() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const enterpriseSecurity = [
    {
      id: 1,
      title: "AICPA SOC",
      description: "SOC 2 Type II compliant"
    },
    {
      id: 2,
      title: "GDPR",
      description: "Full GDPR compliance"
    },
    {
      id: 3,
      title: "HIPAA COMPLIANT",
      description: "Healthcare data protection"
    },
    {
      id: 4,
      title: "CCPA",
      description: "California privacy compliant"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Lock Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Security and scale<br />you can trust
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security with global infrastructure designed for scale. Your data is protected with industry-leading encryption and compliance standards.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Edge Network */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <img src="/globe.svg" alt="Globe" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Edge network</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lightning-fast chat delivery through 35+ edge locations worldwide, ensuring minimal latency for all users.
            </p>
          </div>

          {/* Middle Column - Two Rows */}
          <div className="space-y-6">
            {/* Uptime SLA */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Uptime SLA</h3>
                  <p className="text-3xl font-bold text-green-500">99.999%</p>
                </div>
              </div>
            </div>

            {/* Scalability */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Scalability</h3>
                  <p className="text-3xl font-bold text-blue-500">5B+ chats</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enterprise Security */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6">Enterprise security</h3>
            <div className="grid grid-cols-2 gap-4">
              {enterpriseSecurity.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="text-center p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === item.id 
                      ? 'bg-primary/20 scale-110' 
                      : 'bg-gray-700/50'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${
                      hoveredCard === item.id ? 'text-primary' : 'text-gray-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
