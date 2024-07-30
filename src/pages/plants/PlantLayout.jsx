import React from 'react';
import PlantInformation from "../../components/PlantLayout.jsx/PlantInformation"
import ReportsDropdown from "../../components/PlantLayout.jsx/ReportsDropdown"
import FinancialAnalysis from "../../components/PlantLayout.jsx/FinancialAnalysis"
const PlantLayout = () => {
  return (
    <div>
      <PlantInformation/>
      <ReportsDropdown/>
      <FinancialAnalysis/>
      
    </div>
  );
}

export default PlantLayout;
