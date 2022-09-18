import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
// Constants
import { SOCIAL_MEDIA } from '../../lib/social_media';
// Functions
import { classNames } from '../../lib/classNames';
// HeadlessUI
import { Popover, Transition } from '@headlessui/react';
// GraphQL
import { request } from 'graphql-request';

export const Navigation = () => {
  const { pathname } = useLocation();

  const [shopData, setShopData] = useState(null);
  const [navigationData, setNavigationData] = useState(null);

  useEffect(() => {
    const fetchShop = async () => {
      const { shop, navigationMenu } = await request(
        'https://api-us-east-1.hygraph.com/v2/cl83s5iwu1bgg01ug5cjx6s6d/master',
        `
        {
          shop(where: {id: "cl86nnr0nsu2q0djy2m9cl54b"}) {
            companyName
            pagePath
          }
          navigationMenu(where: {id: "cl86p6qp7t4m50djytckwar02"}) {
            navigationMenuItems(first: 10) {
              title
              pagePath
            }
          } 
        }
        `
      );

      setShopData(shop);
      setNavigationData(navigationMenu);
    };

    fetchShop();
  }, []);

  if (!shopData || !navigationData) {
    return null;
  }

  const { navigationMenuItems } = navigationData;

  return (
    <header className='bg-myBlack text-myWhite w-full p-6 sticky top-0 z-[1000]'>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center relative'>
        <Link
          to={shopData.pagePath}
          className='font-lobster text-3xl font-medium hover:text-myOrangeTextHover transition-all'>
          {shopData.companyName}
        </Link>
        {/* Desktop - Navigation */}
        <ul className='hidden md:flex gap-8 absolute left-[50%] transform -translate-x-1/2'>
          {navigationMenuItems.map(({ title, pagePath }, index) => {
            return (
              <li
                key={`${title}-${index}`}
                className={classNames(
                  `hover:text-myOrangeTextHover transition-all`,
                  pathname === pagePath
                    ? 'text-myOrangeText'
                    : 'text-text-gray-300'
                )}>
                <Link to={pagePath}>{title}</Link>
              </li>
            );
          })}
        </ul>
        {/* Desktop - Social Media Icons */}
        <div className='hidden md:flex gap-4'>
          {SOCIAL_MEDIA.map(({ path, icon, name }, index) => {
            return (
              <a
                key={`${name}-${index}`}
                href={path}
                className='text-gray-300 hover:text-gray-100 transition-all'>
                {icon}
              </a>
            );
          })}
        </div>
        {/* Mobile - Navigation */}
        <Popover className={'relative md:hidden'}>
          {({ open, close }) => (
            <>
              <Popover.Button className='transition-all focus:outline-none focus-visible:none'>
                {open ? (
                  <MenuOpenRoundedIcon fontSize='large' />
                ) : (
                  <MenuRoundedIcon fontSize='large' />
                )}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'>
                <Popover.Panel className='absolute right-0 translate-x-6 z-10 mt-3 w-screen max-w-sm transform px-4'>
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='relative gap-4 bg-myWhite'>
                      <ul className='flex flex-col'>
                        {navigationMenuItems.map(
                          ({ title, pagePath }, index) => {
                            return (
                              <li
                                key={`${title}-${index}`}
                                className={classNames(
                                  `hover:text-myBlack hover:bg-myOrangeText/20 transition-all`,
                                  pathname === pagePath
                                    ? 'text-myWhite bg-myOrangeText'
                                    : 'text-myBlackLight',
                                  title === 'Contact'
                                    ? 'bg-gray-200 text-myWhite'
                                    : ''
                                )}>
                                <Link
                                  to={pagePath}
                                  className='flex p-4 py-6'
                                  onClick={() => close()}>
                                  {title}
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
};
