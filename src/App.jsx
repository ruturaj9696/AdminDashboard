import React from "react";
import ClientPlantTable from "./pages/plants/ClientPlantTable";
import Navbar from "../src/components/Navbar";
import CrateClientForm from "./components/plant/CrateClientForm";
const App = () => {
  return (
    <div>
      <Navbar />
      <ClientPlantTable />
      
    </div>
  );
};

export default App;
