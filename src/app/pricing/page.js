"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { AnimatePresence } from "framer-motion";

export default function pricing() {
  
    {/* staff showcase */}
      const [activeCategory, setActiveCategory] = useState('all');
      const categories = [
        { id: 'all', name: 'All Staff' },
        { id: 'airhostess', name: 'Airhostess' },
        { id: 'celebrity', name: 'Celebrity' },
        { id: 'college', name: 'College Girls' },
        { id: 'foreign', name: 'Foreign Girls' },
        { id: 'highprofile', name: 'High Profile' },
      ];
      const staffMembers = [
        {
          id: 1,
          name: 'Sophia Martinez',
          role: 'Senior Airhostess',
          category: 'airhostess',
          description: '5+ years experience with international airlines. Fluent in 4 languages.',
          image: '/images/Airhostess_girl.jpg', // Placeholder image path
        },
        {
          id: 2,
          name: 'Alex Johnson',
          role: 'TV Personality',
          category: 'celebrity',
          description: 'Award-winning host of "Nightlife" show. Known for vibrant personality.',
          image: '/images/Celebrity_girl.jpg', // Placeholder image pathss
        },
        {
          id: 3,
          name: 'Emma Wilson',
          role: 'Marketing Student',
          category: 'college',
          description: 'Top of her class at NYU. Passionate about digital marketing trends.',
          image: '/images/spaStaffInsta.jpg', // Placeholder image path
        },
        {
          id: 4,
          name: 'Isabella Rossi',
          role: 'International Model',
          category: 'foreign',
          description: 'Milan-born fashion model. Featured in Vogue and Elle magazines.',
          image: '/images/celebrityspastaff.jpg', // Placeholder image path
        },
        {
          id: 5,
          name: 'Olivia Chen',
          role: 'Corporate Executive',
          category: 'highprofile',
          description: 'Fortune 500 company board member. MBA from Harvard Business School.',
        },
        {
          id: 6,
          name: 'Mia Thompson',
          role: 'First Class Hostess',
          category: 'airhostess',
          description: 'Specialized in luxury travel experience. Trained in hospitality management.',
        },
        {
          id: 7,
          name: 'Chloe Williams',
          role: 'Film Actress',
          category: 'celebrity',
          description: 'Rising star in independent cinema. Trained at Royal Academy of Dramatic Art.',
        },
        {
          id: 8,
          name: 'Ava Garcia',
          role: 'Engineering Student',
          category: 'college',
          description: 'Robotics club president. Developing AI solutions for sustainable energy.',
        },
      ];
      const filteredStaff = activeCategory === 'all' 
        ? staffMembers 
        : staffMembers.filter(member => member.category === activeCategory);
        {/* End Staff Showcase */}
  {/* pricing */}
      const [selectedDuration, setSelectedDuration] = useState('session'); // 'session', 'two', 'night'
    
    const pricingPlans = [
      {
        id: 'spa',
        title: 'Spa Staff',
        icon: <FaSpa className="text-pink-500" />,
        description: 'Professional spa therapists for ultimate relaxation',
        color: 'from-pink-500 to-rose-500',
        pricing: {
          session: '5k',
          two: '10k',
          night: '15k'
        },
        features: ['Deep tissue massage', 'Aromatherapy', 'Hot stone therapy', 'Reflexology']
      },
      {
        id: 'college',
        title: 'College Girls',
        icon: <FaGraduationCap className="text-blue-500" />,
        description: 'Energetic and vibrant companions',
        color: 'from-blue-500 to-indigo-600',
        pricing: {
          session: '10k',
          two: '20k',
          night: '30k'
        },
        features: ['Social events', 'Campus tours', 'Study sessions', 'City exploration']
      },
      {
        id: 'airhostess',
        title: 'Airhostess',
        icon: <FaPlane className="text-teal-500" />,
        description: 'Professional and sophisticated companions',
        color: 'from-teal-500 to-emerald-600',
        pricing: {
          session: '15k',
          two: '30k',
          night: '45k'
        },
        features: ['Travel companionship', 'Multilingual conversation', 'Etiquette training', 'Event hosting']
      },
      {
        id: 'foreigner',
        title: 'Foreigner',
        icon: <FaGlobeAsia className="text-amber-500" />,
        description: 'International companions for cultural exchange',
        color: 'from-amber-500 to-orange-500',
        pricing: {
          session: '20k',
          two: '40k',
          night: '60k'
        },
        features: ['Cultural exchange', 'Language practice', 'International cuisine', 'Global perspective']
      },
      {
        id: 'celebrity',
        title: 'Celebrity',
        icon: <FaCrown className="text-purple-500" />,
        description: 'Exclusive high-profile companions',
        color: 'from-purple-600 to-fuchsia-600',
        pricing: {
          session: '30k',
          two: '60k',
          night: '90k'
        },
        features: ['VIP events', 'Red carpet appearances', 'Personalized experiences', 'Discretion guaranteed']
      }
    ];
      {/* end pricing */}
      // FAQ Section
          const [activeCategory1, setActiveCategory1] = useState('all');
        const [searchTerm, setSearchTerm] = useState('');
        const [openQuestion, setOpenQuestion] = useState(null);
      
        const categories1 = [
          { id: 'all', name: 'All Questions' },
          { id: 'account', name: 'Account' },
          { id: 'booking', name: 'Bookings' },
          { id: 'payments', name: 'Payments' },
          { id: 'services', name: 'Services' },
        ];
      
        const faqs = [
          {
            id: 1,
            question: 'How do I create an account?',
            answer: 'Creating an account is simple. Click on the "Sign Up" button in the top right corner, fill in your details including name, email, and password, then verify your email address.',
            category: 'account',
          },
          {
            id: 2,
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are securely processed with 256-bit encryption.',
            category: 'payments',
          },
          {
            id: 3,
            question: 'Can I modify my booking after confirmation?',
            answer: 'Yes, you can modify your booking up to 24 hours before your scheduled appointment. Simply log into your account, go to "My Bookings", and select "Modify". Changes are subject to availability.',
            category: 'booking',
          },
          {
            id: 4,
            question: 'How do I cancel a reservation?',
            answer: 'To cancel a reservation, go to "My Bookings" in your account dashboard, select the booking you wish to cancel, and click "Cancel". Cancellation policies vary by service type - please review before confirming.',
            category: 'booking',
          },
          {
            id: 5,
            question: 'What is your refund policy?',
            answer: 'We offer full refunds for cancellations made at least 48 hours in advance. Cancellations within 24-48 hours receive a 50% refund. No refunds are available for cancellations within 24 hours of the appointment.',
            category: 'payments',
          },
          {
            id: 6,
            question: 'Are your services available internationally?',
            answer: 'Yes, we currently operate in 15 countries worldwide. Please check our locations page for specific service availability in your region. Additional fees may apply for international bookings.',
            category: 'services',
          },
          {
            id: 7,
            question: 'How do I reset my password?',
            answer: 'Click "Forgot Password" on the login page, enter your registered email, and you will receive a password reset link. This link expires in 30 minutes for security reasons.',
            category: 'account',
          },
          {
            id: 8,
            question: 'What safety measures do you have in place?',
            answer: 'All our staff undergo thorough background checks and professional training. We offer contactless payment options, 24/7 support, and an emergency contact system for your safety.',
            category: 'services',
          },
        ];
      
        const filteredFaqs = faqs.filter(faq => {
          const matchesCategory = activeCategory1 === 'all' || faq.category === activeCategory1;
          const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
          return matchesCategory && matchesSearch;
        });
      
        const toggleQuestion = (id) => {
          setOpenQuestion(openQuestion === id ? null : id);
        };
          //End FAQ Section
  return (
    <>
    {/* banner */}
       <div className="relative bg-white py-16 px-6 md:px-12 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-8">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-full text-sm font-semibold shadow-md">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Special Launch Offer - 20% Off First Month!
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pricing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Grows With You</span>
          </h1>
          
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your journey. No hidden fees, no complicated terms. Everything you need to succeed in one place.
          </p>
          
          {/* Feature highlights */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">No credit card required to start</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Free 14-day trial on all plans</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Cancel anytime with no questions asked</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="group mt-8 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
            Explore Our Plans
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        
        {/* Image collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Main image */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/spaStaffInsta.jpg"
                alt="Happy customer"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Emma, Premium Plan</p>
                <p className="text-sm">"Best decision I've made!"</p>
              </div>
            </div>
            
            {/* Secondary images */}
            <div className="space-y-4">
              {/* <div className="relative h-36 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/"
                  alt="Feature preview"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </div>
              </div> */}
              
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/1.jpg"
                  alt="Community image"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-400"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
            <div className="text-center">
              <div className="font-bold text-2xl text-pink-600">4.9</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    {/* end banner */}
    
    {/* About Section */}
                    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70"></div>
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-pink-100/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Right Text Section */}
        <motion.div
          className="flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="mr-2">✦</span> About Our Luxury Spa
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience the{" "}
            <span className="relative">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Art of Relaxation
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/60 z-0"></span>
            </span>
          </motion.h2>

          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                Delhi Body Spa
              </strong>
              , where we offer a range of{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                luxury spa
              </strong>{" "}
              treatments including{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                female to male spa
              </strong>
              ,{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                couple massages
              </strong>
              , and much more. Escape the hustle of Delhi and immerse yourself
              in rejuvenating treatments tailored to your needs.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { title: "Foreigner Therapist", icon: "🌏" },
              { title: "Female To Male Massage", icon: "💆‍♂️" },
              { title: "Best Body To Body Spa", icon: "✨" },
              { title: "Couple Massage", icon: "👩‍❤️‍👨" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-50 hover:border-pink-100 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-purple-100 text-purple-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Luxurious and personalized treatments
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/about"
              className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90 transition-all"></div>
              <span className="relative z-10 flex items-center gap-2">
                Learn More About Us
              </span>
            </motion.a>

            <motion.a
              href="#Pricing"
              className="px-8 py-4 rounded-full font-medium border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-50 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Pricing
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Left Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
            <Image
              loading="lazy"
              src="/images/celebrityspastaff.jpg"
              alt="Spa Interior"
              layout="fill"
              objectFit="cover"
              className="rounded-[2.5rem] z-0"
            />
            <motion.div
              className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-pink-300/20 blur-xl z-0"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
    {/* end About Section */}
    {/* 300 content section */}
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fefaf6] to-[#fdf9f5] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70"></div>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-100/30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl"></div>
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[550px]">
            <Image
              loading="lazy"
              src="/images/413965.jpg"
              alt="Luxury Spa Experience"
              layout="fill"
              objectFit="cover"
              className="rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Accent Circle */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300/20 blur-2xl"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
    
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ultimate Spa Journey
            </span>
          </h2>
    
          {/* Long Content */}
          <div className="text-gray-600 text-lg leading-relaxed space-y-5 mb-8">
            <p>
              At <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Delhi Body Spa</strong>, 
              every treatment is designed to be more than just a service—it’s an 
              experience. Our luxurious spa is a haven for those seeking tranquility, 
              where elegant interiors blend seamlessly with calming aromas and soothing 
              melodies to transport you away from the stress of daily life.
            </p>
            <p>
              We specialize in{" "}
              <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                female-to-male therapies, couple spa sessions, and rejuvenating body-to-body massages
              </strong>, 
              all tailored to refresh your body and mind. With skilled foreign 
              therapists and expert techniques, our treatments merge ancient healing 
              traditions with modern relaxation methods.
            </p>
            <p>
              Whether you desire deep relaxation, muscle relief, or a romantic retreat, 
              our spa offers personalized experiences that elevate self-care to an art. 
              Step into a world of indulgence, let go of your worries, and embrace the 
              true essence of wellness at Delhi Body Spa.
            </p>
          </div>
    
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/about"
              className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90 transition-all"></div>
              <span className="relative z-10">Explore More</span>
            </a>
    
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-medium border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-50 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Book Appointment</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    {/* end 300 content section  */}
    {/* pricing */}
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
              >
                Premium Companionship Services
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select from our exclusive range of premium companionship experiences tailored to your preferences
              </p>
            </div>
    
            {/* Duration Selector */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { id: 'session', label: 'One Session' },
                { id: 'two', label: 'Two Sessions' },
                { id: 'night', label: 'Full Night' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedDuration(option.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                    selectedDuration === option.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                  {selectedDuration === option.id && (
                    <FaStar className="ml-2 text-yellow-300 animate-pulse" />
                  )}
                </button>
              ))}
            </motion.div>
    
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group ${
                    plan.id === 'celebrity' ? 'ring-2 ring-purple-500 ring-offset-4' : ''
                  }`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{plan.icon}</div>
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                      </div>
                      {plan.id === 'celebrity' && (
                        <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                          <FaStar className="mr-1" /> Premium
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-sm opacity-90">{plan.description}</p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                        ₹{plan.pricing[selectedDuration]}
                      </div>
                      <div className="text-gray-500 mt-1">
                        {selectedDuration === 'session' && 'Per 2-hour session'}
                        {selectedDuration === 'two' && 'For two sessions'}
                        {selectedDuration === 'night' && 'Full night experience'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.id === 'celebrity' 
                        ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
                    }`}>
                      Select Package
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
    
            {/* Additional Info */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Premium Experience Guarantee</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Discreet and professional service</li>
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Verified and background-checked companions</li>
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Flexible scheduling options</li>
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Custom experiences available upon request</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700/50 rounded-xl p-6 min-w-[300px]">
                    <h4 className="font-bold text-lg mb-3">Why choose us?</h4>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">98%</div>
                      <div className="ml-3 text-gray-300">Client Satisfaction Rate</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">24/7</div>
                      <div className="ml-3 text-gray-300">Support Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* end pricing */} 
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
  {/* Decorative elements */}
  <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-purple-200 opacity-20 blur-3xl -z-0"></div>
  <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-pink-200 opacity-20 blur-3xl -z-0"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Premium Wellness Experience
        </span>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Why Choose{" "}
          <span className="relative">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Spa in Delhi?
            </span>
            {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/40 z-0"></span> */}
          </span>
        </motion.h2>

        <p className="text-purple-800 text-lg md:text-xl leading-relaxed">
          We stand apart through our commitment to authentic techniques, premium ingredients, and personalized care that revitalizes your mind, body and spirit.
        </p>
      </motion.div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Column */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          <div className="p-8">
            <div className="flex items-start mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-800 font-serif mb-2">Expert Therapists</h3>
                <p className="text-purple-700">
                  Our therapists are trained in traditional Ayurvedic techniques with over 10 years of experience in therapeutic massage.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Oil therapy is a traditional wellness practice that uses warm, herb-infused oils tailored to your skin type and body condition.
            </p>
            <p className="text-gray-700 mb-6">
              Each session is customized to your unique needs, ensuring you receive the maximum benefit from your treatment.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['10+ Years Experience', 'Personalized Techniques', 'Deep Tissue Mastery'].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96">
            <Image
              src="/images/7168.jpg"
              alt="Expert therapist performing massage"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          <div className="relative h-96">
            <Image
              src="/images/27110283.jpg"
              alt="Premium spa oils"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="p-8">
            <div className="flex items-start mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-800 font-serif mb-2">Premium Oils & Blends</h3>
                <p className="text-purple-700">
                  We use only cold-pressed, organic oils blended with therapeutic-grade essential oils for maximum benefit.
                  Oil therapy is a traditional wellness practice that uses warm, herb-infused oils tailored to your skin type and body condition.
                  Each session is customized to your unique needs, ensuring you receive the maximum benefit from your treatment.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-purple-700 mb-3">Signature Oil Blends</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Lavender Dream', 'Eucalyptus Renewal', 'Rosemary Harmony', 'Sandalwood Serenity', 'Jasmine Bliss', 'Frankincense Balance'].map((oil, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mr-2"></div>
                    <span className="text-purple-800">{oil}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Benefits Section */}
    <motion.div className="mt-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
      <h3 className="text-3xl font-bold text-purple-900 font-serif text-center mb-12">
        Our Holistic Approach to Wellness
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Mindful Relaxation",
            description: "Techniques that calm the mind and reduce stress",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
          },
          {
            title: "Body Rejuvenation",
            description: "Therapies that restore physical vitality and healing",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            ),
          },
          {
            title: "Spiritual Balance",
            description: "Practices that align energy centers and inner self",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ].map((benefit, index) => (
          <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 text-center" whileHover={{ y: -10, transition: { duration: 0.3 } }}>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              {benefit.icon}
            </div>
            <h4 className="text-xl font-bold text-purple-800 mb-3">{benefit.title}</h4>
            <p className="text-purple-700">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CTA */}
    <motion.div className="text-center mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
        Book Your Rejuvenating Experience
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <p className="text-purple-700 mt-4">Limited slots available. Reserve your session today.</p>
    </motion.div>
  </div>
</section>
{/* staff showcase */}
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Our Exceptional Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our diverse team of professionals who bring excellence and passion to every engagement.
              </p>
            </motion.div>
    
            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
    
            {/* Staff Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredStaff.map((staff) => (
                <motion.div
                  key={staff.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                    <div className="absolute inset-0 flex items-end p-6 z-20">
                      <div>
                        <h3 className="text-xl font-bold text-white">{staff.name}</h3>
                        <p className="text-pink-300 font-medium">{staff.role}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 z-20">
                      {categories.find(cat => cat.id === staff.category)?.name}
                    </div>
                    
                    {/* Placeholder for image */}
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <Image
                            src={staff.image} // Make sure `staff.image` has full image URL or path
                            alt={staff.name}
                            fill
                            className="object-cover"
                          />
                       </div>
                  </div>
                  
                  <div className="p-5">
                    <p className="text-gray-600 mb-4">{staff.description}</p>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        View Profile
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
    
            {/* Stats Section */}
            <motion.div 
              className="mt-20 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Our Team Stands Out</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: '200+', label: 'Professionals' },
                    { value: '98%', label: 'Client Satisfaction' },
                    { value: '50+', label: 'Countries Represented' },
                    { value: '24/7', label: 'Availability' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-pink-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* End Staff Showcase */}


        {/* content section */}
         <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Why Thousands of Girls Choose Our Platform
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the features and benefits that make our platform the perfect choice for girls who want to learn, grow, and connect in a safe and supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-190 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/1.jpg"
                alt="Girls using our platform"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 w-64">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-2xl text-gray-900">50,000+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mr-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Learning Paths</h3>
                <p className="text-gray-700">
                  Our platform offers customized learning experiences tailored to each girl's interests and goals. Whether you're interested in coding, art, science, or entrepreneurship, we create a personalized journey that adapts to your pace and preferences. With regular assessments and feedback, we ensure you're always challenged but never overwhelmed.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Community</h3>
                <p className="text-gray-700">
                  Join a vibrant community of like-minded girls who support and inspire each other. Our platform includes mentorship programs, group projects, and discussion forums where you can share ideas, ask questions, and collaborate on projects. We've created a safe, moderated space where girls can connect without worrying about negativity or judgment.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skill-Building Resources</h3>
                <p className="text-gray-700">
                  Access hundreds of resources designed specifically for girls, including interactive tutorials, video lessons, and hands-on projects. Our content is created by industry experts and educators who understand how to make learning engaging and effective. From beginner to advanced levels, we have materials that will help you develop both technical and soft skills.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mr-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Tracking & Recognition</h3>
                <p className="text-gray-700">
                  Our platform includes comprehensive tools to track your progress and celebrate your achievements. Earn badges, complete levels, and receive certificates as you master new skills. With detailed analytics, you can see how far you've come and identify areas for growth. We believe in recognizing effort and accomplishment to keep you motivated on your learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Safety</h3>
              <p className="text-gray-700 mb-4">
                We prioritize creating a safe online environment for all our members. Our platform features advanced moderation tools, privacy controls, and a zero-tolerance policy for bullying or inappropriate behavior. All interactions are monitored to ensure a positive experience for everyone.
              </p>
              <p className="text-gray-700">
                Parents can have peace of mind knowing their daughters are learning in a secure space. We provide transparency reports and allow customizable privacy settings so each family can choose the level of interaction that works for them.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible Plans for Every Need</h3>
              <p className="text-gray-700 mb-4">
                We offer multiple subscription tiers to accommodate different budgets and learning goals. Whether you're looking for basic access or premium features, we have a plan that will work for you. Our free tier provides substantial value, while our premium plans unlock advanced features and exclusive content.
              </p>
              <p className="text-gray-700">
                All plans include our core features, with premium options adding specialized courses, one-on-one mentoring, and early access to new content. We regularly update our offerings based on member feedback to ensure we're providing the most valuable experience possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end content section */}
    
        {/* FAQ Section */}
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <FiHelpCircle className="text-3xl text-purple-600 mr-3" />
            <span className="text-sm font-semibold bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full">
              Frequently Asked Questions
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How can we help?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, bookings, payments, and more.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for questions..."
              className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory1(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory1 === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className={`h-6 w-6 ${openQuestion === faq.id ? 'text-purple-600' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openQuestion === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600"
                    >
                      <div className="pt-2 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                  <p className="text-purple-200 max-w-md">
                    Our support team is available 24/7 to assist you with any questions or concerns you may have.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:support@example.com" 
                    className="flex items-center justify-center bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    <FiMail className="mr-2" />
                    Email Support
                  </a>
                  <a 
                    href="/contact" 
                    className="flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    <FiMessageSquare className="mr-2" />
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    {/* End FAQ Section */}
    </>
  );
}