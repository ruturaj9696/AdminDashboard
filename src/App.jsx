import React from "react";
import ClientPlantTable from "./pages/plants/ClientPlantTable";
import Navbar from "../src/components/Navbar";
import CrateClientForm from "./components/plant/CrateClientForm";
import UpdateClientInformation from "./components/plant/UpdateClientInformation";
import CreatePlant from "./components/plant/CreatePlant";
import PlantLayout from "./pages/plants/PlantLayout";
import PlantInformation from "./components/PlantLayout.jsx/PlantInformation";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ClientPlantTable /> 
      {/* <UpdateClientInformation/> */}
      {/* <PlantInformation/> */}
      {/* <CreatePlant/> */}
      <PlantLayout/>
    </div>
  );
};

export default App;
