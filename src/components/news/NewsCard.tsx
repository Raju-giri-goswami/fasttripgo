import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { NewsArticle } from '../../types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  if (featured) {
    return (
      <Link to={`/news/${article.slug}`} className="block group">
        <div className="grid md:grid-cols-2 gap-6 card card-hover overflow-hidden">
          <div className="h-full">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col">
            <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4 self-start">
              {article.category}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <div className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{article.author}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
              {article.excerpt}
            </p>
            <div className="text-primary-600 font-medium group-hover:text-primary-700">
              Read More →
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/news/${article.slug}`} className="block h-full group">
      <div className="card card-hover h-full flex flex-col">
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{article.author}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
          <div className="text-primary-600 font-medium group-hover:text-primary-700">
            Read More →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;