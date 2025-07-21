import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { FormData } from '../../types';
import { apiClient, endpoints } from '../../utils/api';

interface LeadPopupProps {
  onClose: () => void;
  onSuccess?: () => void;
  formType: 'itinerary' | 'booking';
}

const LeadPopup: React.FC<LeadPopupProps> = ({ onClose, onSuccess, formType }): React.ReactNode => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formPayload = {
        ...data,
        isContact: formType === 'booking',
        isItinerary: formType === 'itinerary',
        packageTitle: '',
        adults: 1,
        children: 0
      };

      console.log('Submitting lead form data:', formPayload);

      const response = await apiClient.post(endpoints.booking, formPayload);
      console.log('Server response:', response.data);
      
      if (!response.data.success) {
        const errorMessage = response.data.error || `Server error: ${response.status}`;
        console.error('Form submission failed:', errorMessage);
        throw new Error(errorMessage);
      }

      // If we get here, the submission was successful
      console.log('Form submitted successfully');
      setIsSuccess(true);
      
      // Call onSuccess if provided
      if (onSuccess) {
        onSuccess();
      }
      
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">
          {formType === 'booking' ? 'Book Your Journey' : 'Get Detailed Itinerary'}
        </h2>
        
        {isSuccess ? (
          <div className="text-center text-green-600">
            <p className="mb-4">Thank you for your {formType === 'booking' ? 'booking request' : 'interest'}!</p>
            <p>{formType === 'booking' ? 'We will contact you shortly.' : 'Your itinerary is being prepared...'}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                {...register('name', { 
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters long' },
                  maxLength: { value: 100, message: 'Name must not exceed 100 characters' }
                })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[\d\s+\-()]+$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <input
                {...register('destination')}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Where would you like to go?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register('message')}
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
                placeholder="Your message..."
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 active:bg-primary-800 transition-colors disabled:opacity-50 shadow-sm hover:shadow-md font-medium"
            >
              {isSubmitting ? 'Submitting...' : formType === 'booking' ? 'Book Now' : 'Get Itinerary'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadPopup;