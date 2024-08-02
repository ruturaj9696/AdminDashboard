import React from "react";
import Button from "./Button";

const CleaningCycle = () => {
  const totalCycles = 24;
  const completedCycles = 14;

  const percentage = (completedCycles / totalCycles) * 100;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold">Cleaning cycles</h2>
      <div className="relative flex justify-center items-center my-12">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#56BA28"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-2xl font-semibold">
            {completedCycles}/{totalCycles}
          </span>
          <span className="text-gray-500">Ongoing</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Button text={"Cleaning cycle Details"} />
      </div>
    </div>
  );
};

export default CleaningCycle;
