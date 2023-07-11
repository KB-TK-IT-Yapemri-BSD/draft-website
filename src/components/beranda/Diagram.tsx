"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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

export default function Diagram() {
  const [dataChart, setDataChart] = useState<any[]>()
  const [dataFormsChart, setDataFormsChart] = useState<any[]>()

  const getData = async () => {
    let res = await fetch(`http://localhost:4000/v1/students/dashboard`, {
      method: "GET",
    })
    const data = await res.json()
    setDataChart(data)
  }

  const getForms = async () => {
    let res = await fetch(`http://localhost:4000/v1/forms/dashboard`, {
      method: "GET",
    })
    const data = await res.json()
    setDataFormsChart(data)
  }

  useEffect(() => {
    getData()
    getForms()
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
    maintainAspectRatio: false,
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
    type: "line",
    labels: dataFormsChart?.map((item: any) => item.year) ?? [],
    datasets: [
      {
        label: "Jumlah Pendaftar",
        data: dataFormsChart?.map((item: any) => item.count) ?? [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Customize point color
        pointBorderColor: "rgba(255, 255, 255, 1)", // Customize point border color
        pointBorderWidth: 2, // Customize point border width
        pointRadius: 4, // Customize point radius
        fill: false,
      },
    ],
  }

  return (
    <div className="bg-white" suppressHydrationWarning>
      <div className="mx-10 lg:mx-60">
        <div className="flex flex-col py-10">
          <div className="lg:inline-flex py-10 gap-10">
            <div className="my-auto space-y-2 lg:w-1/2 text-center lg:px-10">
              <h1 className="text-xl">
                Grafik Jumlah Murid yang Telah Terdaftar di Yapemri BSD
              </h1>
              <p>
                Berdasarkan grafik berikut, jumlah murid di Yapemri BSD semenjak
                didirikannya Yapemri semakin meningkat, lho.
              </p>
            </div>
            <div className="relative h-[200px] py-6 lg:py-0 lg:w-1/2 lg:h-[400px]">
              {dataChart ? <Bar options={options} data={data} /> : <></>}
            </div>
          </div>

          <hr className="py-6" />

          <div className="flex flex-col-reverse lg:flex-row py-6 gap-10">
            <div className="h-[200px] lg:w-1/2 lg:h-[400px]">
              {dataChart ? <Line options={options} data={dataForms} /> : <></>}
            </div>
            <div className="my-auto space-y-2 lg:w-1/2 text-center lg:px-10">
              <h1 className="text-xl">Grafik Jumlah Peminat di Yapemri BSD</h1>
              <p>
                Tidak hanya jumlah murid yang meningkat, semakin banyak orang
                yang memiliki minat untuk mendaftarkan anaknya di Yapemri
              </p>
            </div>
          </div>

          <div className="flex flex-col py-20 space-y-6">
            <hr className="pb-6" />
            <h1 className="mx-auto text-4xl">Tunggu apalagi?</h1>
            <p className="text-center mx-auto lg:w-1/2">
              Yapemri BSD memiliki fasilitas yang bermacam, program yang
              mengasyikkan, guru yang ramah, dan banyak lagi, lho. Selain itu,
              Yapemri BSD akan mengadakan free trial untuk setiap anak yang
              mendaftar di Yapemri. Jangan sampai kelewatan!
            </p>
            <Link href="/pendaftaran">
              <div className="flex">
                <button className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto py-2.5 px-10 lg:px-0 lg:w-1/4 mx-auto">
                  Yuk, Daftar!
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
