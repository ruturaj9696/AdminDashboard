import React from "react";

const CreatePlant = () => {
  const arr = [
    "Plant ID",
    "Number of modules",
    "Plant Capacity",
    "Module make",
    "Site Location URL",
    "Module type",
    "Site Address",
    "No of Strings",
    "Site Contact no",
    "Inverter make",
    "MSEBCL consumer number",
    "Inverter model name",
    "Assigned plan",
    "Inverter serial number",
    "MSEBCL registered mobile number",
    "Inverter capacity",
    "Plant COD",
    "Mode of internet connection",
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 mt-5">
      <div className="bg-white px-16 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Create new plant
        </h2>
        <form className="grid grid-cols-2 gap-4">
          {arr.map((plant, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700">
                {plant}
              </label>
              <input
                type="text"
                placeholder="Enter Plant ID"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          ))}
        </form>
        <div className="mt-6 flex justify-center">button</div>
      </div>
    </div>
  );
};

export default CreatePlant;
