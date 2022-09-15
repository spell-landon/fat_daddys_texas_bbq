import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_MEDIA } from '../../lib/social_media';

export const Footer = () => {
  return (
    <div className='py-12 w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-6'>
      <span className='text-4xl font-lobster text-myOrangeText'>
        Fat Daddy's
      </span>
      <div className='flex flex-col justify-center items-center text-xl gap-1'>
        <Link
          to='https://www.google.com/maps/place/Knoxville,+TN/@35.9655174,-83.9407803,14.29z/data=!4m5!3m4!1s0x885c162246ce42a9:0x7bea92dac4f534c5!8m2!3d35.9606384!4d-83.9207392'
          className='hover:text-myOrangeTextHover'>
          410 Main St, Somewhere, TN, 36686
        </Link>
        <span>(979) 257-9411</span>
        <a
          href='mailto:fatdaddystexasbbq@outlook.com'
          className='hover:text-myOrangeTextHover'>
          Send us an email!
        </a>
      </div>
      <div className='flex flex-col justify-between items-center text-xl gap-1'>
        <span>Mon - Thurs : 11am - 9pm</span>
        <span>Fri - Sat : 11am - 11pm*</span>
        <span>Sun : 11am - 8pm</span>
      </div>
      <span className='text-stone-600 font-light'>
        *Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <div className='flex gap-4'>
        {SOCIAL_MEDIA.map(({ path, icon, name }, index) => {
          return (
            <Link
              key={`${name}-${index}`}
              to={path}
              className='text-gray-300 hover:text-myOrangeTextHover transition-all'>
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
