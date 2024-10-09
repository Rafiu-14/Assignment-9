// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [] = useState(); // 

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
          Home<span className="text-yellow-400">Haven</span>
        </Link>

        {/* Links */}
        <div className="space-x-8 text-white font-semibold">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link to="/estates" className="hover:text-yellow-400 transition duration-300">
            Estates
          </Link>
        </div>

        {/* Login/Logout */}
        <div>
          <Link
            to="/login"
            className="bg-yellow-400 text-blue-800 font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
