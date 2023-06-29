'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { studentSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
		mother_id: '',
		father_id: '',
	};

	type Errors = {
		grade?: string;
		firstName?: string;
		lastName?: string;
		birthplace?: string;
		birthdate?: Date;
		gender?: boolean;
		religion?: string;
		citizenship?: string;
		address?: string;
		nickname?: string;
		birthOrder?: number;
		numOfSiblings?: number;
		statusInFamily?: string;
		studentStatus?: string;
		height?: number;
		weight?: number;
		bloodType?: string;
		diseaseHistory?: string;
		distanceToHome?: string;
		language?: string;
		mother_id?: string;
		father_id?: string;
	};

	const [errors, setErrors] = useState<Errors>({});
	const [dataFathers, setDataFathers] = useState([]);
	const [dataMothers, setDataMothers] = useState([]);
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
			studentSchema.parse(dataForm);

			const results = await fetch('http://localhost:4000/v1/students', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});

			if (results?.status === 401) {
				toast.error('Data Murid gagal ditambah, silahkan coba lagi!', {
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
				router.push('/profile/data-murid');
			}
		} catch (error: any) {
			handleValidationErrors(error);
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
			<div className="py-2 pt-6">
				<label
					htmlFor="grade"
					className="block mb-2 text-sm font-medium read-only"
				>
					Grade <span className="text-red-danger">*</span>
				</label>
				<select
					id="grade"
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="grade"
					onChange={handleChange}
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
				{errors.grade && (
					<span className="text-red-danger text-sm">
						{errors.grade ? '* ' + errors.grade : ''}
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
				<div className="py-2 w-full">
					<label
						htmlFor="nickname"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nama Panggilan{' '}
						<span className="text-red-danger">*</span>
					</label>
					<input
						type="text"
						id="nickname"
						name="nickname"
						aria-label="nickname"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.nickname && (
						<span className="text-red-danger text-sm">
							{errors.nickname ? '* ' + errors.nickname : ''}
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
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
						<label htmlFor="female">Perempuan</label>
						<input
							type="radio"
							id="male"
							value="false"
							name="gender"
							aria-label="gender"
							className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
							onChange={handleChange}
						/>
						<label htmlFor="male">Laki-Laki</label>
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
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.address && (
					<span className="text-red-danger text-sm">
						{errors.address ? '* ' + errors.address : ''}
						<br />
					</span>
				)}
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="birthOrder"
						className="block mb-2 text-sm font-medium read-only"
					>
						Anak Ke- <span className="text-red-danger">*</span>
					</label>
					<input
						type="number"
						id="birthOrder"
						name="birthOrder"
						aria-label="birthOrder"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.birthOrder && (
						<span className="text-red-danger text-sm">
							{errors.birthOrder ? '* ' + errors.birthOrder : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="numOfSiblings"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jumlah Saudara{' '}
						<span className="text-red-danger">*</span>
					</label>
					<input
						type="number"
						id="numOfSiblings"
						name="numOfSiblings"
						aria-label="numOfSiblings"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.numOfSiblings && (
						<span className="text-red-danger text-sm">
							{errors.numOfSiblings
								? '* ' + errors.numOfSiblings
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2 pt-3">
				<label
					htmlFor="statusInFamily"
					className="block mb-2 text-sm font-medium read-only"
				>
					Status di Keluarga{' '}
					<span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="statusInFamily"
					name="statusInFamily"
					aria-label="statusInFamily"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.statusInFamily && (
					<span className="text-red-danger text-sm">
						{errors.statusInFamily
							? '* ' + errors.statusInFamily
							: ''}
						<br />
					</span>
				)}
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 w-full">
					<label
						htmlFor="height"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tinggi Badan <span className="text-red-danger">*</span>
					</label>
					<input
						type="number"
						id="height"
						name="height"
						aria-label="height"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.height && (
						<span className="text-red-danger text-sm">
							{errors.height ? '* ' + errors.height : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="weight"
						className="block mb-2 text-sm font-medium read-only"
					>
						Berat Badan <span className="text-red-danger">*</span>
					</label>
					<input
						type="number"
						id="weight"
						name="weight"
						aria-label="weight"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						onChange={handleChange}
					/>
					{errors.weight && (
						<span className="text-red-danger text-sm">
							{errors.weight ? '* ' + errors.weight : ''}
							<br />
						</span>
					)}
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="bloodType"
						className="block mb-2 text-sm font-medium read-only"
					>
						Golongan Darah{' '}
						<span className="text-red-danger">*</span>
					</label>
					<select
						id="bloodType"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="bloodType"
						onChange={handleChange}
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
					{errors.bloodType && (
						<span className="text-red-danger text-sm">
							{errors.bloodType ? '* ' + errors.bloodType : ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2 pt-3">
				<label
					htmlFor="diseaseHistory"
					className="block mb-2 text-sm font-medium read-only"
				>
					Riwayat Penyakit <span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="diseaseHistory"
					name="diseaseHistory"
					aria-label="diseaseHistory"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.diseaseHistory && (
					<span className="text-red-danger text-sm">
						{errors.diseaseHistory
							? '* ' + errors.diseaseHistory
							: ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="distanceToHome"
					className="block mb-2 text-sm font-medium read-only"
				>
					Jarak Tempat Tinggal ke TK{' '}
					<span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="distanceToHome"
					name="distanceToHome"
					aria-label="distanceToHome"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.distanceToHome && (
					<span className="text-red-danger text-sm">
						{errors.distanceToHome
							? '* ' + errors.distanceToHome
							: ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="language"
					className="block mb-2 text-sm font-medium read-only"
				>
					Bahasa Sehari-hari{' '}
					<span className="text-red-danger">*</span>
				</label>
				<input
					type="text"
					id="language"
					name="language"
					aria-label="language"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={handleChange}
				/>
				{errors.language && (
					<span className="text-red-danger text-sm">
						{errors.language ? '* ' + errors.language : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="father_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Father ID <span className="text-red-danger">*</span>
				</label>
				<select
					id="father_id"
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="father_id"
					onChange={handleChange}
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
				{errors.father_id && (
					<span className="text-red-danger text-sm">
						{errors.father_id ? '* ' + errors.father_id : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<label
					htmlFor="mother_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Mother ID <span className="text-red-danger">*</span>
				</label>
				<select
					id="mother_id"
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="mother_id"
					onChange={handleChange}
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
				{errors.mother_id && (
					<span className="text-red-danger text-sm">
						{errors.mother_id ? '* ' + errors.mother_id : ''}
						<br />
					</span>
				)}
			</div>

			<div className="lg:text-right">
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
