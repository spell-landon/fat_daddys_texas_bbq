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
      <ImageCarousel />
    </div>
  );
};
