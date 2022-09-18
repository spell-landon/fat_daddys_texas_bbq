import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { SOCIAL_MEDIA } from '../../lib/social_media';

export const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchShop = async () => {
      const { shop } = await request(
        'https://api-us-east-1.hygraph.com/v2/cl83s5iwu1bgg01ug5cjx6s6d/master',
        `
        {
          shop(where: {id: "cl86nnr0nsu2q0djy2m9cl54b"}) {
            asteriskInfo
            companyAddress
            companyEmail
            companyHours
            companyName
            companyNumber
          }
        }
        `
      );

      setData(shop);
    };

    fetchShop();
  }, []);

  if (!data) {
    return null;
  }

  const {
    asteriskInfo,
    companyAddress,
    companyEmail,
    companyHours,
    companyName,
    companyNumber,
  } = data;

  const splitCompanyHours = _.split(companyHours, '\n');

  return (
    <div className='py-12 w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-6'>
      <span className='text-4xl font-lobster text-myOrangeText'>
        {companyName}
      </span>
      <div className='flex flex-col justify-center items-center text-xl gap-1'>
        <Link
          to='https://www.google.com/maps/place/Knoxville,+TN/@35.9655174,-83.9407803,14.29z/data=!4m5!3m4!1s0x885c162246ce42a9:0x7bea92dac4f534c5!8m2!3d35.9606384!4d-83.9207392'
          className='hover:text-myOrangeTextHover'>
          {companyAddress}
        </Link>
        <span>{companyNumber}</span>
        <a
          href={`mailto:${companyEmail}`}
          className='hover:text-myOrangeTextHover'>
          Send us an email!
        </a>
      </div>
      <div className='flex flex-col justify-between items-center text-xl gap-1'>
        {splitCompanyHours.map((hour, idx) => {
          return <span key={`hourDetails-${idx}`}>{hour}</span>;
        })}
      </div>
      <span className='text-stone-600 font-light'>{asteriskInfo}</span>
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
