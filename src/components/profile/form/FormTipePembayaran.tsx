'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { paymentTypeSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormTipePembayaran() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		type: '',
		deadline: '',
	};

	type Errors = {
		type?: string;
		deadline?: Date;
	};

	const [errors, setErrors] = useState<Errors>({});
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

	const handleAddType = async (formValues: any) => {
		const dataForm = {
			type: formValues.type,
			deadline: new Date(formValues.deadline),
		} as any;

		try {
			paymentTypeSchema.parse(dataForm);

			const results = await fetch(
				'http://localhost:4000/v1/paymentTypes',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(dataForm),
				}
			);

			if (results?.status === 401) {
				toast.error(
					'Tipe Pembayaran gagal ditambahkan, silahkan coba lagi!',
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
		handleAddType(formValues);
	};

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-6">
				<label
					htmlFor="type"
					className="block mb-2 text-sm font-medium read-only"
				>
					Nama Tipe Pembayaran
				</label>
				<input
					type="text"
					id="type"
					name="type"
					aria-label="type"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.type && (
					<span className="text-red-danger text-sm">
						{errors.type ? '* ' + errors.type : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="deadline"
					className="block mb-2 text-sm font-medium read-only"
				>
					Deadline
				</label>
				<input
					type="date"
					id="deadline"
					name="deadline"
					aria-label="deadline"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.deadline && (
					<span className="text-red-danger text-sm">
						{errors.deadline ? '* ' + errors.deadline : ''}
						<br />
					</span>
				)}
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
