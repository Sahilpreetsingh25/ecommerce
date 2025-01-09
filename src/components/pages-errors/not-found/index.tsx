import React from "react";
import { Link, useLocation } from "react-router-dom"; 
const NotFound: React.FC = () => {
  const location = useLocation(); 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Oops! The page you're looking for doesn't exist.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you were looking for at{" "}
          <span className="font-medium text-blue-600">{location.pathname}</span>.
        </p>
        <Link
          to="/home"
          className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
