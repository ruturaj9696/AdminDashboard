import React from 'react';

import BillAnalysisCalculator from './components/PlantLayout.jsx/BillAnalysis/BillAnalysisCalculator';
import BillAnalysis from './components/PlantLayout.jsx/BillAnalysis/BillAnalysis';
import PaymentTracking from './components/PlantLayout.jsx/PaymentTrack/PaymentTracking';
import ReportsDropdown from './components/PlantLayout.jsx/ReportsDropdown';

const App = () => {
  return (
    <div>
      {/* <BillAnalysisCalculator/> */}
      <PaymentTracking/>
        <ReportsDropdown />
      <PaymentTracking/>
      <PaymentTracking/>
      <BillAnalysis/>
    </div>
  );
}

export default App;
