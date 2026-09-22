import React from 'react';
import { motion } from 'framer-motion';
import { FaCross, FaArrowRight, FaChurch, FaPrayingHands, FaUsers } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative bg-brand-blue">
      {/* Full Background Hero Section */}
      <div className="relative min-h-[500px] py-16 lg:py-32 flex flex-col justify-center overflow-hidden bg-brand-blue">
        {/* Absolute Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/media_1790055841516.jpg" 
            alt="Church Background" 
            className="w-full h-full object-cover object-center lg:object-top lg:origin-top-left lg:scale-[1.35]"
          />
        </div>

        {/* Gradient Overlay for Text Readability - Solid Navy on Left fading to Transparent on Right */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b lg:bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-4 mb-4 lg:mb-6">
              <span className="text-brand-gold font-medium tracking-[0.2em] text-xs lg:text-sm uppercase">WELCOME TO</span>
              <div className="h-[2px] w-8 lg:w-12 bg-brand-gold"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-3 lg:mb-4 font-serif leading-tight">
              St. Francis Xavier<br/>Church
            </h1>
            
            <p className="text-lg lg:text-xl text-brand-gold tracking-widest mb-4 lg:mb-6 font-medium">
              Faith • Hope • Love
            </p>
            
            <p className="text-gray-300 text-base lg:text-lg mb-8 lg:mb-10 max-w-sm lg:max-w-md leading-relaxed font-light">
              A place of worship, prayer and community, where faith brings us together and love builds a stronger tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              <a href="#about" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-brand-gold text-brand-blue font-semibold rounded-full hover:bg-brand-gold-hover transition-colors duration-300">
                Explore Our Church
                <FaArrowRight className="ml-3" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-blue transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-brand-ivory py-16 lg:py-20 px-6 lg:px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="text-brand-gold font-medium tracking-widest text-xs uppercase">WELCOME TO</span>
              <div className="h-[1px] w-8 bg-brand-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue font-serif">
              St. Francis Xavier Church
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm">
              St. Francis Xavier Church is a place of faith, prayer, fellowship and community. We welcome everyone to experience the love of Christ and be a part of our spiritual family.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-ivory rounded-full flex items-center justify-center text-brand-gold text-xl mb-5 shadow-sm border border-brand-light-gold">
                <FaCross />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-2 font-serif">Holy Mass</h3>
              <p className="text-gray-500 text-sm">Join us in the celebration of the Holy Eucharist.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-ivory rounded-full flex items-center justify-center text-brand-gold text-xl mb-5 shadow-sm border border-brand-light-gold">
                <FaPrayingHands />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-2 font-serif">Prayer & Worship</h3>
              <p className="text-gray-500 text-sm">Find peace in prayer and worship.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-ivory rounded-full flex items-center justify-center text-brand-gold text-xl mb-5 shadow-sm border border-brand-light-gold">
                <FaUsers />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-2 font-serif">Community</h3>
              <p className="text-gray-500 text-sm">Together in faith, stronger in unity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
