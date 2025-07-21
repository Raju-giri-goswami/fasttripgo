import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../common/SearchBar';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[600px] bg-gray-900 overflow-hidden pb-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
        <div className="relative h-full flex items-center z-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Discover India's Most Beautiful Destinations
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our curated travel packages and create memories that last a lifetime
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href="#popular-packages"
                className="btn btn-primary mr-4"
              >
                Explore Packages
              </a>
              <a
                href="#about-section"
                className="btn btn-outline text-white border-white hover:bg-white/10"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Search Container */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 -mb-10 w-full max-w-4xl mx-auto px-4"
        >
          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
