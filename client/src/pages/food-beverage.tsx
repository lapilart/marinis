import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Menu, X } from "lucide-react";
import { Link } from "wouter";
import luxuryRestaurantBg from "@assets/stock_images/luxury_restaurant_di_26e8b2c0_optimized.jpg";

export default function FoodBeverage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-serif bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Marini Associates</h1>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">About</Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-black font-medium text-sm flex items-center">
                  Services
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link 
                      href="/food-beverage" 
                      className="block px-4 py-3 text-sm text-black font-medium hover:bg-gray-50 transition-colors duration-200"
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
              
              <Link href="/#team" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">Team</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">Contact</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              data-testid="button-mobile-menu-fb"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/#about" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/food-beverage" className="text-black font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                  Food & Beverage Franchise
                </Link>
                <Link href="/real-estate" className="text-gray-700 hover:text-black transition-colors duration-200 text-sm pl-4 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Branded Real Estate
                </Link>
                <Link href="/#team" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Team
                </Link>
                <Link href="/#contact" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section 
        className="h-80 sm:h-96 flex flex-col justify-center items-center text-center px-4 sm:px-6 relative bg-cover bg-center mt-16" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${luxuryRestaurantBg})`
        }}
      >
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Franchising Luxury F&B Excellence
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl px-4">
            Bringing Luxury European brands to Asian and Middle Eastern markets
          </p>
          <div className="mt-6 sm:mt-8">
            <Button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg shadow-lg"
              data-testid="button-discover-expertise"
            >Discover Our Expertise</Button>
          </div>
        </motion.div>
      </section>
      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our F&B Expertise</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700">
              With proven success in launching luxury European F&B concepts across Southeast Asia and the Middle East, 
              we provide end-to-end solutions that preserve authenticity while adapting to local markets.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Trusted Partners</h3>
                  <p className="text-gray-600">A network of solid and reliable franchising partners with experience in F&B</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Market Expertise</h3>
                  <p className="text-gray-600">Deep understanding of South East Asian and Middle Eastern dining cultures</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Successful Launches</h3>
                  <p className="text-gray-600">Premium European brands across Southeast Asia and the Middle East</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Detailed Services */}
      <section id="services" className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Areas of Expertise Include:</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Business Planning",
                description: "Market analysis, feasibility studies, and strategic roadmaps tailored for Asian and Middle Eastern markets."
              },
              {
                title: "Partner Identification and Selection",
                description: "We match Brands with reliable investores which we trust and have passed a backround and compliance check."
              },
              {
                title: "Recruitment & Team Training",
                description: "Sourcing and hiring both local and European-trained professionals and delivering comprehensive training to ensure service standards and brand excellence."
              },
              {
                title: "Import/Export",
                description: "Finding the quickest and most cost effective way to import ingredients through expert operators"
              },
              {
                title: "Procurement",
                description: "Establishing supply chains for authentic European ingredients and premium local sourcing."
              },
              {
                title: "Management and Audit",
                description: "Ongoing operational support, quality control, and business optimization strategies."
              }
            ].map((service, index) => (
              <Card key={index} className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-black overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="h-1 w-12 bg-black mb-4 sm:mb-6 group-hover:w-20 transition-all duration-300"></div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-black transition-colors">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contact us to Expand your Concept to new Horizons</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = 'mailto:lorenzo@mariniassociates.com?subject=F&B Consultation Request'}
              className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base"
              data-testid="button-contact-fb"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
            <Link href="/#top">
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
                data-testid="button-back-home"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}