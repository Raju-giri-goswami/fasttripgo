export interface Package {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  duration: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Itinerary[];
}

export interface Itinerary {
  day: number;
  title: string;
  description: string;
  meals?: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  accommodation?: string;
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  packageCount: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  message?: string;
  budget?: string;
  travelDate?: string;
  adults?: number;
  children?: number;
}