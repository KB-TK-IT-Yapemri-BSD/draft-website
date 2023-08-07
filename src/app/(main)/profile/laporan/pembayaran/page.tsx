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
import { useSession } from "next-auth/react"
import { Bar } from "react-chartjs-2"
import { toast, ToastContainer } from "react-toastify"

import { BigArrowLeft } from "@/components/shared/Icons"

import "react-toastify/dist/ReactToastify.css"

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

const handleGenerateChart = (dataChart: any, formValues: any) => {
  const options = {
    responsive: true,

    maintainAspectRatio: false,
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  }

  const transformLabel = (value: any) => {
    if (formValues.type === "status" && value === true) {
      return "Lunas"
    }

    if (formValues.type === "status" && value === false) {
      return "Belum Lunas"
    }

    if (formValues.type === "isOverdue" && value === true) {
      return "Pembayaran Terlambat"
    }

    if (formValues.type === "isOverdue" && value === "false") {
      return "Pembayaran Tepat Waktu"
    }

    if (formValues.type === "isOverdue" && value === "") {
      return "Belum Terbayar"
    }

    if (formValues.type === "modified" && value === true) {
      return "Telah Diubah"
    }

    if (formValues.type === "modified" && value === false) {
      return "Belum Diubah"
    }

    return value
  }

  const data = {
    type: "bar",
    labels: dataChart?.map((item: any) => transformLabel(item.value)) ?? [],
    datasets: [
      {
        label: "Jumlah",
        data: dataChart?.map((item: any) => item.count) ?? [],
        backgroundColor: "rgba(53, 162, 235, 0.5)", // Wrap item.count in an array
      },
    ],
  }

  return (
    <div className="h-[400px] py-10">
      <Bar options={options} data={data} />
    </div>
  )
}

export default function AmbilLaporanPembayaran() {
  const { data: session } = useSession()

  const [dataStudents, setDataStudents] = useState([])
  const [dataPaymentTypes, setDataPaymentTypes] = useState([])
  const [params, setParams] = useState({})
  const [formValues, setFormValues] = useState({})
  const [dataChart, setDataChart] = useState([])
  const [chartVisible, setChartVisible] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setParams({ ...params, [name]: value })
    setFormValues({ ...formValues, [name]: value })
  }

  const getDataStudents = async () => {
    try {
      let res = await fetch(`http://localhost:4000/v1/students`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
        },
      })

      const data = await res.json()
      setDataStudents(data)
    } catch (error) {
      throw error
    }
  }

  const getDataPaymentTypes = async () => {
    try {
      let res = await fetch(`http://localhost:4000/v1/paymentTypes`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
        },
      })

      const data = await res.json()
      setDataPaymentTypes(data)
    } catch (error) {
      throw error
    }
  }

  const handleDownload = async (params: { [key: string]: any }) => {
    try {
      let url = `http://localhost:4000/v1/payments/download?`
      let queryParams = []

      for (const key in params) {
        if (params.hasOwnProperty(key) && params[key]) {
          queryParams.push(`${key}=${params[key]}`)
        }
      }

      const finalUrl = url + queryParams.join("&&")

      let res = await fetch(finalUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
          "Content-Type": "text/csv",
        },
      })

      if (res.status === 200) {
        toast.success("Laporan berhasil diunduh", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })

        const link = document.createElement("a")
        link.href = res.url
        link.click()
        link.remove()
      } else if (res.status === 400) {
        toast.error("Tidak ada data tersedia", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    } catch (error) {
      toast.error("Sistem sedang bermasalah", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  const resetChart = () => {
    setDataChart([])
    setChartVisible(false)
  }

  const handleChart = async (formValues: { [key: string]: any }) => {
    try {
      let url = `http://localhost:4000/v1/payments/chart-filtered?`
      let queryParams = []

      for (const key in formValues) {
        if (formValues.hasOwnProperty(key) && formValues[key]) {
          queryParams.push(`${key}=${formValues[key]}`)
        }
      }

      const finalUrl = url + queryParams.join("&&")

      let res = await fetch(finalUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
        },
      })

      const data = await res.json()

      if (res.status === 200) {
        setDataChart(data)
        setChartVisible(true)
      } else if (res.status === 400) {
        toast.error("Tidak ada data tersedia", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    } catch (error) {
      toast.error("Sistem sedang bermasalah", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleDownload(params)
  }

  const handleSubmit2 = (e: any) => {
    e.preventDefault()
    handleChart(formValues)
    setChartVisible(true)
  }

  useEffect(() => {
    if (!chartVisible) {
      setChartVisible(false)
    }
  }, [dataChart])

  useEffect(() => {
    resetChart()
  }, [formValues])

  useEffect(() => {
    getDataStudents()
    getDataPaymentTypes()
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-10 py-20 lg:mx-60 space-y-6">
        <Link
          href="/profile/laporan"
          className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
        >
          <BigArrowLeft />
          <p className="ml-4 text-lg">Kembali</p>
        </Link>

        <div className="card outline outline-grey outline-[1px] p-8">
          <div className="w-full">
            <div className="divide-y-2">
              {" "}
              <p className="font-bold text-2xl pt-4">
                Ambil Data Laporan Pembayaran
              </p>
              <form method="GET" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <div className="flex flex-col lg:flex-row lg:space-x-6 pt-6 pb-2">
                    <div className="py-2 w-full">
                      <label
                        htmlFor="start"
                        className="block mb-2 text-sm font-medium read-only"
                      >
                        Dari
                      </label>
                      <input
                        type="date"
                        id="start"
                        name="start"
                        aria-label="start"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="py-2 w-full">
                      <label
                        htmlFor="end"
                        className="block mb-2 text-sm font-medium read-only"
                      >
                        Sampai Dengan
                      </label>
                      <input
                        type="date"
                        id="end"
                        name="end"
                        aria-label="end"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="user_id"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nama Murid
                  </label>
                  <select
                    id="user_id"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="user_id"
                    onChange={handleChange}
                  >
                    <option
                      defaultValue={undefined}
                      selected
                      disabled
                      className="hidden"
                    ></option>
                    {dataStudents.map((user) => (
                      <option
                        key={user["id"]}
                        value={user["id"]}
                        className="text-black"
                      >
                        {user["firstName"] + " " + user["lastName"]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="type_id"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nama Tipe Pembayaran
                  </label>
                  <select
                    id="type_id"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="type_id"
                    onChange={handleChange}
                  >
                    <option
                      defaultValue={undefined}
                      selected
                      disabled
                      className="hidden"
                    ></option>
                    {dataPaymentTypes.map((paymentType) => (
                      <option
                        key={paymentType["id"]}
                        value={paymentType["id"]}
                        className="text-black"
                      >
                        {paymentType["type"]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="status"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Status Pembayaran{" "}
                  </label>
                  <select
                    id="status"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="status"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="true" className="text-black">
                      Lunas
                    </option>
                    <option value="false" className="text-black">
                      Belum Lunas
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="isOverdue"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Keterangan Pembayaran{" "}
                  </label>
                  <select
                    id="isOverdue"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="isOverdue"
                    onChange={handleChange}
                  >
                    <option selected></option>
                    <option value="" className="text-black">
                      Belum Terbayar
                    </option>
                    <option value="true" className="text-black">
                      Pembayaran Terlambat
                    </option>
                    <option value="false" className="text-black">
                      Pembayaran Tepat Waktu
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="modified"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Keterangan Telah Diubah{" "}
                  </label>
                  <select
                    id="modified"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="modified"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="true" className="text-black">
                      Sudah Diubah
                    </option>
                    <option value="false" className="text-black">
                      Belum Diubah
                    </option>
                  </select>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-medium rounded-lg text-sm w-full lg:w-auto px-10 lg:px-40 py-2.5 text-center"
                  >
                    Unduh
                  </button>
                </div>

                <ToastContainer
                  style={{ width: "500px" }}
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </form>
            </div>
            <div className="divide-y-2">
              <p className="font-bold text-2xl pt-4">Tampilkan Grafik</p>
              <form method="GET" onSubmit={handleSubmit2}>
                <div className="space-y-2">
                  <div className="flex flex-col lg:flex-row lg:space-x-6 pt-6 pb-2">
                    <div className="py-2 w-full">
                      <label
                        htmlFor="start"
                        className="block mb-2 text-sm font-medium read-only"
                      >
                        Dari
                      </label>
                      <input
                        type="date"
                        id="start"
                        name="start"
                        aria-label="start"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="py-2 w-full">
                      <label
                        htmlFor="end"
                        className="block mb-2 text-sm font-medium read-only"
                      >
                        Sampai Dengan
                      </label>
                      <input
                        type="date"
                        id="end"
                        name="end"
                        aria-label="end"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Field
                  </label>
                  <select
                    id="type"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="type"
                    onChange={handleChange}
                  >
                    <option value="status" className="text-black">
                      Status Pembayaran
                    </option>
                    <option value="isOverdue" className="text-black">
                      Keterangan Pembayaran
                    </option>
                    <option value="modified" className="text-black">
                      Keterangan Telah Diubah
                    </option>
                  </select>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-medium rounded-lg text-sm w-full lg:w-auto px-10 lg:px-40 py-2.5 text-center"
                  >
                    Tampilkan
                  </button>
                </div>
              </form>
            </div>
            {chartVisible && handleGenerateChart(dataChart, formValues)}
          </div>
        </div>
      </div>
    </div>
  )
}
