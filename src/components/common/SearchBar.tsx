import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, Calendar, Users } from 'lucide-react';
import { packageCategories } from '../../data/categories';

interface SearchBarProps {
  onClose?: () => void;
  compact?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, compact = false }) => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (destination.length > 1) {
      const filteredCategories = packageCategories
        .filter(cat => 
          cat.title.toLowerCase().includes(destination.toLowerCase())
        )
        .map(cat => cat.title);
      setSuggestions(filteredCategories);
    } else {
      setSuggestions([]);
    }
  }, [destination]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format query for the URL
    const query = new URLSearchParams();
    if (destination) query.set('destination', destination);
    if (travelDate) query.set('date', travelDate);
    if (travelers) query.set('travelers', travelers.toString());
    
    // Reset search form
    setDestination('');
    setTravelDate('');
    setTravelers(2);
    setIsExpanded(false);
    
    // Navigate to packages page with search params
    navigate(`/packages?${query.toString()}`);
    
    if (onClose) onClose();
  };

  const handleDestinationClick = (suggestion: string) => {
    setDestination(suggestion);
    setSuggestions([]);
  };

  const containerClass = compact
    ? 'rounded-md bg-white'
    : 'rounded-xl bg-white shadow-xl';

  return (
    <div className={`p-4 ${containerClass}`}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          {/* Search Bar Head */}
          <div className="flex items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MapPin className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => setIsExpanded(true)}
                className="w-full pl-10 pr-4 py-3 rounded-md border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                placeholder="Where do you want to go?"
              />
              {destination && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setDestination('')}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {!isExpanded && (
              <button
                type="submit"
                className={`ml-2 btn btn-primary flex-shrink-0 ${
                  compact ? 'px-3 py-2' : ''
                }`}
              >
                <Search className="w-5 h-5 mr-2" />
                <span>Search</span>
              </button>
            )}
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-2 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleDestinationClick(suggestion)}
                  >
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Expanded Search Options */}
          {isExpanded && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Calendar className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-md border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  min={new Date().toISOString().split('T')[0]}
                  placeholder="Travel Date"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Users className="w-5 h-5 text-gray-500" />
                </div>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 rounded-md border-2 border-gray-300 focus:border-primary-500 focus:outline-none appearance-none bg-no-repeat bg-right"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Traveler' : 'Travelers'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X className="w-5 h-5 mr-1 inline" />
                  <span>Close</span>
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <Search className="w-5 h-5 mr-2" />
                  <span>Search Packages</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;