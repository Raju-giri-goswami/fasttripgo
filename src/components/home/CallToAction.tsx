import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70"></div>
          </div>
          
          {/* Content */}
          <div className="relative px-6 py-16 md:py-20 lg:py-24">
            <div className="max-w-lg mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready for Your Next Adventure?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Let us help you plan the perfect getaway. Contact our travel experts today for a personalized quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                    Contact Us
                  </Link>
                  <Link to="/packages" className="btn border-2 border-white text-white hover:bg-white/10">
                    Explore Packages
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;