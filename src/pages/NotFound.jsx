import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-darkblack-500">
      <div className="text-center">
        <img
          src="/assets/images/illustration/404.svg"
          alt="404 Not Found"
          className="mx-auto mb-8 max-w-md"
        />
        <h1 className="text-6xl font-bold text-bgray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-bgray-700 dark:text-bgray-50 mb-4">Page Not Found</h2>
        <p className="text-bgray-600 dark:text-bgray-50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-success-600 text-white font-medium rounded-lg hover:bg-success-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
