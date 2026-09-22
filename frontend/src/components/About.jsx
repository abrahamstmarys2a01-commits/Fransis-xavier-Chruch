import React from 'react';
import { motion } from 'framer-motion';
import { FaChurch, FaGlobe, FaEye, FaHeart, FaHandsHelping, FaCross, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Image & Highlight */}
          <div className="w-full lg:w-[45%]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/media_1790056044861.jpg" 
                alt="St. Francis Xavier" 
                className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-2xl shadow-xl mb-6"
              />
              
              {/* Highlight Box */}
              <div className="bg-brand-ivory border border-brand-light-gold rounded-xl p-5 sm:p-6 flex items-start space-x-4 shadow-sm">
                <div className="text-brand-gold text-2xl sm:text-3xl mt-1 opacity-80">
                  <FaCross />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-blue text-base sm:text-lg italic mb-1">
                    A Place of Faith, Prayer and Fellowship
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-light">
                    We are more than a church — we are a family in Christ.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content List */}
          <div className="w-full lg:w-[55%] pt-2 lg:pt-4">
            <div className="flex items-center space-x-4 mb-3">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="text-brand-gold font-medium tracking-widest text-xs uppercase">ABOUT</span>
              <div className="h-[1px] w-8 bg-brand-gold"></div>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-brand-blue mb-6 lg:mb-8 font-serif"
            >
              About Saint Francis Xavier
            </motion.h2>

            <div className="space-y-4 sm:space-y-5 text-gray-600 leading-relaxed text-sm sm:text-[15px]">
              <p>
                Saint Francis Xavier was born in Spain on April 7, 1506, in the famous Xavier Palace. He lost his father at the age of nine and was educated in the same palace under the care of his mother. By then, he had acquired proficiency in Spanish and several languages. He played an important role in the development of Christianity in India.
              </p>
              <p>
                He went to Paris for college. After that, Saint Xavier stayed in Paris for 11 years, obtaining a master's degree in philosophy and arts at the College of Saint-Baptiste there, and worked as a lecturer from 1530 to 1534. He studied theology again from 1534 to 1536.
              </p>
              <p>
                At that time, Saint Xavier became friends with Saint Ignatius of Loyola. "What does it profit a man if he gains the whole world and loses his own soul?" Ignatius explained to Xavier the words of the Son of God, Jesus, and Xavier realized the depth of those words and became more connected to God. Later, they founded the Society of Jesus. In this, the four friends again decided to do God's work together.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-12 lg:mt-16 bg-brand-ivory border border-brand-light-gold rounded-xl py-6 sm:py-8 px-4 flex flex-col sm:flex-row justify-around items-center shadow-sm gap-8 sm:gap-0">
          <div className="text-center w-full sm:w-1/3 sm:border-r border-brand-light-gold">
            <div className="text-brand-gold text-2xl flex justify-center mb-2"><FaChurch /></div>
            <p className="text-xl sm:text-2xl font-bold text-brand-blue mb-1">70</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Years of Service</p>
          </div>
          <div className="text-center w-full sm:w-1/3 sm:border-r border-brand-light-gold">
            <div className="text-brand-gold text-2xl flex justify-center mb-2"><FaUsers /></div>
            <p className="text-xl sm:text-2xl font-bold text-brand-blue mb-1">20</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Parish Community</p>
          </div>
          <div className="text-center w-full sm:w-1/3">
            <div className="text-brand-gold text-2xl flex justify-center mb-2"><FaHeart /></div>
            <p className="text-xl sm:text-2xl font-bold text-brand-blue mb-1">100</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Church Activities</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
