import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";

const ReportsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reports = Array.from({ length: 20 }, (_, i) => `Report ${i + 1}`);

  return (
    <div className="m-2 p-3 border border-gray-200 rounded-sm shadow-lg">
      <div className="relative inline-block text-left w-full">
        <div>
          <button
            type="button"
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Select one option</span>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                className="text-green-500 block px-4 py-2 text-sm w-full text-left"
                role="menuitem"
                onClick={() => console.log("Add new report")}
              >
                Add new report
              </button>
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                  role="menuitem"
                >
                  {report}
                  <div className="flex space-x-2">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => console.log(`View ${report}`)}
                    >
                      <FaEye className="w-5 h-5" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => console.log(`Delete ${report}`)}
                    >
                      <FaTrashAlt className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsDropdown;
