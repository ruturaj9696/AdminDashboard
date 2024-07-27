// PaymentTrack.js
import React, { useState } from "react";
import Button from "../Button";
import PaymentCalculator from "./PaymentCalculator";

const payments = [
  {
    details: "Contract value",
    rs: 20000,
    status: "Pending",
    date: "12/5/2024",
  },
  {
    details: "1st payment",
    rs: 15000,
    status: "Completed",
    date: "16/7/2024",
  },
  {
    details: "2nd payment",
    rs: 3000,
    status: "Completed",
    date: "5/10/2024",
  },
  {
    details: "Total Pending payment",
    rs: 2000,
    status: "Pending",
    date: "12/11/2024",
  },
];

const getStatusClass = (status) => {
  if (status === "Pending") {
    return "text-yellow-700 bg-yellow-100";
  } else if (status === "Completed") {
    return "text-green-700 bg-green-100";
  }
  return "";
};

const PaymentTrack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-4 w-fit">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              Details
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              Rs
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              Status
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center border-gray-200">
                {payment.details}
              </td>
              <td className="py-2 px-4 border-b text-center border-gray-200">
                {payment.rs}
              </td>
              <td className="py-2 px-4 border-b text-center border-gray-200">
                <span
                  className={`inline-block px-2 py-1  text-center rounded-full ${getStatusClass(
                    payment.status
                  )}`}
                >
                  {payment.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-center border-gray-200">
                {payment.date}
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan="4"
              className="py-2 px-4 text-center border-b border-gray-200"
            >
              (Done with all payments)
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Button text={"Calculate payment track"} onClick={openModal} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md max-w-lg mx-auto">
            <div className="flex justify-end mb-4">
              <button onClick={closeModal} className="text-gray-500">
                &times;
              </button>
            </div>
            <PaymentCalculator/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentTrack;
