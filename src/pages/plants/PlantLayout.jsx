import React from "react";
import PlantInformation from "../../components/PlantLayout/PlantInformation";
import ReportsDropdown from "../../components/PlantLayout/ReportsDropdown";
import FinancialAnalysis from "../../components/PlantLayout/FinancialAnalysis";
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
      <div className=" grid grid-cols-3">
        <div className=" m-1 p-1 ">
          <PlantInformation />
          <div className=" m-2  p-4 mx-0 shadow-md rounded-sm border">
            <ReportsDropdown />
          </div>
        </div>
        <div className=" my-2">
          <CleaningCycle />
        </div>
        <FinancialAnalysis />
      </div>

      <div className="grid grid-cols-2">
        <div className="m-2 border shadow-md">
          <Graph />
        </div>

        <div>
          <div className="m-2">
            <BillAnalysis />
          </div>
          <div className="m-2">
            <PaymentTracking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantLayout;
