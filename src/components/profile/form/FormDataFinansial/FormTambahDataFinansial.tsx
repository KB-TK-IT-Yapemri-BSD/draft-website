'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FormTambahDataFinansial() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		user_id: '',
		type_id: '',
		amount: '',
	};

	const [dataStudents, setDataStudents] = useState([]);
	const [dataPaymentTypes, setDataPaymentTypes] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

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

	const handleAddPayment = async (formValues: any) => {
		const dataForm = {
			user_id: formValues.user_id,
			type_id: formValues.type_id,
			amount: formValues.amount,
		} as any;

		try {
			await fetch('http://localhost:4000/v1/payments', {
				method: 'POST',
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
		handleAddPayment(formValues);
	};

	useEffect(() => {
		getDataStudents();
		getDataPaymentTypes();
	}, []);

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-6">
				<label
					htmlFor="user_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Nama Murid
				</label>
				<select
					id="user_id"
					className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					name="user_id"
					onChange={handleChange}
					required
				>
					<option
						defaultValue={undefined}
						selected
						disabled
						className="hidden"
					></option>
					{dataStudents.map((user) => (
						<option
							key={user['id']}
							value={user['id']}
							className="text-black"
						>
							{user['firstName'] + ' ' + user['lastName']}
						</option>
					))}
				</select>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6 pt-2">
				<div className="py-2 w-full">
					<label
						htmlFor="type_id"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nama Tipe Pembayaran
					</label>
					<select
						id="type_id"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="type_id"
						onChange={handleChange}
						required
					>
						<option
							defaultValue={undefined}
							selected
							disabled
							className="hidden"
						></option>
						{dataPaymentTypes.map((paymentType) => (
							<option
								key={paymentType['id']}
								value={paymentType['id']}
								className="text-black"
							>
								{paymentType['type']}
							</option>
						))}
					</select>
				</div>
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
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			<button
				type="submit"
				className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 float-right font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
			>
				Tambah
			</button>
		</form>
	);
}
