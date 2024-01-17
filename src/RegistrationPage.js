import React from 'react';
import logo from './logo.png';
// Importing Link from 'react-router-dom' if you're using React Router for navigation
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500">
      <div className="absolute top-0 left-0 w-full h-full bg-white" style={{ clipPath: 'ellipse(60% 50% at 50% 100%)' }}></div>
      <div className="z-10">
        <img src={logo} alt="logo" className="mb-6" />
        <div className="bg-white p-8 rounded-lg shadow-lg min-w-[320px]">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirm-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
              </button>
              {/* Link to navigate back to the login page */}
              <Link to="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
