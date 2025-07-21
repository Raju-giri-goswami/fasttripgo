import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Users, DollarSign, Star, Check, X } from 'lucide-react';
import { Package } from '../../types';
import BookingForm from '../common/BookingForm';

interface PackageDetailProps {
  package: Package;
}

const PackageDetail: React.FC<PackageDetailProps> = ({ package: pkg }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 mb-8">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to={`/packages/${pkg.categorySlug}`}
              className="inline-block text-white/80 hover:text-white mb-2"
            >
              {pkg.category} Package
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{pkg.category}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-1" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-1 text-yellow-400 fill-yellow-400" />
                <span>{pkg.rating.toFixed(1)} Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-8 border-b">
              <div className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'itinerary'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'inclusions'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Inclusions & Exclusions
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {/* Overview */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-lg mb-6">{pkg.description}</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Itinerary */}
              {activeTab === 'itinerary' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    {pkg.itinerary.map((day, index) => (
                      <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                        <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-primary-500"></div>
                        <div className="bg-white rounded-lg border border-gray-200 p-5">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            Day {day.day}: {day.title}
                          </h3>
                          
                          {day.meals && (
                            <div className="flex gap-4 mb-3 text-sm">
                              <span className={`${day.meals.breakfast ? 'text-green-600' : 'text-gray-400'}`}>
                                Breakfast {day.meals.breakfast ? '✓' : '✗'}
                              </span>
                              <span className={`${day.meals.lunch ? 'text-green-600' : 'text-gray-400'}`}>
                                Lunch {day.meals.lunch ? '✓' : '✗'}
                              </span>
                              <span className={`${day.meals.dinner ? 'text-green-600' : 'text-gray-400'}`}>
                                Dinner {day.meals.dinner ? '✓' : '✗'}
                              </span>
                            </div>
                          )}
                          
                          {day.accommodation && (
                            <div className="text-sm text-gray-600 mb-3">
                              <strong>Accommodation:</strong> {day.accommodation}
                            </div>
                          )}
                          
                          <p className="text-gray-700">{day.description}</p>
                          
                          {day.image && (
                            <img 
                              src={day.image} 
                              alt={day.title} 
                              className="mt-4 rounded-lg w-full h-48 object-cover"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Inclusions & Exclusions */}
              {activeTab === 'inclusions' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Inclusions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusions</h3>
                      <ul className="space-y-3">
                        {pkg.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Exclusions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusions</h3>
                      <ul className="space-y-3">
                        {pkg.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden sticky top-24">
              {/* Price */}
              <div className="p-6 bg-gray-50 border-b">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Price per person</span>
                  {pkg.discountedPrice ? (
                    <div className="text-right">
                      <div className="text-gray-500 line-through">₹{pkg.price.toLocaleString()}</div>
                      <div className="text-2xl font-bold text-gray-900">₹{pkg.discountedPrice.toLocaleString()}</div>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</div>
                  )}
                </div>
                
                {pkg.discountedPrice && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm inline-block">
                    Save ₹{(pkg.price - pkg.discountedPrice).toLocaleString()} per person
                  </div>
                )}
              </div>
              
              {/* Booking Form */}
              <div className="p-6">
                <BookingForm packageTitle={pkg.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;