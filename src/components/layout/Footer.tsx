import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { apiClient, endpoints } from '../../utils/api';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo color="light" />
            <p className="mt-4 text-gray-400">
              Your trusted partner for discovering the most beautiful destinations across India. We specialize in curated travel experiences that create lasting memories.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Travel News
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/packages/uttarakhand-char-dham"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Uttarakhand Char Dham
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/manali"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Manali
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/ladakh"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Ladakh
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/kerala"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Kerala
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/rajasthan"
                  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                >
                  Rajasthan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Travel Street, Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:+918178880934"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 8178 880 934
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@fasttripgo.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@fasttripgo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest travel offers and destinations
            </p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = new FormData(form).get('email')?.toString();
              
              if (!email) return;

              try {
                const response = await apiClient.post(endpoints.newsletter, { email });

                const result = response.data;
                
                if (result.success) {
                  alert(result.message);
                  form.reset();
                } else {
                  throw new Error(result.error);
                }
              } catch (error) {
                alert('Failed to subscribe. Please try again.');
                console.error('Newsletter subscription error:', error);
              }
            }} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="btn btn-primary sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Fast Trip Go. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;