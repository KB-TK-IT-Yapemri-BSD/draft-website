'use client';

import Pagination from '@/components/layout/pagination';
import {
	DocumentPlusSymbol,
	ExclamationCircleSymbol,
	TrashCanSymbol,
} from '@/components/shared/Icons';
import { Dialog, Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TabelTipePembayaran() {
	const { data: session } = useSession();

	const [paymentTypes, setPaymentTypes] = useState([]);
	const [changes, setChanges] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	let [totalPages, setTotalPages] = useState(0);

	let [isOpen, setIsOpen] = useState(false);
	let [currentId, setCurrentId] = useState();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const getDataPaymentTypes = async () => {
		try {
			setChanges(false);

			let res = await fetch(`http://localhost:4000/v1/paymentTypes`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			let data = await res.json();
			const totalCount = data.length;
			const perPage = 30;
			totalPages = Math.ceil(totalCount / perPage);

			setTotalPages(totalPages);
			setPaymentTypes(data);
		} catch (error) {
			throw error;
		}
	};

	const handleDeletePaymentTypes = async (id: any) => {
		try {
			await fetch(`http://localhost:4000/v1/paymentTypes/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			setChanges(true);
			closeModal();
			toast.success('Tipe pembayaran berhasil dihapus', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		} catch (error) {
			toast.error('Tipe pembayaran gagal dihapus, silahkan coba lagi!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}
	};

	const handlePageChange = (page: any) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		getDataPaymentTypes();
	}, [changes == true]);

	return (
		<>
			<div className="text-right">
				<button className="bg-blue-primary text-white hover:bg-blue-700 rounded-md px-4 py-2 my-6 inline-flex justify-center w-full lg:w-auto">
					<DocumentPlusSymbol />
					<Link href="/profile/keuangan/tipe-pembayaran/add">
						<p className="ml-2 text-sm">Tambah TIPE PEMBAYARAN</p>
					</Link>
				</button>
			</div>
			<div className="overflow-x-auto outline outline-grey outline-[1px]">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Tipe Pembayaran
							</th>
							<th scope="col" className="px-6 py-3">
								Created At
							</th>
							<th scope="col" className="px-6 py-3">
								Deadline
							</th>
							<th scope="col" className="px-6 py-3">
								Aksi
							</th>
						</tr>
					</thead>
					<tbody>
						{paymentTypes
							? paymentTypes.map((type) => (
									<tr
										key={type['id']}
										className="bg-white border-b  hover:bg-gray-50"
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											{type['type']
												? type['type']
												: 'NO DATA'}
										</th>
										<td className="px-6 py-4">
											{type['createdAt']
												? new Date(
														type['createdAt']
												  ).toLocaleDateString()
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{type['deadline']
												? new Date(
														type['deadline']
												  ).toLocaleDateString()
												: 'NO DATA'}
										</td>
										<td className="flex items-center px-6 py-4 space-x-2">
											{type['id'] ? (
												<>
													<button
														className="bg-red-danger rounded-md p-2 my-4 inline-flex lg:my-0"
														onClick={() => {
															setCurrentId(
																type['id']
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
																		as={
																			Fragment
																		}
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
																				Yakin
																				Hapus
																				Data?
																			</Dialog.Title>

																			<div className="flex gap-4 justify-center">
																				<button
																					className="bg-red-danger text-white hover:bg-red-700 rounded-md w-20 px-4 py-2 my-2 inline-flex items-center"
																					onClick={() => {
																						handleDeletePaymentTypes(
																							currentId
																						);
																					}}
																				>
																					<p className="mx-auto">
																						Ya
																					</p>
																				</button>
																				<button
																					className="bg-blue-primary text-white hover:bg-blue-700 rounded-md w-20 px-4 py-2 my-2 inline-flex items-center"
																					onClick={
																						closeModal
																					}
																				>
																					<p className="mx-auto">
																						Tidak
																					</p>
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
												'NO DATA'
											)}
										</td>
									</tr>
							  ))
							: 'NO DATA'}
					</tbody>
				</table>
				<ToastContainer
					style={{ width: '500px' }}
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
	);
}
