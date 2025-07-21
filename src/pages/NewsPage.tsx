import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import NewsCard from '../components/news/NewsCard';
import { newsArticles } from '../data/news';

const NewsPage: React.FC = () => {
  // Get featured article
  const featuredArticle = newsArticles[0];
  
  // Get rest of articles
  const restOfArticles = newsArticles.slice(1);

  return (
    <>
      <Helmet>
        <title>Travel News & Tips | Fast Trip Go</title>
        <meta name="description" content="Stay updated with the latest travel news, tips, and guides from Fast Trip Go." />
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
              Travel News & Updates
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest travel news, tips, guides, and inspiration for your next adventure
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Featured Article */}
      <div className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Featured Article</h2>
            <div className="mt-6">
              <NewsCard article={featuredArticle} featured={true} />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* More Articles */}
      <div className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="section-title">Latest News & Updates</h2>
            <p className="section-subtitle">
              Discover more travel insights, tips, and inspiration
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {restOfArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;