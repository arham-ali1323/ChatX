'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Mock Data ---
const FEATURED_TUTORIALS = [
  {
    id: 1,
    title: "Building a Complete React Chat App with CometChat UI kit",
    description: "Learn how to build a real-time chat app in React with CometChat's UI Kit and TypeScript. Includes a full GitHub repo so you can follow along.",
    tag: "Getting started",
    author: "Kevin Kumar",
    date: "2 December 2024",
    image: "/featured-react-chat.png"
  },
  {
    id: 2,
    title: "Building a Patient Onboarding Workflow Agent",
    description: "Create an intelligent patient onboarding system with AI-powered workflow automation and seamless integration.",
    tag: "AI",
    author: "Sarah Chen",
    date: "15 December 2024",
    image: "/featured-patient-ai.png"
  },
  {
    id: 3,
    title: "Complete Flutter Chat App with CometChat",
    description: "Build a cross-platform mobile chat application using Flutter and CometChat's real-time messaging SDK.",
    tag: "Mobile",
    author: "Mike Johnson",
    date: "28 November 2024",
    image: "/featured-flutter.png"
  }
];

// Generate 144 tutorials (12 pages × 12 cards each)
const generateTutorials = () => {
  const categories = ["React", "Flutter", "Angular", "Next.js", "Vercel", "TypeScript", "JavaScript", "Node.js", "Python", "Swift", "Kotlin", "Vue.js"];
  const tags = ["Web", "Mobile", "AI", "Backend", "Frontend", "Full-stack", "API", "Database", "DevOps", "Security", "Testing", "Performance"];
  const tutorials = [];
  
  for (let i = 1; i <= 144; i++) {
    const category = categories[(i - 1) % categories.length];
    const tag = tags[(i - 1) % tags.length];
    tutorials.push({
      id: i,
      title: `Building ${category} Tutorial ${i}: Complete Guide to ${tag} Development`,
      tag: tag,
      category: category,
      author: `Author ${Math.ceil(i / 12)}`,
      readTime: `${10 + (i % 20)} min read`
    });
  }
  return tutorials;
};

const TUTORIALS = generateTutorials();

export default function TutorialsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const tutorialsPerPage = 12;
  const totalPages = Math.ceil(TUTORIALS.length / tutorialsPerPage);
  
  // Get tutorials for current page
  const getCurrentPageTutorials = () => {
    const startIndex = (currentPage - 1) * tutorialsPerPage;
    const endIndex = startIndex + tutorialsPerPage;
    return TUTORIALS.slice(startIndex, endIndex);
  };
  
  // Filter tutorials based on search
  const getFilteredTutorials = () => {
    const currentTutorials = getCurrentPageTutorials();
    if (!searchQuery) return currentTutorials;
    
    return currentTutorials.filter(tutorial => 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-blue-500/30">
      
      {/* 1. FEATURED SECTION (Top Image) */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Step-by-Step Tutorials
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Best-in-class tutorials and open source examples to help you build chat, voice, and video apps.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-white">Featured</span>
            <span className="text-gray-500">Tutorials</span>
          </h2>
          
          {/* Featured Card Carousel */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {FEATURED_TUTORIALS.map((tutorial, index) => (
                  <div key={tutorial.id} className="w-full flex-shrink-0">
                    <div className="bg-[#0a0a0b] border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 min-h-[400px]">
                      <div className="flex-1 space-y-4">
                        <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20">
                          {tutorial.tag}
                        </span>
                        <h3 className="text-3xl font-bold leading-tight">
                          {tutorial.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {tutorial.description}
                        </p>
                        <div className="flex items-center gap-3 pt-4">
                          <div className="w-10 h-10 rounded-full bg-zinc-800" />
                          <div>
                            <p className="text-sm font-medium">{tutorial.author}</p>
                            <p className="text-xs text-gray-500">{tutorial.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 w-full h-full relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-white/5">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">
                          [{tutorial.tag} Graphic]
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={() => setCurrentSlide(currentSlide === 0 ? FEATURED_TUTORIALS.length - 1 : currentSlide - 1)}
                className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {FEATURED_TUTORIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCurrentSlide(currentSlide === FEATURED_TUTORIALS.length - 1 ? 0 : currentSlide + 1)}
                className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-zinc-900" />

      {/* 2. ALL TUTORIALS GRID (Bottom Image) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-white">All</span> <span className="text-gray-500">Tutorials</span>
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text"
                placeholder="Search here..."
                className="bg-[#0a0a0b] border border-zinc-800 rounded-lg py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:border-indigo-500 transition"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Filter Toggle */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0b] border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800 transition">
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredTutorials().map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Card Image */}
              <div className="bg-[#0a0a0b] border border-zinc-800 rounded-2xl overflow-hidden mb-4 aspect-video relative transition-all group-hover:border-zinc-600 group-hover:shadow-lg group-hover:shadow-zinc-900/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-600 font-bold text-xl">{item.category.charAt(0)}</span>
                    </div>
                    <div className="text-zinc-700 font-bold uppercase tracking-widest text-xs">
                      {item.category} Module
                    </div>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <ChevronRight size={20} className="text-indigo-400" />
                    </div>
                    <span className="text-indigo-400 text-sm font-medium">View Tutorial</span>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="space-y-3">
                <h4 className="text-lg font-medium leading-snug group-hover:text-indigo-400 transition mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 text-indigo-400 text-[10px] font-bold uppercase border border-zinc-800">
                    {item.tag}
                  </span>
                  {item.category && (
                     <span className="px-2 py-0.5 rounded bg-zinc-900 text-gray-400 text-[10px] font-bold uppercase border border-zinc-800">
                     {item.category}
                   </span>
                  )}
                </div>
                
                {/* Meta info */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-800" />
                    <span className="text-xs text-gray-500">{item.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show message if no results */}
        {getFilteredTutorials().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tutorials found matching your search.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-20 flex flex-col items-center gap-6">
          {/* Page Numbers */}
          <div className="flex items-center gap-2 text-sm">
            {/* Previous Button */}
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-all ${
                currentPage === 1 
                  ? 'text-zinc-700 cursor-not-allowed' 
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {(() => {
                const pages = [];
                const maxVisiblePages = 7;
                
                if (totalPages <= maxVisiblePages) {
                  // Show all pages if total is small
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  // Show smart pagination for larger numbers
                  if (currentPage <= 4) {
                    for (let i = 1; i <= 5; i++) pages.push(i);
                    pages.push('...');
                    pages.push(totalPages);
                  } else if (currentPage >= totalPages - 3) {
                    pages.push(1);
                    pages.push('...');
                    for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
                  } else {
                    pages.push(1);
                    pages.push('...');
                    for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                    pages.push('...');
                    pages.push(totalPages);
                  }
                }
                
                return pages.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' && setCurrentPage(page)}
                    disabled={page === '...'}
                    className={`px-3 py-1 rounded transition-all ${
                      page === '...'
                        ? 'text-zinc-700 cursor-default'
                        : page === currentPage
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {page}
                  </button>
                ));
              })()}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-all ${
                currentPage === totalPages 
                  ? 'text-zinc-700 cursor-not-allowed' 
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
          
          {/* Page Info */}
          <div className="text-sm text-zinc-500">
            Showing {((currentPage - 1) * tutorialsPerPage) + 1}-{Math.min(currentPage * tutorialsPerPage, TUTORIALS.length)} of {TUTORIALS.length} tutorials
          </div>
        </div>
      </section>
    </div>
  );
}