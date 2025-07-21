import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Fast Trip Go</title>
        <meta name="description" content="Terms and Conditions for Fast Trip Go - Understanding our service agreement and policies." />
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read our terms and conditions carefully before using our services
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
                Welcome to Fast Trip Go ("we," "us," or "our"). By accessing and using our website and services, you ("user," "traveller," or "customer") agree to the following Terms & Conditions. These terms are governed by the laws of India, including the Information Technology Act, 2000 and applicable consumer protection laws.
              </p>
              <p className="mb-4">Please read them carefully before making any booking or engaging with our services.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. General</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Fast Trip Go is a travel and tour agency offering customized and pre-designed travel packages across India and internationally.</li>
                <li className="mb-2">Use of our website or services signifies your agreement to these terms.</li>
                <li className="mb-2">These terms are subject to change without prior notice. The latest version will always be available on our website.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">You must be at least 18 years old and legally capable of entering into a binding agreement under Indian law.</li>
                <li className="mb-2">Minors must be accompanied by a legal guardian or parent for any bookings.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Booking and Payment</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Bookings are confirmed only after full or partial payment, as per package terms.</li>
                <li className="mb-2">Payments can be made online via our secure gateway, UPI, credit/debit cards, or bank transfer.</li>
                <li className="mb-2">Prices are subject to change until final confirmation is provided.</li>
                <li className="mb-2">You are responsible for providing accurate information during booking. Errors may lead to cancellation or denial of service.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cancellation & Refunds</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Cancellations by the customer must be notified in writing.</li>
                <li className="mb-2">Refund eligibility depends on the specific cancellation policy of the package, third-party vendors (airlines, hotels, etc.), and the time of cancellation.</li>
                <li className="mb-2">Refunds will be processed within 7–14 business days (subject to bank and vendor timelines).</li>
                <li className="mb-2">No-shows or last-minute cancellations may not be eligible for a refund.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Itinerary Changes</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">We reserve the right to modify travel itineraries due to unforeseen circumstances such as weather, strikes, political instability, or other force majeure events.</li>
                <li className="mb-2">Efforts will be made to provide similar alternatives or reschedule services where possible.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Travel Documents and Compliance</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Travellers must carry valid government-issued ID proof for all bookings (Aadhaar, Passport, PAN, etc.).</li>
                <li className="mb-2">For international travel, it is your responsibility to ensure you have valid visas, passports, and comply with destination country entry requirements.</li>
                <li className="mb-2">We are not liable for delays, cancellations, or denied entry due to incomplete or incorrect documentation.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Travel Insurance</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Travel insurance is strongly recommended but not included in all packages unless explicitly stated.</li>
                <li className="mb-2">We are not responsible for any medical expenses, loss, theft, or accidents during your trip unless insurance is availed.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Services</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">We act as an intermediary between customers and service providers (hotels, airlines, transport agencies, etc.).</li>
                <li className="mb-2">We are not liable for acts, omissions, or breaches by third-party vendors.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Code of Conduct</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Travellers are expected to conduct themselves respectfully during trips.</li>
                <li className="mb-2">Any unlawful or offensive behavior may result in removal from the tour with no refund or liability on our part.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Limitation of Liability</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">We shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of use or inability to use our services.</li>
                <li className="mb-2">Our liability is limited only to the amount paid by the customer for the specific booking in question.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Intellectual Property</h2>
              <p className="mb-4">All content on the website, including logos, text, graphics, and images, are the intellectual property of Fast Trip Go and may not be used without prior written permission.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law & Jurisdiction</h2>
              <p className="mb-4">These terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts in [City], India.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
              <p className="mb-4">For any queries regarding these Terms & Conditions, please contact:</p>
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

export default TermsAndConditionsPage;
