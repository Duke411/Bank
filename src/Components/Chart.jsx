import React from "react";
import { Bar } from "react-chartjs-2";
import { FaCopy } from "react-icons/fa";
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

const Chart = () => {
  // Bar chart data and options
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Balance ($)",
        data: [1200, 1900, 3000, 5000, 2400, 3200],
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section>
      <div className="w-full">
        <h2 className="font-semibold">Account Balance Overview</h2>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default Chart;
