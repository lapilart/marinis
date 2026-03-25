import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Mail, Linkedin, Instagram, Volume2, VolumeX, Phone, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import tommasoPhoto from "@assets/tommaso_photo_optimized.jpg";
import paolaPhoto from "@assets/paola_photo_optimized.jpg";
import lorenzoPhoto from "@assets/lorenzo_photo_optimized.jpg";
import michaelPhoto from "@assets/michael_photo_optimized.jpg";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showMiddleEast, setShowMiddleEast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:lorenzo@mariniassociates.com?subject=Website Contact from ${form.name}&body=${form.message}%0D%0A%0D%0AReply to: ${form.email}`;
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };



  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  // Intersection Observer for video playback control
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Video section is visible, play the video
              videoRef.current.play().catch(() => {
                // Handle autoplay restrictions
              });
            } else {
              // Video section is not visible, pause the video
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video section is visible
        rootMargin: '0px'
      }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="font-serif bg-white text-gray-900">
      {/* Navigation Toolbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Marini Associates</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-8">
                <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">About</button>
                
                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    Solutions
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      <Link 
                        href="/food-beverage" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                      >
                        <div className="font-medium">Food & Beverage Franchise</div>
                        <div className="text-xs text-gray-500 mt-1">European luxury F&B expansion</div>
                      </Link>
                      <Link 
                        href="/real-estate" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                      >
                        <div className="font-medium">Branded Real Estate</div>
                        <div className="text-xs text-gray-500 mt-1">Luxury real estate development</div>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">Team</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">Contact</button>
              </div>
              
              {/* Language Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium flex items-center">
                  🇬🇧
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Language Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">
                      🇬🇧 English
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => { scrollToSection('hero'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2"
                >
                  Solutions
                </button>
                <Link 
                  href="/food-beverage" 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-200 text-sm pl-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Food & Beverage Franchise
                </Link>
                <Link 
                  href="/real-estate" 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-200 text-sm pl-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Branded Real Estate
                </Link>
                <button 
                  onClick={() => { scrollToSection('team'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2"
                >
                  Team
                </button>
                <button 
                  onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section 
        id="hero" 
        className="h-screen flex flex-col justify-center items-start text-left px-6 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* Background Video */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src={`${import.meta.env.BASE_URL}hero-background.mp4`} type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        
        {/* Content */}
        <div className="max-w-4xl relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="font-bold text-white drop-shadow-lg leading-tight">
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Your</span><br />
            <span className="text-[2.5rem] sm:text-[3.375rem] md:text-[5.25rem] lg:text-[7rem]">Point of Contact</span><br />
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">for</span><br />
            <span className="text-[2.5rem] sm:text-[3.375rem] md:text-[5.25rem] lg:text-[7rem]">Market Entry</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white max-w-2xl">
            Expanding European Luxury Brands into South East Asia & The Middle East
          </motion.p>
        </div>
      </section>
      {/* About Us */}
      <section id="about" className="pt-14 pb-4 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Local Presence, Global Reach</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">We specialize in guiding European luxury brands as they establish a presence in South East Asia and the Middle East. We bring unmatched expertise and experience spanning from a multitude of openings for Fashion, F&B and Design brands. Our past collaborations include independent maisons as well as LVMH, Kering and L'Oreal Group.</p>
        </div>
      </section>
      {/* Latest Success Section */}
      <section className="pt-4 pb-12 sm:pb-20 bg-white">
        <div ref={videoSectionRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-left mb-8 sm:mb-12">Discover our Latest Success: Pasticceria Cova Montenapoleone</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative">
              <video 
                ref={videoRef}
                className="w-full rounded-xl shadow-lg"
                loop
                muted
                playsInline
              >
                <source src={`${import.meta.env.BASE_URL}cova-contract-video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Mute/Unmute Button */}
              <button
                onClick={toggleVideoMute}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
              >
                {isVideoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What we do */}
      <section className="pt-4 pb-12 sm:pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">What we do</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="flex space-x-4 sm:space-x-6 pb-4 min-w-max px-4 sm:px-0">
              {[
                {
                  number: "1",
                  title: "Market Research",
                  description: "Comprehensive market intelligence to assess demand, competition, and consumer trends, guiding strategic decisions and brand positioning."
                },
                {
                  number: "2",
                  title: "Feasibility Study",
                  description: "Detailed evaluation of financial, operational, and regulatory factors to determine project viability and investment potential."
                },
                {
                  number: "3", 
                  title: "Partner Selection",
                  description: "Strategic partner identification and due diligence to ensure successful collaborations with established local players in target markets."
                },
                {
                  number: "4",
                  title: "Project Development", 
                  description: "End-to-end project oversight from concept development to Grand Opening, ensuring timely delivery and quality standards."
                },
                {
                  number: "5",
                  title: "Ongoing Support",
                  description: "Continuous operational guidance and strategic advice to ensure Compliance, respect of standards and maximize performance."
                }
              ].map((item) => (
                <Card key={item.number} className="min-w-72 sm:min-w-80 max-w-72 sm:max-w-80 rounded-2xl shadow-lg bg-white flex-shrink-0">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4">
                        {item.number}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our Reach */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Our Reach</h2>
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
            <div className="w-full md:w-2/3 relative">
              {/* Region Switch */}
              <div className="absolute top-0 left-0 z-10 flex items-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg border border-gray-100">
                <span className={`text-xs sm:text-sm font-medium transition-all duration-300 ${!showMiddleEast ? 'text-black scale-105' : 'text-gray-400'}`}>South East Asia</span>
                <Switch 
                  checked={showMiddleEast} 
                  onCheckedChange={setShowMiddleEast}
                  data-testid="switch-region"
                  className="transition-all duration-300"
                />
                <span className={`text-xs sm:text-sm font-medium transition-all duration-300 ${showMiddleEast ? 'text-black scale-105' : 'text-gray-400'}`}>Middle East</span>
              </div>

              {/* Map Container with Transition */}
              <div className="relative">
                {/* South East Asia Map */}
                <div className={`transition-all duration-700 ease-in-out ${!showMiddleEast ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 550,
                      center: [118, 15]
                    }}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  >
                    <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                      {({ geographies }) => {
                        const highlightedCountries = ["Thailand", "Singapore", "Japan", "Vietnam", "Malaysia", "Philippines", "Indonesia", "Cambodia", "Taiwan"];
                        return geographies.map((geo) => {
                          const countryName = geo.properties.name;
                          const isHighlighted = highlightedCountries.includes(countryName);
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={isHighlighted ? "#8CB4C4" : "#F5F5F5"}
                              stroke={isHighlighted ? "#6B9AAA" : "#FFFFFF"}
                              strokeWidth={isHighlighted ? 1.5 : 0.5}
                              className={isHighlighted ? "highlighted-country" : ""}
                              style={{
                                default: {
                                  outline: "none"
                                },
                                hover: {
                                  outline: "none"
                                },
                                pressed: {
                                  outline: "none"
                                }
                              }}
                            />
                          );
                        });
                      }}
                    </Geographies>
                    {[
                      { name: "Bangkok", coordinates: [100.5018, 13.7563] as [number, number], label: "Bangkok" },
                      { name: "Singapore", coordinates: [103.8198, 1.3521] as [number, number], label: "Singapore" },
                      { name: "Tokyo", coordinates: [139.6917, 35.6895] as [number, number], label: "Tokyo" },
                      { name: "Hanoi", coordinates: [105.8542, 21.0285] as [number, number], label: "Hanoi" },
                      { name: "Kuala Lumpur", coordinates: [101.6869, 3.1390] as [number, number], label: "Kuala Lumpur" },
                      { name: "Manila", coordinates: [120.9842, 14.5995] as [number, number], label: "Manila" },
                      { name: "Jakarta", coordinates: [106.8456, -6.2088] as [number, number], label: "Jakarta" },
                      { name: "Phnom Penh", coordinates: [104.9160, 11.5564] as [number, number], label: "Phnom Penh" },
                      { name: "Taipei", coordinates: [121.5654, 25.0330] as [number, number], label: "Taipei" }
                    ].map(({ name, coordinates, label }) => (
                      <Marker key={name} coordinates={coordinates}>
                        <g>
                          <path
                            d="M 0,-6 L 4,0 L 0,6 L -4,0 Z"
                            fill="#1E3A5F"
                            stroke="none"
                          />
                          <text
                            textAnchor="start"
                            x={6}
                            y={1}
                            style={{
                              fontFamily: "system-ui",
                              fontSize: "11px",
                              fill: "#1F2937",
                              fontWeight: 600
                            }}
                          >
                            {label}
                          </text>
                        </g>
                      </Marker>
                    ))}
                  </ComposableMap>
                </div>

                {/* Middle East Map */}
                <div className={`transition-all duration-700 ease-in-out ${showMiddleEast ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 900,
                      center: [50, 25]
                    }}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  >
                    <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                      {({ geographies }) => {
                        const highlightedCountries = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"];
                        return geographies.map((geo) => {
                          const countryName = geo.properties.name;
                          const isHighlighted = highlightedCountries.includes(countryName);
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={isHighlighted ? "#8CB4C4" : "#F5F5F5"}
                              stroke={isHighlighted ? "#6B9AAA" : "#FFFFFF"}
                              strokeWidth={isHighlighted ? 1.5 : 0.5}
                              className={isHighlighted ? "highlighted-country" : ""}
                              style={{
                                default: {
                                  outline: "none"
                                },
                                hover: {
                                  outline: "none"
                                },
                                pressed: {
                                  outline: "none"
                                }
                              }}
                            />
                          );
                        });
                      }}
                    </Geographies>
                    {[
                      { name: "Dubai", coordinates: [55.2708, 25.2048] as [number, number], label: "Dubai" },
                      { name: "Riyadh", coordinates: [46.7219, 24.7136] as [number, number], label: "Riyadh" },
                      { name: "Doha", coordinates: [51.5310, 25.2854] as [number, number], label: "Doha" },
                      { name: "Kuwait City", coordinates: [47.9774, 29.3759] as [number, number], label: "Kuwait City" },
                      { name: "Manama", coordinates: [50.5860, 26.2285] as [number, number], label: "Manama" },
                      { name: "Muscat", coordinates: [58.4059, 23.5880] as [number, number], label: "Muscat" }
                    ].map(({ name, coordinates, label }) => (
                      <Marker key={name} coordinates={coordinates}>
                        <g>
                          <path
                            d="M 0,-6 L 4,0 L 0,6 L -4,0 Z"
                            fill="#1E3A5F"
                            stroke="none"
                          />
                          <text
                            textAnchor="start"
                            x={6}
                            y={1}
                            style={{
                              fontFamily: "system-ui",
                              fontSize: "11px",
                              fill: "#1F2937",
                              fontWeight: 600
                            }}
                          >
                            {label}
                          </text>
                        </g>
                      </Marker>
                    ))}
                  </ComposableMap>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center mt-6 md:mt-0">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed mb-4 text-center">
                A Solid Network of local partners:
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Landlords",
                  "Developers", 
                  "Franchisors",
                  "Hospitality Groups"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-900 transform rotate-45"></div>
                    <span className="text-lg sm:text-xl font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="py-8 sm:py-10 px-4 sm:px-6 bg-[#ffffff]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Custom Solutions</h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <Link href="/food-beverage">
            <Card className="rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Food & Beverage Franchise</h3>
                <p className="mb-4 text-gray-700">We help European luxury F&B concepts expand into Asia and the Middle East with turnkey services:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Franchise Partner Scouting</li>
                  <li>Location Selection</li>
                  <li>Business Planning</li>
                  <li>Import/Export</li>
                  <li>Procurement</li>
                  <li>Recruitment/Training</li>
                </ul>
                <div className="mt-4 text-black font-semibold">Click to learn more →</div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/real-estate">
            <Card className="rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Branded Real Estate</h3>
                <p className="mb-4 text-gray-700">Advisory for luxury real estate expansion into prime locations across Asia and the Middle East:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Developer Selection and Audit</li>
                  <li>Business Planning</li>
                  <li>Concept Creation</li>
                  <li>On Site Visits</li>
                  <li>Regulatory Compliance & Permits</li>
                  <li>Project Management & Delivery</li>
                </ul>
                <div className="mt-4 text-black font-semibold">Click to learn more →</div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
      {/* Picture Carousel */}
      {/* Team */}
      <section id="team" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { 
              name: "Lorenzo Marini", 
              role: "Based in Paris",
              bio: "Lorenzo brings a wealth of expertise in strategy consulting and commercial development. Specializing in the European luxury market, he has cultivated strong relationships with independent European luxury brands as well as iconic haute-couture groups to driving growth and innovation in the industry through the developement of luxury F&B and Real Estate concepts."
            },
            { 
              name: "Tommaso Alboni", 
              role: "Based in Milan",
              bio: "Tommaso holds a strong background in financial consulting and business development to facilitate successful expansions into the Asian luxury fashion market. With a deep understanding of the industry and a well-established network, he helps connect emerging brands with potential investors to foster partnerships and drive success."
            },
            { 
              name: "Michael Fons", 
              role: "Based in Dubai",
              bio: "Michael built his impressive career in the F&B Industry, including the Michelin-starred 'The Plumed Horse' and covered the role of F&B Director at many venues across France, London, and Scotland, UEA and Japan. With 20+ years in hospitality, he leads teams and elevates guest experience, delivering polished, multilingual service and seamless operations in fine-dining environments."
            },
            { 
              name: "Paola Palma", 
              role: "Based in Bangkok",
              bio: "Paola has a solid background in show business, where she worked closely with the International jet-set celebrities. She has 30 years of experience in Public Relations and acts as a bridge, creating business opportunities for our clients and facilitating their expansion into new markets, thanks to the connections she has built up over the years."
            }
          ].map((member, idx) => (
            <Card key={idx} className="group rounded-2xl shadow-md text-center overflow-hidden transition-colors duration-300 hover:bg-gray-100">
              <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden relative">
                <img 
                  src={member.name === "Lorenzo Marini" ? lorenzoPhoto : member.name === "Michael Fons" ? michaelPhoto : member.name === "Tommaso Alboni" ? tommasoPhoto : member.name === "Paola Palma" ? paolaPhoto : "https://source.unsplash.com/200x200/?portrait,business"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: member.name === "Paola Palma" ? "center 15%" : member.name === "Lorenzo Marini" ? "center 35%" : member.name === "Michael Fons" ? "center 15%" : "center top",
                    transform: member.name === "Lorenzo Marini" ? "scale(1.35)" : "scale(1)",
                    transformOrigin: member.name === "Lorenzo Marini" ? "center 35%" : "center"
                  }}
                />
              </div>
              <CardContent className="p-4 sm:p-6 pt-4">
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-[#155dc2] text-center text-sm sm:text-base">{member.role}</p>
                {member.bio && (
                  <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed text-left transition-colors duration-300 group-hover:text-gray-700">{member.bio}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </section>
      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 mb-6 text-sm md:text-base">
          <a 
            href="mailto:lorenzo@mariniassociates.com" 
            className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
            data-testid="link-contact-email"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="break-all">lorenzo@mariniassociates.com</span>
          </a>
          <a 
            href="tel:+393483464488" 
            className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
            data-testid="link-contact-phone"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            +39 348 346 4488
          </a>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            className="w-full p-3 sm:p-4 border rounded-lg text-base" 
            required 
            data-testid="input-contact-name"
          />
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            className="w-full p-3 sm:p-4 border rounded-lg text-base" 
            required 
            data-testid="input-contact-email"
          />
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            className="w-full p-3 sm:p-4 border rounded-lg h-32 text-base" 
            required 
            data-testid="input-contact-message"
          />
          <Button 
            type="submit" 
            className="w-full bg-black text-white rounded-2xl py-4 hover:bg-gray-800 text-base sm:text-lg"
            data-testid="button-contact-submit"
          >
            Send Message
          </Button>
        </form>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-base sm:text-lg mb-3">Our Offices</h3>
              <div className="space-y-1 text-sm">
                <p>Milan, Italy</p>
                <p>Paris, France</p>
                <p>Dubai, UAE</p>
                <p>Bangkok, Thailand</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-base sm:text-lg mb-3">Get in Touch</h3>
              <p className="mb-3 text-sm">Phone / Whatsapp : +39 3483464488</p>
              <div className="flex justify-center space-x-6 mt-6">
                <a href="mailto:lorenzo@mariniassociates.com" className="hover:text-gray-400" aria-label="Email"><Mail size={20} /></a>
                <a href="#" className="hover:text-gray-400" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-gray-400" aria-label="Instagram"><Instagram size={20} /></a>
              </div>
            </div>
            <div className="text-center sm:text-right sm:col-span-2 md:col-span-1">
              <h3 className="font-bold text-base sm:text-lg mb-3">Legal</h3>
              <div className="space-y-1 text-sm">
                <p>Privacy</p>
                <p>Code of Conduct</p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm sm:text-base mt-6 pt-6 border-t border-gray-700">
            <p>© {new Date().getFullYear()} Marini Associates. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}