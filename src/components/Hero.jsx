import React from 'react';
import { HERO_CONTENT } from '../lib/hero_content';
// Images
import GrillImage from '../assets/images/grill.jpg';
import FoodOne from '../assets/images/food1.jpg';
import FoodTwo from '../assets/images/food2.jpg';
import FoodThree from '../assets/images/food3.jpg';
// Components
import { Button } from '../components/elements/Button';

export const Hero = () => {
  const imageNameArr = HERO_CONTENT.image_path.split('/');
  const imageName = imageNameArr[imageNameArr.length - 1];

  return (
    <div className='w-full -mb-[80px] lg:-mb-[160px] relative'>
      {/* Main BG Image */}
      <img
        src={GrillImage}
        alt={imageName}
        className='w-full h-full min-h-[415px] sm:min-h-[515px] max-h-[650px] object-cover brightness-50 grayscale-[80%]'
      />

      {/* Hero Text */}
      <div className='absolute top-0 w-full z-10 flex flex-col justify-start items-center py-12 md:py-16 lg:py-24 px-2 sm:px-4 gap-6 transition-all'>
        <div className='flex justify-between space-x-2 text-xl sm:text-3xl font-light'>
          <span className='text-myOrangeText'>{HERO_CONTENT.shopName}</span>
          <span className='text-myWhite'> | {HERO_CONTENT.city}</span>
        </div>
        <span className='text-myWhite text-4xl sm:text-5xl font-normal w-full sm:max-w-[410px] leading-normal text-center'>
          {HERO_CONTENT.heroText}
        </span>
        <Button path={HERO_CONTENT.buttonPath} text={HERO_CONTENT.buttonText} />
      </div>

      {/* Floating Images */}
      <div className='z-20 w-full max-w-5xl mx-auto flex justify-center items-center gap-4 sm:gap-8 p-2 sm:p-4 h-max -translate-y-1/2'>
        <div className='w-fit h-full'>
          <img
            src={FoodOne}
            alt='BBQ Food One'
            className='h-full rounded-2xl object-contain'
          />
        </div>
        <div className='w-fit h-full'>
          <img
            src={FoodTwo}
            alt='BBQ Food Two'
            className='h-full rounded-2xl object-contain'
          />
        </div>
        <div className='w-fit h-full'>
          <img
            src={FoodThree}
            alt='BBQ Food Three'
            className='h-full rounded-2xl object-contain'
          />
        </div>
      </div>
    </div>
  );
};
