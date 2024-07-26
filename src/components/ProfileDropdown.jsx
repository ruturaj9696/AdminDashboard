import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import profile from "../assets/profile.svg";

const ProfileDropdown = ({ onLogout, profileData }) => {
  return (
    <div className="absolute right-0 mt-4 w-80 border border-gray-300 shadow-lg rounded-lg bg-white overflow-hidden">
      <div className="flex flex-col items-center p-4">
        <img
          src={profile}
          alt="User"
          className="h-20 w-20 rounded-lg mb-4 border-2 border-gray-200"
        />
        <div className="text-center mb-4">
          <p className="font-semibold text-xl text-gray-800">{profileData.name}</p>
          <p className="text-md text-gray-600">{profileData.id}</p>
        </div>
      </div>
      <div className="px-4 mb-4 text-center">
        <div className="flex justify-center items-center text-sm text-gray-600 mb-3">
          <FaEnvelope className="text-gray-500 mr-2" />
          <span>{profileData.email}</span>
        </div>
        <div className="flex justify-center items-center text-sm text-gray-600 mb-3">
          <FaPhoneAlt className="text-gray-500 mr-2" />
          <span>{profileData.admin_contact_number}</span>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={onLogout}
          className="flex items-center justify-center w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out"
        >
          <span>Log Out</span>  
          <RiLogoutBoxRLine className="text-white ml-2 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
