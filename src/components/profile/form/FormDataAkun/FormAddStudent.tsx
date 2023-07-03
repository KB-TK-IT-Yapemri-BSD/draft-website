'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { userSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormAddStudent() {
	const { data: session } = useSession();
	const router = useRouter();

	let initialValues = {
		email: '',
		password: '',
		role: '',
		biodata_id: '',
	};

	type Errors = {
		email?: string;
		password?: string;
		role?: string;
		biodata_id?: string;
	};

	const [errors, setErrors] = useState<Errors>({});
	const [dataUsers, setDataUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();
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

	const getDataUsers = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/students`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUsers(data);
			setSelectedUser(data[0]);
		} catch (error) {
			throw error;
		}
	};

	const handleAddUsers = async (formValues: any) => {
		const dataForm = {
			email: formValues.email,
			password: formValues.password,
			role: 'parents',
			biodata_id: formValues.biodata_id,
			biodataType: 'Student',
		} as any;

		try {
			userSchema.parse(dataForm);

			const results = await fetch('http://localhost:4000/v1/users', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			if (results?.status === 401) {
				toast.error(
					'Data Akun gagal ditambahkan, silahkan coba lagi!',
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
				router.push('/profile/data-akun');
			}
		} catch (error: any) {
			handleValidationErrors(error);
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
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.email && (
					<span className="text-red-danger text-sm">
						{errors.email[0] ? '* ' + errors.email[0] : ''}
						<br />
						{errors.email[1] ? '* ' + errors.email[1] : ''}
					</span>
				)}
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
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.password && (
					<span className="text-red-danger text-sm">
						{errors.password[0] ? '* ' + errors.password[0] : ''}
						<br />
						{errors.password[1] ? '* ' + errors.password[1] : ''}
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="biodata_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Biodata ID <span className="text-red-danger">*</span>
				</label>
				<select
					id="biodata_id"
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="biodata_id"
					onChange={handleChange}
				>
					<option
						defaultValue={undefined}
						selected
						disabled
						hidden
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
				{errors.biodata_id && (
					<span className="text-red-danger text-sm">
						{errors.biodata_id ? '* ' + errors.biodata_id : ''}
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
