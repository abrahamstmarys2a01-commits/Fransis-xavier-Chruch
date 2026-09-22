import React, { useState, useEffect } from 'react';
import { FaCross, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center space-x-3 font-bold font-serif text-brand-gold">
          <img 
            src="/media_1790057289564.jpg" 
            alt="St. Francis Xavier Logo" 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-brand-gold shadow-md"
          />
          <span className="text-white tracking-wide text-xl md:text-2xl">St. Francis Xavier Church</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-white hover:text-brand-gold font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none text-white hover:text-brand-gold p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-blue shadow-lg border-t border-brand-blue/50">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-white font-medium hover:text-brand-gold text-lg py-2 border-b border-brand-blue-light/20"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
