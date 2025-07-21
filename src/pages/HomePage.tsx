import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import PopularPackages from '../components/home/PopularPackages';
import DestinationCategories from '../components/home/DestinationCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import SpecialOffers from '../components/home/SpecialOffers';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fast Trip Go | Premium Travel Packages</title>
        <meta name="description" content="Discover India's most beautiful destinations with Fast Trip Go. We offer premium travel packages for Uttarakhand, Manali, Nepal, Ladakh, and more." />
      </Helmet>
      
      <Hero />
      <PopularPackages />
      <DestinationCategories />
      <WhyChooseUs />
      <SpecialOffers />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;