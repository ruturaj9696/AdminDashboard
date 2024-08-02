import React from 'react';

const PlantInformation = () => {
  const plantOverview = [
    { label: 'Plant ID', value: 'ABCDE12345' },
    { label: 'Plant Name', value: 'Ruturaj Plant' },
    { label: 'Plant Owner Name', value: 'Ruturaj Deshmukh' },
    { label: 'Plant Address', value: 'Pandarpur, Maharashtra' }
  ];

  const plantDetails = [
    { label: 'Plant COD', value: '1 Feb 2023' },
    { label: 'Sustainify operation year', value: '2023-24' },
    { label: 'Post-Commissioning Audit', value: 'Ruturaj Deshmukh' },
    { label: 'MSEDCL consumer number', value: '170011755294' },
    { label: 'Billing Unit No', value: '4601' },
    { label: 'Billing Cycle Date', value: '12/12/24' },
    { label: 'MSEDCL registered mobile number', value: '9983454354' },
    { label: 'Documents Received', value: '3' },
    { label: 'Number of modules', value: '46' },
    { label: 'Module make', value: 'Vikram' },
    { label: 'Watt peak', value: '355' },
    { label: 'Module type', value: 'Monocrystalline' },
    { label: 'Number of string', value: '3' },
    { label: 'Inverter make', value: 'Sungrow' },
    { label: 'Inverter model number', value: 'sundac12431' },
    { label: 'Number of inverters', value: '4' },
    { label: 'Inverter serial number', value: '12345' },
    { label: 'Invertor number / kW capacity', value: '200' },
    { label: 'Mode of internet connection', value: 'Lan' }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Overview:</h1>
      </div>
      <div className="">
        {plantOverview.map((detail, index) => (
          <div key={index} className="flex mb-2">
            <p className="font-semibold w-1/3">{detail.label}</p>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
      <div className="border-t border ">
        <h2 className="text-xl font-bold">Other Details :</h2>
        <div className="grid grid-cols-2 border-gray-500">
          {plantDetails.map((detail, index) => (
            <div key={index} className="flex">
              <p className="font-semibold w-1/3 ">{detail.label}</p>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantInformation;
