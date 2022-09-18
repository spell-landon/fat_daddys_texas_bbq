import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export const Menu = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const { menus } = await request(
        'https://api-us-east-1.hygraph.com/v2/cl83s5iwu1bgg01ug5cjx6s6d/master',
        `
          {
            menus(first: 1) {
              title
              sections(first: 20) {
                ... on Section {
                  title
                  sauces
                  items(first: 20) {
                    ... on Item {
                      description
                      price
                      title
                    }
                  }
                  description
                }
              }
            }
          }
        `
      );

      setData(menus[0]);
    };

    fetchMenu();
  }, []);

  if (!data) {
    return null;
  }

  const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto px-4'>
      <h3 className='font-light text-5xl my-12 text-center'>{data.title}</h3>
      <div>
        {data.sections.map((item) => {
          return (
            <div className=''>
              <div className='sticky top-[68px] bg-myBlack pt-8'>
                <h4 className='font-medium text-3xl text-center'>
                  {item.title}
                </h4>
                <div className='bg-myOrangeText w-full h-[0.5px] my-10'></div>
              </div>

              {item.description && (
                <p className='w-full sm:w-3/4 max-w-3xl text-center mx-auto mb-8'>
                  {item.description}
                </p>
              )}
              <div className='flex w-full flex-wrap'>
                {item.items.map((foodItem) => {
                  return (
                    <div className='basis-full sm:basis-1/2 px-0 sm:px-4 py-4 space-y-1'>
                      <h5 className='font-medium text-lg'>{foodItem.title}</h5>
                      <p className='font-light'>{foodItem.description}</p>
                      <p className='font-medium text-lg'>
                        {moneyFormatter.format(foodItem.price)}
                      </p>
                    </div>
                  );
                })}
              </div>
              {item.sauces.length > 0 && (
                <>
                  <h5 className='mt-8 w-full text-center text-lg font-medium'>
                    Sauces
                  </h5>
                  <div className='flex flex-wrap w-full sm:w-3/4 mx-auto'>
                    {item.sauces.map((sauce) => {
                      return (
                        <p className='basis-1/2 sm:basis-1/3 p-2 text-center'>
                          {sauce}
                        </p>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
