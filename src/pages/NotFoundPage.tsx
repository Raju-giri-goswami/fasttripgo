import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Fast Trip Go</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                <MapPin className="w-12 h-12 text-primary-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              404 - Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Oops! It seems like you've ventured off the map. The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn btn-primary">
                Back to Homepage
              </Link>
              <Link to="/packages" className="btn btn-outline">
                Explore Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;