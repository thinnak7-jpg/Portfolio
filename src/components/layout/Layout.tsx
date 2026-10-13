import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import { Outlet } from 'react-router-dom';
import { ScrollProgress } from '../animations/ScrollProgress';
import { PageLoader } from '../animations/PageLoader';

export const Layout = () => {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen flex flex-col relative selection:bg-primary/30 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        
        <main className="flex-grow pt-24">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};
