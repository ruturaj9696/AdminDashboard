import React, { useState } from "react";
import Button from "../Button";

const FinancialAnalysisUpdate = () => {
  const [attributes, setAttributes] = useState([
    { detail: "User Name", value: "Mr Ruturaj Deshmukh" },
    { detail: "Initial investment", value: "2500000" },
    { detail: "Maintenance cost", value: "15000" },
    { detail: "Total unit generation till date", value: "3434" },
    { detail: "Total revenue earned", value: "34232" },
    { detail: "Pay back period", value: "4.2 years" },
    { detail: "IRR", value: "25%" },
    { detail: "NPV", value: "22.5 lack" },
  ]);

  const handleChange = (index, event) => {
    const newAttributes = [...attributes];
    newAttributes[index].value = event.target.value;
    setAttributes(newAttributes);
  };

  return (
    <div className="max-w-sm mx-auto rounded-sm overflow-hidden my-4">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-[#AFDE9A] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Details
            </th>
            <th className="px-5 py-3 bg-[#AFDE9A] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Values
            </th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((attribute, index) => (
            <tr key={index}>
              <td className="px-5 py-2 border-b border-gray-200 text-sm">
                {attribute.detail}
              </td>
              <td className="px-5 py-2 border-b border-gray-200 text-sm">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  placeholder={attribute.value}
                  value={attribute.value}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-5 py-4 bg-white border-t flex justify-center">
        <Button text={"Update details"} />
      </div>
    </div>
  );
};

export default FinancialAnalysisUpdate;
