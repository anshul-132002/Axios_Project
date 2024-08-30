import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center text-white">
    <div className="text-center">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to Axios World!
      </h1>
     
      <div className="flex space-x-4 justify-center">
        <a href="/users" className="uppercase px-6 py-3 flex text-center justify-center bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
          Explore Userdata
        </a>
        <a href="/products" className="uppercase px-6 py-3 flex text-center justify-center bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
          Discover Products
        </a>
        <a href="/userpagination" className="uppercase px-6 py-3 flex text-center justify-center bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
          Discover Userdata through Pagination
        </a>
      </div>
    </div>
  </div>
  
  );
}

export default Home;
