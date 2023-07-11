"use client"

import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dialog, Transition } from "@headlessui/react"
import { useSession } from "next-auth/react"
import { toast, ToastContainer } from "react-toastify"

import Pagination from "@/components/layout/pagination"
import {
  DocumentPlusSymbol,
  ExclamationCircleSymbol,
  EyeSymbol,
  PencilSymbol,
  TrashCanSymbol,
} from "@/components/shared/Icons"

import "react-toastify/dist/ReactToastify.css"

export default function TabelDataFinansialMurid() {
  const { data: session } = useSession()
  const router = useRouter()

  const [payments, setPayments] = useState([])
  const [dataStudents, setDataStudents] = useState([])
  const [changes, setChanges] = useState(false)
  const [formValues, setFormValues] = useState({ user_id: "" })

  const [currentPage, setCurrentPage] = useState(1)
  let [totalPages, setTotalPages] = useState(0)

  let [isOpen, setIsOpen] = useState(false)
  let [currentId, setCurrentId] = useState()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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

  const getDataPayments = async () => {
    try {
      setChanges(false)

      let res = await fetch(`http://localhost:4000/v1/payments`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
        },
      })

      let data = await res.json()
      const totalCount = data.length
      const perPage = 30
      totalPages = Math.ceil(totalCount / perPage)

      setTotalPages(totalPages)

      if (totalCount > 1) {
        let res = await fetch(
          `http://localhost:4000/v1/payments?page=${currentPage}&perPage=${perPage}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session?.user.token.accessToken}`,
            },
          }
        )

        data = await res.json()
        setPayments(data)
      } else {
        setPayments(data)
      }
    } catch (error) {
      throw error
    }
  }

  const getPaymentsSpecific = async (id: any) => {
    try {
      setChanges(false)

      let res = await fetch(
        `http://localhost:4000/v1/payments/filter?user_id=${id.user_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.user.token.accessToken}`,
          },
        }
      )

      let data = await res.json()
      const totalCount = data.length
      const perPage = 30
      totalPages = Math.ceil(totalCount / perPage)

      setTotalPages(totalPages)

      if (totalCount < 1) {
        let res = await fetch(
          `http://localhost:4000/v1/payments/filter?user_id=${id.user_id}&page=${currentPage}&perPage=${perPage}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session?.user.token.accessToken}`,
            },
          }
        )

        data = await res.json()
        setPayments(data)
      } else {
        setPayments(data)
      }
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleDeletePayments = async (id: any) => {
    try {
      await fetch(`http://localhost:4000/v1/payments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
        },
      })

      setChanges(true)
      closeModal()
      toast.success("Data finansial berhasil dihapus", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } catch (error) {
      toast.error("Data finansial gagal dihapus, silahkan coba lagi!", {
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

  const handlePageChange = (page: any) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    getDataStudents()

    if (formValues.user_id === "") {
      getDataPayments()
    } else if (formValues.user_id != "") {
      getPaymentsSpecific(formValues)
    }
  }, [changes === true, formValues, currentPage])

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div className="py-4 flex gap-2 lg:gap-0 lg:w-1/2 lg:justify-start lg:space-x-3">
          <label
            htmlFor="user_id"
            className="text-sm font-medium read-only w-1/2 lg:w-auto h-auto my-auto"
          >
            Nama Murid
          </label>
          <select
            id="user_id"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-1/2 h-auto my-auto px-1 py-2"
            name="user_id"
            onChange={handleChange}
          >
            <option onSelect={() => getDataPayments()} value={""}>
              Keseluruhan
            </option>
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
        {session?.user.user.role === "admin" ? (
          <div className="text-right">
            <button className="bg-blue-primary text-white hover:bg-blue-700 rounded-md px-4 py-2 my-6 inline-flex justify-center w-full lg:w-auto">
              <DocumentPlusSymbol />
              <Link href="/profile/keuangan/data-finansial/add">
                <p className="ml-2 text-sm">Tambah DATA FINANSIAL</p>
              </Link>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="overflow-x-auto outline outline-grey outline-[1px]">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Murid
              </th>
              <th scope="col" className="px-6 py-3">
                Tipe Pembayaran
              </th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Telah Diubah Orang Tua
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.length >= 1 ? (
              payments.map((payment) => (
                <tr
                  key={payment["id"]}
                  className="bg-white border-b  hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {payment["user_id"]
                      ? payment["user_id"]["firstName"] +
                        " " +
                        payment["user_id"]["lastName"]
                      : "NO DATA"}
                  </th>
                  <td className="px-6 py-4">
                    {payment["type_id"]
                      ? payment["type_id"]["type"]
                      : "NO DATA"}
                  </td>
                  <td className="px-6 py-4">
                    {payment["type_id"]
                      ? new Date(payment["type_id"]["deadline"])
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")
                      : "NO DATA"}
                  </td>
                  <td className="px-6 py-4">
                    {payment["status"] ? "Lunas" : "Belum Lunas"}
                  </td>
                  <td className="px-6 py-4">
                    {payment["modified"] ? "Sudah Diubah" : "Belum Diubah"}
                  </td>
                  <td className="flex items-center px-6 py-4 space-x-2">
                    <button
                      className="bg-primary rounded-md p-2 my-4 inline-flex lg:my-0"
                      onClick={() =>
                        router.push(
                          `/profile/keuangan/data-finansial/${payment["id"]}`
                        )
                      }
                    >
                      <EyeSymbol />
                    </button>
                    {session?.user.user.role === "admin" ? (
                      <>
                        <button
                          className="bg-blue-primary rounded-md p-2 my-4 inline-flex lg:my-0"
                          onClick={() =>
                            router.push(
                              `/profile/keuangan/data-finansial/update/${payment["id"]}`
                            )
                          }
                        >
                          <PencilSymbol />
                        </button>
                        {payment["id"] ? (
                          <>
                            <button
                              className="bg-red-danger rounded-md p-2 my-4 inline-flex lg:my-0"
                              onClick={() => {
                                setCurrentId(payment["id"])
                                openModal()
                              }}
                            >
                              <TrashCanSymbol />
                            </button>
                            <Transition appear show={isOpen} as={Fragment}>
                              <Dialog
                                as="div"
                                className="relative z-30"
                                onClose={closeModal}
                              >
                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-300"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="ease-in duration-200"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="fixed inset-0 bg-black bg-opacity-10" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                      as={Fragment}
                                      enter="ease-out duration-300"
                                      enterFrom="opacity-0 scale-95"
                                      enterTo="opacity-100 scale-100"
                                      leave="ease-in duration-200"
                                      leaveFrom="opacity-100 scale-100"
                                      leaveTo="opacity-0 scale-95"
                                    >
                                      <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
                                        <ExclamationCircleSymbol />

                                        <Dialog.Title
                                          as="p"
                                          className="text-2xl text-center font-medium leading-6 text-gray-900 pt-6 pb-8"
                                        >
                                          Yakin Hapus Data?
                                        </Dialog.Title>

                                        <div className="flex gap-4 justify-center">
                                          <button
                                            className="bg-red-danger text-white hover:bg-red-700 rounded-md w-20 px-4 py-2 my-2 inline-flex items-center"
                                            onClick={() => {
                                              handleDeletePayments(currentId)
                                            }}
                                          >
                                            <p className="mx-auto">Ya</p>
                                          </button>
                                          <button
                                            className="bg-blue-primary text-white hover:bg-blue-700 rounded-md w-20 px-4 py-2 my-2 inline-flex items-center"
                                            onClick={closeModal}
                                          >
                                            <p className="mx-auto">Tidak</p>
                                          </button>
                                        </div>
                                      </Dialog.Panel>
                                    </Transition.Child>
                                  </div>
                                </div>
                              </Dialog>
                            </Transition>
                          </>
                        ) : (
                          "NO DATA"
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}
