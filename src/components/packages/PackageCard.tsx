import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star } from 'lucide-react';
import { Package } from '../../types';

interface PackageCardProps {
  package: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <Link
      to={`/packages/${pkg.categorySlug}/${pkg.id}`}
      className="block h-full"
    >
      <div className="card card-hover h-full flex flex-col">
        {/* Image container */}
        <div className="relative">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-48 object-cover"
          />
          
          {/* Price badge */}
          <div className="absolute bottom-0 right-0 bg-white px-4 py-2 rounded-tl-lg font-bold text-gray-900">
            {pkg.discountedPrice ? (
              <div>
                <span className="text-sm text-gray-500 line-through mr-2">
                  ₹{pkg.price.toLocaleString()}
                </span>
                <span>₹{pkg.discountedPrice.toLocaleString()}</span>
              </div>
            ) : (
              <span>₹{pkg.price.toLocaleString()}</span>
            )}
          </div>
          
          {/* Discount tag if applicable */}
          {pkg.discountedPrice && (
            <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {Math.round(((pkg.price - pkg.discountedPrice) / pkg.price) * 100)}% OFF
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {pkg.title}
          </h3>
          
          <div className="flex items-center mb-2">
            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{pkg.category}</span>
          </div>
          
          <div className="flex items-center mb-2">
            <Calendar className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{pkg.duration}</span>
          </div>
          
          <div className="flex items-center mb-4">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-gray-600 text-sm">{pkg.rating.toFixed(1)} Rating</span>
          </div>
          
          <p className="text-gray-700 text-sm mb-4 line-clamp-2 flex-grow">
            {pkg.description}
          </p>
          
          <div className="mt-auto">
            <span className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;