import React from "react";
import PlantInformation from "../../components/DailyUpdates/PlantInformation";
import SearchPlant from "../../components/DailyUpdates/SearchPlant";
import Calendar from "../../components/DailyUpdates/Calendar";

const Dailyupdate = () => {
  return (
    <div>
      <div className="flex justify-between m-4 gap-8">
      <PlantInformation />
      <SearchPlant />
      </div>
      <Calendar />
    </div>
  );
};

export default Dailyupdate;
