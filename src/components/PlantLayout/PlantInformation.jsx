import React from 'react';
import solarPanel from "../../assets/solarPanel.svg";

const PlantInformation = () => {
  const plantData = {
    plantId: 'ABCDE12345',
    clientId: '#client_123',
    plantName: 'Ruturaj Plant',
    plantOwnerName: 'Ruturaj Deshmukh',
    plantAddress: 'Pandarpur, Maharashtra',
    dateOfEstablishment: '16 July 2024'
  };

  return (
    <div className="bg-white shadow-md rounded-sm p-4 sm:p-6 w-full border">
      <div className="flex items-center gap-2 mb-4">
        {/* <img src={solarPanel} alt="solarPanel" className="h-6 sm:h-8" /> */}
        <h2 className="text-lg font-semibold">Plant Information</h2>
      </div>
      <div className="space-y-2 sm:space-y-1">
        <Detail label="Plant ID" value={plantData.plantId} />
        <Detail label="Client ID" value={plantData.clientId} />
        <Detail label="Plant Name" value={plantData.plantName} />
        <Detail label="Plant Owner Name" value={plantData.plantOwnerName} />
        <Detail label="Plant Address" value={plantData.plantAddress} />
        <Detail label="Date of establishment" value={plantData.dateOfEstablishment} />
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-base">
    <span className="text-gray-500">{label}</span>
    <span className="text-black">{value}</span>
  </div>
);

export default PlantInformation;
