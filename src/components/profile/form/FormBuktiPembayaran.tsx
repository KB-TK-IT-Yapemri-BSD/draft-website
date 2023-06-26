'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { proofSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormBuktiPembayaran({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const router = useRouter();

	const [dataPayment, setDataPayment] = useState();

	let initialValues = {
		payment_date: '',
		receipt: '',
		reason: '',
		modified: false,
	};

	type Errors = {
		payment_date?: Date;
		receipt?: string;
	};

	const [errors, setErrors] = useState<Errors>({});
	const [formValues, setFormValues] = useState(initialValues);

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
				payment_date: data['payment_date'],
				receipt: data['receipt'],
				reason: data['reason'],
				modified: data['modified'],
			});
		} catch (error) {
			throw error;
		}
	};

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

	const handleUpdatePayment = async (formValues: any) => {
		const dataForm = {
			receipt: formValues.receipt,
			payment_date: new Date(formValues.payment_date),
			modified: true,
			reason: formValues.reason,
		} as any;

		try {
			proofSchema.parse(dataForm);

			const results = await fetch(
				`http://localhost:4000/v1/payments/${id}`,
				{
					method: 'PATCH',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(dataForm),
				}
			);

			if (results?.status === 401) {
				toast.error(
					'Bukti Pembayaran gagal ditambahkan, silahkan coba lagi!',
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
			} else if (results?.status === 200) {
				router.push('/profile/keuangan');
			}
		} catch (error: any) {
			handleValidationErrors(error);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleUpdatePayment(formValues);
	};

	useEffect(() => {
		getDataFinansial();
	}, []);

	return (
		<form method="PATCH" onSubmit={handleSubmit}>
			<div className="py-3 pt-6">
				<label
					htmlFor="payment_date"
					className="block mb-2 text-sm font-medium read-only"
				>
					Tanggal Pembayaran{' '}
					<span className="text-red-danger">*</span>
				</label>
				<input
					type="date"
					id="payment_date"
					name="payment_date"
					aria-label="payment_date"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					defaultValue={formValues.payment_date.substring(0, 10)}
					onChange={handleChange}
				/>
				{errors.payment_date && (
					<span className="text-red-danger text-sm">
						{errors.payment_date ? '* ' + errors.payment_date : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-3">
				<label
					htmlFor="receipt"
					className="block mb-2 text-sm font-medium read-only"
				>
					Unggah Bukti Pembayaran{' '}
					<span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="receipt"
					name="receipt"
					aria-label="receipt"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					defaultValue={formValues.receipt}
					onChange={handleChange}
					required
				/>
				{errors.receipt && (
					<span className="text-red-danger text-sm">
						{errors.receipt ? '* ' + errors.receipt : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-3">
				<label
					htmlFor="reason"
					className="block mb-2 text-sm font-medium read-only"
				>
					Keterangan
				</label>
				<input
					type="text"
					id="reason"
					name="reason"
					aria-label="reason"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					defaultValue={formValues.reason}
					onChange={handleChange}
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
