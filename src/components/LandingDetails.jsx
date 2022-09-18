import React from 'react';
import { classNames } from '../lib/classNames';
import { LANDING_DETAILS } from '../lib/landing_details';

export const LandingDetails = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-10 p-2 sm:p-4 text-center w-full max-w-4xl mx-auto'>
      {LANDING_DETAILS.map((item, idx) => {
        return (
          <span
            key={`text-${idx}`}
            className={classNames(
              idx === 0 ? `text-2xl font-medium` : `text-xl font-normal`
            )}>
            {item.text}
          </span>
        );
      })}
    </div>
  );
};
