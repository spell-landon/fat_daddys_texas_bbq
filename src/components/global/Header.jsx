import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
// Constants
import { NAVIGATION_MENU } from '../../lib/navigation_menu';
import { SHOP_INFO } from '../../lib/shop_info';
import { SOCIAL_MEDIA } from '../../lib/social_media';
// Functions
import { classNames } from '../../lib/classNames';
// HeadlessUI
import { Popover, Transition } from '@headlessui/react';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='bg-myBlack text-myWhite w-full p-6 sticky top-0 z-10'>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center'>
        <Link
          to={SHOP_INFO.path}
          className='font-lobster text-3xl font-medium hover:text-myOrangeTextHover transition-all'>
          {SHOP_INFO.shopName}
        </Link>
        {/* Desktop - Navigation */}
        <ul className='hidden md:flex gap-8'>
          {NAVIGATION_MENU.map(({ title, link }, index) => {
            return (
              <li
                key={`${title}-${index}`}
                className={classNames(
                  `hover:text-myOrangeTextHover transition-all`,
                  pathname === link ? 'text-myOrangeText' : 'text-text-gray-300'
                )}>
                <Link to={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
        {/* Desktop - Social Media Icons */}
        <div className='hidden md:flex gap-4'>
          {SOCIAL_MEDIA.map(({ path, icon, name }, index) => {
            return (
              <Link
                key={`${name}-${index}`}
                to={path}
                className='text-gray-300 hover:text-gray-100 transition-all'>
                {icon}
              </Link>
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
                        {NAVIGATION_MENU.map(({ title, link }, index) => {
                          return (
                            <li
                              key={`${title}-${index}`}
                              className={classNames(
                                `hover:text-myBlack hover:bg-myOrangeText/20 transition-all`,
                                pathname === link
                                  ? 'text-myWhite bg-myOrangeText'
                                  : 'text-myBlackLight',
                                title === 'Contact'
                                  ? 'bg-gray-200 text-myWhite'
                                  : ''
                              )}>
                              <Link
                                to={link}
                                className='flex p-4 py-6'
                                onClick={() => close()}>
                                {title}
                              </Link>
                            </li>
                          );
                        })}
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
