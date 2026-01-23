"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, MessageCircle, Users, BookOpen, Lightbulb } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [developersDropdown, setDevelopersDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setMoreDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setMoreDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleProductsMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setProductsDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleDevelopersMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDevelopersDropdown(true);
  };

  const handleDevelopersMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDevelopersDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  return (
    <header
      className="w-full relative z-50"
      style={{ backgroundColor: "#0a0914" }}
    >
      {/* ================= MAIN NAV ================= */}
      <div className="backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-blue-500 font-extrabold text-xl tracking-wide">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Chat-Logo"
                width={60}
                height={60}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-sm text-gray-300 font-bold uppercase">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button className="hover:text-blue-500 transition">
                Products
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-120 bg-black/95 backdrop-blur border border-gray-800 rounded-lg shadow-xl transition-all duration-200 ${
                  productsDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-2">
                  {/* Real-Time User Communication */}
                  <Link
                    href="/real-time-communication"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Real-Time User Communication</h4>
                      <p className="text-gray-400 text-xs">Chat and calls your users will love.</p>
                    </div>
                  </Link>
                  
                  {/* Chat & Messaging */}
                  <Link
                    href="/chat-messaging"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Chat & Messaging</h4>
                      <p className="text-gray-400 text-xs">1:1, group, and broadcast conversations made simple.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Developers Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDevelopersMouseEnter}
              onMouseLeave={handleDevelopersMouseLeave}
            >
              <button className="hover:text-blue-500 transition">
                Developers
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur border border-gray-800 rounded-lg shadow-xl transition-all duration-200 ${
                  developersDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-2">
                  {/* Documentation */}
                  <Link
                    href="/documentation"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Documentation</h4>
                      <p className="text-gray-400 text-xs">Docs that answer questions before you ask.</p>
                    </div>
                  </Link>
                  
                  {/* Feature Requests */}
                  <Link
                    href="/feature-requests"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Feature Requests</h4>
                      <p className="text-gray-400 text-xs">Tell us what you want next.</p>
                    </div>
                  </Link>
                  
                  {/* Community */}
                  <Link
                    href="/community"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Community</h4>
                      <p className="text-gray-400 text-xs">Learn and share with fellow builders</p>
                    </div>
                  </Link>
                  
                  {/* Help Center */}
                  <Link
                    href="/help-center"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Help Center</h4>
                      <p className="text-gray-400 text-xs">Quick answers to common questions.</p>
                    </div>
                  </Link>
                  
                  {/* Office Hours */}
                  <Link
                    href="/office-hours"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Office Hours</h4>
                      <p className="text-gray-400 text-xs">Live help from our team.</p>
                    </div>
                  </Link>
                  
                  {/* Report an Issue */}
                  <Link
                    href="/report-issue"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition group"
                  >
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">Report an issue</h4>
                      <p className="text-gray-400 text-xs">Found a bug? We're on it</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {[
              "Capabilities",
              "Resources",
              "Pricing",
              "Customers",
            ].map((item) => (
              <Link
                key={item}
                href={item.toLowerCase()}
                className="hover:text-blue-500 transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden lg:block px-6 py-3 text-sm font-bold text-white uppercase hover:bg-blue-400 transition"
            >
              Log in
            </Link>
            <Link
              href="/login"
              className="hidden lg:block bg-primary px-6 py-3 text-sm font-bold text-white uppercase hover:bg-blue-400 transition"
            >
              Schedule Demo
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden bg-primary p-3"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-black/95 backdrop-blur transition-all duration-300 ${
            open ? "top-20 opacity-100" : "top-14 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-8 text-sm font-semibold uppercase">
            {/* Products Mobile */}
            <div className="w-full px-8">
              <div className="text-blue-500 font-semibold mb-3">Products</div>
              <div className="space-y-3 pl-4">
                <Link
                  href="/real-time-communication"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Real-Time User Communication</span>
                </Link>
                <Link
                  href="/chat-messaging"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Chat & Messaging</span>
                </Link>
              </div>
            </div>
            
            {/* Developers Mobile */}
            <div className="w-full px-8">
              <div className="text-blue-500 font-semibold mb-3">Developers</div>
              <div className="space-y-3 pl-4">
                <Link
                  href="/documentation"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">Documentation</span>
                </Link>
                <Link
                  href="/feature-requests"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-sm">Feature Requests</span>
                </Link>
                <Link
                  href="/community"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Community</span>
                </Link>
                <Link
                  href="/help-center"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">Help Center</span>
                </Link>
                <Link
                  href="/office-hours"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Office Hours</span>
                </Link>
                <Link
                  href="/report-issue"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition py-2"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Report an issue</span>
                </Link>
              </div>
            </div>
            
            {[
              "Features",
              "Resources",
              "Pricing",
              "Customers",
            ].map((item) => (
              <Link
                key={item}
                href={item.toLowerCase()}
                className="hover:text-blue-500 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="mt-4 bg-primary px-8 py-3 text-white text-sm font-bold uppercase">
              Start with ChatX
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
