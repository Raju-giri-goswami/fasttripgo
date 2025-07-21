import React from 'react';
import { Plane } from 'lucide-react';

interface LogoProps {
  color?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ color = 'dark' }) => {
  const textColor = color === 'light' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className="flex items-center">
      <Plane
        className={`h-8 w-8 text-primary-500 transform -rotate-45 mr-2`}
        strokeWidth={2.5}
      />
      <span className={`text-xl font-bold inline-flex items-baseline ${textColor}`}>
        Fast<span className="text-primary-500">Trip</span>Go
      </span>
    </div>
  );
};

export default Logo;