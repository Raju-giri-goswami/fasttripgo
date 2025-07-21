import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import PackageCategoryPage from './pages/PackageCategoryPage';
import PackageDetailPage from './pages/PackageDetailPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import LeadPopup from './components/common/LeadPopup';
import StickyContact from './components/common/StickyContact';
import CharDhamPackage2025 from './landingpage/CharDhamPackage2025';
import DoDhamPackage2025 from './landingpage/DoDhamPackage2025';
import { initGA, logPageView } from './utils/analytics';

function App() {
  const location = useLocation();
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const formType = 'booking' as const;

  const isLandingPage = location.pathname.includes('char-dham-yatra-2025') || 
                       location.pathname.includes('do-dham-yatra-2025');

  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  // Track page views
  useEffect(() => {
    logPageView(location.pathname);
  }, [location.pathname]);

  // Show lead popup after 10 seconds only on main site pages
  useEffect(() => {
    if (!isLandingPage) {
      const timer = setTimeout(() => {
        setShowLeadPopup(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isLandingPage]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="char-dham-yatra-2025" element={<CharDhamPackage2025 />} />
        <Route path="do-dham-yatra-2025" element={<DoDhamPackage2025 />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="packages/:category" element={<PackageCategoryPage />} />
          <Route path="packages/:category/:id" element={<PackageDetailPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
      {showLeadPopup && !isLandingPage && (
        <LeadPopup 
          onClose={() => setShowLeadPopup(false)} 
          formType={formType}
        />
      )}
      {!isLandingPage && <StickyContact />}
    </>
  );
}

export default App;