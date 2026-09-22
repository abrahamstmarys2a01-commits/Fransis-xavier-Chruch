import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 text-left md:text-center md:flex md:flex-col md:items-center">
          <div className="flex items-center space-x-4 mb-2">
            <span className="text-brand-gold font-medium tracking-widest text-xs uppercase hidden md:block">GET IN TOUCH</span>
            <div className="h-[1px] w-8 bg-brand-gold hidden md:block"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-brand-blue font-serif"
          >
            Contact Us
          </motion.h2>
        </div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Col 1: Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-brand-gold text-xl mt-1"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="text-[15px] font-bold text-brand-blue font-serif mb-1">St. Francis Xavier Church</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Poothampatty (Poothampatti),<br/>
                  Vedasandur Taluk, Dindigul District,<br/>
                  Tamil Nadu, India - 624702
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-brand-gold text-xl"><FaPhoneAlt /></div>
              <p className="text-gray-500 text-sm">+91 9688420077</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-brand-gold text-xl"><FaEnvelope /></div>
              <p className="text-gray-500 text-sm">stfrancisxavierchurch@gmail.com</p>
            </div>

            <div className="flex items-start space-x-4 pt-2">
              <div className="text-brand-gold text-xl mt-1"><FaClock /></div>
              <div>
                <h4 className="text-[15px] font-bold text-brand-blue font-serif mb-1">Mass Timings</h4>
                <p className="text-gray-500 text-sm">Sunday: 7:00 AM - 8:30 AM</p>
              </div>
            </div>
          </div>

          {/* Col 2: Contact Form */}
          <div>
             <form onSubmit={handleSubmit} className="space-y-4">
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded text-sm mb-4">
                    Message sent successfully!
                  </div>
                )}
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-gold transition-colors text-sm"
                  placeholder="Full Name"
                />
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-gold transition-colors text-sm"
                  placeholder="Email Address"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-gold transition-colors text-sm"
                  placeholder="Phone Number"
                />
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-gold transition-colors resize-none text-sm"
                  placeholder="Message"
                ></textarea>
                
                <button 
                  type="submit" 
                  className="w-full bg-brand-blue text-white text-sm font-medium py-3 rounded hover:bg-brand-gold transition-colors flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </button>
              </form>
          </div>

          {/* Col 3: Map */}
          <div className="flex flex-col h-full">
            <div className="w-full flex-grow rounded-lg overflow-hidden border border-gray-200 relative min-h-[250px]">
              {/* Google Maps Embed */}
              <iframe 
                src="https://maps.google.com/maps?q=St.%20Francis%20Xavier%20Church,%20Poothampatti,%20Vedasandur,%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Church Location"
              ></iframe>
            </div>
            <a 
              href="https://maps.google.com/maps?q=St.+Francis+Xavier+Church,+Poothampatti,+Vedasandur,+Tamil+Nadu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-brand-blue text-white text-sm font-medium py-3 mt-4 rounded hover:bg-brand-gold transition-colors flex items-center justify-center space-x-2"
            >
              <FaMapMarkerAlt />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
