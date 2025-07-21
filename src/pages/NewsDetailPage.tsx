import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { newsArticles } from '../data/news';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams();
  const article = newsArticles.find(article => article.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Fast Trip Go</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      
      {/* Back Link */}
      <div className="bg-primary-700">
        <div className="container pt-24 pb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/news"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Page Header */}
      <div className="bg-primary-700 pb-20 md:pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-primary-600/50 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                {article.category}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-white/90 space-x-6">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{article.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section bg-gray-50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-[400px] md:h-[500px]">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div 
                    className="mt-8 article-content
                    [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-12
                    [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mb-4 [&_h3]:mt-8
                    [&_p]:text-lg [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
                    [&_ul]:mt-6 [&_ul]:mb-8 [&_ul]:pl-6 [&_ul]:list-disc
                    [&_li]:text-lg [&_li]:text-gray-700 [&_li]:mb-3 [&_li]:leading-relaxed
                    [&_.lead]:text-xl [&_.lead]:text-gray-700 [&_.lead]:leading-relaxed [&_.lead]:mb-8
                    [&_.conclusion]:text-xl [&_.conclusion]:font-medium [&_.conclusion]:text-primary-600 [&_.conclusion]:mt-12 [&_.conclusion]:mb-0"
                    dangerouslySetInnerHTML={{ __html: article.content || article.excerpt }} 
                  />
                </div>

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                        <User className="h-5 w-5 text-primary-500 mr-2" />
                        <span className="text-gray-700">By {article.author}</span>
                      </div>
                      <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                        <Calendar className="h-5 w-5 text-primary-500 mr-2" />
                        <span className="text-gray-700">{article.date}</span>
                      </div>
                      <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                        <Tag className="h-5 w-5 text-primary-500 mr-2" />
                        <span className="text-gray-700">{article.category}</span>
                      </div>
                    </div>
                    <Link
                      to="/news"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors font-medium"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to News
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailPage;
