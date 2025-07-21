import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PackageList from '../components/packages/PackageList';
import NotFoundPage from './NotFoundPage';
import { packages } from '../data/packages';
import { packageCategories } from '../data/categories';
import { Package, Category } from '../types';

const PackageCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [categoryPackages, setCategoryPackages] = useState<Package[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (category) {
      // Find category data
      const foundCategory = packageCategories.find(cat => cat.slug === category);
      setCategoryData(foundCategory || null);
      
      // Find packages for this category
      const filteredPackages = packages.filter(
        pkg => pkg.categorySlug === category
      );
      setCategoryPackages(filteredPackages);
      
      setIsLoading(false);
    }
  }, [category]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-primary-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!categoryData) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{categoryData.title} Packages | Fast Trip Go</title>
        <meta name="description" content={`Explore our ${categoryData.title} travel packages. ${categoryData.description}`} />
      </Helmet>
      
      {/* Page Header */}
      <div 
        className="relative bg-gray-900 py-24 md:py-32"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${categoryData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/packages"
              className="inline-flex items-center text-white/80 hover:text-white mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to All Packages</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {categoryData.title} Packages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {categoryData.description}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Packages List */}
      <div className="section bg-gray-50">
        <div className="container">
          <PackageList 
            packages={categoryPackages}
            title={`${categoryData.title} Packages`}
            description={`Explore our collection of hand-picked ${categoryData.title.toLowerCase()} travel experiences`}
          />
        </div>
      </div>
    </>
  );
};

export default PackageCategoryPage;