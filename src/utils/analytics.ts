declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = 'G-G6QKTKYT1G';

interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Add gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Basic configuration
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    send_page_view: true,
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });
};

// Track page views
export const logPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// Track events
export const logEvent = (action: string, params: EventParams = {}) => {
  if (typeof window === 'undefined') return;

  window.gtag('event', action, params);
};

// Track user interactions
export const trackInteraction = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  logEvent(action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common events for the travel website
export interface BookingEventParams {
  package_id: string;
  package_name: string;
  price: number;
  currency: string;
  travel_date?: string;
  num_travelers?: number;
}

// Track booking events
export const trackBooking = (params: BookingEventParams) => {
  logEvent('begin_checkout', {
    currency: params.currency,
    value: params.price,
    items: [
      {
        item_id: params.package_id,
        item_name: params.package_name,
        price: params.price,
      },
    ],
  });
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  success: boolean,
  errorMessage?: string
) => {
  logEvent('form_submission', {
    event_category: 'Forms',
    event_label: formName,
    form_name: formName,
    success: success,
    error_message: errorMessage || '',
  });
};

// Track downloads
export const trackDownload = (fileName: string, fileType: string) => {
  logEvent('file_download', {
    event_category: 'Downloads',
    event_label: fileName,
    file_name: fileName,
    file_type: fileType,
  });
};
