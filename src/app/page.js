'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { Sparkles, Camera, MapPin } from "lucide-react";


export default function Home({
  images = ['/images/6631.jpg'], // keep single image or pass swiper images externally
  imageUrl = '/images/6631.jpg',
  title = 'Luxury Companion Services',
  subtitle = 'Experience elegance, discretion & premium companionship',
  cta = 'Book Now',
  ctaHref = '#',
}) {
  const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      setIsVisible(true);
    }, []);
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
    // 5 start hotel 
    const [activeHotel, setActiveHotel] = useState(null);
  
  const hotels = [
    {
      id: 1,
      name: "Grand Royale Palace",
      location: "Bangkok, Thailand",
      rating: 5,
      description: "An iconic luxury hotel offering breathtaking views of the city skyline and the Chao Phraya River.",
      image: "/hotel-royale.jpg",
      amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
      price: "₹25,000",
      features: ["Ocean View", "Private Beach", "Helipad"]
    },
    {
      id: 2,
      name: "Azure Waters Resort",
      location: "Maldives",
      rating: 5,
      description: "Experience paradise in our overwater villas with direct access to crystal-clear lagoons.",
      image: "/hotel-azure.jpg",
      amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
      price: "₹45,000",
      features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
    },
    {
      id: 3,
      name: "Alpine Peak Lodge",
      location: "Swiss Alps, Switzerland",
      rating: 5,
      description: "Majestic mountain retreat with ski-in/ski-out access and panoramic alpine views.",
      image: "/hotel-alpine.jpg",
      amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
      price: "₹38,000",
      features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
    },
    {
      id: 4,
      name: "Oasis Desert Mirage",
      location: "Dubai, UAE",
      rating: 5,
      description: "Luxurious desert sanctuary blending traditional Arabian hospitality with modern opulence.",
      image: "/hotel-oasis.jpg",
      amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
      price: "₹32,000",
      features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
    },
    {
      id: 5,
      name: "Emerald Bay Retreat",
      location: "Bali, Indonesia",
      rating: 5,
      description: "Tropical paradise nestled in lush rainforest with stunning ocean vistas and traditional Balinese architecture.",
      image: "/hotel-emerald.jpg",
      amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
      price: "₹28,000",
      features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
    },
    {
      id: 6,
      name: "Sapphire Sky Tower",
      location: "New York City, USA",
      rating: 5,
      description: "Ultra-modern luxury in the heart of Manhattan with panoramic city views from every suite.",
      image: "/hotel-sapphire.jpg",
      amenities: ["Rooftop Pool", "Sky Lounge", "Personal Shopper", "Broadway Concierge"],
      price: "₹52,000",
      features: ["Central Park View", "Penthouse Suites", "Private Elevator"]
    }
  ];

  const amenitiesIcons = {
    "Infinity Pool": <FaSwimmingPool className="text-blue-500" />,
    "Michelin-star Restaurant": <FaUtensils className="text-red-500" />,
    "Luxury Spa": <FaSpa className="text-pink-500" />,
    "24/7 Butler Service": <FaConciergeBell className="text-amber-500" />,
    "Overwater Bungalows": <FaSwimmingPool className="text-cyan-500" />,
    "Coral Reef Access": <FaSwimmingPool className="text-teal-500" />,
    "Underwater Restaurant": <FaUtensils className="text-indigo-500" />,
    "Spa Sanctuary": <FaSpa className="text-purple-500" />,
    "Ski Valet": <FaParking className="text-blue-600" />,
    "Heated Indoor Pool": <FaSwimmingPool className="text-amber-500" />,
    "Mountain Spa": <FaSpa className="text-emerald-500" />,
    "Fondue Restaurant": <FaUtensils className="text-yellow-600" />,
    "Private Oasis Pool": <FaSwimmingPool className="text-amber-500" />,
    "Camel Rides": <FaConciergeBell className="text-orange-800" />,
    "Desert Spa": <FaSpa className="text-orange-600" />,
    "Starlight Dining": <FaUtensils className="text-indigo-500" />,
    "Cliffside Infinity Pool": <FaSwimmingPool className="text-emerald-500" />,
    "Jungle Spa": <FaSpa className="text-green-600" />,
    "Rice Terrace Dining": <FaUtensils className="text-lime-600" />,
    "Cultural Workshops": <FaConciergeBell className="text-amber-700" />,
    "Rooftop Pool": <FaSwimmingPool className="text-sky-500" />,
    "Sky Lounge": <FaConciergeBell className="text-purple-500" />,
    "Personal Shopper": <FaConciergeBell className="text-pink-500" />,
    "Broadway Concierge": <FaConciergeBell className="text-red-500" />
  };
    //end 5 start hotel 

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
    // Sample content data
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

  
  const categories3 = [
    { id: 'all', name: 'All Articles' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'culture', name: 'Culture' },
  ];

  const articles = [
    {
      id: 1,
      title: "Delhi Street Style Revolution",
      description: "Delhi's fashion scene is undergoing a remarkable transformation. Young women across the capital are redefining street style with a blend of traditional and contemporary elements. From Chandni Chowk's vibrant markets to the chic boutiques of South Delhi, a new fashion movement is emerging that celebrates individuality while honoring cultural heritage.",
      category: 'fashion',
      readTime: '8 min read',
      image: '/delhi-fashion.jpg'
    },
    {
      id: 2,
      title: "Monsoon Skincare Secrets",
      description: "The humid Delhi monsoon brings unique challenges for skincare. Discover how to maintain glowing skin during the rainy season with these dermatologist-approved tips. Learn about the best ingredients to combat humidity-induced breakouts and how to adjust your routine for maximum effectiveness during Delhi's wettest months.",
      category: 'beauty',
      readTime: '6 min read',
      image: '/monsoon-skincare.jpg'
    },
    {
      id: 3,
      title: "Empowering Women in Delhi",
      description: "Delhi is witnessing a surge in women-led initiatives that are transforming communities. From tech startups in Cyber Hub to social enterprises in Old Delhi, women are breaking barriers and creating impactful change. This article explores the inspiring stories of 5 Delhi women who are reshaping their industries and paving the way for future generations.",
      category: 'lifestyle',
      readTime: '10 min read',
      image: '/women-empowerment.jpg'
    },
    {
      id: 4,
      title: "Festival Fashion Guide",
      description: "As Delhi prepares for the festive season, discover how to create stunning looks that blend tradition with modern flair. This comprehensive guide covers everything from selecting the perfect fabrics for Delhi's climate to accessorizing your outfit with locally-made jewelry. We've curated looks for every occasion, whether you're attending a Diwali gathering or a wedding celebration.",
      category: 'fashion',
      readTime: '12 min read',
      image: '/festival-fashion.jpg'
    },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);
  {/* End Sample content data */}
  const cities = [
{ name: 'DELHI', img: '/images/hotel3.webp' },
{ name: 'MUMBAI', img: '/images/lajpatnagahotel.avif' },
{ name: 'NOIDA', img: '/images/RoseateHouse.jpg' },
{ name: 'BANGALORE', img: '/images/paschimvihar.jpg' },
{ name: 'PUNE', img: '/images/JwMarriott_CP.jpg' },
{ name: 'AHMEDABAD', img: '/images/Andazhat.jpg' },
{ name: 'GURGAON', img: '/images/holidayIn_CP.jpg' },
{ name: 'HYDERABAD', img: '/images/tajmahalhotel_lajpatnagar.jpg' },
{ name: 'KOLKATA', img: '/images/paschimvihar.jpg' },
{ name: 'CHENNAI', img: '/images/hotel2.jpg' },
{ name: 'CHANDIGARH', img: '/images/pullmanAerocity.jpg' },
{ name: 'JAIPUR', img: '/images/jwmarriott.jpeg' },
]

  return (
    <>
    {/* Banner */}
    <section className="relative w-full py-20">
      {/* Background image with dark gradient overlay */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
        {/* Responsive height: mobile 60vh, md 80vh, lg 90vh */}
        <div className="relative h-[60vh] md:h-[80vh] lg:h-[100vh] w-full">
          <Image
            src={imageUrl}
            alt="Luxury model"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          {/* Content container */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left side - text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white max-w-2xl py-8 md:py-12"
                >
                  <p className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm mb-3">Premium • Discreet • Verified</p>

                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-2">
                    {title}
                  </h1>

                  <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-prose">{subtitle}</p>

                  <div className="mt-6 flex items-center gap-3 flex-wrap">
                    <a
                      href={ctaHref}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-lg transform transition hover:scale-105 text-sm sm:text-base"
                      aria-label="Book now"
                    >
                      {cta}
                    </a>

                    <a
                      href="#services"
                      className="text-sm text-white/90 underline underline-offset-4"
                    >
                      View Services
                    </a>
                  </div>

                  {/* small trust badges */}
                  <div className="mt-5 flex gap-3 items-center text-xs sm:text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                      <span>Verified Profiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right side - subtle framed card (visible on md+) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="hidden md:flex justify-end"
                >
                  <div className="w-[320px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                    <div className="relative h-[440px] w-full">
                      <Image
                        src={imageUrl}
                        alt="Model cropped"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile sticky mini CTA (center bottom) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 md:hidden">
            <div className="flex items-center justify-between gap-4 bg-white/95 rounded-full px-4 py-3 shadow-sm backdrop-blur-sm max-w-[92vw]">
              <div className="truncate">
                <p className="text-sm font-semibold truncate">{title}</p>
                <p className="text-xs text-gray-600 truncate">{subtitle}</p>
              </div>
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium text-sm"
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Small responsive strip CTA for tablet+ (optional) */}
      <div className="mt-4 md:mt-6 container mx-auto px-4 sm:px-6 md:px-12 hidden md:block">
        <div className="flex items-center justify-between gap-4 bg-white rounded-full px-4 py-3 shadow-sm">
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-gray-600">{subtitle}</p>
          </div>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
    {/* End Banner */}
    {/* content section */}
    <section className="relative bg-gradient-to-br from-[#fdf9f5] via-[#fefaf6] to-[#f8f4ed] py-5 px-4 sm:px-8 lg:px-16 overflow-hidden">
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
    {/* Content */}
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
    {/* Location */}
    <section className="py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Premium Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our diverse team of professionals who bring excellence and passion to every engagement.
          </p>
        </motion.div>



<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
{cities.map((c, i) => (
<motion.a
key={c.name}
href={`#/cities/${c.name.toLowerCase()}`}
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.04, duration: 0.35 }}
className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
>
<div className="relative w-full h-44 sm:h-48 lg:h-52">
<Image
src={c.img}
alt={c.name}
fill
sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
style={{ objectFit: 'cover' }}
className="group-hover:scale-105 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
</div>


<div className="absolute left-0 right-0 bottom-4 px-4 text-center">
<span className="text-white text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg uppercase">{c.name}</span>
</div>
</motion.a>
))}
</div>


<div className="flex justify-center mt-10">
<a
href="#/cities"
className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
>
View All Cities
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

    {/* End Location */}
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
                  src="/images/413965.jpg"
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
            Discover the vibrant style culture of India&apos;s capital. Empowerment through fashion, beauty, and community.
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
    {/* ///// */}
    <section className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-16 left-10 w-72 h-72 rounded-full bg-rose-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-200/20 blur-2xl"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/31106.jpg"
            alt="Sensual Spa Experience"
            width={520}
            height={550}
            className="rounded-3xl shadow-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Awaken Your <span className="text-rose-600">Deepest Desires</span>
          </h2>
          <p className="text-lg text-gray-700">
            Step into a world of intimacy, warmth, and pleasure. Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
            Step into a world of intimacy, warmth, and pleasure. Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
            Welcome to Delhi Body Spa, where we offer a range of luxury spa treatments including female to male spa, couple massages, and much more. Escape the hustle of Delhi and immerse yourself in rejuvenating treatments tailored to your needs.
          </p>
          <p className="text-lg text-gray-700">
            Step into a world of intimacy, warmth, and pleasure. Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
            Step into a world of intimacy, warmth, and pleasure. Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
          </p>
          <p className="text-lg text-gray-700">
            Step into a world of intimacy, warmth, and pleasure. Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
            Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
            Our luxury spa
            sessions are designed to ignite passion while giving your body the
            relaxation it truly deserves. Let every touch take you deeper into
            comfort, leaving you renewed and desired.
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full shadow-lg transition-all text-lg">
            Experience the Passion
          </button>
        </motion.div>
      </div>
    </section>
    {/* ///////////// */}
      <section className="relative bg-gradient-to-r from-pink-100 via-rose-50 to-pink-200 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/32586.jpg" // apni image ka path dalna
              alt="Delhi Girl"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Meet the <span className="text-pink-600">Delhi Girl</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bold, confident, and full of life – she represents the modern spirit
            of Delhi. From the buzzing Connaught Place streets to the calm vibes
            of Lodhi Garden, her style blends tradition with a contemporary
            charm. She’s not just a trendsetter, she’s a storyteller of her own
            journey.
            
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bold, confident, and full of life – she represents the modern spirit
            of Delhi. From the buzzing Connaught Place streets to the calm vibes
            of Lodhi Garden, her style blends tradition with a contemporary
            charm. She’s not just a trendsetter, she’s a storyteller of her own
            journey.
           
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-700 transition">
              Know More
            </button>
            <button className="px-6 py-3 rounded-xl border border-pink-600 text-pink-600 font-semibold hover:bg-pink-50 transition">
              Follow Her
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    {/* /////? */}
    <section className="relative bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The <span className="text-pink-600">Delhi Lifestyle</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Sparkles className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-semibold text-gray-800">Trendy</p>
            </div>
            <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Camera className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-semibold text-gray-800">Fashion Icon</p>
            </div>
            <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <MapPin className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-semibold text-gray-800">City Explorer</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/49.jpg" // apni image ka path daalna
              alt="Delhi Girl Lifestyle"
              width={600}
              height={500}
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
            #DelhiVibes
          </div>
        </motion.div>
      </div>
    </section>

    {/* end content section */}
    
    
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
    {/* DFGDHDFGH///////////////////// */}
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Delhi&apos;s Fashion Revolution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How the Capital is Redefining Style and Empowerment
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Image */}
            <motion.div 
              className="relative h-96 lg:h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10"></div>
              <div className="relative w-full h-full">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <img 
                        src="/images/SSWSW.jpg" 
                        alt="Delhi Fashion" 
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <div className="absolute bottom-6 left-6 z-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-800">
                Photo: Chandni Chowk Markets
              </div> */}
            </motion.div>
            
            {/* Right Side - Content */}
            <motion.div 
              className="p-6 md:p-8 lg:p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                The Evolution of Delhi&apos;s Fashion Identity
              </h3>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Delhi&apos;s fashion landscape has transformed dramatically over the past decade. What began as a fusion of traditional Punjabi suits and Western influences has evolved into a distinctive style that celebrates diversity and individuality. The city&apos;s unique fashion identity reflects its complex history, with Mughal-era craftsmanship blending seamlessly with contemporary silhouettes.
                </p>
                
                <p>
                  The rise of local designers like Masaba Gupta and Ritu Kumar has put Delhi on the global fashion map. These designers draw inspiration from Delhi&apos;s vibrant street culture, historic monuments, and multicultural neighborhoods. The result is a fashion scene that honors heritage while embracing innovation. Young Delhiites are increasingly mixing traditional fabrics like Banarasi silk with modern cuts, creating looks that are both rooted and revolutionary.
                </p>
                
                <p>
                  Social media has played a crucial role in this evolution. Delhi&apos;s fashion influencers have created communities that transcend traditional boundaries, showcasing how to style traditional garments in modern ways. Platforms like Instagram have become virtual runways where young Delhiites express their unique fashion sensibilities. This digital democratization of style has empowered women across socioeconomic backgrounds to participate in fashion conversations.
                </p>
                
                <p>
                  Seasonal fashion in Delhi requires special consideration due to its extreme climate. Summer months demand lightweight fabrics like cotton and linen, while winter calls for luxurious wools and pashminas. The monsoon season presents unique challenges that Delhi designers have turned into opportunities, creating waterproof versions of traditional garments and innovative rainwear that doesn&apos;t sacrifice style for functionality.
                </p>
                
                <p>
                  Delhi&apos;s markets tell the story of its fashion evolution. From the wholesale fabric markets of Gandhi Nagar to the designer boutiques of Hauz Khas Village, each offers a different perspective on Delhi style. Chandni Chowk remains the heart of traditional bridal fashion, while Mehrauli has emerged as a hub for sustainable and ethical fashion brands. These diverse shopping destinations reflect the multifaceted nature of Delhi&apos;s fashion identity.
                </p>
                
                <p>
                  Sustainability has become a significant focus in recent years. Delhi-based designers are pioneering zero-waste patterns, upcycling vintage textiles, and reviving traditional dyeing techniques that minimize environmental impact. Consumers are increasingly supporting brands with transparent supply chains, reflecting a growing consciousness about fashion&apos;s ecological footprint. This movement represents a return to Delhi&apos;s roots when clothing was valued for craftsmanship and longevity.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Read More
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Share Article
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Takeaways</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Delhi blends traditional craftsmanship with contemporary designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Social media has democratized fashion expression</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Sustainability is driving innovation in local design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Distinct markets cater to diverse fashion needs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    {/* 5 star hotel */}
      {/* 5 star hotel */}
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        Our 5-Star Hotel Collection
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover the world&apos;s most exclusive luxury hotels and resorts, each offering unparalleled service and unforgettable experiences.
      </p>
    </motion.div>

    {/* Hotel Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {hotels.map((hotel) => (
        <motion.div
          key={hotel.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
          className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ${
            activeHotel === hotel.id ? "ring-4 ring-purple-500" : ""
          }`}
          onClick={() => setActiveHotel(activeHotel === hotel.id ? null : hotel.id)}
        >
          {/* Hotel Image */}
          <div className="relative h-60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
            <div className="absolute top-4 right-4 z-20 flex items-center bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
              <FaStar className="mr-1" />
              {hotel.rating}
            </div>
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <h3 className="text-xl font-bold">{hotel.name}</h3>
              <p className="text-sm">{hotel.location}</p>
            </div>
            {/* Placeholder Image */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-200 w-full h-full flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
          </div>

          {/* Hotel Info */}
          <div className="p-6">
            <p className="text-gray-600 mb-4">{hotel.description}</p>
            {/* Amenities */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-2">Key Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.slice(0, 4).map((amenity, index) => (
                  <div key={index} className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                    <span className="mr-2">{amenitiesIcons[amenity]}</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
            {/* Price and Features */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-purple-700">{hotel.price}</div>
                <div className="text-sm text-gray-500">per night</div>
              </div>
              <div className="flex space-x-2">
                {hotel.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            {/* Button */}
            <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Featured Hotel - Theme matched */}
    <motion.div 
      className="mt-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-800/30 z-10"></div>
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <h3 className="text-2xl font-bold">Luxury Experience Package</h3>
            <p className="mt-2 max-w-md">Book 3 nights and receive complimentary spa treatments, airport transfers, and dining credits</p>
          </div>
          {/* Placeholder Image */}
          <div className="bg-gradient-to-br from-purple-300 to-pink-400 w-full h-full flex items-center justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
        </div>

        {/* Details */}
        <div className="p-8 text-white">
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <span className="ml-2 font-semibold">Top Rated</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Exclusive Benefits for Our Guests</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Complimentary airport transfers</li>
            <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Personal concierge service</li>
            <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> VIP lounge access</li>
            <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Michelin restaurant reservations</li>
            <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Free spa credits</li>
          </ul>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Explore Packages
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</div>
{/* END Hotel */}
{/* CCCC */}
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Delhi Girls Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated content on fashion, beauty, lifestyle, and culture in Delhi
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories3.map(category => (
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="absolute inset-0 flex items-end p-6 z-20">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{article.title}</h3>
                    <p className="text-pink-300 font-medium">{article.readTime}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 z-20">
                  {categories3.find(cat => cat.id === article.category)?.name}
                </div>
                
                {/* Placeholder for image */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">Article Image</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 mb-6">{article.description}</p>
                
                <div className="flex items-center justify-between">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Read Full Article
                  </button>
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Featured Article */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 text-white shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Evolution of Delhi&apos;s Fashion Identity</h3>
                <p className="mb-6">
                  Delhi&apos;s fashion landscape has transformed dramatically over the past decade. What began as a fusion of traditional Punjabi suits and Western influences has evolved into a distinctive style that celebrates diversity and individuality. The city&apos;s unique fashion identity reflects its complex history, with Mughal-era craftsmanship blending seamlessly with contemporary silhouettes.
                </p>
                <p className="mb-6">
                  The rise of local designers like Masaba Gupta and Ritu Kumar has put Delhi on the global fashion map. These designers draw inspiration from Delhi&apos;s vibrant street culture, historic monuments, and multicultural neighborhoods. The result is a fashion scene that honors heritage while embracing innovation.
                </p>
                <p className="mb-6">
                  Social media has played a crucial role in this evolution. Delhi&apos;s fashion influencers have created communities that transcend traditional boundaries, showcasing how to style traditional garments in modern ways. Platforms like Instagram have become virtual runways where young Delhiites express their unique fashion sensibilities.
                </p>
                <button className="px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Read Full Story
                </button>
              </div>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-full h-full flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    {/* ///theme difference 5 star hotel section */}
    {/* <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-4">
            Our 5-Star Hotel Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's most exclusive luxury hotels and resorts, each offering unparalleled service and unforgettable experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                activeHotel === hotel.id ? "ring-4 ring-amber-500" : ""
              }`}
              onClick={() => setActiveHotel(activeHotel === hotel.id ? null : hotel.id)}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="absolute top-4 right-4 z-20 flex items-center bg-amber-500 text-white px-3 py-1 rounded-full">
                  <FaStar className="mr-1" />
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <p className="text-sm">{hotel.location}</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-full h-full flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Key Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                        <span className="mr-2">{amenitiesIcons[amenity]}</span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">{hotel.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                  <div className="flex space-x-2">
                    {hotel.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 bg-gradient-to-r from-amber-700 to-amber-900 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800/30 to-amber-900/30 z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-bold">Luxury Experience Package</h3>
                <p className="mt-2 max-w-md">Book 3 nights and receive complimentary spa treatments, airport transfers, and dining credits</p>
              </div>

              <div className="bg-gradient-to-br from-amber-300 to-amber-500 w-full h-full flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
            </div>

            <div className="p-8 text-white">
              <div className="flex items-center mb-4">
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <span className="ml-2 font-semibold">Premium Collection</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Exclusive Benefits for Our Guests</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Complimentary airport transfers in luxury vehicles
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  24/7 personal concierge service
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Access to exclusive members-only lounges
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Priority reservations at Michelin-star restaurants
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Spa credits for all bookings of 3+ nights
                </li>
              </ul>
              
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-white text-amber-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Explore Packages
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Concierge
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div> */}
    {/* end 5 star hotel */}

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
