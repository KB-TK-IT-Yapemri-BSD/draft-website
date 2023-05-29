'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FormAddStaff() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		email: '',
		password: '',
		role: '',
		biodata_id: undefined,
	};

	const [dataUsers, setDataUsers] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const getDataUsers = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/staffs`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUsers(data);
		} catch (error) {
			throw error;
		}
	};

	const handleAddUsers = async (formValues: any) => {
		const dataForm = {
			email: formValues.email,
			password: formValues.password,
			role: formValues.role,
			biodata_id: formValues.biodata_id,
			biodataType: 'Staff',
		} as any;

		try {
			await fetch('http://localhost:4000/v1/users', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			router.push('/profile/data-akun');
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleAddUsers(formValues);
	};

	useEffect(() => {
		getDataUsers();
	}, []);

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-4">
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium read-only"
				>
					Email <span className="text-red-danger">*</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					aria-label="email"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium read-only"
				>
					Password <span className="text-red-danger">*</span>
				</label>
				<input
					type="password"
					id="password"
					name="password"
					aria-label="password"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="role"
					className="block mb-2 text-sm font-medium read-only"
				>
					Role <span className="text-red-danger">*</span>
				</label>
				<select
					id="role"
					className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					name="role"
					onChange={handleChange}
				>
					<option
						defaultValue={undefined}
						selected
						disabled
						hidden
					></option>
					<option value="principal" className="text-black">
						Kepala Sekolah
					</option>
					<option value="admin" className="text-black">
						Administrasi
					</option>
					<option value="teachers" className="text-black">
						Guru
					</option>
				</select>
			</div>

			<div className="py-2">
				<label
					htmlFor="biodata_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Biodata ID
				</label>
				<select
					id="biodata_id"
					className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					name="biodata_id"
					onChange={handleChange}
				>
					<option
						defaultValue={undefined}
						selected
						disabled
						className="hidden"
					></option>
					{dataUsers.map((user) => (
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

			<button
				type="submit"
				className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 float-right font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
			>
				Tambah
			</button>
		</form>
	);
}
