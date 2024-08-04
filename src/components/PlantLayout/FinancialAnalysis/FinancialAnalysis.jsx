import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import FinancialAnalysisUpdate from "../FinancialAnalysis/FinancialAnalysisUpdate"
const financialData = [
  { detail: "User Name", value: "Mr Ruturaj Deshmukh" },
  { detail: "Initial investment", value: "2500000" },
  { detail: "Maintenance cost", value: "15000" },
  { detail: "Total unit generation till date", value: "3434" },
  { detail: "Total revenue earned", value: "34232" },
  { detail: "Pay back period", value: "4.2 years" },
  { detail: "IRR", value: "25%" },
  { detail: "NPV", value: "22.5 lakh" },
];

const FinancialAnalysis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full">
      <div className="border shadow-md rounded-sm overflow-hidden w-full">
        <div className="flex justify-between mx-2 text-lg font-semibold py-2">
          <div>Financial Analysis</div>
          <button
            className="mr-2"
            onClick={() => {
              openModal();
            }}
          >
            <FaRegEdit />
          </button>
        </div>
        <div className="flex mb-1">
          <div className="px-2 pr-1 text-[#939393]">Expected Bill is :</div>
          <div className="text-[#939393]">526589</div>
        </div>
        <div className="border-t border-gray-300 mx-2">
          <table className="w-full">
            <tbody>
              <tr className="bg-[#AFDE9A]">
                <td className="px-4 py-2 font-semibold">Details</td>
                <td className="px-4 py-2 font-semibold">Values</td>
              </tr>
              {financialData.map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2">{item.detail}</td>
                  <td className="px-4 py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md max-w-lg mx-auto">
            <div className="flex justify-end mb-4">
              <button onClick={closeModal} className="text-gray-500">
                &times;
              </button>
            </div>
            <FinancialAnalysisUpdate/>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialAnalysis;
