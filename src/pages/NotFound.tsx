import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-bold text-gradient mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-white">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
