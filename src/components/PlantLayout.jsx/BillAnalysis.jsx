import React from "react";
import Button from "./Button";

const BillAnalysis = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-sm  overflow-hidden mt-10">
      <div className="p-4 text-left ml-10">
        <h2 className="text-lg font-semibold">Bill analysis</h2>
        <p>June 30 - July 30 </p>
        <p>Expected bill : 45645</p>
      </div>

      <div className=" flex justify-center">
        <table className="">
          <tbody>
            <tr className="bg-[#AFDE9A] mt-2" >
              <th className="border p-2 text-center">Details</th>
              <th className="border p-2 text-center font-medium">Values</th>
            </tr>
            <tr>
              <td className="border p-2 text-center font-semibold text-[#333333]">User Name</td>
              <td className="border p-2 text-center">Mr Ruturaj Deshmukh</td>
            </tr>
            <tr>
              <td className="border p-2 text-center font-semibold text-[#333333]">Initial investment</td>
              <td className="border p-2 text-center">2500000</td>
            </tr>
            <tr>
              <td className="border p-2 text-center font-semibold text-[#333333]">Maintenance cost</td>
              <td className="border p-2 text-center">15000</td>
            </tr>
            <tr>
              <td className="border p-2 text-center font-semibold text-[#333333]">Total unit generation till date</td>
              <td className="border p-2 text-center">3434</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Button text={"Calculate bill analysis"} />
      </div>
    </div>
  );
};

export default BillAnalysis;
