import React, { useState, useEffect } from "react";
import Button from "../Button";

const PaymentCalculator = () => {
  const [januaryAmount, setJanuaryAmount] = useState(0);
  const [februaryAmount, setFebruaryAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const total = parseFloat(januaryAmount) - parseFloat(februaryAmount);
    setTotalAmount(total);
  }, [januaryAmount, februaryAmount]);

  return (
    <div className="w-96">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Payment Calculator</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>Add contract value</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Rs 20,000"
          onChange={(e) => setJanuaryAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>Add payment</span>

        <input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Rs 15,000"
          onChange={(e) => setFebruaryAmount(e.target.value)}
        />
      </div>
      <div className="mb-4 flex ">
        <label className="block text-gray-700 w-64">
          Payment Slot With Description:
        </label>
        <textarea
          value={description}
          placeholder=" Add description here"
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="text-center mt-8 mb-4">
        <h3 className="text-lg font-semibold">Remaining amount</h3>
        <div className="border  m-1 p-1">{`Rs ${totalAmount.toFixed(2)}`}</div>
      </div>
      <div className="flex justify-center">
        <Button text={"Add the slot"} />
      </div>
    </div>
  );
};

export default PaymentCalculator;
