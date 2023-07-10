"use client"

import { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, Transition } from "@headlessui/react"
import { useSession } from "next-auth/react"
import { toast, ToastContainer } from "react-toastify"

import Pagination from "@/components/layout/pagination"
import {
  ExclamationCircleSymbol,
  EyeSymbol,
  PencilSymbol,
  TrashCanSymbol,
} from "@/components/shared/Icons"

import "react-toastify/dist/ReactToastify.css"

export default function TabelFormPendaftar() {
  const { data: session } = useSession()

  const router = useRouter()

  const [forms, setForms] = useState([])
  const [changes, setChanges] = useState(false)

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

  const getForms = async () => {
    try {
      setChanges(false)

      let res = await fetch(`http://localhost:4000/v1/forms`, {
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
      setForms(data)
    } catch (error) {
      throw error
    }
  }

  const handleDeleteUser = async (id: any) => {
    try {
      await fetch(`http://localhost:4000/v1/forms/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.user.token.accessToken}`,
        },
      })

      setChanges(true)
      closeModal()
      toast.success("Form Pendaftar berhasil dihapus", {
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
      toast.error("Form Pendaftar gagal dihapus, silahkan coba lagi!", {
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
    getForms()
  }, [changes == true])

	return (
		<>
			<div className="overflow-x-auto outline outline-grey outline-[1px]">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Nama Lengkap Orang Tua
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								No. Telp
							</th>
							<th scope="col" className="px-6 py-3">
								Tanggal Dikirim
							</th>
							<th scope="col" className="px-6 py-3">
								Aksi
							</th>
						</tr>
					</thead>

					<tbody>
						{forms
							? forms.map((form) => (
									<tr
										key={form['id']}
										className="bg-white border-b  hover:bg-gray-50"
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											{form['name']
												? form['name']
												: 'NO DATA'}
										</th>
										<td className="px-6 py-4">
											{form['email']
												? form['email']
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{form['phone']
												? form['phone']
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{form['createdAt']
												? new Date(form['createdAt'])
														.toUTCString()
														.split(' ')
														.slice(0, 4)
														.join(' ')
												: 'NO DATA'}
										</td>
										<td className="flex items-center px-6 py-4 space-x-2">
											<button
												className="bg-primary rounded-md p-2 my-4 inline-flex lg:my-0"
												onClick={() =>
													router.push(
														`/profile/form-pendaftar/${form['id']}`
													)
												}
											>
												<EyeSymbol />
											</button>
											{form['id'] ? (
												<>
													<button
														className="bg-red-danger rounded-md p-2 my-4 inline-flex lg:my-0"
														onClick={() => {
															setCurrentId(
																form['id']
															);
															openModal();
														}}
													>
														<TrashCanSymbol />
													</button>
													<Transition
														appear
														show={isOpen}
														as={Fragment}
													>
														<Dialog
															as="div"
															className="relative z-10"
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
																<div className="fixed inset-0 bg-black bg-opacity-25" />
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
                                            handleDeleteUser(currentId)
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
                    </td>
                  </tr>
                ))
              : "NO DATA"}
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
