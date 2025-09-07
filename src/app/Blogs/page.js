"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Tag, Clock, User, ChevronRight } from "lucide-react";
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { AnimatePresence } from "framer-motion";
// blogs section
const categories = [
  "All",
  "Spa Tips",
  "Therapies",
  "Couple Massage",
  "Skin & Body",
  "Wellness",
];

const posts = [
  {
    id: 1,
    title: "How to Choose the Perfect Spa Therapy for Deep Relaxation",
    excerpt:
      "Confused between Swedish, Thai, and Aromatherapy? Here’s a crisp guide to pick the right treatment for your mood and body.",
    image: "/images/6637.jpg",
    author: "Delhi Body Spa",
    date: "Aug 20, 2025",
    readTime: "6 min",
    tags: ["Therapies", "Relaxation"],
    featured: true,
  },
  {
    id: 2,
    title: "Female to Male Massage: Etiquette, Benefits & What to Expect",
    excerpt:
      "First time? Learn how to prepare, communicate preferences, and enjoy a respectful, professional session.",
    image: "/images/spa-2.jpg",
    author: "Team DBS",
    date: "Aug 16, 2025",
    readTime: "5 min",
    tags: ["Female To Male Massage", "Guide"],
  },
  {
    id: 3,
    title: "Couple Massage in Delhi: Make It a Date to Remember",
    excerpt:
      "From room ambiance to synchronized techniques—here’s how couples can elevate their spa day.",
    image: "/images/spa-3.jpg",
    author: "Team DBS",
    date: "Aug 12, 2025",
    readTime: "7 min",
    tags: ["Couple Massage", "Experience"],
  },
  {
    id: 4,
    title: "Body to Body Spa: Myths vs. Reality (What’s Actually Offered)",
    excerpt:
      "We debunk the most common misconceptions and explain the genuine wellness benefits.",
    image: "/images/spa-4.jpg",
    author: "Delhi Body Spa",
    date: "Aug 05, 2025",
    readTime: "4 min",
    tags: ["Body To Body", "Wellness"],
  },
  {
    id: 5,
    title: "Pre & Post-Spa Skincare: Keep That Glow for Days",
    excerpt:
      "Small routine changes before and after your session make a big difference to results.",
    image: "/images/spa-5.jpg",
    author: "Skin Studio",
    date: "Jul 28, 2025",
    readTime: "6 min",
    tags: ["Skin & Body", "Glow"],
  },
  {
    id: 6,
    title: "Meet Our Foreigner Therapists: Training, Techniques & Ethics",
    excerpt:
      "World-class practices, certifications, and the philosophy behind our global therapist team.",
    image: "/images/spa-6.jpg",
    author: "Delhi Body Spa",
    date: "Jul 21, 2025",
    readTime: "5 min",
    tags: ["Foreigner Therapist", "Standards"],
  },
];

const chipBase =
  "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300";
// end blogs section
export default function Blogs() {
   const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      setIsVisible(true);
    }, []);
  // blogs section
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) => {
    const inCat = activeCat === "All" || p.tags.includes(activeCat) || p.tags.includes(activeCat.replace(" ", ""));
    const inQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    return inCat && inQuery;
  });

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

//end blogs section
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
                        <p className="text-sm">&quot;Best decision I&apos;ve made!&quot;</p>
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
    {/* blog section */}
     <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
      {/* Decorative Elements (matching your About section theme) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70" />
      <div className="absolute top-24 right-10 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-medium"
        >
          ✦ Our Blog & Articles
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6"
        >
          Insights for a
          <span className="relative block mt-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Calmer, Brighter You
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200/60 -z-10" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg md:w-2/3 leading-relaxed mb-10"
        >
          Practical tips, therapy explainers, and behind-the-scenes from our luxury spa in Delhi—curated to match your vibe and schedule.
        </motion.p>

        {/* Controls: Search + Categories */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-12">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/80 backdrop-blur border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-gray-700"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => {
              const active = c === activeCat;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`${chipBase} ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent"
                      : "bg-white text-gray-700 border-purple-100 hover:border-pink-200"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Tag className="w-4 h-4" /> {c}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-16 rounded-[2rem] overflow-hidden shadow-2xl border border-purple-50 group"
          >
            <div className="relative h-[420px] md:h-[520px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {/* Decorative Glow */}
              <motion.div
                className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-pink-300/30 blur-3xl"
                animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-purple-700 text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                  {featured.title}
                </h2>
                <p className="text-white/90 md:text-lg max-w-3xl mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" /> {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {featured.date} • {featured.readTime}
                  </span>
                </div>
                <a
                  href={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-medium text-white relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition" />
                  <span className="relative z-10">Read Article</span>
                  <ChevronRight className="w-5 h-5 relative z-10" />
                </a>
              </div>
            </div>
          </motion.article>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-purple-50 hover:border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-purple-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-lg leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {post.date} • {post.readTime}
                  </span>
                </div>

                <a
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  Read more <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 rounded-3xl blur opacity-40" />
          <div className="relative bg-white/80 backdrop-blur rounded-3xl p-8 md:p-10 border border-purple-100 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Get spa tips & exclusive offers
              </h3>
              <p className="text-gray-600">One short email each week. No spam, only calm.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:max-w-md flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl bg-white border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
              <button
                className="px-6 py-3 rounded-2xl font-medium text-white relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
                <span className="relative">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-full border bg-white border-purple-100 hover:border-pink-200 text-gray-700">
            Previous
          </button>
          <button className="px-6 py-3 rounded-full text-white relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
            <span className="relative font-medium">Next</span>
          </button>
        </div>
      </div>
    </section>
    {/* End blog section */}
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
        {/* <motion.div 
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
        </motion.div> */}

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
