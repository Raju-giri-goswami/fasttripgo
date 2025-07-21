import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Clock, Users, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-7 w-7 text-primary-500" />,
    title: 'Handpicked Destinations',
    description: 'We carefully select each destination to ensure a remarkable travel experience.',
  },
  {
    icon: <Award className="h-7 w-7 text-primary-500" />,
    title: 'Quality Assurance',
    description: 'We maintain high standards for accommodations, transportation, and experiences.',
  },
  {
    icon: <Clock className="h-7 w-7 text-primary-500" />,
    title: 'Flexible Itineraries',
    description: 'Our itineraries are designed to be flexible and cater to your preferences.',
  },
  {
    icon: <Users className="h-7 w-7 text-primary-500" />,
    title: 'Expert Guides',
    description: 'Travel with knowledgeable local guides who enhance your journey.',
  },
  {
    icon: <Shield className="h-7 w-7 text-primary-500" />,
    title: 'Safe Travel',
    description: 'Your safety is our priority with 24/7 support throughout your journey.',
  },
  {
    icon: <Headphones className="h-7 w-7 text-primary-500" />,
    title: 'Dedicated Support',
    description: 'Our support team is always available to assist you before, during, and after your trip.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section bg-white" id="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="section-title">Why Choose Fast Trip Go</h2>
          <p className="section-subtitle">
            Discover what makes us the preferred choice for travelers across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start p-4 rounded-lg hover:bg-primary-50/50 cursor-pointer transform transition-colors"
            >
              <motion.div 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="flex-shrink-0 p-3 bg-primary-50 rounded-lg mr-4"
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;