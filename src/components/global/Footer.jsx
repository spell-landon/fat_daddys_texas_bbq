import React from 'react';

export const Footer = () => {
  return (
    <div className='py-12 w-full max-w-7xl mx-auto flex flex-col justify-center items-center'>
      <span className='text-4xl'>Fat Daddy's</span>
      <div>
        <span>410 Main St, Somewhere, TN, 36686</span>
        <span>(979) 257-9411</span>
        <span>fatdaddystexasbbq@outlook.com</span>
      </div>
      <div>
        <span>Mon - Thurs : 11am - 9pm</span>
        <span>Fri - Sat : 11am - 11pm*</span>
        <span>Sun : 11am - 8pm</span>
      </div>
      <span>*Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <div className='flex gap-6'>
        <div className='rounded-full h-6 w-6 bg-myGrayDark'></div>
        <div className='rounded h-6 w-6 bg-myGrayDark'></div>
      </div>
    </div>
  );
};
