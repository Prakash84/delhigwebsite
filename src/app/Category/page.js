"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { AnimatePresence } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
export default function Category() {
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
      image: '/images/49.jpg',
    },
    {
      id: 6,
      name: 'Mia Thompson',
      role: 'First Class Hostess',
      category: 'airhostess',
      description: 'Specialized in luxury travel experience. Trained in hospitality management.',
      image: '/images/smiling.jpg', // Placeholder image path
    },
    {
      id: 7,
      name: 'Chloe Williams',
      role: 'Film Actress',
      category: 'celebrity',
      description: 'Rising star in independent cinema. Trained at Royal Academy of Dramatic Art.',
      image: '/images/413965.jpg', // Placeholder image path
    },
    {
      id: 8,
      name: 'Ava Garcia',
      role: 'Engineering Student',
      category: 'college',
      description: 'Robotics club president. Developing AI solutions for sustainable energy.',
      image: '/images/1.jpg', // Placeholder image path
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 min-h-[420px] md:min-h-[520px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Use `fill` and `object-cover` (no layout/objectFit) + sizes for responsive loading */}
        <Image
          src="/images/32586.jpg"
          alt="Spa and Wellness Background"
          fill
          className="object-cover w-full h-full opacity-90"
          quality={90}
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
        />
        {/* Optional subtle overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-800/50" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white py-2 px-6 rounded-full text-sm font-semibold border border-white/30">
              {/* ...badge svg and text... */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Special Launch Offer - 20% Off First Treatment!
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Discover{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Blissful Relaxation
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-lg">
              Indulge in our premium spa treatments designed to rejuvenate your body, mind, and spirit. Experience tranquility like never before.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {/* ...features... */}
            </div>

            {/* CTA Button */}
            <button className="group mt-8 bg-white text-purple-900 hover:bg-gray-100 font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              Book Now
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>

          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl max-w-md ml-auto">
            {/* ...stats content... */}
          </div>
        </div>
      </div>
    </div>
        {/* end banner */}
        <section className="bg-gradient-to-r from-amber-50 to-white py-20 lg:py-28">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
                {/* Text column */}
                <div className="lg:col-span-6">
                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
                  >
                    <span className="block">Experience the</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Art of</span>
                    <span className="block text-pink-600">Relaxation</span>
                  </motion.h2>
        
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="mt-6 text-gray-600 max-w-xl leading-relaxed"
                  >
                  Welcome to Delhi Body Spa, where we offer a range of luxury spa treatments tailored to your needs.Calm interiors, soothing ambiance and privacy.Calm interiors, soothing ambiance and privacy. Calm interiors, soothing ambiance and privacy.
                  </motion.p>
        
                  <div className="mt-8 flex items-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href="#book"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium shadow-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    >
                      Book A Session
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </motion.a>
        
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 bg-white"
                    >
                      View Properties
                    </motion.button>
                  </div>
        
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Expert Therapists</h4>
                        <p className="text-sm text-gray-500">Ancient & modern techniques for your wellness.</p>
                      </div>
                    </div>
        
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-pink-500 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Luxurious Setting</h4>
                        <p className="text-sm text-gray-500">Calm interiors, soothing ambiance and privacy.</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* Image column */}
                <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                  <div className="w-full max-w-md lg:max-w-lg relative">
                    {/* big tilted card */}
                    <motion.div
                      initial={{ rotate: 6, scale: 0.98, y: -10, opacity: 0 }}
                      whileInView={{ rotate: 2, scale: 1, y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white"
                      style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image src='/images/mmm.jpg' alt="spa" fill style={{ objectFit: 'cover' }} />
                      </div>
                    </motion.div>
        
                    {/* small overlapping card */}
                    <motion.div
                      initial={{ rotate: -8, x: -24, y: 30, opacity: 0 }}
                      whileInView={{ rotate: -4, x: -8, y: 8, opacity: 1 }}
                      transition={{ delay: 0.12, duration: 0.6 }}
                      className="absolute left-0 bottom-0 transform -translate-x-8 translate-y-6 rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white w-64 lg:w-80"
                      style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <Image src='/images/413965.jpg' alt="spa2" fill style={{ objectFit: 'cover' }} />
                      </div>
                    </motion.div>
        
                    {/* subtle background highlight */}
                    <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center items-center">
                      <div className="w-72 h-72 rounded-full blur-3xl opacity-60 bg-gradient-to-r from-purple-300 to-pink-300"></div>
                    </div>
                  </div>
                </div>
        
              </div>
        
              {/* Decorative footer wave */}
              <div className="mt-12">
                <svg viewBox="0 0 1200 80" className="w-full" preserveAspectRatio="none">
                  <path d="M0,0 C300,100 900,-60 1200,50 L1200,80 L0,80 Z" fill="#fff" opacity="0.8"></path>
                </svg>
              </div>
            </section>
        {/* content section  */}
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#fefaf6] to-[#fdf9f5] overflow-hidden">
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50/80 to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-200/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-200/20 blur-3xl animate-pulse-slow"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Image - Enhanced with modern frame */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[550px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  loading="lazy"
                  src="/images/4201724.jpg"
                  alt="Luxury Spa Experience"
                  fill
                  className="object-cover rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Modern corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-pink-400/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-pink-400/50 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg"></div>
                
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
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Enhanced Heading with decorative elements */}
              <div className="relative">
                <div className="absolute -left-6 top-3 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  The{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                    Ultimate Spa Journey
                    <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"></div>
                  </span>
                </h2>
              </div>
        
              {/* Enhanced Content with modern list */}
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                  At <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Delhi Body Spa</strong>, 
                  every treatment is designed to be more than just a service—it&apos;s an 
                  experience. Our luxurious spa is a haven for those seeking tranquility, 
                  where elegant interiors blend seamlessly with calming aromas and soothing 
                  melodies.
                </p>
                
                <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Our Specialties
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Female-to-male therapies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Couple spa sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Rejuvenating body-to-body massages</span>
                    </li>
                  </ul>
                </div>
        
                <p>
                  With skilled foreign therapists and expert techniques, our treatments merge ancient healing 
                  traditions with modern relaxation methods. Step into a world of indulgence, let go of your worries, 
                  and embrace the true essence of wellness.
                </p>
              </div>
        
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/about"
                  className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute -inset-10 bg-gradient-to-r from-white/20 via-white/5 to-white/20 transform rotate-12 group-hover:animate-shine"></div>
                  </div>
                  <span className="relative z-10 flex items-center">
                    Explore More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </motion.a>
        
                <motion.a
                  href="#contact"
                  className="px-8 py-4 rounded-full font-medium border-2 bg-white/80 backdrop-blur-sm border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg transition-all relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <span className="relative z-10 flex items-center">
                    Book Appointment
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
        {/* end content section   */}
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
                {/* content */}
                            <section className="bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
                  <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-pink-100/40 blur-3xl"></div>
                
                  <div className="max-w-[95%] mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                      <motion.div
                        className="inline-flex items-center gap-2 bg-purple-100/60 border border-purple-200 px-5 py-2 rounded-full mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"></div>
                        <span className="text-purple-700 font-medium tracking-wider">
                          PREMIUM EXPERIENCE
                        </span>
                      </motion.div>
                
                      <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        Top Luxury Spa{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          Outlets in Aerocity Delhi
                        </span>
                      </motion.h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    </div>
                
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                      {/* Left Image & Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 relative"
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl z-10">
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-1 rounded-2xl">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                                <img
                                  src="/images/7170.jpg"
                                  alt="Premium Body Spa"
                                  className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                                  Most Popular
                                </div>
                              </div>
                
                              <div className="mt-6">
                                <div className="flex justify-between items-start">
                                  <h3 className="text-2xl font-bold text-gray-800">
                                    Premium Body Spa
                                  </h3>
                                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                                    ₹1999 First Visit
                                  </div>
                                </div>
                
                                <ul className="mt-4 space-y-2">
                                  {[
                                    "Couple Massage",
                                    "Jacuzzi Bath",
                                    "Private Room",
                                    "Oil & Cream Massage",
                                    "Aromatherapy",
                                  ].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                      <span className="text-purple-600 mr-2">✓</span>
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                
                                <a
                                  href="https://t.me/Tanuspa"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg mt-6"
                                >
                                  <FaTelegram className="text-xl mr-3" />
                                  Join Telegram Channel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 rounded-full z-0 blur-xl"></div>
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-pink-100 rounded-full z-0 blur-lg"></div>
                      </motion.div>
                
                      {/* Right Text Content */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2"
                      >
                        <div className="max-w-lg">
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Escape the city&apos;s hustle and indulge in a tranquil haven where
                            serenity meets sophistication. Our premium spa is nestled within
                            Aerocity&apos;s most luxurious 5-star hotels, offering an oasis of calm
                            in the heart of Delhi. We specialize in world-class therapies
                            including{" "}
                            <span className="font-medium text-gray-800">
                              hot stone massage
                            </span>
                            ,{" "}
                            <span className="font-medium text-gray-800">couple experiences</span>
                            ,{" "}
                            <span className="font-medium text-gray-800">Thai techniques</span>,
                            and{" "}
                            <span className="font-medium text-gray-800">
                              signature oil treatments
                            </span>{" "}
                            - all delivered in beautifully designed private sanctuaries.
                          </p>
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Escape the city&apos;s hustle and indulge in a tranquil haven where
                            serenity meets sophistication. Our premium spa is nestled within
                            Aerocity&apos;s most luxurious 5-star hotels, offering an oasis of calm
                            in the heart of Delhi.
                          </p>
                
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                              {
                                icon: "★",
                                title: "5 Star Hotel",
                                desc: "5-star rated luxury spa",
                              },
                              {
                                icon: "💆🏻",
                                title: "Nuru Massage",
                                desc: "Steam, sauna & jacuzzi",
                              },
                              {
                                icon: "👩‍❤️‍👨",
                                title: "Couples Welcome",
                                desc: "Private couple suites",
                              },
                              {
                                icon: "🧖",
                                title: "Erotic Massage",
                                desc: "Natural & sustainable",
                              },
                            ].map((f, i) => (
                              <div
                                key={i}
                                className="bg-white p-4 rounded-xl shadow-sm border border-purple-50 hover:shadow-md transition-all"
                              >
                                <div className="text-purple-600 text-2xl mb-2">{f.icon}</div>
                                <h4 className="font-medium text-gray-800">{f.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                              </div>
                            ))}
                          </div>
                
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/Services">
                              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all">
                                View Treatments
                              </button>
                            </a>
                
                            <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all">
                              Book Appointment
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>
                            {/* end content */}
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