import { useEffect, useState } from "react"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Bar, Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

interface Props {
  dataChart: any[]
}

export default function ChartComponent({ dataChart }: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    maintainAspectRatio: false,
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  }

  const data = {
    type: "bar",
    datasets:
      dataChart?.map((item: any) => ({
        label: item.value.toString(),
        data: item.count,
      })) ?? [],
  }

  return <>{dataChart ? <Bar options={options} data={data} /> : <></>}</>
}
