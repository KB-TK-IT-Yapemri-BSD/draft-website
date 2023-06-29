'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { staffSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormAddStaff() {
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
		education: '',
	};

	type Errors = {
		status?: string;
		firstName?: string;
		lastName?: string;
		birthplace?: string;
		birthdate?: Date;
		gender?: boolean;
		religion?: string;
		citizenship?: string;
		address?: string;
		phone?: string;
		education?: string;
	};

	const [errors, setErrors] = useState<Errors>({});
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

	const handleAddStaffs = async (formValues: any) => {
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
			education: formValues.education,
		} as any;

		try {
			staffSchema.parse(dataForm);

			const results = await fetch('http://localhost:4000/v1/staffs', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			if (results?.status === 401) {
				toast.error('Data Staff gagal ditambah, silahkan coba lagi!', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				});
			} else if (results?.status === 201) {
				router.push('/profile/data-staff');
			}
		} catch (error: any) {
			handleValidationErrors(error);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleAddStaffs(formValues);
	};

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<div className="py-2 pt-8">
				<label
					htmlFor="status"
					className="block mb-2 text-sm font-medium read-only"
				>
					Status <span className="text-red-danger">*</span>
				</label>
				<select
					id="status"
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="status"
					onChange={handleChange}
				>
					<option selected disabled hidden></option>
					<option value="Kepala Sekolah" className="text-black">
						Kepala Sekolah
					</option>
					<option value="Administrasi" className="text-black">
						Administrasi
					</option>
					<option value="Guru" className="text-black">
						Guru
					</option>
				</select>
				{errors.status && (
					<span className="text-red-danger text-sm">
						{errors.status ? '* ' + errors.status : ''}
						<br />
					</span>
				)}
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="firstName"
						className="block mb-2 text-sm font-medium read-only"
					>
						First Name <span className="text-red-danger">*</span>
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						aria-label="firstName"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.firstName && (
						<span className="text-red-danger text-sm">
							{errors.firstName ? '* ' + errors.firstName : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="lastName"
						className="block mb-2 text-sm font-medium read-only"
					>
						Last Name <span className="text-red-danger">*</span>
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						aria-label="lastName"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.lastName && (
						<span className="text-red-danger text-sm">
							{errors.lastName ? '* ' + errors.lastName : ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6 pt-2 space-y-2 lg:space-y-0">
				<div className="py-2 w-full">
					<label
						htmlFor="birthplace"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tempat Lahir <span className="text-red-danger">*</span>
					</label>
					<input
						type="text"
						id="birthplace"
						name="birthplace"
						aria-label="birthplace"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
					/>
					{errors.birthplace && (
						<span className="text-red-danger text-sm">
							{errors.birthplace ? '* ' + errors.birthplace : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="birthdate"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tanggal Lahir <span className="text-red-danger">*</span>
					</label>
					<input
						type="date"
						id="birthdate"
						name="birthdate"
						aria-label="birthdate"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						onChange={handleChange}
					/>
					{errors.birthdate && (
						<span className="text-red-danger text-sm">
							{errors.birthdate ? '* ' + errors.birthdate : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="gender"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jenis Kelamin <span className="text-red-danger">*</span>
					</label>

					<div className="inline-flex space-x-3 py-2">
						<input
							type="radio"
							id="female"
							value="true"
							name="gender"
							aria-label="gender"
							className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
							onChange={handleChange}
						/>
						<label htmlFor="female">Wanita</label>

						<input
							type="radio"
							id="male"
							value="false"
							name="gender"
							aria-label="gender"
							className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
							onChange={handleChange}
						/>
						<label htmlFor="male">Pria</label>
					</div>
					{errors.gender && (
						<span className="text-red-danger text-sm">
							<br />
							{errors.gender ? '* ' + errors.gender : ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 lg:w-1/2">
					<label
						htmlFor="religion"
						className="block mb-2 text-sm font-medium read-only"
					>
						Agama <span className="text-red-danger">*</span>
					</label>
					<select
						id="religion"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="religion"
						onChange={handleChange}
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
					{errors.religion && (
						<span className="text-red-danger text-sm">
							{errors.religion ? '* ' + errors.religion : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 lg:w-1/2">
					<label
						htmlFor="citizenship"
						className="block mb-2 text-sm font-medium read-only"
					>
						Kewarganegaraan{' '}
						<span className="text-red-danger">*</span>
					</label>
					<select
						id="citizenship"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="citizenship"
						onChange={handleChange}
					>
						<option selected disabled hidden></option>
						<option value="WNI" className="text-black">
							WNI
						</option>
						<option value="WNA" className="text-black">
							WNA
						</option>
					</select>
					{errors.citizenship && (
						<span className="text-red-danger text-sm">
							{errors.citizenship
								? '* ' + errors.citizenship
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<label
					htmlFor="address"
					className="block mb-2 text-sm font-medium read-only"
				>
					Alamat <span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="address"
					name="address"
					aria-label="address"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
				{errors.address && (
					<span className="text-red-danger text-sm">
						{errors.address ? '* ' + errors.address : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="phone"
					className="block mb-2 text-sm font-medium read-only"
				>
					No. Telephone <span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="phone"
					name="phone"
					aria-label="phone"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
				{errors.phone && (
					<span className="text-red-danger text-sm">
						{errors.phone ? '* ' + errors.phone : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="education"
					className="block mb-2 text-sm font-medium read-only"
				>
					Pendidikan <span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="education"
					name="education"
					aria-label="education"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					onChange={handleChange}
				/>
				{errors.education && (
					<span className="text-red-danger text-sm">
						{errors.education ? '* ' + errors.education : ''}
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
