import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import Logo from '../common/Logo';
import LeadPopup from '../common/LeadPopup';
import { trackInteraction } from '../../utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLeadForm(true);
    trackInteraction('Contact', 'click_contact_header', 'Header Contact');
  };

  const handleFormSuccess = () => {
    setShowLeadForm(false);
    trackInteraction('Lead', 'submit_lead', 'Header Contact');
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Detect scroll position to change header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'bg-white shadow-md py-2'
      : 'bg-transparent py-4'
  }`;

  const linkClass = `text-${
    isScrolled || !isHomePage ? 'gray-800' : 'white'
  } hover:text-primary-500 transition-colors`;

  return (
    <>
      <header className={headerClass}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10">
            <Logo color={isScrolled || !isHomePage ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`${linkClass} font-medium`}>
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/packages"
                className={`${linkClass} font-medium flex items-center`}
              >
                <span>Packages</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-1 gap-2 p-4">
                  <Link
                    to="/packages/uttarakhand-char-dham"
                    className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 px-3 py-2 rounded-md"
                  >
                    Uttarakhand Char Dham
                  </Link>
                  <Link
                    to="/packages/manali"
                    className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 px-3 py-2 rounded-md"
                  >
                    Manali Packages
                  </Link>
                  <Link
                    to="/packages/nepal"
                    className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 px-3 py-2 rounded-md"
                  >
                    Nepal Packages
                  </Link>
                  <Link
                    to="/packages/ladakh"
                    className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 px-3 py-2 rounded-md"
                  >
                    Ladakh Packages
                  </Link>
                  <Link
                    to="/packages"
                    className="text-primary-600 font-medium hover:text-primary-700 hover:bg-gray-50 px-3 py-2 rounded-md"
                  >
                    View All Packages →
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/news" className={`${linkClass} font-medium`}>
              Travel News
            </Link>
            <Link to="/about" className={`${linkClass} font-medium`}>
              About Us
            </Link>
            <Link to="/contact" className={`${linkClass} font-medium`}>
              Contact
            </Link>
          </nav>

          {/* Search Icon and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className={`p-2 rounded-full ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search packages"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleSearch}
              className={`p-2 mr-2 rounded-full ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search packages"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-40 flex flex-col lg:hidden transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Logo color="dark" />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 overflow-y-auto">
              <Link
                to="/"
                className="py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="py-3 px-4">
                <div className="flex items-center justify-between text-gray-800 font-medium">
                  <Link
                    to="/packages"
                    className="flex-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Packages
                  </Link>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <Link
                    to="/packages/uttarakhand-char-dham"
                    className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Uttarakhand Char Dham
                  </Link>
                  <Link
                    to="/packages/manali"
                    className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Manali Packages
                  </Link>
                  <Link
                    to="/packages/nepal"
                    className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nepal Packages
                  </Link>
                  <Link
                    to="/packages/ladakh"
                    className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ladakh Packages
                  </Link>
                  <Link
                    to="/packages"
                    className="py-2 px-3 text-primary-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Packages →
                  </Link>
                </div>
              </div>
              <Link
                to="/news"
                className="py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Travel News
              </Link>
              <Link
                to="/about"
                className="py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <a
                href="#"
                onClick={(e) => {
                  handleContactClick(e);
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-md font-medium"
              >
                Contact
              </a>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>

          {/* Search Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
              isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleSearch}
          >
            <div
              className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <SearchBar onClose={toggleSearch} />
            </div>
          </div>
        </div>
      </header>

      {/* Lead Form Popup */}
      {showLeadForm && (
        <LeadPopup
          onClose={() => setShowLeadForm(false)}
          onSuccess={handleFormSuccess}
          formType="booking"
        />
      )}
    </>
  );
};

export default Header;