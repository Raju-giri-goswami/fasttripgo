import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Award, Clock, Users, Shield, Headphones } from 'lucide-react';
import CallToAction from '../components/home/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Fast Trip Go</title>
        <meta name="description" content="Learn about Fast Trip Go, your trusted travel partner for exploring India's most beautiful destinations." />
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
              About Fast Trip Go
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted travel partner for exploring India's most beautiful destinations
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Fast Trip Go was founded with a simple mission: to help travelers discover the authentic beauty of India and create unforgettable memories. With over a decade of experience in the travel industry, we've grown from a small team of passionate travelers to one of India's most trusted travel companies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a dream to showcase the hidden gems of India has evolved into a comprehensive travel service that offers carefully curated packages across multiple destinations. Our deep local knowledge, commitment to quality, and passion for travel has allowed us to help thousands of travelers experience the magic of India.
              </p>
              <p className="text-lg text-gray-700">
                We believe travel should be transformative, educational, and above all, enjoyable. That's why every package we offer is designed not just as a trip, but as a complete experience that connects you with the heart and soul of the destination.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-xl h-[500px]"
            >
              <img
                src="https://images.pexels.com/photos/5146733/pexels-photo-5146733.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Travel team planning a trip"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do at Fast Trip Go
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">Authentic Experiences</h3>
              <p className="text-gray-700">
                We go beyond tourist traps to offer genuine cultural experiences that connect you with the true essence of each destination.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">Safety & Reliability</h3>
              <p className="text-gray-700">
                Your safety is our top priority. We maintain rigorous safety standards and contingency plans for all our travel packages.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">Quality Assurance</h3>
              <p className="text-gray-700">
                From accommodation to transport and activities, we ensure every aspect of your journey meets our high standards of quality.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">Customer-Centric</h3>
              <p className="text-gray-700">
                Your satisfaction is our success. We listen to your needs and tailor our services to exceed your expectations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Clock className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">Flexibility</h3>
              <p className="text-gray-700">
                We understand plans change. Our flexible booking policies and customizable itineraries adapt to your needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Headphones className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">24/7 Support</h3>
              <p className="text-gray-700">
                Travel with peace of mind knowing our dedicated support team is always available to assist you throughout your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Team section temporarily hidden 
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The passionate travel experts behind Fast Trip Go
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Raj Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Raj Sharma</h3>
              <p className="text-primary-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 15 years in the travel industry, Raj's vision and leadership have been instrumental in Fast Trip Go's success.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Priya Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Priya Patel</h3>
              <p className="text-primary-600 mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">
                Priya ensures seamless travel experiences with her meticulous attention to detail and operational expertise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Arjun Mehta"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Arjun Mehta</h3>
              <p className="text-primary-600 mb-2">Head of Tours</p>
              <p className="text-gray-600 text-sm">
                A seasoned traveler who has explored every corner of India, Arjun curates our unique and authentic travel packages.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Vikram Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vikram Singh</h3>
              <p className="text-primary-600 mb-2">Customer Experience</p>
              <p className="text-gray-600 text-sm">
                Vikram and his team ensure every traveler receives personalized attention and exceptional service throughout their journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      */}
      
      <CallToAction />
    </>
  );
};

export default AboutPage;