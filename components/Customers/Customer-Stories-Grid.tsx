'use client';

import { useState } from 'react';

interface Story {
  id: number;
  company: string;
  title: string;
  category: string;
  image: string;
}

export default function CustomerStoriesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const cardsPerPage = 12;
  const totalPages = 7;

  // Generate 84 customer stories
  const allStories = [
    // Page 1
    { id: 1, company: 'Airmeet', title: 'How Airmeet Brings Cash to Virtual Events', category: 'Events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop' },
    { id: 2, company: 'Amazon', title: 'Online Amazon Leaps-Vance Innovates Financial Chat', category: 'Finance', image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=300&fit=crop' },
    { id: 3, company: 'Freshly', title: 'How Real TV Sped Working into Subscriptions', category: 'Retail', image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=300&fit=crop' },
    { id: 4, company: 'Acast', title: 'How Acast Brings Sponsorship Deals to Podcasters', category: 'Media', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop' },
    { id: 5, company: 'Medtronic', title: 'Meet Health Broker Helped Patient Support Using CometChat', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop' },
    { id: 6, company: 'Avantstay', title: 'Premium Health Execution Fueled Short-Term Rentals', category: 'Travel', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop' },
    { id: 7, company: 'BILT', title: 'How BILT Assembles Products Faster via Chat', category: 'Technology', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop' },
    { id: 8, company: 'UNICORN', title: 'UNICORN Builds Sonic Support System within Mobile', category: 'Support', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop' },
    { id: 9, company: 'Snap Labs', title: 'Snap Labs Lets Live Host Conversation Chat', category: 'Social', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop' },
    { id: 10, company: 'Equitize', title: 'Origin with Case: Revolution in Construction', category: 'Finance', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { id: 11, company: 'FreshWorks', title: 'Fresh Symbolizes: B2B Platform Enhanced with CometChat', category: 'SaaS', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
    { id: 12, company: 'Dubsmash', title: 'How Dubsmash Streamlined Chat Using CometChat', category: 'Social', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop' },
    
    // Page 2
    { id: 13, company: 'TechCorp', title: 'Revolutionizing Customer Support with AI Chat', category: 'Technology', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop' },
    { id: 14, company: 'HealthPlus', title: 'Telemedicine Platform Connects Doctors & Patients', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
    { id: 15, company: 'EduLearn', title: 'Virtual Classrooms Transform Online Education', category: 'Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop' },
    { id: 16, company: 'FinanceHub', title: 'Real-Time Trading Communication Platform', category: 'Finance', image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop' },
    { id: 17, company: 'RetailMax', title: 'E-commerce Chat Increases Sales by 40%', category: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
    { id: 18, company: 'GameOn', title: 'In-Game Communication Enhances Player Experience', category: 'Gaming', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop' },
    { id: 19, company: 'FoodDelivery', title: 'Restaurant-Customer Chat Improves Orders', category: 'Food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
    { id: 20, company: 'TravelEase', title: 'Travel Agency Booking System with Live Chat', category: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop' },
    { id: 21, company: 'SocialConnect', title: 'Community Platform Builds Engaged Users', category: 'Social', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop' },
    { id: 22, company: 'PropertyPro', title: 'Real Estate Chat Connects Buyers & Agents', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop' },
    { id: 23, company: 'FitnessApp', title: 'Fitness Coaching Through Real-Time Chat', category: 'Health', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop' },
    { id: 24, company: 'EventHub', title: 'Virtual Events Platform with Networking Chat', category: 'Events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop' },

    // Page 3
    { id: 25, company: 'MusicStream', title: 'Artist-Fan Communication Platform', category: 'Entertainment', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop' },
    { id: 26, company: 'CodeAcademy', title: 'Peer Programming with Built-in Chat', category: 'Education', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop' },
    { id: 27, company: 'PetCare', title: 'Veterinary Consultations via Video Chat', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop' },
    { id: 28, company: 'LegalAdvice', title: 'Attorney-Client Secure Messaging Platform', category: 'Legal', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop' },
    { id: 29, company: 'CarRental', title: 'Fleet Management with Driver Communication', category: 'Transportation', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop' },
    { id: 30, company: 'BeautyBook', title: 'Salon Booking with Stylist Chat Feature', category: 'Beauty', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop' },
    { id: 31, company: 'ConstructionHub', title: 'Project Management Chat for Construction Teams', category: 'Construction', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop' },
    { id: 32, company: 'FarmConnect', title: 'Agricultural Marketplace with Farmer Chat', category: 'Agriculture', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop' },
    { id: 33, company: 'InsurancePro', title: 'Claims Processing with Agent Communication', category: 'Insurance', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    { id: 34, company: 'ChurchConnect', title: 'Community Engagement Platform for Churches', category: 'Community', image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop' },
    { id: 35, company: 'JobMatch', title: 'Recruiter-Candidate Chat Platform', category: 'HR', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop' },
    { id: 36, company: 'BankSecure', title: 'Banking App with Customer Service Chat', category: 'Banking', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&h=300&fit=crop' },

    // Continue generating for pages 4-7 (48 more cards)
    ...Array.from({ length: 48 }, (_, i) => ({
      id: 37 + i,
      company: `Company ${37 + i}`,
      title: `Customer Success Story ${37 + i}`,
      category: ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail'][i % 5],
      image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=300&fit=crop`
    }))
  ];

  const categories = ['All', 'Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Social', 'Events'];

  const filteredStories = allStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         story.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilter === 'All' || story.category === selectedFilter;
    return matchesSearch && matchesCategory;
  });

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentStories = filteredStories.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">
              All <span className="text-gray-400">customer stories</span>
            </h1>
            <select 
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-gray-900 border border-gray-800 rounded-lg pl-4 pr-10 py-2 text-sm w-64 focus:outline-none focus:border-blue-500"
            />
            <svg className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-gray-400'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function StoryCard({ story }: { story: Story }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={story.image}
          alt={story.company}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white px-4 py-2 rounded-lg">
            <span className="text-gray-900 font-bold">{story.company}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-blue-400 mb-2">{story.category}</div>
        <h3 className="text-white font-semibold mb-4 line-clamp-2 group-hover:text-blue-400 transition">
          {story.title}
        </h3>
        <button className="text-blue-400 text-sm font-medium border border-blue-500/30 hover:bg-blue-500/10 px-4 py-2 rounded-lg transition">
          Read Success Story
        </button>
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
}