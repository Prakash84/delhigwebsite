"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { FaTelegram } from "react-icons/fa";
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function services() {
  
  const [isVisible, setIsVisible] = useState(false);
 useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

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
  const features = [
    {
      id: 1,
      title: "Style Guides",
      description: "Curated fashion guides for Delhi's diverse occasions and seasons",
      icon: "👗"
    },
    {
      id: 2,
      title: "Beauty Tips",
      description: "Localized beauty secrets for Delhi's climate and pollution challenges",
      icon: "💄"
    },
    {
      id: 3,
      title: "Events & Meetups",
      description: "Exclusive gatherings for Delhi's fashion-forward community",
      icon: "🎉"
    },
    {
      id: 4,
      title: "Local Spotlights",
      description: "Featured designers and boutiques from Delhi's fashion scene",
      icon: "📍"
    }
  ];
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
            Escape the city's hustle and indulge in a tranquil haven where
            serenity meets sophistication. Our premium spa is nestled within
            Aerocity's most luxurious 5-star hotels, offering an oasis of calm
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
            Escape the city's hustle and indulge in a tranquil haven where
            serenity meets sophistication. Our premium spa is nestled within
            Aerocity's most luxurious 5-star hotels, offering an oasis of calm
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
        {/* Content */}
     <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Delhi Fashion Revolution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant style culture of India's capital. Empowerment through fashion, beauty, and community.
          </p>
        </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-8">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        {/* <div className="mt-24 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h4 className="text-xl font-bold">Priya Sharma</h4>
              <p className="text-pink-500">Fashion Blogger, South Delhi</p>
            </div>
          </div>
          <blockquote className="text-2xl italic text-gray-700">
            "This platform transformed how I connect with Delhi's fashion community. The local style guides helped me navigate Delhi's unique fashion landscape like never before!"
          </blockquote>
        </div> */}
      </div>
    </section>
    {/* End Content */}
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
                    
            <section className="bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] py-20 px-6 md:px-16 relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-lg font-medium text-purple-700 tracking-widest">
        OUR SIGNATURE OFFERINGS
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-[#2d1f2f] mt-4 mb-6">
        Premium Spa Experiences
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Column */}
      <div>
        {/* Foreigner Staff */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-purple-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-purple-800">Foreigner Staff</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            We believe true wellness emerges from harmony between physical, mental, and energetic dimensions. Unlike conventional spas, our approach integrates three core principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {title: 'Russian Therapist', desc: 'Therapists trained in meditation techniques to create truly present healing experiences'},
              {title: 'Afgani Therapist', desc: 'Therapies designed to activate your body\'s innate healing capabilities'},
              {title: 'Uzbeki Therapist', desc: 'Space designed with sacred geometry to enhance therapeutic benefits'}
            ].map((item, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-xl">
                <h3 className="font-bold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            This holistic framework allows us to create treatments that don't just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              60-90 min | From ₹2,800
            </span>
          </div>
        </motion.div>

        {/* Why Go For Delhi Spa */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-purple-800">Why Go For Delhi Spa</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team of 23 therapists represents the pinnacle of spa craftsmanship. Each practitioner undergoes 500+ hours of training in our proprietary modalities before touching clients. We source talent globally, with specialists in:
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-6">
            {[
              'Thai Herbal Compress', 'Shiatsu', 'Lymphatic Drainage', 
              'Ayurvedic Abhyanga', 'Hot Stone Therapy', 'Aromatherapy',
              'Deep Tissue Sculpting', 'Craniosacral'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-purple-700 rounded-full mr-3"></div>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              75-90 min | From ₹3,200
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div>
        {/* Top Rated Services */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-purple-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-purple-800">Top Rated Services</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our commitment extends beyond individual wellness to planetary health. We're proud to be the first Carbon Neutral spa in our region, with initiatives including:
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {[
              {icon: '♻️', text: 'Zero-Waste Policy'},
              {icon: '🌱', text: 'Organic Linens'},
              {icon: '💧', text: 'Water Recycling'},
              {icon: '🌎', text: 'Carbon Offsetting'},
            ].map((item, index) => (
              <span key={index} className="bg-pink-50 text-purple-800 px-4 py-2 rounded-full flex items-center">
                <span className="mr-2 text-xl">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our product line features sustainably harvested ingredients from ethical cooperatives. We've partnered with local environmental initiatives, donating 5% of profits to wetland conservation.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              60-120 min | From ₹2,500
            </span>
          </div>
        </motion.div>

        {/* Home & Hotel Spa */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-purple-800">Home & Hotel Spa</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            We bring the spa to you with personalized luxury experiences in premium 5-star hotels across Delhi.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {[
              {icon: '🏨', text: 'JW Marriott Hotel Aerocity'},
              {icon: '🏩', text: 'The Ashok (Chanakyapuri)'},
              {icon: '🏨', text: 'The Park Connaught Place'},
              {icon: '🏩', text: 'The Suryaa New Delhi (NFC)'},
            ].map((item, index) => (
              <span key={index} className="bg-pink-50 text-purple-800 px-4 py-2 rounded-full flex items-center">
                <span className="mr-2 text-xl">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our exclusive partnerships with luxury hotels ensure world-class treatments in the comfort of iconic destinations.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              3-6 hours | From ₹8,500
            </span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Additional Information */}
    <motion.div 
      className="mt-16 bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl p-8 text-white shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Personalized Spa Journeys</h3>
          <p className="mb-4 opacity-90">
            Every visit begins with a confidential wellness consultation where our specialists listen to your concerns and goals. We create a truly personalized treatment plan that restores balance.
          </p>
          <p className="opacity-90">
            Our exclusive loyalty program offers priority booking, complimentary upgrades, and special members-only events. Corporate wellness packages are available for businesses looking to invest in their team's wellbeing.
          </p>
        </div>
        <div className="flex justify-center">
          <a 
            href="https://t.me/Tanuspa" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
          >
            <FaTelegram className="text-xl mr-3" />
            Join Telegram Channel
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section>
{/* content section */}
<section className="relative bg-gradient-to-br from-[#fdf9f5] via-[#fefaf6] to-[#f8f4ed] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-10 left-0 w-28 h-28 rounded-full bg-pink-200/30 blur-2xl"></div>
  <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-200/30 blur-2xl"></div>

  {/* Gradient Accent Shapes */}
  <div className="absolute top-24 left-12 opacity-20 rotate-12">
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="1.5">
      <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
    </svg>
  </div>
  <div className="absolute bottom-32 right-16 opacity-20 -rotate-12">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="1.5">
      <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side: Image Gallery */}
      <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
          <div className="relative h-96">
            <Image 
              src="/images/6631.jpg" 
              alt="Relaxing Spa Massage"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg tracking-wide">Signature Massage</div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            {src: "/images/6637.jpg", alt: "Spa Ambience"},
            {src: "/images/27110283.jpg", alt: "Luxury Spa"}
          ].map((img, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500 group">
              <div className="relative h-56">
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Content */}
      <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-purple-50">
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xl shadow-md">
              🌸
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 ml-4 tracking-tight">
              Room of Relaxation
            </h2>
          </div>

          <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">24+ Exclusive Body Spa Outlets</span>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Each spa is designed as a sanctuary of serenity, blending luxury with natural healing.
          </p>

          <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">The Finest Massages in Delhi</span>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Experience world-class therapies with unmatched comfort, elegance, and rejuvenation.
          </p>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {icon: "💆‍♀️", title: "Lajpat Nagar", desc: "Prime Location"},
              {icon: "🕯️", title: "Aerocity", desc: "Luxury Spa"},
              {icon: "🏨", title: "Connaught Place", desc: "Central Access"},
              {icon: "🌱", title: "Dwarka", desc: "Exclusive Service"}
            ].map((loc, i) => (
              <div key={i} className="bg-purple-50/60 p-4 rounded-xl flex items-start hover:shadow-md transition-all">
                <div className="text-purple-600 text-2xl mr-3 mt-1">{loc.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{loc.title}</h3>
                  <p className="text-gray-600 text-sm">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700">
              Our expert therapists combine ancient and modern techniques to release stress, improve circulation, and restore balance. From the moment you step inside, you’ll be welcomed into a space of peace, care, and luxury.
            </p>
            <p className="text-gray-700">
              Whether for pain relief, post-workout recovery, or pure relaxation, our spa treatments are designed around you.
            </p>
            <p className="text-gray-700">
              Every session ensures hygiene, comfort, and personalized care — because your wellness deserves the best.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Via WhatsApp
            </a>
            
            <a
              href="/pricing"
              className="flex-1 inline-flex items-center justify-center bg-white border-2 border-purple-600 text-purple-700 px-6 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-all duration-300 shadow hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10H8v2h2v2h2v-2h2v-2h-2V8h-2v2zm7 5h-7v-2h7v2z"/>
              </svg>
              View Packages
            </a>
          </div>
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