import React from 'react';
import { FaHome, FaLeaf, FaUserTie, FaCalendarDay, FaTasks } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md py-2 px-6">
      <div className="flex items-center">
        <img
          src="path_to_your_logo.png"
          alt="Sustainify Energy"
          className="h-8 w-8 mr-3"
        />
        <span className="font-semibold text-lg">Sustainify Energy</span>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="flex items-center text-gray-600 hover:text-green-600">
          <FaHome className="mr-2" /> Home
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-green-600">
          <FaLeaf className="mr-2" /> Plant
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-green-600">
          <FaUserTie className="mr-2" /> Technician
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-green-600">
          <FaCalendarDay className="mr-2" /> Daily Updates
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-green-600">
          <FaTasks className="mr-2" /> Work Review
        </a>
      </div>
      <div className="flex items-center">
        <img
          src="path_to_user_image.png"
          alt="User"
          className="h-8 w-8 rounded-full mr-3"
        />
        <span className="font-semibold text-lg">Ruturaj Deshmukh</span>
      </div>
    </nav>
  );
};

export default Navbar;
