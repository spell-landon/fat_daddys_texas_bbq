import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ text, path }) => {
  return path ? (
    <Link
      to={path}
      className='bg-myOrangeButton hover:bg-myOrangeButtonHover py-3 px-6 rounded text-myWhite text-xl text-center'>
      {text}
    </Link>
  ) : (
    <button className='bg-myOrangeButton hover:bg-myOrangeButtonHover py-3 px-6 rounded text-myWhite text-xl text-center'>
      {text}
    </button>
  );
};
