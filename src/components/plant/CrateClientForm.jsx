import React, { useState } from "react";
import profileimage from "../../assets/profileimage.svg";
import solarPanel from "../../assets/solarPanel.svg";

const CrateClientForm = () => {
  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    contactNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [plantInfo, setPlantInfo] = useState({
    plantId: "",
    plantCapacity: "",
    siteLocationURL: "",
    siteAddress: "",
    siteContactNo: "",
    mseBCLConsumerNumber: "",
    assignedPlan: "",
    mseBCLRegisteredMobileNumber: "",
    plantCOD: "",
    numberOfModules: "",
    moduleMake: "",
    moduleType: "",
    noOfStrings: "",
    inverterMake: "",
    inverterModelName: "",
    inverterSerialNumber: "",
    inverterCapacity: "",
    modeOfInternetConnection: "",
  });

  const PlantInformation = [
    "Plant Id",
    "Plant Capacity",
    "Site Location URL",
    "Site Address",
    "Site Contact No",
    "MSEBCL Consumer Number",
    "Assigned Plan",
    "MSEBCL Registered Mobile Number",
    "Plant COD",
    "number Of Modules",
    "Module Make",
    "Module Type",
    "No Of Strings",
    "Inverter Make",
    "Inverter Model Name",
    "Inverter Serial Number",
    "Inverter Capacity",
    "Mode Of Internet Connection",
  ];

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePlantChange = (e) => {
    const { name, value } = e.target;
    setPlantInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    console.log(clientInfo);
  };

  const handlePlantSubmit = (e) => {
    e.preventDefault();
    console.log(plantInfo);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <form
          onSubmit={handleClientSubmit}
          className="w-full md:w-1/3 px-4 mb-4"
        >
          <div className="p-6 bg-white shadow-md rounded">
            <div className="flex gap-1">
              <img
                src={profileimage}
                alt="profileimage"
                className="pb-4  "
              />
              <h2 className="text-xl font-bold mb-4">Client Information</h2>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Client Name
              </label>
              <input
                type="text"
                name="clientName"
                value={clientInfo.clientName}
                onChange={handleClientChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Contact No
              </label>
              <input
                type="text"
                name="contactNo"
                value={clientInfo.contactNo}
                onChange={handleClientChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={clientInfo.email}
                onChange={handleClientChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={clientInfo.password}
                onChange={handleClientChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={clientInfo.confirmPassword}
                onChange={handleClientChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </form>

        <form
          onSubmit={handlePlantSubmit}
          className="w-full md:w-2/3 px-4 mb-4"
        >
          <div className="p-6 bg-white shadow-md rounded">
            <div className="flex gap-1">
              <img src={solarPanel} alt="profileimage" className="py-3 pt-0 h-7 w-7 mt-2"/>
              <h2 className="text-xl font-bold mb-4">Client Information</h2>
            </div>

            <div className="flex flex-wrap -mx-4">
              {PlantInformation.map((Plant, i) => (
                <div className="w-full md:w-1/3 px-4 mb-4" key={i}>
                  <label className="block text-sm font-medium text-gray-700">
                    {Plant}
                  </label>
                  <input
                    type="text"
                    placeholder={Plant}
                    onChange={handlePlantChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"

              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrateClientForm;
