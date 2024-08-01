import React, { useState, useEffect } from "react";
import Button from "../Button";

const BillAnalysisCalculator = () => {
  const [januaryAmount, setJanuaryAmount] = useState(0);
  const [februaryAmount, setFebruaryAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = parseFloat(januaryAmount) + parseFloat(februaryAmount);
    setTotalAmount(total);
  }, [januaryAmount, februaryAmount]);

  return (
    <div className="w-96">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Bill Calculator</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>January</span>
        <span>1-30 January</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Rs 20,000"
          onChange={(e) => setJanuaryAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>February</span>
        <span>1-28 February</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Rs 15,000"
          onChange={(e) => setFebruaryAmount(e.target.value)}
        />
      </div>
      <div className="text-center mt-8 mb-4">
        <h3 className="text-lg font-semibold">Billing Amount</h3>
        <div className="border  m-1 p-1">{`Rs ${totalAmount.toFixed(2)}`}</div>
      </div>
      <div className="flex justify-center">
        <Button text={"Add the slot"} />
      </div>
    </div>
  );
};

export default BillAnalysisCalculator;
