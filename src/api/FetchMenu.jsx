import { useState, useEffect } from 'react';
import { request } from 'graphql-request';

export const FetchMenu = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
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

    getMenu();
  }, []);

  if (!data) {
    return null;
  } else {
    return data;
  }
};
