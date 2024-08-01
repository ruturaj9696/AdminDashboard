import React from "react";
import ClientPlantTable from "./pages/plants/ClientPlantTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantLayout from "../src/pages/plants/PlantLayout";
import Navbar from "../src/components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientPlantTable />} />
          <Route path="/plant-layout" element={<PlantLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
