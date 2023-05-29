'use client';

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSession } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

function PendaftaranHeader() {
	const { data: session } = useSession();

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	let initialValues = {
		name: '',
		email: '',
		phone: '',
		address: '',
		numChildrens: '',
		ageChildrens: '',
		grade: '',
		reason: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleAddForm = async (formValues: any) => {
		const dataForm = {
			name: formValues.name,
			email: formValues.email,
			phone: formValues.phone,
			address: formValues.address,
			numChildrens: formValues.numChildrens,
			ageChildrens: formValues.ageChildrens,
			grade: formValues.grade,
			reason: formValues.reason,
		} as any;

		try {
			let res = await fetch('http://localhost:4000/v1/forms', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			if (res.ok) {
				toast.success('Form Pendaftaran berhasil dikirim!', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				});

				setFormValues(initialValues);
				closeModal();
			} else {
				toast.error(
					'Form Pendaftaran gagal dikirim, silahkan coba lagi!',
					{
						position: 'top-center',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					}
				);
			}
		} catch (error) {
			throw error;
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleAddForm(formValues);
	};

	return (
		<div className="relative">
			<div className=" bg-gradient-to-tr from-gray-800 to-gray-400 text-white py-40 bg-cover relative">
				<div className="my-60">
					<Image
						src="/header/pd-photoHeader.JPEG"
						alt="Header Photo Pendaftaran"
						fill
						style={{
							objectFit: 'cover',
							mixBlendMode: 'overlay',
						}}
						quality={100}
						priority
					/>
				</div>
			</div>

			<h1 className="absolute mt-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-medium text-center text-white shadow-lg">
				Pendaftaran KB TK IT Yapemri BSD
			</h1>
			<button
				onClick={openModal}
				className="absolute -mt-6 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-10 lg:px-40 py-2.5 text-center "
			>
				Daftar Sekarang
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
								<Dialog.Panel className="w-2/3 h-[700px] transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle transition-all overflow-y-auto">
									<Dialog.Title
										as="p"
										className="text-2xl text-center font-medium text-gray-900"
									>
										Form Pendaftaran
									</Dialog.Title>
									<div className="pt-10 pb-20">
										<form
											method="POST"
											onSubmit={handleSubmit}
										>
											<div className="pb-2">
												<label
													htmlFor="name"
													className="block mb-2 text-sm font-medium read-only"
												>
													Nama Lengkap{' '}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="name"
													name="name"
													aria-label="name"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={formValues.name}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="email"
													className="block mb-2 text-sm font-medium read-only"
												>
													Email{' '}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="email"
													id="email"
													name="email"
													aria-label="email"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={formValues.email}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="phone"
													className="block mb-2 text-sm font-medium read-only"
												>
													Phone{' '}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="phone"
													name="phone"
													aria-label="phone"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={formValues.phone}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="address"
													className="block mb-2 text-sm font-medium read-only"
												>
													Address{' '}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="address"
													name="address"
													aria-label="address"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={formValues.address}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="numChildrens"
													className="block mb-2 text-sm font-medium read-only"
												>
													Jumlah Anak yang Akan
													Disekolahkan {''}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="numChildrens"
													name="numChildrens"
													aria-label="numChildrens"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={
														formValues.numChildrens
													}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="ageChildrens"
													className="block mb-2 text-sm font-medium read-only"
												>
													Umur Anak yang Akan
													Disekolahkan {''}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="ageChildrens"
													name="ageChildrens"
													aria-label="ageChildrens"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={
														formValues.ageChildrens
													}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="grade"
													className="block mb-2 text-sm font-medium read-only"
												>
													Kelompok Usia yang Akan
													Disekolahkan (KB/ TK A/ TK
													B) {''}
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="grade"
													name="grade"
													aria-label="grade"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={formValues.grade}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="py-2 pt-4">
												<label
													htmlFor="reason"
													className="block mb-2 text-sm font-medium read-only"
												>
													Alasan Mendaftar di KB TK IT
													Yapemri BSD
													<span className="text-red-danger">
														*
													</span>
												</label>
												<input
													type="text"
													id="reason"
													name="reason"
													aria-label="reason"
													className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
													value={formValues.reason}
													onChange={handleChange}
													required
												/>
											</div>

											<button
												type="submit"
												className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-8 float-right font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
											>
												Kirim Form
											</button>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

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
	);
}

export default PendaftaranHeader;
