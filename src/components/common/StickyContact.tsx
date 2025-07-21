import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { trackInteraction } from '../../utils/analytics';

const StickyContact: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '+918178880934';
  const whatsappMsg = encodeURIComponent(
    'Hi, I am interested in the Char Dham Yatra 2025 package. Please provide more details.'
  );

  const handleContact = (method: 'phone' | 'whatsapp') => {
    trackInteraction(
      'Contact',
      'click_contact',
      method === 'phone' ? 'Phone Call' : 'WhatsApp'
    );
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      trackInteraction('Contact', 'expand_contact_options');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 items-end z-50">
      {isExpanded ? (
        <>
          <button
            onClick={toggleExpand}
            className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Close contact options"
          >
            <X className="h-6 w-6" />
          </button>
          <a
            href={`tel:${phoneNumber}`}
            onClick={() => handleContact('phone')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call Now</span>
          </a>
          <a
            href={`https://wa.me/${phoneNumber.replace(
              '+',
              ''
            )}?text=${whatsappMsg}`}
            onClick={() => handleContact('whatsapp')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </>
      ) : (
        <button
          onClick={toggleExpand}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
          aria-label="Open contact options"
        >
          <Phone className="h-5 w-5" />
          <span className="font-medium">Contact Us</span>
        </button>
      )}
    </div>
  );
};

export default StickyContact;