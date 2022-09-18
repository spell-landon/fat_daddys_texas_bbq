import React from 'react';
import { Button } from '../components/elements/Button';

export const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 py-12'>
      <h3 className='font-light text-5xl text-center'>Uh oh!</h3>
      <p className='text-3xl my-12 text-center'>
        It looks like we can't find what you're looking for
      </p>
      <div className='flex justify-center'>
        <Button path={'/'} text={'Take me home'} />
      </div>
    </div>
  );
};
