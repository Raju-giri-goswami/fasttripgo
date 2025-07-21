import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PackageCard from './PackageCard';
import { Package } from '../../types';

interface PackageListProps {
  packages: Package[];
  title?: string;
  description?: string;
}

const PackageList: React.FC<PackageListProps> = ({
  packages,
  title = 'Our Travel Packages',
  description = 'Explore our curated collection of incredible travel packages',
}) => {
  const [searchParams] = useSearchParams();
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(packages);
  const [sortOption, setSortOption] = useState('recommended');

  // Filter packages based on search parameters
  useEffect(() => {
    let result = [...packages];
    
    const destination = searchParams.get('destination');
    if (destination) {
      result = result.filter(
        pkg => 
          pkg.title.toLowerCase().includes(destination.toLowerCase()) ||
          pkg.category.toLowerCase().includes(destination.toLowerCase())
      );
    }
    
    // Apply sorting
    if (sortOption === 'price-low') {
      result.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredPackages(result);
  }, [packages, searchParams, sortOption]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">
          {description}
        </p>
      </motion.div>

      {/* Filters and sorting */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          {filteredPackages.length} packages found
        </p>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Package grid */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <PackageCard package={pkg} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No packages found</h3>
          <p className="text-gray-500">
            Try adjusting your search criteria or explore our other categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default PackageList;