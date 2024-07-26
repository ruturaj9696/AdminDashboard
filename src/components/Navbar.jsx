import React, { useState } from 'react';
import { FaHome, FaSolarPanel, FaUserTie, FaCalendarDay, FaTasks } from 'react-icons/fa';
import sustainfyLogo from "../assets/sustainfyLogo.svg";
import profile from "../assets/profile.svg";

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const handleNavClick = (link) => {
    setActive(link);
  };

  const navItems = [
    { name: 'Home', icon: <FaHome className="mr-2" /> },
    { name: 'Plant', icon: <FaSolarPanel className="mr-2" /> },
    { name: 'Technician', icon: <FaUserTie className="mr-2" /> },
    { name: 'Daily Updates', icon: <FaCalendarDay className="mr-2" /> },
    { name: 'Work Review', icon: <FaTasks className="mr-2" /> }
  ];

  return (
    <nav className="bg-white shadow-md py-2 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={sustainfyLogo}
            alt="Sustainify Energy"
            className="h-8 w-16 mr-3"
          />
        </div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={() => handleNavClick(item.name)}
              className={`flex items-center text-gray-600 onclick:text-[#56BA28] ${active === item.name ? 'border-b-2 border-[#56BA28] text-[#56BA28] ' : ''}`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="flex items-center border border-gray-600  rounded-lg px-2">
          <img
            src={profile}
            alt="User"
            className="h-8 w-8 rounded-lg mr-3 py-1"
          />
          <button className="hidden md:inline font- text-lg text-gray-600 ">Ruturaj Deshmukh</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
