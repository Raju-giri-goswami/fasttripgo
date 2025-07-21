import axios from 'axios';

const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const baseURL = isDev 
  ? '/api'  // This will be handled by Vite's proxy
  : 'https://fasttripgo.com/api';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
  withCredentials: false, // Changed to false to avoid CORS issues
  timeout: 30000, // Increased timeout to 30 seconds
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log('Outgoing Request:', {
      url: config.url,
      method: config.method,
      data: config.data
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    if (error.response?.data?.error) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ error: 'An error occurred while processing your request.' });
  }
);

// API endpoints
export const endpoints = {
  booking: '/submit_booking.php',
  lead: '/submit_lead.php',
  newsletter: '/submit_booking.php' // You can create a separate endpoint for newsletter if needed
};

export { apiClient };
