'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
		studentStatus: '',
		height: '',
		weight: '',
		bloodType: '',
		diseaseHistory: '',
		distanceToHome: '',
		language: '',
		mother_id: undefined,
		father_id: undefined,
	};

	const [dataFathers, setDataFathers] = useState([]);
	const [dataMothers, setDataMothers] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const getDataFathers = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/parents/fathers`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataFathers(data);
		} catch (error) {
			throw error;
		}
	};

	const getDataMothers = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/parents/mothers`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataMothers(data);
		} catch (error) {
			throw error;
		}
	};

	const handleAddStudents = async (formValues: any) => {
		const dataForm = {
			grade: formValues.grade,
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			birthplace: formValues.birthplace,
			birthdate: new Date(formValues.birthdate),
			gender: formValues.gender,
			religion: formValues.religion,
			citizenship: formValues.citizenship,
			address: formValues.address,
			nickname: formValues.nickname,
			birthOrder: formValues.birthOrder,
			numOfSiblings: formValues.numOfSiblings,
			statusInFamily: formValues.statusInFamily,
			studentStatus: true,
			height: formValues.height,
			weight: formValues.weight,
			bloodType: formValues.bloodType,
			diseaseHistory: formValues.diseaseHistory,
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

	useEffect(() => {
		getDataFathers();
		getDataMothers();
	}, []);

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-4">
				<label
					htmlFor="grade"
					className="block mb-2 text-sm font-medium read-only"
				>
					Grade
				</label>
				<select
					id="grade"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					name="grade"
					onChange={handleChange}
					required
				>
					<option selected disabled hidden></option>
					<option value="KB" className="text-black">
						KB
					</option>
					<option value="TK A" className="text-black">
						TK A
					</option>
					<option value="TK B" className="text-black">
						TK B
					</option>
				</select>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
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
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="py-2 w-full">
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
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="py-2 w-full">
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
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6 pt-2">
				<div className="py-2 w-full">
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
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>
				<div className="py-2 w-full">
					<label
						htmlFor="birthdate"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tanggal Lahir
					</label>
					<input
						type="date"
						id="birthdate"
						name="birthdate"
						aria-label="birthdate"
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>
				<div className="py-2 w-full">
					<label
						htmlFor="gender"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jenis Kelamin
					</label>

					<div className="inline-flex space-x-3 py-2">
						<input
							type="radio"
							id="female"
							value="true"
							name="gender"
							aria-label="gender"
							className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
							onChange={handleChange}
							required
						/>
						<label htmlFor="female">Perempuan</label>
						<input
							type="radio"
							id="male"
							value="false"
							name="gender"
							aria-label="gender"
							className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
							onChange={handleChange}
						/>
						<label htmlFor="male">Laki-Laki</label>
					</div>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-1/2">
					<label
						htmlFor="religion"
						className="block mb-2 text-sm font-medium read-only"
					>
						Agama
					</label>
					<select
						id="religion"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="religion"
						onChange={handleChange}
						required
					>
						<option selected disabled hidden></option>
						<option value="Islam" className="text-black">
							Islam
						</option>
						<option value="Kristen" className="text-black">
							Kristen
						</option>
						<option value="Katolik" className="text-black">
							Katolik
						</option>
						<option value="Hindu" className="text-black">
							Hindu
						</option>
						<option value="Buddha" className="text-black">
							Buddha
						</option>
						<option value="Konghucu" className="text-black">
							Konghucu
						</option>
					</select>
				</div>
				<div className="py-2 w-1/2">
					<label
						htmlFor="citizenship"
						className="block mb-2 text-sm font-medium read-only"
					>
						Kewarganegaraan
					</label>
					<select
						id="citizenship"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="citizenship"
						onChange={handleChange}
						required
					>
						<option selected disabled hidden></option>
						<option value="WNI" className="text-black">
							WNI
						</option>
						<option value="WNA" className="text-black">
							WNA
						</option>
					</select>
				</div>
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
					className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="birthOrder"
						className="block mb-2 text-sm font-medium read-only"
					>
						Anak Ke-
					</label>
					<input
						type="number"
						id="birthOrder"
						name="birthOrder"
						aria-label="birthOrder"
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="numOfSiblings"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jumlah Saudara
					</label>
					<input
						type="number"
						id="numOfSiblings"
						name="numOfSiblings"
						aria-label="numOfSiblings"
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			<div className="py-2 pt-3">
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
					className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="height"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tinggi Badan
					</label>
					<input
						type="number"
						id="height"
						name="height"
						aria-label="height"
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="weight"
						className="block mb-2 text-sm font-medium read-only"
					>
						Berat Badan
					</label>
					<input
						type="number"
						id="weight"
						name="weight"
						aria-label="weight"
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
						required
					/>
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="bloodType"
						className="block mb-2 text-sm font-medium read-only"
					>
						Golongan Darah
					</label>
					<select
						id="bloodType"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="bloodType"
						onChange={handleChange}
						required
					>
						<option selected disabled hidden></option>
						<option value="A" className="text-black">
							A
						</option>
						<option value="B" className="text-black">
							B
						</option>
						<option value="O" className="text-black">
							O
						</option>
						<option value="AB" className="text-black">
							AB
						</option>
					</select>
				</div>
			</div>

			<div className="py-2 pt-3">
				<label
					htmlFor="diseaseHistory"
					className="block mb-2 text-sm font-medium read-only"
				>
					Riwayat Penyakit
				</label>
				<input
					type="text"
					id="diseaseHistory"
					name="diseaseHistory"
					aria-label="diseaseHistory"
					className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="distanceToHome"
					className="block mb-2 text-sm font-medium read-only"
				>
					Jarak Tempat Tinggal ke TK
				</label>
				<input
					type="text"
					id="distanceToHome"
					name="distanceToHome"
					aria-label="distanceToHome"
					className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
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
					className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="father_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Father ID
				</label>
				<select
					id="father_id"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					name="father_id"
					onChange={handleChange}
					required
				>
					<option
						defaultValue={undefined}
						selected
						disabled
						className="hidden"
					></option>
					{dataFathers.map((father) => (
						<option
							key={father['id']}
							value={father['id']}
							className="text-black"
						>
							{father['firstName'] + ' ' + father['lastName']}
						</option>
					))}
				</select>
			</div>

			<div className="py-2">
				<label
					htmlFor="mother_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Mother ID
				</label>
				<select
					id="mother_id"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					name="mother_id"
					onChange={handleChange}
					required
				>
					<option
						defaultValue={undefined}
						selected
						disabled
						className="hidden"
					></option>
					{dataMothers.map((mother) => (
						<option
							key={mother['id']}
							value={mother['id']}
							className="text-black"
						>
							{mother['firstName'] + ' ' + mother['lastName']}
						</option>
					))}
				</select>
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
