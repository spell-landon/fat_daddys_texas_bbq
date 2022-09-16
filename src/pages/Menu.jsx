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

  return (
    <div>
      <h3>{data.title}</h3>
      <div>
        {data.sections.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
    </div>
  );
};
