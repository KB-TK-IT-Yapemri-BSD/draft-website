'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpAndDownSymbol } from '@/components/shared/Icons';

export default function FormAddStudent() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		grade: '',
		firstName: '',
		lastName: '',
		birthplace: '',
		birthdate: '',
		gender: '',
		religion: '',
		citizenship: '',
		address: '',
		nickname: '',
		birthOrder: '',
		numOfSiblings: '',
		statusInFamily: '',
		height: '',
		weight: '',
		bloodType: '',
		sicknessHistory: '',
		distanceToHome: '',
		language: '',
		mother_id: '',
		father_id: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleAddStudents = async (formValues: any) => {
		const dataForm = {
			grade: formValues.grade,
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			birthplace: formValues.birthplace,
			birthdate: formValues.birthdate,
			gender: formValues.gender,
			religion: formValues.religion,
			citizenship: formValues.citizenship,
			address: formValues.address,
			nickname: formValues.nickname,
			birthOrder: formValues.birthOrder,
			numOfSiblings: formValues.numOfSiblings,
			statusInFamily: formValues.statusInFamily,
			height: formValues.height,
			weight: formValues.weight,
			bloodType: formValues.bloodType,
			sicknessHistory: formValues.sicknessHistory,
			distanceToHome: formValues.distanceToHome,
			language: formValues.language,
			father_id: formValues.father_id,
			mother_id: formValues.mother_id,
		} as any;

		try {
			await fetch('http://localhost:4000/v1/students', {
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
		handleAddStudents(formValues);
	};

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-4">
				<label
					htmlFor="grade"
					className="block mb-2 text-sm font-medium read-only"
				>
					Grade
				</label>
				<input
					type="text"
					id="grade"
					name="grade"
					aria-label="grade"
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
					htmlFor="nickname"
					className="block mb-2 text-sm font-medium read-only"
				>
					Nama Panggilan
				</label>
				<input
					type="text"
					id="nickname"
					name="nickname"
					aria-label="nickname"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
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
					htmlFor="addressiodata_id"
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
					htmlFor="birthOrder"
					className="block mb-2 text-sm font-medium read-only"
				>
					Anak Ke-
				</label>
				<input
					type="text"
					id="birthOrder"
					name="birthOrder"
					aria-label="birthOrder"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="numOfSiblings"
					className="block mb-2 text-sm font-medium read-only"
				>
					Jumlah Saudara
				</label>
				<input
					type="text"
					id="numOfSiblings"
					name="numOfSiblings"
					aria-label="numOfSiblings"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="statusInFamily"
					className="block mb-2 text-sm font-medium read-only"
				>
					Status di Keluarga
				</label>
				<input
					type="text"
					id="statusInFamily"
					name="statusInFamily"
					aria-label="statusInFamily"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="height"
					className="block mb-2 text-sm font-medium read-only"
				>
					Tinggi Badan
				</label>
				<input
					type="text"
					id="height"
					name="height"
					aria-label="height"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="weight"
					className="block mb-2 text-sm font-medium read-only"
				>
					Berat Badan
				</label>
				<input
					type="text"
					id="weight"
					name="weight"
					aria-label="weight"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="bloodType"
					className="block mb-2 text-sm font-medium read-only"
				>
					Golongan Darah
				</label>
				<input
					type="text"
					id="bloodType"
					name="bloodType"
					aria-label="bloodType"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="sicknessHistory"
					className="block mb-2 text-sm font-medium read-only"
				>
					Riwayat Penyakit
				</label>
				<input
					type="text"
					id="sicknessHistory"
					name="sicknessHistory"
					aria-label="sicknessHistory"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="distanceToHome"
					className="block mb-2 text-sm font-medium read-only"
				>
					Jarak ke rumah
				</label>
				<input
					type="text"
					id="distanceToHome"
					name="distanceToHome"
					aria-label="distanceToHome"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="language"
					className="block mb-2 text-sm font-medium read-only"
				>
					Bahasa Sehari-hari
				</label>
				<input
					type="text"
					id="language"
					name="language"
					aria-label="language"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="father_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Father ID
				</label>
				<input
					type="text"
					id="father_id"
					name="father_id"
					aria-label="father_id"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="mother_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Mother ID
				</label>
				<input
					type="text"
					id="mother_id"
					name="mother_id"
					aria-label="mother_id"
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
