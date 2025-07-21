import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Fast Trip Go</title>
        <meta name="description" content="Privacy Policy for Fast Trip Go - Learn how we protect and manage your personal information." />
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-sm text-gray-600 mb-6">Effective Date: May 14, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Fast Trip Go ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our travel and tour services, in accordance with applicable Indian laws, including the Information Technology Act, 2000 and its amendments.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect the following categories of personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Personal Identification Information: Full name, email address, phone number, postal address, and ID proof (e.g., Aadhaar, PAN, passport – as required for travel bookings).</li>
                <li className="mb-2">Booking and Travel Preferences: Destination, travel dates, number of travellers, package choices.</li>
                <li className="mb-2">Payment Information: Billing details (processed securely via third-party payment gateways).</li>
                <li className="mb-2">Technical Information: IP address, browser type, device type, and usage data to improve our website's performance.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Your information may be used to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Confirm and process travel bookings and payments.</li>
                <li className="mb-2">Contact you regarding your travel itinerary or customer support queries.</li>
                <li className="mb-2">Send promotional offers or newsletters (only if you've opted in).</li>
                <li className="mb-2">Improve our services, offers, and website usability.</li>
                <li className="mb-2">Comply with legal requirements and resolve disputes.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclosure of Information</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Travel Partners and Vendors: Hotels, airlines, transport operators, and tour agents to fulfil your bookings.</li>
                <li className="mb-2">Third-Party Service Providers: Payment processors, technical support, and marketing tools – under strict confidentiality agreements.</li>
                <li className="mb-2">Government Authorities: When required under applicable laws or for identity verification and security clearance purposes.</li>
              </ul>
              <p className="mb-4">We do not sell or rent your data to third parties.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Recognize your browser and save preferences.</li>
                <li className="mb-2">Analyze website traffic and user behavior.</li>
                <li className="mb-2">Provide personalized content and recommendations.</li>
              </ul>
              <p className="mb-4">You may disable cookies through your browser settings, though this may limit certain functionalities of the website.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Protection and Security</h2>
              <p className="mb-4">We implement reasonable security practices and procedures including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">SSL encryption</li>
                <li className="mb-2">Secure payment gateway integration</li>
                <li className="mb-2">Restricted access to sensitive data</li>
              </ul>
              <p className="mb-4">While we strive to protect your information, no method of transmission over the Internet is 100% secure.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights (Under Indian Law)</h2>
              <p className="mb-4">As per Indian regulations, you have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Review and correct any inaccuracies in your personal data.</li>
                <li className="mb-2">Withdraw consent for data processing (subject to legal and contractual restrictions).</li>
                <li className="mb-2">Request deletion of your personal data, where applicable.</li>
              </ul>
              <p className="mb-4">You may send your request by emailing us at support@fasttripgo.com.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Retention</h2>
              <p className="mb-4">We retain your personal information only for as long as is necessary to fulfil the purpose for which it was collected or to comply with applicable legal and regulatory requirements.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links</h2>
              <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to read their policies before providing personal information.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Updates to this Policy</h2>
              <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Please check this page regularly to stay informed.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p className="mb-4">For questions about this Privacy Policy or how we handle your data, please contact:</p>
              <p className="mb-4">
                Fast Trip Go<br />
                Email: support@fasttripgo.com<br />
                Phone: +91 123-456-7890<br />
                Address: [Business Address], India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
