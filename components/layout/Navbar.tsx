"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
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

  return (
    <header className="w-full relative z-50" style={{backgroundColor: '#0a0914'}}>
      {/* ================= MAIN NAV ================= */}
      <div className="backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-blue-500 font-extrabold text-xl tracking-wide">
            <Link href="/">
              {/* <Image
                src="/images/1.png"
                alt="ChatX-logo"
                width={100}
                height={100}
                className="h-16 w-auto md:h-24 lg:h-40 transition-all duration-300"
              /> */}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-sm text-gray-300 font-bold uppercase">
            {["Products", "Capabilities", "Developers", "Resources","Pricing", "Customers"].map((item) => (
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
             <Link href="/login" className="hidden lg:block px-6 py-3 text-sm font-bold text-white uppercase hover:bg-blue-400 transition">
              Log in
            </Link>
            <Link href="/login" className="hidden lg:block bg-blue-500 px-6 py-3 text-sm font-bold text-white uppercase hover:bg-blue-400 transition">
              Schedule a demo
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden bg-blue-500 p-3"
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
            {["Products", "Capabilities", "Developers", "Resources","Pricing", "Customers"].map((item) => (
              <Link
                key={item}
                href={item.toLowerCase()}
                className="hover:text-blue-500 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile More Dropdown */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => setMoreDropdown(!moreDropdown)}
                className="flex items-center gap-1 hover:text-blue-500 transition"
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${moreDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {moreDropdown && (
                <div className="flex flex-col items-center gap-2 mt-2">
                  <Link
                    href="/gallery"
                    className="text-sm text-gray-400 hover:text-blue-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/testimonials"
                    className="text-sm text-gray-400 hover:text-blue-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-400 hover:text-blue-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-400 hover:text-blue-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-400 hover:text-blue-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <button className="mt-4 bg-blue-500 px-8 py-3 text-white text-sm font-bold uppercase">
              Join Us Today
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
