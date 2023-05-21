'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

export default function FormUpdate() {
	const { data: session } = useSession();

	const router = useRouter();
	const searchParams = useSearchParams();

	let [initialValues, setInitialValues] = useState({});

	const handleGetUser = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/users/`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			console.log(useRoutes);

			const data = await res.json();
			setInitialValues({
				email: data.email,
				password: data.password,
				role: data.role,
				biodata_id: data.biodata_id,
				biodataType: data.biodataType,
			});
		} catch (error) {
			throw error;
		}
	};

	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	};

	const handleAddUsers = async (formValues: any) => {
		const dataForm = {
			email: formValues.email,
			password: formValues.password,
			role: formValues.role,
			biodata_id: formValues.biodata_id,
			biodataType: formValues.biodataType,
		} as any;

		try {
			console.log(formValues);
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
		handleGetUser();
	}, []);

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-4">
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium read-only"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					aria-label="email"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="adj"
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium read-only"
				>
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					aria-label="password"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="role"
					className="block mb-2 text-sm font-medium read-only"
				>
					Role
				</label>
				<input
					type="text"
					id="role"
					name="role"
					aria-label="role"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
					required
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="biodata_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Biodata ID
				</label>
				<input
					type="text"
					id="biodata_id"
					name="biodata_id"
					aria-label="biodata_id"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>

			<div className="py-2">
				<label
					htmlFor="biodataType"
					className="block mb-2 text-sm font-medium read-only"
				>
					Biodata Type
				</label>
				<input
					type="text"
					id="biodataType"
					name="biodataType"
					aria-label="disabled input 2"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
			</div>
			<button
				type="submit"
				className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
			>
				Tambah
			</button>
		</form>
	);
}
