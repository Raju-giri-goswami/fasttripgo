import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PackageCard from '../packages/PackageCard';
import { packages } from '../../data/packages';

const PopularPackages: React.FC = () => {
  // Get top 6 packages
  const popularPackages = packages
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <section className="section bg-gray-50" id="popular-packages">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Popular Travel Packages</h2>
          <p className="section-subtitle">
            Discover our most sought-after destinations and travel experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {popularPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <PackageCard package={pkg} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/packages" className="btn btn-primary">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;