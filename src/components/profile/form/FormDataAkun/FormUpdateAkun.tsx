'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FormUpdateAkun({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const router = useRouter();

	const [dataUser, setDataUser] = useState();
	const [dataStaffs, setDataStaffs] = useState([]);
	const [dataStaff, setDataStaff] = useState();
	const [dataStudents, setDataStudents] = useState([]);
	const [dataStudent, setDataStudent] = useState();

	let initialValues = {
		email: '',
		role: '',
		biodata_id: '',
		biodataType: '',
		picture: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	const getDataUser = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/users/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUser(data);
			setFormValues({
				email: data['email'],
				role: data['role'],
				biodata_id: data['biodata_id'],
				biodataType: data['biodataType'],
				picture: data['picture'],
			});

			if (data.biodataType === 'Student') {
				const getDataStudent = async () => {
					try {
						let res = await fetch(
							`http://localhost:4000/v1/students/${data.biodata_id}`,
							{
								method: 'GET',
								headers: {
									Authorization: `Bearer ${session?.user.token.accessToken}`,
								},
							}
						);

						const result = await res.json();
						setDataStudent(result);
					} catch (error) {
						throw error;
					}
				};

				const getDataStudents = async () => {
					try {
						let res = await fetch(
							`http://localhost:4000/v1/students`,
							{
								method: 'GET',
								headers: {
									Authorization: `Bearer ${session?.user.token.accessToken}`,
								},
							}
						);

						const result = await res.json();
						setDataStudents(result);
					} catch (error) {
						throw error;
					}
				};

				getDataStudent();
				getDataStudents();
			} else if (data.biodataType === 'Staff') {
				const getDataStaff = async () => {
					try {
						let res = await fetch(
							`http://localhost:4000/v1/staffs/${data.biodata_id}`,
							{
								method: 'GET',
								headers: {
									Authorization: `Bearer ${session?.user.token.accessToken}`,
								},
							}
						);

						const result = await res.json();
						setDataStaff(result);
					} catch (error) {
						throw error;
					}
				};

				const getDataStaffs = async () => {
					try {
						let res = await fetch(
							`http://localhost:4000/v1/staffs`,
							{
								method: 'GET',
								headers: {
									Authorization: `Bearer ${session?.user.token.accessToken}`,
								},
							}
						);

						const data = await res.json();
						setDataStaffs(data);
					} catch (error) {
						throw error;
					}
				};

				getDataStaff();
				getDataStaffs();
			}
		} catch (error) {
			throw error;
		}
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleUpdateUsers = async (formValues: any) => {
		const imageUpload = await cloudinary.uploader.upload(
			formValues.picture,
			{
				upload_preset: 'yapemri',
				folder: 'yapemri/yapemri_user',
			}
		);
		const newPath = imageUpload.secure_url;

		const dataForm = {
			email: formValues.email,
			role: formValues.role,
			biodata_id: formValues?.biodata_id,
			biodataType: formValues.biodataType,
			picture: newPath,
		} as any;

		try {
			await fetch(`http://localhost:4000/v1/users/${id}`, {
				method: 'PATCH',
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
		handleUpdateUsers(formValues);
	};

	useEffect(() => {
		getDataUser();
	}, []);

	return (
		<form method="PATCH" onSubmit={handleSubmit}>
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
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black"
					defaultValue={formValues.email}
					onChange={handleChange}
				/>
			</div>

			{formValues.biodataType === 'Staff' ? (
				<>
					<div className="py-2">
						<label
							htmlFor="role"
							className="block mb-2 text-sm font-medium read-only"
						>
							Role
						</label>
						<select
							id="role"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
							name="role"
							onChange={handleChange}
						>
							<option
								defaultValue={formValues.role}
								selected
								disabled
								hidden
							>
								{formValues.role
									? formValues.role === 'teachers'
										? 'Guru'
										: formValues.role === 'principal'
										? 'Kepala Sekolah'
										: 'Administrasi'
									: ''}
							</option>
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
								defaultValue={formValues.biodata_id}
								selected
								className="hidden"
							>
								{dataStaff?.['firstName'] +
									' ' +
									dataStaff?.['lastName']}
							</option>
							{dataStaffs
								? dataStaffs.map((user) => (
										<option
											key={user['id']}
											value={user['id']}
											className="text-black"
										>
											{user['firstName'] +
												' ' +
												user['lastName']}
										</option>
								  ))
								: ''}
						</select>
					</div>
				</>
			) : (
				<>
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
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
							defaultValue={
								formValues.role.charAt(0).toUpperCase() +
								formValues.role.slice(1)
							}
							disabled
						/>
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
								defaultValue={formValues.biodata_id}
								disabled
								className="hidden"
							>
								{dataStudent?.['firstName'] +
									' ' +
									dataStudent?.['lastName']}
							</option>
							{dataStudents
								? dataStudents.map((user) => (
										<option
											key={user['id']}
											value={user['id']}
											className="text-black"
										>
											{user['firstName'] +
												' ' +
												user['lastName']}
										</option>
								  ))
								: ''}
						</select>
					</div>
				</>
			)}

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
					aria-label="biodataType"
					className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
					defaultValue={formValues.biodataType}
					disabled
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
