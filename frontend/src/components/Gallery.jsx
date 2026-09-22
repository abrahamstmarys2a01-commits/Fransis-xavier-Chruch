import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const categories = ['All', 'Church', 'Events', 'Celebration', 'Familys'];

  const allImages = [
    { src: '/media_1790055138116.jpg', category: 'Familys', alt: 'Friends Photo' },
    { src: '/media_1790055120703.jpg', category: 'Familys', alt: 'Friends Photo Night' },
    { src: '/media_1790055145295.jpg', category: 'Church', alt: 'Church Exterior' },
    { src: '/media_1790055152071.jpg', category: 'Church', alt: 'Church Exterior Night' },
    { src: '/media_1790055130863.jpg', category: 'Church', alt: 'Saint Image' },
    { src: '/media_1790056497423.jpg', category: 'Events', alt: 'Jesus Statue' },
    { src: '/media_1790056506280.jpg', category: 'Events', alt: 'Jesus Statue with Garland' },
    { src: '/media_1790056513305.jpg', category: 'Celebration', alt: 'Baby Jesus' },
    { src: '/media_1790056524671.jpg', category: 'Celebration', alt: 'Nativity Scene' },
    { src: '/media_1790057113839.jpg', category: 'Church', alt: 'Church Flagpole Night' },
    { src: '/media_1790058569214.png', category: 'Church', alt: 'Church Interior Altar' },
    { src: '/media_1790058584215.png', category: 'Events', alt: 'Church Mass' },
    { src: '/media_1790067063499.jpg', category: 'Events', alt: 'Church Event Outside' },
    { src: '/media_1790067055341.jpg', category: 'Events', alt: 'Church Event Inside' },
  ];

  const filteredImages = activeTab === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === activeTab);

  const openLightbox = (index) => {
    setSelectedImgIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImgIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl overflow-x-hidden">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <div className="h-[1px] w-8 bg-brand-gold"></div>
            <span className="text-brand-gold font-medium tracking-widest text-xs uppercase">OUR GALLERY</span>
            <div className="h-[1px] w-8 bg-brand-gold"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-brand-blue font-serif mb-6 lg:mb-8"
          >
            Church Gallery
          </motion.h2>
          
          {/* Pill Filter Menu */}
          <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-2 mb-8 lg:mb-12 pb-2 hide-scrollbar snap-x snap-mandatory px-2 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`snap-center whitespace-nowrap px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                  activeTab === cat 
                    ? 'bg-brand-blue text-white shadow-md' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => {
            return (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer h-72 w-full"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif italic text-lg">{img.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImgIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors text-3xl focus:outline-none"
              >
                <FaTimes />
              </button>
              
              <button 
                onClick={prevImage}
                className="absolute left-6 text-white hover:text-brand-gold transition-colors text-3xl focus:outline-none hidden sm:block"
              >
                <FaChevronLeft />
              </button>

              <motion.img 
                key={selectedImgIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[selectedImgIndex].src}
                alt={filteredImages[selectedImgIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded"
                onClick={(e) => e.stopPropagation()}
              />

              <button 
                onClick={nextImage}
                className="absolute right-6 text-white hover:text-brand-gold transition-colors text-3xl focus:outline-none hidden sm:block"
              >
                <FaChevronRight />
              </button>
              
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-12 sm:hidden">
                 <button onClick={prevImage} className="text-white text-3xl p-2 bg-black/50 rounded-full"><FaChevronLeft /></button>
                 <button onClick={nextImage} className="text-white text-3xl p-2 bg-black/50 rounded-full"><FaChevronRight /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
