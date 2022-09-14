import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FooterDisclaimer } from './FooterDisclaimer';

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen max-w-screen bg-myBlack text-myWhite font-heebo'>
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className='w-full'>{children}</main>

      {/* Footer */}
      <footer className='mt-auto'>
        <Footer />
      </footer>
      <FooterDisclaimer />
    </div>
  );
};
