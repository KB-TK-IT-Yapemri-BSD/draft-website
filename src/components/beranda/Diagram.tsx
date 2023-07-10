"use client"

import { useEffect, useState } from "react"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { useSession } from "next-auth/react"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Diagram() {
  const { data: session } = useSession()
  const [dataChart, setDataChart] = useState<any[]>()
  const [dataFormsChart, setDataFormsChart] = useState<any[]>()

  const getData = async () => {
    let res = await fetch(`http://localhost:4000/v1/students/dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.user.token.accessToken}`,
      },
    })
    const data = await res.json()
    setDataChart(data)
  }

  const getForms = async () => {
    let res = await fetch(`http://localhost:4000/v1/students/dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.user.token.accessToken}`,
      },
    })
    const data = await res.json()
    setDataFormsChart(data)
  }

  useEffect(() => {
    getData();
    getForms();
  }, [])

  // console.log({ dataChart })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
      // },
    },
  }

  const data = {
    labels: dataChart?.map((item: any) => item.year) ?? [],
    datasets: [
      {
        label: "Perempuan",
        data: dataChart?.map((item: any) => item.girlCount) ?? [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Laki-Laki",
        data: dataChart?.map((item: any) => item.boyCount) ?? [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  
  const dataForms = {
    labels: dataFormsChart?.map((item: any) => item.year) ?? [],
    datasets: [
      {
        label: "Siswa",
        data: dataFormsChart?.map((item: any) => item.count) ?? [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  return (
    <div className="bg-white" suppressHydrationWarning>
      <div className="lg:mx-60">
        <div className="py-4 px-8">
          <h1 className="text-xl text-start">Grafik Jumlah Siswa Yapemri</h1>
        </div>
        <div className="flex flex-row">
          <div className="grid place-items-center max-w-3xl mx-auto px-4 lg:mx-60">
            <Bar options={options} data={dataForms} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid place-items-center max-w-3xl mx-auto px-4">
            <Bar options={options} data={data} />
          </div>
          <div className="grid place-items-center max-w-3xl mx-auto px-4 lg:mx-60">
            <Bar options={options} data={dataForms} />
          </div>
        </div>
      </div>
    </div>
  )
}
