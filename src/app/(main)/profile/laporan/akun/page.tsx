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
    if (formValues.type === "role" && value === "parents") {
      return "Orang Tua"
    }

    if (formValues.type === "role" && value === "admin") {
      return "Administrasi"
    }

    if (formValues.type === "role" && value === "teachers") {
      return "Guru"
    }

    if (formValues.type === "role" && value === "principal") {
      return "Kepala Sekolah"
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

export default function AmbilLaporanAkun() {
  const { data: session } = useSession()

  const [params, setParams] = useState({})
  const [formValues, setFormValues] = useState({})
  const [dataChart, setDataChart] = useState([])
  const [chartVisible, setChartVisible] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setParams({ ...params, [name]: value })
    setFormValues({ ...formValues, [name]: value })
  }

  const handleDownload = async (params: { [key: string]: any }) => {
    try {
      let url = `http://localhost:4000/v1/users/download?`
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
      let url = `http://localhost:4000/v1/users/chart-filtered?`
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
              <p className="font-bold text-2xl pt-4">
                Ambil Data Laporan Data Akun
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
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Role{" "}
                  </label>
                  <select
                    id="role"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="role"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="admin" className="text-black">
                      Administrasi
                    </option>
                    <option value="principal" className="text-black">
                      Kepala Sekolah
                    </option>
                    <option value="teachers" className="text-black">
                      Guru
                    </option>
                    <option value="parents" className="text-black">
                      Orang Tua
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="biodataType"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Tipe Biodata{" "}
                  </label>
                  <select
                    id="biodataType"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="biodataType"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="Staff" className="text-black">
                      Staff
                    </option>
                    <option value="Student" className="text-black">
                      Murid
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
                    <option value="role" className="text-black">
                      Role
                    </option>
                    <option value="biodataType" className="text-black">
                      Tipe Biodata
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
