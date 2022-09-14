import React from 'react';
import { HERO_CONTENT } from '../lib/hero_content';
// Images
import GrillImage from '../assets/images/grill.jpg';
import FoodOne from '../assets/images/food1.jpg';
import FoodTwo from '../assets/images/food2.jpg';
import FoodThree from '../assets/images/food3.jpg';

export const Hero = () => {
  const imageNameArr = HERO_CONTENT.image_path.split('/');
  const imageName = imageNameArr[imageNameArr.length - 1];

  return (
    <div className='w-full -mb-[11.5rem]'>
      <img
        src={GrillImage}
        alt={imageName}
        className='w-full h-full max-h-[55vh] object-cover brightness-50 grayscale-[80%]'
      />
      {/* Floating Images */}
      <div className='z-10 -translate-y-1/2 w-full flex justify-center items-center gap-8 p-4 h-[25rem]'>
        <img
          src={FoodOne}
          alt='BBQ Food One'
          className='h-1/2 rounded-2xl object-cover'
        />
        <img
          src={FoodTwo}
          alt='BBQ Food Two'
          className='h-full rounded-2xl object-cover'
        />
        <img
          src={FoodThree}
          alt='BBQ Food Three'
          className='h-1/2 rounded-2xl object-cover'
        />
      </div>
    </div>
  );
};
