import React from 'react';

export const Header = () => {
  return (
    <header className='bg-myBlack text-myWhite w-full p-8 sticky top-0 z-10'>
      <div className='w-full max-w-7xl mx-auto flex justify-between'>
        <span>Fat Daddy's</span>
        <ul className='flex gap-8'>
          <li>Home</li>
          <li>Food Menu</li>
          <li>About</li>
        </ul>
        <div className='flex gap-6'>
          <div className='rounded-full h-6 w-6 bg-myGrayDark'></div>
          <div className='rounded h-6 w-6 bg-myGrayDark'></div>
        </div>
      </div>
    </header>
  );
};
