import React from "react";
import PlantInformation from "../../components/DailyUpdates/PlantInformation";
import SearchPlant from "../../components/DailyUpdates/SearchPlant";
import Calendar from "../../components/DailyUpdates/Calendar";

const Dailyupdate = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
        <PlantInformation />
        <SearchPlant />
      </div>
      <div className="mt-4">
        <Calendar />
      </div>
    </div>
  );
};

export default Dailyupdate;
