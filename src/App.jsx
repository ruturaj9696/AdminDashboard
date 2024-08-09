import React from "react";
import ClientPlantTable from "./pages/plants/ClientPlantTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantLayout from "../src/pages/plants/PlantLayout";
import Navbar from "../src/components/Navbar";
import PlantInformation from "./components/DailyUpdates/PlantInformation";
import SearchPlant from "./components/DailyUpdates/SearchPlant";
import Dailyupdate from "./pages/dailyupdates/Dailyupdate";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/plant" element={<ClientPlantTable />} />
          <Route path="/plant-layout" element={<PlantLayout />} />
          <Route path="/daily-updates" element={<Dailyupdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
