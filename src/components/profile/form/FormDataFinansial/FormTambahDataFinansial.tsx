'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { paymentSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormTambahDataFinansial() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		user_id: '',
		type_id: '',
		amount: '',
	};

	type Errors = {
		user_id?: string;
		type_id?: string;
		amount?: string;
	};

	const [errors, setErrors] = useState<Errors>({});
	const [dataStudents, setDataStudents] = useState([]);
	const [dataPaymentTypes, setDataPaymentTypes] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: undefined,
		}));
	};

	const handleValidationErrors = (error: ZodError) => {
		// console.log('Validation error:', error);
		// Set the validation error messages
		if (error.formErrors && error.formErrors.fieldErrors) {
			setErrors(error.formErrors.fieldErrors);
			// console.log(error.formErrors.fieldErrors);
		} else {
			// Handle any other type of error
			// Display a generic error message or take appropriate action
			// console.log(error);
		}
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
			paymentSchema.parse(dataForm);

			const results = await fetch('http://localhost:4000/v1/payments', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			if (results?.status === 401) {
				toast.error(
					'Data Finansial gagal ditambahkan, silahkan coba lagi!',
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
			} else if (results?.status === 201) {
				router.push('/profile/keuangan');
			}
		} catch (error: any) {
			handleValidationErrors(error);
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
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="user_id"
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
							key={user['id']}
							value={user['id']}
							className="text-black"
						>
							{user['firstName'] + ' ' + user['lastName']}
						</option>
					))}
				</select>
				{errors.user_id && (
					<span className="text-red-danger text-sm">
						{errors.user_id ? '* ' + errors.user_id : ''}
						<br />
					</span>
				)}
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
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="type_id"
						onChange={handleChange}
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
					{errors.type_id && (
						<span className="text-red-danger text-sm">
							{errors.type_id ? '* ' + errors.type_id : ''}
							<br />
						</span>
					)}
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
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.amount && (
						<span className="text-red-danger text-sm">
							{errors.amount ? '* ' + errors.amount : ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="text-right">
				<button
					type="submit"
					className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-medium rounded-lg text-sm w-full lg:w-auto px-10 lg:px-40 py-2.5 text-center"
				>
					Tambah
				</button>
			</div>

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
		</form>
	);
}
