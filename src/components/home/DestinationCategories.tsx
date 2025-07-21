import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { packageCategories } from '../../data/categories';

const DestinationCategories: React.FC = () => {
  // Get 6 featured categories
  const featuredCategories = packageCategories.slice(0, 6);
  
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Explore by Destination</h2>
          <p className="section-subtitle">
            Choose from our wide range of destinations across India and beyond
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link 
                to={`/packages/${category.slug}`}
                className="block group"
              >
                <div className="relative h-80 rounded-xl overflow-hidden card-hover">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/30 transition-colors duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-white/80 mb-3 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-white mt-2 font-medium">
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/packages" className="btn btn-outline">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationCategories;