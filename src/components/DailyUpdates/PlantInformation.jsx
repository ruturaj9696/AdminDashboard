import React from 'react';

const PlantInformation = () => {
  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="text-gray-600 mb-4">
        <span className="font-semibold">Selected Plant :</span> 
        <span className="text-green-500 ml-2">Sample Plant123</span>
      </div>
      <div className="text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Plant ID</span>
          <span className="text-gray-500">#plant_123</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Client ID</span>
          <span className="text-gray-500">#client_123</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Plant Capacity</span>
          <span className="text-gray-500">200kW</span>
        </div>
      </div>
    </div>
  );
};

export default PlantInformation;
