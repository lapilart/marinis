import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Menu, X } from "lucide-react";
import { Link } from "wouter";
import luxuryResidenceBg from "@assets/stock_images/luxury_residence_vil_70a334d9_optimized.jpg";

export default function RealEstate() {
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
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                    >
                      <div className="font-medium">Food & Beverage Franchise</div>
                      <div className="text-xs text-gray-500 mt-1">European luxury F&B expansion</div>
                    </Link>
                    <Link 
                      href="/real-estate" 
                      className="block px-4 py-3 text-sm text-black font-medium hover:bg-gray-50 transition-colors duration-200"
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
              data-testid="button-mobile-menu-re"
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
                <Link href="/food-beverage" className="text-gray-700 hover:text-black transition-colors duration-200 text-sm pl-4 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Food & Beverage Franchise
                </Link>
                <Link href="/real-estate" className="text-black font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${luxuryResidenceBg})`
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
        >
          Real Estate Excellence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl px-4"
        >
          Transforming prime locations into luxury retail destinations across Asia and the Middle East
        </motion.p>
      </section>
      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Building Trust</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700">
              From concept to completion, we strive to build a transparent process to deliver success without surprises, in order to deliver a project that capture the essence of European luxury while resonating with local markets across Southeast Asia and the Middle East.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Vetted Developers</h3>
                  <p className="text-gray-600">All our partners undergo a strict selection process to ensure respect of brand standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Prime Locations</h3>
                  <p className="text-gray-600">We visit and select the best locations ourselves</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Regular Audits</h3>
                  <p className="text-gray-600">During the developement of the project, we provide regualar checkpoints and updates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Partnership Approach */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Partner Selection</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Working with industry leaders to create exceptional retail experiences
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="rounded-xl shadow-lg text-center">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Compliance Check</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Before considering any partnership, all developers must pass our global compliance scan
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-xl shadow-lg text-center">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Audit</h3>
                <p className="text-sm sm:text-base text-gray-700">From balance sheets to past projects, we ensure our partners ar solid and reliable</p>
              </CardContent>
            </Card>
            <Card className="rounded-xl shadow-lg text-center sm:col-span-2 md:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">On site visits</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  We make sure to see first hand any relevant past projects and locations proposed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Detailed Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Project Development</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Location & Concept Selection",
                description: "Market analysis, location assessment, and strategic planning for optimal retail positioning."
              },
              {
                title: "Adapting to Brand Identity",
                description: "Luxury retail environment design that maintains brand identity while appealing to local markets."
              },
              {
                title: "Business Planning",
                description: "Comprehensive business planning and strategic roadmaps tailored for Asian and Middle Eastern markets."
              },
              {
                title: "Presentation",
                description: "Professional presentations and pitch materials to showcase your luxury brand proposition."
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Expand Your Portfolio?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">Let's discuss how we can help you deliver your next branded real estate project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = 'mailto:lorenzo@mariniassociates.com?subject=Real Estate Consultation Request'}
              className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base"
              data-testid="button-contact-re"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
            <Link href="/">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base" data-testid="button-back-home-re">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}