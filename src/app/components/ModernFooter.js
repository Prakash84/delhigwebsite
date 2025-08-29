'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTelegram, FaInstagram, FaTwitter, FaFacebookF, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane 
} from 'react-icons/fa';
import Link from 'next/link';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Waves Divider */}
      <div className="w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24 text-gray-900"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                LuxeConnect
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Premium companionship services connecting you with exceptional experiences worldwide. Discretion and excellence guaranteed.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: <FaInstagram />, color: "from-fuchsia-500 to-pink-500", link: "#" },
                { icon: <FaTwitter />, color: "from-sky-500 to-blue-500", link: "#" },
                { icon: <FaFacebookF />, color: "from-blue-600 to-indigo-700", link: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-r ${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Category Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Spa Professionals", link: "#" },
                { name: "College Companions", link: "#" },
                { name: "Air Hostess Escorts", link: "#" },
                { name: "International Models", link: "#" },
                { name: "Celebrity Experiences", link: "#" },
                { name: "Corporate Events", link: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.link} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Our Locations
            </h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: <FaMapMarkerAlt className="text-amber-500" />, 
                  text: "123 Luxury Avenue, Beverly Hills, CA 90210" 
                },
                { 
                  icon: <FaPhone className="text-amber-500" />, 
                  text: "+1 (555) 123-4567" 
                },
                { 
                  icon: <FaEnvelope className="text-amber-500" />, 
                  text: "contact@luxeconnect.com" 
                },
              ].map((item, i) => (
                <li key={i} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <h4 className="font-medium mb-2">Operating Hours</h4>
              <p className="text-sm text-gray-400">
                24/7 Service Availability<br />
                Concierge Support: 9AM - 11PM Daily
              </p>
            </div>
          </motion.div>
          
          {/* Telegram & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Join Our Community
            </h3>
            
            {/* Telegram Link */}
            <div className="mb-8">
              <a 
                href="https://t.me/luxeconnect" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all shadow-lg"
              >
                <FaTelegram className="text-xl mr-3" />
                Join Telegram Channel
              </a>
              <p className="text-gray-400 text-sm mt-3">
                Get exclusive updates, offers, and VIP announcements
              </p>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-4">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border border-gray-700 text-white rounded-l-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-5 rounded-r-lg font-medium transition-all">
                  Join
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>
        
        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-sm"
          >
            &copy; {currentYear} LuxeConnect. All rights reserved.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 md:justify-end text-sm"
          >
            <Link href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
              Discretion Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
              FAQ
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="relative overflow-hidden">
        {/* Floating circles */}
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-400/10 rounded-full mix-blend-soft-light blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-500/10 rounded-full mix-blend-soft-light blur-3xl"></div>
      </div>
    </footer>
  );
};

export default ModernFooter;