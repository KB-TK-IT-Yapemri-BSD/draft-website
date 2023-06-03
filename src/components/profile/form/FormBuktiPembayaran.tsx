'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FormBuktiPembayaran({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const router = useRouter();

	const [dataPayment, setDataPayment] = useState();

	let initialValues = {
		payment_date: '',
		receipt: '',
		reason: '',
	};

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
			receipt: formValues.receipt,
			payment_date: new Date(formValues.payment_date),
			reason: formValues.reason,
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
	}, []);

	return (
		<form method="PATCH" onSubmit={handleSubmit}>
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
					defaultValue={formValues.payment_date.substring(0, 10)}
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="receipt"
					className="block mb-2 text-sm font-medium read-only"
				>
					Unggah Bukti Pembayaran (Link GOOGLE DRIVE)
				</label>
				<input
					type="text"
					id="receipt"
					name="receipt"
					aria-label="receipt"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
					defaultValue={formValues.receipt}
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
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
