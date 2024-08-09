import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SimpleCalendar = () => {
  const [generatedValues, setGeneratedValues] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupDate, setPopupDate] = useState(null);
  const [morningValue, setMorningValue] = useState("");
  const [eveningValue, setEveningValue] = useState("");

  const handleDateClick = (date) => {
    const dateString = date.toDateString();
    const generationValue = generatedValues[dateString] || {};
    setPopupDate(dateString);
    setMorningValue(generationValue.morning || "");
    setEveningValue(generationValue.evening || "");
    setPopupOpen(true);
  };

  const handlePopupSave = () => {
    if (popupDate) {
      setGeneratedValues({
        ...generatedValues,
        [popupDate]: {
          morning: morningValue.trim(),
          evening: eveningValue.trim(),
        },
      });
    }
    setPopupOpen(false);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
    setPopupDate(null);
    setMorningValue("");
    setEveningValue("");
  };

  const tileContent = ({ date }) => {
    const generationValue = generatedValues[date.toDateString()];
    if (generationValue && (generationValue.morning || generationValue.evening)) {
      return (
        <div className="bg-green-500 p-1 rounded text-xs">
          <div>{generationValue.morning ? `AM: ${generationValue.morning}` : ""}</div>
          <div>{generationValue.evening ? `PM: ${generationValue.evening}` : ""}</div>
          <div>{generationValue.evening ? `EPI: ${generationValue.evening}` : ""}</div>
          <div>{generationValue.evening ? `EPI: ${generationValue.evening}` : ""}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex justify-center my-10 w-full">
      <div className="w-full max-w-full mx-1 border-none">
        <Calendar
          onClickDay={handleDateClick}
          tileContent={tileContent}
          className="react-calendar w-full h-auto text-lg p-4 bg-white shadow-lg rounded-md "
        />

        {popupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-80">
              <h2 className="text-lg mb-4 font-semibold text-center">{popupDate}</h2>
              <input
                type="text"
                value={morningValue}
                onChange={(e) => setMorningValue(e.target.value)}
                placeholder="Enter generation at 11:30 AM"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              />
              <input
                type="text"
                value={morningValue}
                onChange={(e) => setMorningValue(e.target.value)}
                placeholder="Enter generation at 11:30 AM"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              />
              <input
                type="text"
                value={morningValue}
                onChange={(e) => setMorningValue(e.target.value)}
                placeholder="Enter generation at 11:30 AM"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              />
              <input
                type="text"
                value={eveningValue}
                onChange={(e) => setEveningValue(e.target.value)}
                placeholder="Enter generation at 5:30 PM"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              />
              <div className="flex justify-end">
                <button
                  onClick={handlePopupSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handlePopupClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCalendar;
