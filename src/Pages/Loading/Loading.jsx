import React from 'react';

const Loading = () => {
  // console.log(11)
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-50/70 backdrop-blur-sm fixed inset-0 z-50">

      <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-2xl">
        

        <div 
          className="w-12 h-12 border-4 border-t-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
          aria-label="Loading..."
        ></div>
        
        {/* Loading Text */}
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Loading Data...
        </p>

        {/* Optional: Subtle secondary text */}
        <p className="text-sm text-gray-500 mt-1">
          Please wait a moment.
        </p>
      </div>

    </div>
  );
};

export default Loading;