import React from 'react';
// Components
import { Hero } from '../components/Hero';
import { LandingDetails } from '../components/LandingDetails';
import { ImageCarousel } from '../components/ImageCarousel';

export const Home = () => {
  return (
    <div>
      <Hero />
      <LandingDetails />
      {/* //TODO Fix Image Carousel */}
      {/*//? Maybe need to use another library? */}
      <ImageCarousel />
    </div>
  );
};
