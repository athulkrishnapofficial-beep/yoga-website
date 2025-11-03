// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ClassPreview from '../components/ClassPreview';
import Testimonials from '../components/Testimonials'; // <-- 1. Import it

const Home = () => {
  return (
    <>
      <Hero />
      <ClassPreview />
      <Testimonials /> {/* <-- 2. Add it here */}
      
      {/* <IntroOfferCta /> */}
    </>
  );
};

export default Home;