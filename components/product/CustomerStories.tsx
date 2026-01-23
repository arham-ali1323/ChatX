"use client";
import { useState } from 'react';

export default function CaseStudyShowcase() {
  const caseStudies = [
    {
      id: 1,
      logo: 'Bitdefender',
      logoSubtext: '®',
      title: 'How Bitdefender and ChatX Deliver AI-Powered Scam Protection',
      description: 'Discover how ChatX powers Bitdefender\'s Scamio, delivering real-time AI scam protection at massive scale.',
      industry: 'Cybersecurity',
      gradient: 'from-gray-800 to-indigo-900'
    },
    {
      id: 2,
      logo: 'HealthTech',
      logoSubtext: '',
      title: 'Transforming Patient Care with Real-Time Communication',
      description: 'Learn how HealthTech integrated ChatX to enable seamless doctor-patient consultations across their telemedicine platform.',
      industry: 'Healthcare',
      gradient: 'from-gray-800 to-blue-900'
    },
    {
      id: 3,
      logo: 'EduConnect',
      logoSubtext: '',
      title: 'Scaling Educational Communication to 10M+ Students',
      description: 'Explore how EduConnect leverages ChatX to power virtual classrooms and student collaboration worldwide.',
      industry: 'Education',
      gradient: 'from-gray-800 to-blue-900'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Case Study Card */}
        <div className={`relative bg-gradient-to-br ${currentStudy.gradient} backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 shadow-2xl transition-all duration-500`}>
          {/* Logo */}
          <div className="mb-12">
            <div className="inline-flex items-baseline gap-1">
              <div className="flex items-center gap-3 bg-gray-700/30 px-6 py-3 rounded-xl">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {currentStudy.logo.charAt(0)}
                  </span>
                </div>
                <span className="text-3xl md:text-4xl font-semibold text-gray-200">
                  {currentStudy.logo}
                </span>
                {currentStudy.logoSubtext && (
                  <span className="text-sm text-gray-400 align-super">
                    {currentStudy.logoSubtext}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {currentStudy.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentStudy.description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full border-2 border-gray-600 hover:border-gray-500 transition-all duration-300">
                Read More
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all group"
              aria-label="Previous case study"
            >
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-white transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all group"
              aria-label="Next case study"
            >
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-white transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-3xl pointer-events-none"></div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-blue-500 rounded-full'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}