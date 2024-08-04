import React from 'react';

const EditPlant = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-3xl px-6">
        <h2 className="text-xl font-bold mb-2 text-green-600 flex items-center">
          Edit Plant
        </h2>
        <form className="flex flex-wrap -mx-2">
          {[
            { label: 'Plant ID', value: 'PL12345' },
            { label: 'Number of modules', value: '150' },
            { label: 'Plant Capacity', value: '500 kW' },
            { label: 'Module make', value: 'SolarTech' },
            { label: 'Site Location URL', value: 'http://example.com/location' },
            { label: 'Module type', value: 'Monocrystalline' },
            { label: 'Site Address', value: '123 Solar St, Sun City' },
            { label: 'No of Strings', value: '20' },
            { label: 'Site Contact no', value: '+1234567890' },
            { label: 'MSEBCL consumer number', value: 'MSEB123456' },
            { label: 'Inverter make', value: 'InverterTech' },
            { label: 'Inverter model name', value: 'InverterModelX' },
            { label: 'Assigned plan', value: 'Plan A' },
            { label: 'Inverter serial number', value: 'INV12345' },
            { label: 'MSEBCL registered mobile number', value: '+0987654321' },
            { label: 'Inverter capacity', value: '100 kW' },
            { label: 'Plant COD', value: '2024-01-01' },
            { label: 'Mode of internet connection', value: 'WiFi' }
          ].map((input, index) => (
            <div key={index} className="w-full md:w-1/2 px-2 mb-2">
              <label className="mb-1 text-sm font-medium text-gray-700">{input.label}</label>
              <input
                type="text"
                placeholder={input.value}
                className="p-1 border border-gray-300 rounded-lg w-full"
              />
            </div>
          ))}
          <div className="w-full px-2 flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded-lg mt-2 hover:bg-green-700"
            >
              Update Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPlant;
