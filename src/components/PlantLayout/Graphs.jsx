import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartConfigs = {
  daily: {
    powerGeneration: {
      labels: Array.from({ length: 31 }, (_, i) => ` ${i + 1}`),
      datasets: [
        {
          label: "Power Generation",
          data: [
            10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30,
            20, 10, 15, 25, 35, 45, 55, 65, 75, 85, 95, 90, 80, 90,
          ],
          backgroundColor: "#3B3B3B",
        },
      ],
    },
    irradiation: {
      labels: Array.from({ length: 31 }, (_, i) => ` ${i + 1}`),
      datasets: [
        {
          label: "Irradiation",
          data: [
            20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 100, 90, 50, 60, 70, 90,
            50, 60, 70, 90, 100, 80, 90, 100, 50, 100, 90, 80, 70, 60, 50,
          ],
          backgroundColor: "#3B3B3B",
        },
      ],
    },
    epi: {
      labels: Array.from({ length: 31 }, (_, i) => ` ${i + 1}`),
      datasets: [
        {
          label: "EPI",
          data: [
            20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 100, 90, 50, 60, 70, 90,
            50, 60, 70, 90, 100, 80, 90, 100, 50, 100, 90, 80, 70, 60, 50,
          ],
          backgroundColor: "#3B3B3B",
        },
      ],
    },
  },
  monthly: {
    powerGeneration: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Power Generation",
          data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
          backgroundColor: "#4CAF50",
        },
      ],
    },
    irradiation: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Irradiation",
          data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
          backgroundColor: "#FF9800",
        },
      ],
    },
    epi: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "EPI",
          data: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
          backgroundColor: "#2196F3",
        },
      ],
    },
  },
  yearly: {
    powerGeneration: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Power Generation",
          data: [100, 200, 300, 400, 500],
          backgroundColor: "#4CAF50",
        },
      ],
    },
    irradiation: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Irradiation",
          data: [200, 300, 400, 500, 600],
          backgroundColor: "#FF9800",
        },
      ],
    },
    epi: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "EPI",
          data: [300, 400, 500, 600, 700],
          backgroundColor: "#2196F3",
        },
      ],
    },
  },
};

const commonOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50, // Set a fixed step size
      },
      suggestedMax: 200, // Set a maximum value for the y-axis
    },
  },
};

const GraphCard = ({ title, chartData }) => (
  <div className="mb-5 h-48 w-full">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <div className="h-full">
      <Bar data={chartData} options={commonOptions} />
    </div>
  </div>
);

const Graphs = ({ chartData }) => (
  <div className="flex flex-col space-y-5">
    <GraphCard
      title="Power Generation Graph"
      chartData={chartData.powerGeneration}
    />
    <GraphCard title="Irradiation" chartData={chartData.irradiation} />
    <GraphCard title="EPI" chartData={chartData.epi} />
  </div>
);

const Graph = () => {
  const [view, setView] = useState("daily");

  return (
    <div className="p-1">
      <div className="flex justify-center gap-2 mb-5">
        <button
          className="bg-gray-500 text-white m-1 p-2 rounded-lg"
          onClick={() => setView("daily")}
        >
          Daily
        </button>
        <button
          className="bg-gray-500 text-white m-1 p-2 rounded-lg"
          onClick={() => setView("monthly")}
        >
          Monthly
        </button>
        <button
          className="bg-gray-500 text-white m-1 p-2 rounded-lg"
          onClick={() => setView("yearly")}
        >
          Yearly
        </button>
      </div>
      <Graphs chartData={chartConfigs[view]} />
    </div>
  );
};

export default Graph;
