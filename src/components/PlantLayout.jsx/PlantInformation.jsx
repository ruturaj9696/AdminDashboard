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
    <div className="bg-white shadow-md rounded-sm p-6 max-w-lg">
      <div className='flex gap-2'>
      <img src={solarPanel} alt="solarPanel" className='h-6 mt-1'/>
      <h2 className="text-lg font-semibold mb-1">Plant Information</h2>
      </div>
      <div className="space-y-1">
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
  <div className="flex justify-between">
    <span className=" text-gray-500">{label}</span>
    <span className=" text-black">{value}</span>
  </div>
);

export default PlantInformation;
