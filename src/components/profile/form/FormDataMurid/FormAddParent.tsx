'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpAndDownSymbol } from '@/components/shared/Icons';

export default function FormAddParent() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		status: '',
		firstName: '',
		lastName: '',
		birthplace: '',
		birthdate: '',
		gender: '',
		religion: '',
		citizenship: '',
		address: '',
		phone: '',
		occupation: '',
		education: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleAddParents = async (formValues: any) => {
		const dataForm = {
			status: formValues.status,
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			birthplace: formValues.birthplace,
			birthdate: formValues.birthdate,
			gender: formValues.gender,
			religion: formValues.religion,
			citizenship: formValues.citizenship,
			address: formValues.address,
			phone: formValues.phone,
			occupation: formValues.occupation,
			education: formValues.education,
		} as any;

		try {
			await fetch('http://localhost:4000/v1/parents', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			router.push('/profile/data-murid');
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleAddParents(formValues);
	};

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-4">
				<label
					htmlFor="status"
					className="block mb-2 text-sm font-medium read-only"
				>
					Status
				</label>
				<input
					type="text"
					id="status"
					name="status"
					aria-label="status"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="firstName"
					className="block mb-2 text-sm font-medium read-only"
				>
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					aria-label="firstName"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="lastName"
					className="block mb-2 text-sm font-medium read-only"
				>
					Last Name
				</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					aria-label="lastName"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="birthplace"
					className="block mb-2 text-sm font-medium read-only"
				>
					Tempat Lahir
				</label>
				<input
					type="text"
					id="birthplace"
					name="birthplace"
					aria-label="birthplace"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="birthdate"
					className="block mb-2 text-sm font-medium read-only"
				>
					Tanggal Lahir
				</label>
				<input
					type="text"
					id="birthdate"
					name="birthdate"
					aria-label="birthdate"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="gender"
					className="block mb-2 text-sm font-medium read-only"
				>
					Jenis Kelamin
				</label>
				<input
					type="text"
					id="gender"
					name="gender"
					aria-label="gender"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="religion"
					className="block mb-2 text-sm font-medium read-only"
				>
					Agama
				</label>
				<input
					type="text"
					id="religion"
					name="religion"
					aria-label="religion"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="citizenship"
					className="block mb-2 text-sm font-medium read-only"
				>
					Kewarganegaraan
				</label>
				<input
					type="text"
					id="citizenship"
					name="citizenship"
					aria-label="citizenship"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="address"
					className="block mb-2 text-sm font-medium read-only"
				>
					Alamat
				</label>
				<input
					type="text"
					id="address"
					name="address"
					aria-label="address"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="phone"
					className="block mb-2 text-sm font-medium read-only"
				>
					No. Telp
				</label>
				<input
					type="text"
					id="phone"
					name="phone"
					aria-label="phone"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="occupation"
					className="block mb-2 text-sm font-medium read-only"
				>
					Pekerjaan
				</label>
				<input
					type="text"
					id="occupation"
					name="occupation"
					aria-label="occupation"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="education"
					className="block mb-2 text-sm font-medium read-only"
				>
					Pendidikan
				</label>
				<input
					type="text"
					id="education"
					name="education"
					aria-label="education"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
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
