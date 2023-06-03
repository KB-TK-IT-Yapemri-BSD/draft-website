'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FormTipePembayaran() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		type: '',
		deadline: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleAddType = async (formValues: any) => {
		const dataForm = {
			type: formValues.type,
			deadline: formValues.deadline,
		} as any;

		try {
			await fetch('http://localhost:4000/v1/paymentTypes', {
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
		handleAddType(formValues);
	};

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-8">
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
					required
				/>
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
					required
				/>
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
