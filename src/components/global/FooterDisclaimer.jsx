import React from 'react';

export const FooterDisclaimer = () => {
  return (
    <div className='w-full max-w-7xl mx-auto flex flex-col justify-center items-center text-footerDisclaimer'>
      <div className='h-[.5px] w-full max-w-7xl mx-auto bg-footerDisclaimer'></div>
      <span className='font-extralight text-sm py-1'>
        2021 - Fat Daddy's Texas BBQ, LLC. Website made by Landon Spell. Hosted
        by Netlify
      </span>
    </div>
  );
};
