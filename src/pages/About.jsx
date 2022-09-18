import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const { about } = await request(
        'https://api-us-east-1.hygraph.com/v2/cl83s5iwu1bgg01ug5cjx6s6d/master',
        `
          {
            about(where: {id: "cl86nkzhuj9wr0ck1fnumf1zt"}) {
              description {
                html
              }
              image {
                handle
                id
                url
              }
              imageString
              title
            }
          }
        `
      );

      setData(about);
    };

    fetchAbout();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto px-4 mb-20'>
      <h3 className='font-light text-5xl my-12 text-center'>{data.title}</h3>
      <div className='bg-myOrangeText w-full h-[0.5px]'></div>
      <img
        src={data.imageString ? data.imageString : data.image.url}
        alt='Family portrait'
        className='w-full max-w-4xl mx-auto my-10 object-cover'
      />
      <div
        className='w-full max-w-4xl mx-auto space-y-4'
        dangerouslySetInnerHTML={{ __html: data.description.html }}
      />
    </div>
  );
};
