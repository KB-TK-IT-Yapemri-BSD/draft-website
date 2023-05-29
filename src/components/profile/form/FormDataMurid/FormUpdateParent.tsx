'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FormUpdateParent({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const router = useRouter();

	const [dataUser, setDataUser] = useState();

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

	const getDataUser = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/parents/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUser(data);
			setFormValues({
				status: data['status'],
				firstName: data['firstName'],
				lastName: data['lastName'],
				birthplace: data['birthplace'],
				birthdate: data['birthdate'],
				gender: data['gender'],
				religion: data['religion'],
				citizenship: data['citizenship'],
				address: data['address'],
				phone: data['phone'],
				occupation: data['occupation'],
				education: data['education'],
			});
		} catch (error) {
			throw error;
		}
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleUpdateParents = async (formValues: any) => {
		const dataForm = {
			status: formValues.status,
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			birthplace: formValues.birthplace,
			birthdate: new Date(formValues.birthdate),
			gender: formValues.gender,
			religion: formValues.religion,
			citizenship: formValues.citizenship,
			address: formValues.address,
			phone: formValues.phone,
			occupation: formValues.occupation,
			education: formValues.education,
		} as any;

		try {
			await fetch(`http://localhost:4000/v1/parents/${id}`, {
				method: 'PATCH',
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
		handleUpdateParents(formValues);
	};

	useEffect(() => {
		getDataUser();
	}, []);

	return (
		<form method="PATCH" onSubmit={handleSubmit}>
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
					defaultValue={formValues.status}
					onChange={handleChange}
				/>
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
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
						defaultValue={formValues.firstName}
						onChange={handleChange}
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
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
						defaultValue={formValues.lastName}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
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
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
						defaultValue={formValues.birthplace}
						onChange={handleChange}
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
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						defaultValue={formValues.birthdate.substring(0, 10)}
						onChange={handleChange}
					/>
				</div>
				<div className="py-2 w-full">
					<label
						htmlFor="gender"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jenis Kelamin
					</label>
					<select
						id="gender"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="gender"
						onChange={handleChange}
					>
						<option
							defaultValue={formValues.gender}
							selected
							disabled
							hidden
						>
							{formValues.gender ? 'Wanita' : 'Pria'}
						</option>
						<option value="true" className="text-black">
							Wanita
						</option>
						<option value="false" className="text-black">
							Pria
						</option>
					</select>
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
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="religion"
						onChange={handleChange}
					>
						<option
							defaultValue={formValues.religion}
							selected
							disabled
							hidden
						>
							{formValues.religion}
						</option>
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
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="citizenship"
						onChange={handleChange}
					>
						<option
							defaultValue={formValues.citizenship}
							selected
							disabled
							hidden
						>
							{formValues.citizenship}
						</option>
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
					defaultValue={formValues.address}
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
					defaultValue={formValues.phone}
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
					defaultValue={formValues.occupation}
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
					defaultValue={formValues.education}
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
