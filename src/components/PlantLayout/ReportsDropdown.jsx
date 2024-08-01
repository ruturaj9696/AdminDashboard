import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const reports = Array.from({ length: 20 }, (_, i) => `Report ${i + 1}`);

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <h6 className="mb-2">
          Reports
        </h6>
        <MenuButton className="inline-flex w-full justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span>Select one option</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 ml-2 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 mt-2 w-full max-h-80 overflow-y-auto rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 bg-white"
      >
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
                onClick={() => console.log("Add new report")}
              >
                Add new report
              </button>
            )}
          </MenuItem>
          {reports.map((report, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <div
                  className={`${
                    active ? "bg-gray-100" : ""
                  } flex items-center justify-between px-4 py-2 text-sm text-gray-700 w-full`}
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
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
