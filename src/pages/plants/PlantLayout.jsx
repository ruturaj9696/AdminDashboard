import React from "react";
import PlantInformation from "../../components/PlantLayout.jsx/PlantInformation";
import ReportsDropdown from "../../components/PlantLayout.jsx/ReportsDropdown";
import FinancialAnalysis from "../../components/PlantLayout.jsx/FinancialAnalysis";
import CleaningCycle from "../../components/PlantLayout.jsx/CleaningCycle";
import BillAnalysis from "../../components/PlantLayout.jsx/BillAnalysis/BillAnalysis";
import PaymentTracking from "../../components/PlantLayout.jsx/PaymentTrack/PaymentTracking";

import { FaArrowLeft } from "react-icons/fa";
const PlantLayout = () => {
  return (
    <div>
      <div className="bg-red-400">
        <span>
          <FaArrowLeft />
          plant layout
        </span>
      </div>
      <div className=" grid grid-cols-3">
        <div className=" m-1 p-1 ">
          <PlantInformation />
        </div>
        <CleaningCycle />
        <FinancialAnalysis />
        <div className=" m-2 p-2 shadow-lg rounded-sm border">
          <ReportsDropdown />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>Graphs</div>

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
