'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FormUpdateDataFinansial({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const router = useRouter();

	const [dataPayment, setDataPayment] = useState();
	const [dataStudents, setDataStudents] = useState([]);
	const [dataPaymentTypes, setDataPaymentTypes] = useState([]);

	let initialValues = {
		user_id: '',
		type_id: '',
		amount: '',
		payment_date: '',
		status: '',
		receipt: '',
		isOverdue: '',
		reason: '',
		updatedAt: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	const getDataStudents = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/students`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataStudents(data);
		} catch (error) {
			throw error;
		}
	};

	const getDataPaymentTypes = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/paymentTypes`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataPaymentTypes(data);
		} catch (error) {
			throw error;
		}
	};

	const getDataFinansial = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/payments/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataPayment(data);

			setFormValues({
				user_id: data['user_id']['_id'],
				type_id: data['type_id']['_id'],
				amount: data['amount'],
				payment_date: data['payment_date'],
				status: data['status'],
				receipt: data['receipt'],
				isOverdue: data['isOverdue'],
				reason: data['reason'],
				updatedAt: data['updatedAt'],
			});
		} catch (error) {
			throw error;
		}
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleUpdatePayment = async (formValues: any) => {
		const dataForm = {
			status: formValues.status,
			isOverdue: formValues.isOverdue,
		} as any;

		try {
			await fetch(`http://localhost:4000/v1/payments/${id}`, {
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			router.push('/profile/keuangan');
		} catch (error) {
			// console.log(error);
			throw error;
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleUpdatePayment(formValues);
	};

	useEffect(() => {
		getDataFinansial();
		getDataStudents();
		getDataPaymentTypes();
	}, []);

	return (
		<form method="PATCH" onSubmit={handleSubmit}>
			<div className="py-2 pt-6">
				<label
					htmlFor="user_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Nama Murid
				</label>
				<input
					type="text"
					id="type_id"
					name="type_id"
					aria-label="type_id"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					value={
						dataPayment
							? dataPayment['user_id']['firstName'] +
							  ' ' +
							  dataPayment['user_id']['lastName']
							: 'NO DATA'
					}
					disabled
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="type_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Nama Tipe Pembayaran
				</label>
				<input
					type="text"
					id="type_id"
					name="type_id"
					aria-label="type_id"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					value={
						dataPayment ? dataPayment['type_id']['type'] : 'NO DATA'
					}
					disabled
				/>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="amount"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jumlah Pembayaran
					</label>
					<input
						type="number"
						id="amount"
						name="amount"
						aria-label="amount"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						placeholder={formValues.amount}
						disabled
					/>
				</div>
				<div className="py-2 w-full">
					<label
						htmlFor="payment_date"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tanggal Pembayaran
					</label>
					<input
						type="date"
						id="payment_date"
						name="payment_date"
						aria-label="payment_date"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						placeholder={
							formValues.payment_date
								? formValues.payment_date.substring(0, 10)
								: 'NO DATA'
						}
						disabled
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="deadline"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deadline
					</label>
					<input
						type="input"
						id="deadline"
						name="deadline"
						aria-label="deadline"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						placeholder={
							dataPayment
								? new Date(
										dataPayment['type_id']['deadline']
								  ).toLocaleDateString()
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="status"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status Pembayaran
					</label>
					<select
						id="status"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						name="status"
						onChange={handleChange}
					>
						<option
							value={formValues.status}
							selected
							disabled
							className="hidden"
						>
							{formValues.status ? 'Lunas' : 'Belum Lunas'}
						</option>
						<option value="true" className="text-black">
							Lunas
						</option>
						<option value="false" className="text-black">
							Belum Lunas
						</option>
					</select>
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="isOverdue"
						className="block mb-2 text-sm font-medium read-only"
					>
						Keterangan Pembayaran
					</label>
					<select
						id="isOverdue"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						name="isOverdue"
						onChange={handleChange}
					>
						<option
							value={formValues.isOverdue}
							selected
							disabled
							className="hidden"
						>
							{formValues.isOverdue === 'undefined'
								? 'Belum Terbayar'
								: formValues.isOverdue === 'true'
								? 'Pembayaran Terlambat'
								: 'Pembayaran Tepat Waktu'}
						</option>
						<option value="undefined" className="text-black">
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
			</div>

			<div className="py-2">
				<label
					htmlFor="receipt"
					className="block mb-2 text-sm font-medium read-only"
				>
					Bukti Pembayaran
				</label>
				<input
					type="input"
					id="receipt"
					name="receipt"
					aria-label="receipt"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					value={formValues.receipt ? formValues.receipt : ' – '}
					disabled
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="reason"
					className="block mb-2 text-sm font-medium read-only"
				>
					Keterangan Tambahan
				</label>
				<input
					type="input"
					id="reason"
					name="reason"
					aria-label="reason"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					placeholder={formValues.reason ? formValues.reason : ' – '}
					disabled
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="updatedAt"
					className="block mb-2 text-sm font-medium read-only"
				>
					Terakhir Diubah
				</label>
				<input
					type="date"
					id="updatedAt"
					name="updatedAt"
					aria-label="updatedAt"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					defaultValue={formValues.updatedAt.substring(0, 10)}
					disabled
				/>
			</div>

			<button
				type="submit"
				className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 float-right font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
			>
				Ubah
			</button>
		</form>
	);
}
