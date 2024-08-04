import React from "react";
import PlantInformation from "../../components/PlantLayout/PlantInformation";
import ReportsDropdown from "../../components/PlantLayout/ReportsDropdown";
import FinancialAnalysis from "../../components/PlantLayout/FinancialAnalysis/FinancialAnalysis";
import CleaningCycle from "../../components/PlantLayout/CleaningCycle";
import BillAnalysis from "../../components/PlantLayout/BillAnalysis/BillAnalysis";
import PaymentTracking from "../../components/PlantLayout/PaymentTrack/PaymentTracking";
import Graph from "../../components/PlantLayout/Graphs";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PlantLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <span>
          <button
            className="flex gap-0.5 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="mt-3 m-2 text-[#263238]">
              <FaArrowLeft />
            </span>
            <div className="mt-1 font-semibold text-2xl text-[#263238]">
              Plant layout
            </div>
          </button>
        </span>
        <span className="m-2 text-[#607D8B]">View all plant details here.</span>
      </div>
      <div className="flex justify-around h-full">
        <div className="flex-1 m-1 p-1 bg-white flex flex-col">
          <div className="flex-grow">
            <PlantInformation />
          </div>
          <div className="m-2 mb-0 p-4 mx-0 shadow-md rounded-sm border flex-grow-0">
            <ReportsDropdown />
          </div>
        </div>
        <div className="flex-1 m-2 bg-white flex flex-col">
          <div className=" flex flex-grow justify-center border rounded-md">
            <CleaningCycle />
          </div>
        </div>
        <div className="flex-1 m-2 bg-white flex flex-col">
          <div className=" flex flex-grow justify-center border rounded-md">
            <FinancialAnalysis />
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="mx-2 border rounded-md shadow-md w-2/3">
          <Graph />
        </div>

        <div className="w-1/3 rounded-md mr-2 ml-1">
          <div className="mb-2">
            <BillAnalysis />
          </div>
          <div className="">
            <PaymentTracking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantLayout;
