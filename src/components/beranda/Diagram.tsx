"use client"

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Diagram() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      //   title: {
      //     display: true,
      //     text: "Chart.js Bar Chart",
      //   },
    },
  }

  const labels = ["2018", "2019", "2020", "2021", "2022"]

  const data = {
    labels,
    datasets: [
      {
        label: "Perempuan",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Laki-Laki",
        data: [5, 4, 3, 2, 1],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  return (
    <div className="bg-white flex items-center flex-col">
      <div className="py-4">
        <h1 className="text-3xl">title</h1>
      </div>
      <div className="max-w-3xl">
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
