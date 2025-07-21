import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../../data/packages';

const SpecialOffers: React.FC = () => {
  // Filter packages that have a discounted price
  const discountedPackages = packages
    .filter(pkg => pkg.discountedPrice)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

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
          <h2 className="section-title">Special Offers</h2>
          <p className="section-subtitle">
            Take advantage of our limited-time deals and save on your next adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {discountedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={`/packages/${pkg.categorySlug}/${pkg.id}`}
                className="block group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md card-hover">
                  <div className="absolute top-4 left-4 z-10 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Special Offer
                  </div>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-300 line-through">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-white font-bold text-lg">
                        ₹{pkg.discountedPrice?.toLocaleString()}
                      </span>
                      {pkg.price && pkg.discountedPrice && (
                        <span className="bg-green-500 text-white text-xs py-0.5 px-2 rounded-full">
                          {Math.round(((pkg.price - pkg.discountedPrice) / pkg.price) * 100)}% OFF
                        </span>
                      )}
                    </div>
                    <p className="text-white/80">
                      {pkg.duration}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/packages" className="btn btn-accent">
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;