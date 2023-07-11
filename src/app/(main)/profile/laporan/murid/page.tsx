"use client"

import { useState } from "react"
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
import { Bar, Line } from "react-chartjs-2"
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

export default function AmbilLaporanMurid() {
  const { data: session } = useSession()

  const [params, setParams] = useState({})
  const [formValues, setFormValues] = useState({})
  const [dataChart, setDataChart] = useState([])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setParams({ ...params, [name]: value })
    setFormValues({ ...formValues, [name]: value })
  }

  const handleDownload = async (params: { [key: string]: any }) => {
    try {
      let url = `http://localhost:4000/v1/students/download?`
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

  const handleChart = async (formValues: { [key: string]: any }) => {
    try {
      let url = `http://localhost:4000/v1/students/chart-filtered?`
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
        // handleGenerateChart(dataChart)
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

  /**

  const handleGenerateChart = (dataChart: any) => {
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
          label: item.value,
          data: item.count,
        })) ?? [],
    }

    return <Bar options={options} data={data} />
  }
   */

  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleDownload(params)
  }

  const handleSubmit2 = (e: any) => {
    e.preventDefault()
    handleChart(formValues)
  }

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
          <div className="w-full divide-y-2">
            <p className="font-bold text-2xl pt-4">Ambil Data Laporan Murid</p>

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
                  htmlFor="grade"
                  className="block mb-2 text-sm font-medium read-only"
                >
                  Kelompok Usia{" "}
                </label>
                <select
                  id="grade"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  name="grade"
                  onChange={handleChange}
                >
                  <option selected value=""></option>
                  <option value="KB" className="text-black">
                    KB
                  </option>
                  <option value="TK-A" className="text-black">
                    TK-A
                  </option>
                  <option value="TK-B" className="text-black">
                    TK-B
                  </option>
                </select>
              </div>

              <div className="py-2">
                <label
                  htmlFor="studentStatus"
                  className="block mb-2 text-sm font-medium read-only"
                >
                  Status Murid{" "}
                </label>
                <select
                  id="studentStatus"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  name="studentStatus"
                  onChange={handleChange}
                >
                  <option selected value=""></option>
                  <option value="true" className="text-black">
                    Aktif
                  </option>
                  <option value="false" className="text-black">
                    Tidak Aktif
                  </option>
                </select>
              </div>

              <div className="py-2">
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium read-only"
                >
                  Jenis Kelamin{" "}
                </label>
                <select
                  id="gender"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  name="gender"
                  onChange={handleChange}
                >
                  <option selected value=""></option>
                  <option value="true" className="text-black">
                    Perempuan
                  </option>
                  <option value="false" className="text-black">
                    Laki-Laki
                  </option>
                </select>
              </div>

              <div className="py-2">
                <label
                  htmlFor="citizenship"
                  className="block mb-2 text-sm font-medium read-only"
                >
                  Kewarganegaraan{" "}
                </label>
                <select
                  id="citizenship"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  name="citizenship"
                  onChange={handleChange}
                >
                  <option selected value=""></option>
                  <option value="WNI" className="text-black">
                    WNI
                  </option>
                  <option value="WNA" className="text-black">
                    WNA
                  </option>
                </select>
              </div>

              {/**

							<div className="py-2">
								<label
									htmlFor="grade"
									className="block mb-2 text-sm font-medium read-only"
								>
									Tanggal Lahir{' '}
								</label>
								<select
									id="grade"
									className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
									name="grade"
									onChange={(e) => setType(e.target.value)}
								>
									<option selected disabled hidden></option>
									<option value="KB" className="text-black">
										KB
									</option>
									<option value="TK-A" className="text-black">
										TK-A
									</option>
									<option value="TK-B" className="text-black">
										TK-B
									</option>
								</select>
							</div>

							<div className="py-2">
								<label
									htmlFor="grade"
									className="block mb-2 text-sm font-medium read-only"
								>
									Jenis Kelamin{' '}
								</label>
								<select
									id="grade"
									className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
									name="grade"
									onChange={(e) => setType(e.target.value)}
								>
									<option selected disabled hidden></option>
									<option value="KB" className="text-black">
										KB
									</option>
									<option value="TK-A" className="text-black">
										TK-A
									</option>
									<option value="TK-B" className="text-black">
										TK-B
									</option>
								</select>
							</div>

							<div className="py-2">
								<label
									htmlFor="grade"
									className="block mb-2 text-sm font-medium read-only"
								>
									Agama
								</label>
								<select
									id="grade"
									className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
									name="grade"
									onChange={(e) => setType(e.target.value)}
								>
									<option selected disabled hidden></option>
									<option value="KB" className="text-black">
										KB
									</option>
									<option value="TK-A" className="text-black">
										TK-A
									</option>
									<option value="TK-B" className="text-black">
										TK-B
									</option>
								</select>
							</div>

							<div className="py-2">
								<label
									htmlFor="grade"
									className="block mb-2 text-sm font-medium read-only"
								>
									Kewarganegaraan
								</label>
								<select
									id="grade"
									className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
									name="grade"
									onChange={(e) => setType(e.target.value)}
								>
									<option selected disabled hidden></option>
									<option value="KB" className="text-black">
										KB
									</option>
									<option value="TK-A" className="text-black">
										TK-A
									</option>
									<option value="TK-B" className="text-black">
										TK-B
									</option>
								</select>
							</div>

							 */}

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-medium rounded-lg text-sm w-full lg:w-auto px-10 lg:px-40 py-2.5 text-center"
                >
                  Unduh
                </button>
              </div>
            </form>

            {/**
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
                  <option selected value=""></option>
                  <option value="grade" className="text-black">
                    Kelompok Usia
                  </option>
                  <option value="studentStatus" className="text-black">
                    Status Murid
                  </option>
                  <option value="gender" className="text-black">
                    Jenis Kelamin
                  </option>
                  <option value="citizenship" className="text-black">
                    Kewarganegaraan
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
			 */}
          </div>
        </div>
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
    </div>
  )
}
