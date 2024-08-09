import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSolarPanel, FaUserTie, FaCalendarDay, FaTasks } from 'react-icons/fa';
import sustainfyLogo from "../assets/sustainfyLogo.svg";
import profile from "../assets/profile.svg";
import ProfileDropdown from './ProfileDropdown'; // import the ProfileDropdown component

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    setActive(link);
    switch (link) {
      case 'Home':
        navigate('/home');
        break;
      case 'Plant':
        navigate('/plant');
        break;
      case 'Technician':
        navigate('/technician');
        break;
      case 'Daily Updates':
        navigate('/daily-updates');
        break;
      case 'Work Review':
        navigate('/work-review');
        break;
      default:
        break;
    }
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
  };

  const profileData = {
    id: 'pv_admin@#1',
    name: 'Ruturaj Deshmukh',
    email: 'ruturaj@example.com',
    admin_contact_number: '123-456-7890',
  };

  const navItems = [
    { name: 'Home', icon: <FaHome className="mr-2" /> },
    { name: 'Plant', icon: <FaSolarPanel className="mr-2" /> },
    { name: 'Technician', icon: <FaUserTie className="mr-2" /> },
    { name: 'Daily Updates', icon: <FaCalendarDay className="mr-2" /> },
    { name: 'Work Review', icon: <FaTasks className="mr-2" /> }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              className={`flex items-center text-gray-600 ${active === item.name ? 'border-b-2 border-[#56BA28] text-[#56BA28]' : ''}`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="relative" ref={profileRef}>
          <div className="flex items-center border border-gray-600 rounded-lg px-2 cursor-pointer" onClick={handleProfileClick}>
            <img
              src={profile}
              alt="User"
              className="h-8 w-8 rounded-lg mr-3 py-1"
            />
            <span className="hidden md:inline font-semibold text-lg text-gray-600">Ruturaj Deshmukh</span>
          </div>
          {profileOpen && <ProfileDropdown onLogout={handleLogout} profileData={profileData} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
