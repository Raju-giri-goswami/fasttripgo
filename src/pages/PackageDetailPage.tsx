import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import PackageDetail from '../components/packages/PackageDetail';
import NotFoundPage from './NotFoundPage';
import { packages } from '../data/packages';
import { Package } from '../types';

const PackageDetailPage: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Find package data
      const foundPackage = packages.find(pkg => pkg.id === id);
      setPackageData(foundPackage || null);
      
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-primary-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!packageData) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{packageData.title} | Fast Trip Go</title>
        <meta name="description" content={packageData.description} />
      </Helmet>
      
      <div className="pt-16">
        <div className="container py-4">
          <Link
            to={`/packages/${category}`}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to {packageData.category} Packages</span>
          </Link>
        </div>
        
        <PackageDetail package={packageData} />
      </div>
    </>
  );
};

export default PackageDetailPage;