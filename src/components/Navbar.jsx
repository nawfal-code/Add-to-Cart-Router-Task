import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ cartitems }) => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-10 py-4 shadow-lg">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-5 w-5 md:h-10 md:w-10 rounded-full border border-gray-700" />
        <h1 className="text-md md:text-3xl font-extrabold">
          Shop<span className="text-orange-800">Web</span>
        </h1>
      </div>

      <div className="flex items-center gap-6 md:gap-8 text-lg font-semibold">
        <Link to="/cart" className="relative cursor-pointer  hover:opacity-90">
          <span className="text-xl md:text-3xl">🛒</span>
          {cartitems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 rounded-full font-bold">
              {cartitems.length}
            </span>
          )}
        </Link>

        <Link to="/" className="flex items-center gap-2 md:10 hover:text-gray-300">
          <span className="text-xl md:text-xl">🏠</span>
        <span className="hidden md:block md:text-xl font-bold">HOME</span>

        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
