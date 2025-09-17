"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Services = [
    { name: "Foreign Model", href: "/Category/Foreignmodel" },
    { name: "Air Hostess", href: "/Category/airhostess" },
    { name: "Independent Indian Profile", href: "/Category/independentindianprofile" },
    { name: "Russian Model", href: "/Category/russianmodel" },
    { name: "Celebrity Profile", href: "/Category/celebrityprofile" },
    { name: "Spa Staff", href: "/Category/spastaff" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Delhi Girls
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-pink-600 transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/Category" // <-- यहां तू default category page ka route दे
              className="flex items-center gap-1 hover:text-pink-600 transition"
            >
              Categories <ChevronDown className="w-4 h-4" />
            </Link>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white rounded-xl shadow-lg p-4 space-y-2 w-56"
                >
                  {Services.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block text-gray-700 hover:text-pink-600 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/Pricing" className="hover:text-pink-600 transition">
            Pricing
          </Link>
          <Link href="/Blogs" className="hover:text-pink-600 transition">
            Blog
          </Link>
          <Link href="/Services" className="hover:text-pink-600 transition">
            Services
          </Link>
           <Link href="/Locations" className="hover:text-pink-600 transition">
            Locations
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4 ml-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-600 hover:text-pink-600 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="text-gray-600 hover:text-green-600 text-lg"
            >
              <FaWhatsapp />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              {/* Services inside mobile */}
              <div>
                <Link 
                  href="/Category" // <-- यहां भी default page का route दे
                  className="flex items-center gap-1 w-full text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories <ChevronDown className="w-4 h-4" />
                </Link>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {Services.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              
              <Link href="/Pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/Blogs" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/Services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/Locations" onClick={() => setIsMenuOpen(false)}>
                Locations
              </Link>

              {/* Social */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-600 hover:text-pink-600 text-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="text-gray-600 hover:text-green-600 text-lg"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
