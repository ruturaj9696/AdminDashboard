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
          backgroundColor: "#56BA28",
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
          backgroundColor: "#56BA28",
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
          backgroundColor: "#56BA28",
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
          backgroundColor: "#56BA28",
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
          backgroundColor: "#56BA28",
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
          backgroundColor: "#56BA28",
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
          backgroundColor: "#56BA28",
        },
      ],
    },
    irradiation: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Irradiation",
          data: [200, 300, 400, 500, 600],
          backgroundColor: "#56BA28",
        },
      ],
    },
    epi: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "EPI",
          data: [300, 400, 500, 600, 700],
          backgroundColor: "#56BA28",
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
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="h-full">
      <Bar data={chartData} options={commonOptions} />
    </div>
  </div>
);

const Graphs = ({ chartData }) => (
  <div className="flex flex-col space-y-5">
    <GraphCard title="Power Generation" chartData={chartData.powerGeneration} />
    <GraphCard title="Irradiation" chartData={chartData.irradiation} />
    <GraphCard title="EPI" chartData={chartData.epi} />
  </div>
);

const Graph = () => {
  const [view, setView] = useState("daily");

  return (
    <div className="p-1 m-4">
      <div className="font-semibold text-lg"> Plant Analytics </div>
      <div className="flex justify-center gap-2 mb-5">
        <button
          className="bg-[#AFDE9A] text-black font-semibold m-1 p-2 rounded-lg"
          onClick={() => setView("daily")}
        >
          Daily
        </button>
        <button
          className="bg-[#AFDE9A] text-black font-semibold m-1 p-2 rounded-lg"
          onClick={() => setView("monthly")}
        >
          Monthly
        </button>
        <button
          className="bg-[#AFDE9A] text-black font-semibold m-1 p-2 rounded-lg"
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
