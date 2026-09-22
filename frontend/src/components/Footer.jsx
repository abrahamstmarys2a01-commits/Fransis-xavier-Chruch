import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaCross, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t border-brand-blue-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Logo & Brand */}
          <div className="flex flex-col items-start">
             <div className="flex items-center space-x-3 mb-4 text-brand-gold">
                <FaCross className="text-3xl" />
                <span className="text-white text-xl font-bold font-serif">St. Francis Xavier Church</span>
             </div>
             <p className="text-gray-400 text-sm tracking-widest mb-6">Faith • Hope • Love</p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-3">
                 <FaPhoneAlt className="text-brand-gold" />
                 <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                 <FaEnvelope className="text-brand-gold" />
                 <span>stfrancisxavierchurch@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-lg">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-lg">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 font-light tracking-wide">
          <p>&copy; 2026 St. Francis Xavier Church. All Rights Reserved.</p>
        </div>
      </div>

      {/* Decorative Silhouette */}
      <div className="absolute bottom-0 right-10 opacity-5 pointer-events-none w-64 h-64">
         <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
           <path d="M50 0 L55 10 L60 10 L60 20 L75 30 L75 40 L85 50 L85 100 L15 100 L15 50 L25 40 L25 30 L40 20 L40 10 L45 10 Z" />
           <rect x="45" y="40" width="10" height="20" />
           <circle cx="50" cy="70" r="10" />
         </svg>
      </div>
    </footer>
  );
};

export default Footer;
