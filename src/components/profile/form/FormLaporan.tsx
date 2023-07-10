import { useState } from "react"
import { useSession } from "next-auth/react"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export default function FormLaporan(props: any) {
  const { data: session } = useSession()

  let [type, setType] = useState("")
  let [start, setStart] = useState("")
  let [end, setEnd] = useState("")

  const handleDownload = async (start: any, end: any, type: any) => {
    try {
      if (start && end && type) {
        let res = await fetch(
          `http://localhost:4000/v1/${type}/download?start=${new Date(
            start
          ).toISOString()}&&end=${new Date(end).toISOString()}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session?.user.token.accessToken}`,
              "Content-Type": "text/csv",
            },
          }
        )

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
      } else if (start && type) {
        let res = await fetch(
          `http://localhost:4000/v1/${type}/download?start=${new Date(
            start
          ).toISOString()}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session?.user.token.accessToken}`,
              "Content-Type": "text/csv",
            },
          }
        )

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
      } else if (end && type) {
        let res = await fetch(
          `http://localhost:4000/v1/${type}/download?end=${new Date(
            end
          ).toISOString()}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session?.user.token.accessToken}`,
              "Content-Type": "text/csv",
            },
          }
        )

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
      } else if (type) {
        let res = await fetch(`http://localhost:4000/v1/${type}/download`, {
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
    handleDownload(start, end, type)
  }

  return (
    <div className="divide-y-2">
      <p className="text-2xl py-4">Ambil Data Laporan</p>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div className="py-2 pt-6">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium read-only"
            >
              Data yang Diambil <span className="text-red-danger">*</span>
            </label>
            <select
              id="type"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              name="type"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option selected disabled hidden></option>
              <option value="students" className="text-black">
                Murid
              </option>
              <option value="parents" className="text-black">
                Orang Tua
              </option>
              <option value="staffs" className="text-black">
                Staff
              </option>
              <option value="forms" className="text-black">
                Form Pendaftar
              </option>
              <option value="payments" className="text-black">
                Pembayaran
              </option>
              <option value="paymentTypes" className="text-black">
                Tipe Pembayaran
              </option>
              <option value="users" className="text-black">
                Akun
              </option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6">
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
                onChange={(e) => setStart(e.target.value)}
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
                onChange={(e) => setEnd(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-6 float-right font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-20 py-2.5 text-center"
          onSubmit={handleSubmit}
        >
          Unduh
        </button>

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
  )
}
