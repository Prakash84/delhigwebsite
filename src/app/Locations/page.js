'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import {  Star, MapPin, Sparkles, Hotel, Building2 } from 'lucide-react';



export default function Locations() {
  
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
 const [activeCategory, setActiveCategory] = useState('all');
      const categories = [
        { id: 'all', name: 'All Staff' },
        { id: 'airhostess', name: 'Airhostess' },
        { id: 'celebrity', name: 'Celebrity' },
        { id: 'college', name: 'College Girls' },
        { id: 'foreign', name: 'Foreign Girls' },
        { id: 'highprofile', name: 'High Profile' },
      ];

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
      const outlets = [
  {
    name: "The Grand Plaza",
    desc: "Luxury spa at the heart of downtown with panoramic city views",
    rating: 5,
    tag: "Exclusive",
    // icon: <Sparkles className="w-6 h-6 text-pink-600" /> // Pink
    icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
  },
  {
    name: "Marina Bay Resort",
    desc: "Beachfront sanctuary with ocean-inspired treatments",
    rating: 5,
    tag: "Waterfront",
    // icon: <Hotel className="w-6 h-6 text-blue-600" /> // Blue
    icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
  },
  {
    name: "Skyline Tower",
    desc: "Rooftop wellness center with city skyline views",
    rating: 5,
    tag: "Panoramic",
    // icon: <Building2 className="w-6 h-6 text-purple-600" /> // Purple
    icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
  },
  {
    name: "Royal Gardens",
    desc: "Historic mansion transformed into a luxury spa retreat",
    rating: 5,
    tag: "Heritage",
    icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
  },
];
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
const profiles = [
  { image: '/images/modelg.jpg' },
  { image: '/images/18244.jpg' },
  { image: '/images/172420-8871.jpg' },
  { image: '/images/4201724.jpg' },
  { image: '/images/7168.jpg' },
  { image: '/images/49.jpg' },
  { image: '/images/2291.jpg' },
]
  return (
    <>
    
    {/* banner */}
               <section className="relative bg-gradient-to-r from-amber-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">✦</span>
            </div>

            {/* Label matches Our Premium gradient */}
            <p className="text-sm font-medium uppercase bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              OUR OUTLETS
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
    Our Premium
  </span>{' '}
  <span className="text-amber-500">Wellness</span>
  <br />
  <span className="bg-black text-white px-3 py-1 rounded-md inline-block mt-2">
    Spa Outlets
  </span>
</h1>

          <p className="text-gray-600 max-w-md">
            Relax your body and mind with our premium spa and wellness care. 
            Experience tranquility, beauty, and complete rejuvenation in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+00123456789"
              className="flex items-center gap-2 font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition"
            >
              📞 +00 123 456 789
            </a>

            {/* Book Now uses matching gradient background */}
            <a
              href="#book"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
            >
              Book Now
            </a>
          </div>

          <a
            href="https://www.website.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-amber-600"
          >
            🌐 www.website.com
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/images/RoseateHouse.jpg" // apni image path yaha dena
            alt="Spa & Beauty"
            width={700}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>
      </div>
    </section>
            {/* end banner */}
                <section className="bg-gradient-to-b from-amber-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
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
                        Premium Company & Curated Moments
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
                         
                      Trusted,{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                        discreet and professional
                      </strong>
                      , companionship for events,{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                       travel,
                      </strong>{" "}
                      and curated experiences across Delhi.{" "}
                      
                    </p>
                    
                  </motion.div>
           

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:bg-emerald-600 transition"
              >
                Book a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-800 text-sm font-medium shadow-sm hover:shadow-md transition"
              >
                View Services
              </a>
            </div>

            {/* Feature list */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  {/* icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold">Verified Profiles</h4>
                <p className="mt-1 text-xs text-gray-500">Identity & background-checked</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold">Discreet Booking</h4>
                <p className="mt-1 text-xs text-gray-500">Secure & private handling</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold">Personal Concierge</h4>
                <p className="mt-1 text-xs text-gray-500">Tailored experiences & planning</p>
              </div>
            </div>
          </div>

          {/* Right: Profiles / Gallery */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">Featured Companions</h3>
                  <p className="text-xs text-gray-500">Curated for quality & style</p>
                </div>
                <div className="text-xs text-gray-400">Delhi</div>
              </div>

              {/* Carousel-like simple row (replace with real carousel if you want) */}
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
  {profiles.map((p, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.03 }}
      className="min-w-[160px] bg-gray-50 rounded-2xl p-3 shadow-sm"
    >
      <div className="w-full h-50 rounded-lg overflow-hidden bg-gray-200">
        {/* use p.image not p (object) */}
        <Image
          src={p.image}
          alt={`profile-${idx}`}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-3">
        <div className="font-medium text-sm">Ari • 26</div>
        <div className="text-xs text-gray-500">Events • Travel • Dining</div>
      </div>

      <div className="mt-3">
        <a href="#contact" className="inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white">Request</a>
      </div>
    </motion.div>
  ))}
</div>

              <div className="mt-4 text-xs text-gray-500">
                All profiles are verified and available for lawful, non-sexual companionship & event services only.
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -left-6 -top-6 hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 2-4 3-4 5v1h8v-1c0-2-4-3-4-5z" />
              </svg>
              <div className="text-sm font-medium">Trusted & Verified</div>
            </div>
          </div>
        </div>

        {/* Small CTA strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-inner border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-gray-800">Need something special?</div>
            <div className="text-xs text-gray-500">Custom experiences for birthdays, corporate events, travel & more.</div>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm">Enquire Now</a>
            <a href="#faq" className="px-5 py-2 rounded-full border border-gray-200 text-sm">Read FAQ</a>
          </div>
        </div>
      </div>
    </section>
            {/* Content Hero Section */}
              <section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    {/* Left: Text */}
    <div className="order-2 lg:order-1 text-center lg:text-left">
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
      {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
        {title.split('\n').map((line, i) => (
          <span key={i} className={i === 1 ? 'block mt-2' : 'block'}>{line}</span>
        ))}
      </h2> */}

      {/* <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-lg">
        {subtitle}
      </p> */}

      <div className="mt-10 flex justify-center lg:justify-start">
        <a
          href="#"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          View Properties
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    {/* Right: Polaroid-ish images */}
    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-2xl relative">
        {/* Top image */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.6 }}
          className="absolute right-0 -top-12 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2"
          style={{ transformOrigin: 'right center' }}
        >
          <div className="rounded-md overflow-hidden border-1 border-white">
            <Image
              src='/images/27110283.jpg'
              alt="property 1"
              width={900}
              height={600}
              className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-52 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2 mx-auto"
          style={{ transformOrigin: 'left center' }}
        >
          <div className="rounded-md overflow-hidden border-1 border-white">
            <Image
              src='/images/6637.jpg'
              alt="property 2"
              width={900}
              height={600}
              className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Decorative subtle background circle */}
        <div className="hidden lg:block absolute -left-28 top-28 w-56 h-56 bg-white rounded-full opacity-30 filter blur-xl"></div>
      </div>
    </div>
  </div>
              </section>
              {/* End Content Hero Section */}

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
           
            {/* iCON LOCATION */}
<section className="py-24 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-20 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Tag */}
      <motion.div
        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-5 py-2 rounded-full mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"></div>
        <span className="text-purple-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
      </motion.div>
      
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Premium{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Hotel Outlets
        </span>
      </motion.h2>
      
      {/* Subheading */}
      <motion.p
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Discover our exclusive spa outlets at top luxury hotels across the city
      </motion.p>
      
      {/* Decorative line */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.div>
    </motion.div>

    {/* Outlets Grid */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {outlets.map((outlet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ 
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100 relative overflow-hidden group"
        >
          {/* Rating Ribbon */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" />
            <span>{outlet.rating}</span>
          </div>
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-full shadow-inner group-hover:shadow-md transition-all duration-300">
                {outlet.icon}
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Hotel Name */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
            {outlet.name}
          </h3>
          
          {/* Tag */}
          <div className="inline-block bg-purple-50 border border-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full mb-4">
            {outlet.tag}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {outlet.desc}
          </p>
          
          {/* Decorative line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent w-3/4 mx-auto group-hover:via-pink-400 transition-colors duration-300"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* END iCON LOCATION */}
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
          src="/images/6637.jpg"
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
            This holistic framework allows us to create treatments that don&apos;t just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
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
            Our commitment extends beyond individual wellness to planetary health. We&apos;re proud to be the first Carbon Neutral spa in our region, with initiatives including:
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
            Our product line features sustainably harvested ingredients from ethical cooperatives. We&apos;ve partnered with local environmental initiatives, donating 5% of profits to wetland conservation.
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
            Our exclusive loyalty program offers priority booking, complimentary upgrades, and special members-only events. Corporate wellness packages are available for businesses looking to invest in their team&apos;s wellbeing.
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