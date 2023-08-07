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
    if (value === "MB") {
      return "BB (Belum Berkembang)"
    }

    if (value === "MB") {
      return "MB (Mulai Berkembang)"
    }

    if (value === "BSH") {
      return "BSH (Berkembang Sesuai Harapan)"
    }

    if (value === "BSB") {
      return "BSB (Berkembang Sangat Baik)"
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

export default function AmbilLaporanPenilaian() {
  const { data: session } = useSession()

  const [dataStudents, setDataStudents] = useState([])
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

  const handleDownload = async (params: { [key: string]: any }) => {
    try {
      let url = `http://localhost:4000/v1/evaluations/download?`
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
      let url = `http://localhost:4000/v1/evaluations/chart-filtered?`
      let queryParams = []

      for (const key in formValues) {
        if (formValues.hasOwnProperty(key) && formValues[key]) {
          queryParams.push(`${key}=${formValues[key]}`)
        }
      }

      const finalUrl = url + queryParams.join("&&")

      console.log(formValues)

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
              <p className="font-bold text-2xl pt-4">
                Ambil Data Laporan Penilaian
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
                    htmlFor="student_id"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nama Murid
                  </label>
                  <select
                    id="student_id"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="student_id"
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
                    <option value="TK A" className="text-black">
                      TK A
                    </option>
                    <option value="TK B" className="text-black">
                      TK B
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="period"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Periode
                  </label>
                  <select
                    id="period"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="period"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="Semester I" className="text-black">
                      Semester I
                    </option>
                    <option value="Semester II" className="text-black">
                      Semester II
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="score_aspect_1"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nilai Moral Agama
                  </label>
                  <select
                    id="score_aspect_1"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="score_aspect_1"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="BB" className="text-black">
                      BB (Belum Berkembang)
                    </option>
                    <option value="MB" className="text-black">
                      MB (Mulai Berkembang)
                    </option>
                    <option value="BSH" className="text-black">
                      BSH (Berkembang Sesuai Harapan)
                    </option>
                    <option value="BSB" className="text-black">
                      BSB (Berkembang Sangat Baik)
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="score_aspect_2"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nilai Sosial Emosional
                  </label>
                  <select
                    id="score_aspect_2"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="score_aspect_2"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="BB" className="text-black">
                      BB (Belum Berkembang)
                    </option>
                    <option value="MB" className="text-black">
                      MB (Mulai Berkembang)
                    </option>
                    <option value="BSH" className="text-black">
                      BSH (Berkembang Sesuai Harapan)
                    </option>
                    <option value="BSB" className="text-black">
                      BSB (Berkembang Sangat Baik)
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="score_aspect_3"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nilai Bahasa
                  </label>
                  <select
                    id="score_aspect_3"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="score_aspect_3"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="BB" className="text-black">
                      BB (Belum Berkembang)
                    </option>
                    <option value="MB" className="text-black">
                      MB (Mulai Berkembang)
                    </option>
                    <option value="BSH" className="text-black">
                      BSH (Berkembang Sesuai Harapan)
                    </option>
                    <option value="BSB" className="text-black">
                      BSB (Berkembang Sangat Baik)
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="score_aspect_4"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nilai Kognitif
                  </label>
                  <select
                    id="score_aspect_4"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="score_aspect_4"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="BB" className="text-black">
                      BB (Belum Berkembang)
                    </option>
                    <option value="MB" className="text-black">
                      MB (Mulai Berkembang)
                    </option>
                    <option value="BSH" className="text-black">
                      BSH (Berkembang Sesuai Harapan)
                    </option>
                    <option value="BSB" className="text-black">
                      BSB (Berkembang Sangat Baik)
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="score_aspect_5"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nilai Fisik Motorik
                  </label>
                  <select
                    id="score_aspect_5"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="score_aspect_5"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="BB" className="text-black">
                      BB (Belum Berkembang)
                    </option>
                    <option value="MB" className="text-black">
                      MB (Mulai Berkembang)
                    </option>
                    <option value="BSH" className="text-black">
                      BSH (Berkembang Sesuai Harapan)
                    </option>
                    <option value="BSB" className="text-black">
                      BSB (Berkembang Sangat Baik)
                    </option>
                  </select>
                </div>

                <div className="py-2">
                  <label
                    htmlFor="score_aspect_6"
                    className="block mb-2 text-sm font-medium read-only"
                  >
                    Nilai Seni
                  </label>
                  <select
                    id="score_aspect_6"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    name="score_aspect_6"
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="BB" className="text-black">
                      BB (Belum Berkembang)
                    </option>
                    <option value="MB" className="text-black">
                      MB (Mulai Berkembang)
                    </option>
                    <option value="BSH" className="text-black">
                      BSH (Berkembang Sesuai Harapan)
                    </option>
                    <option value="BSB" className="text-black">
                      BSB (Berkembang Sangat Baik)
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
                    <option value="period" className="text-black">
                      Periode
                    </option>
                    <option value="score_aspect_1" className="text-black">
                      Nilai Moral Agama
                    </option>
                    <option value="score_aspect_2" className="text-black">
                      Nilai Sosial Emosional
                    </option>
                    <option value="score_aspect_3" className="text-black">
                      Nilai Bahasa
                    </option>
                    <option value="score_aspect_4" className="text-black">
                      Nilai Kognitif
                    </option>
                    <option value="score_aspect_5" className="text-black">
                      Nilai Fisik Motorik
                    </option>
                    <option value="score_aspect_6" className="text-black">
                      Nilai Seni
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
