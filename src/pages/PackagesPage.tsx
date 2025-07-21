import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PackageList from '../components/packages/PackageList';
import { packages } from '../data/packages';

const PackagesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Travel Packages | Fast Trip Go</title>
        <meta name="description" content="Browse our wide selection of travel packages across India and beyond. Find your perfect holiday destination with Fast Trip Go." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary-700 py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travel Packages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our complete collection of carefully curated travel packages across India and beyond
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Packages List */}
      <div className="section bg-gray-50">
        <div className="container">
          <PackageList 
            packages={packages}
            title="All Travel Packages"
            description="Browse our complete collection of carefully curated travel experiences"
          />
        </div>
      </div>
    </>
  );
};

export default PackagesPage;