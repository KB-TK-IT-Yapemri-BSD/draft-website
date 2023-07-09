'use client';

import { ZodError } from 'zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { evaluationSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormUpdatePenilaian({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();
	const router = useRouter();

	const [dataEvaluation, setDataEvaluation] = useState();
	const [dataUsers, setDataUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();

	let initialValues = {
		student_id: '',
		grade: '',
		period: '',
		introduction: '',
		aspect_1: '',
		aspect_2: '',
		aspect_3: '',
		aspect_4: '',
		aspect_5: '',
		aspect_6: '',
		score_aspect_1: '',
		score_aspect_2: '',
		score_aspect_3: '',
		score_aspect_4: '',
		score_aspect_5: '',
		score_aspect_6: '',
		closing: '',
	};

	type Errors = {
		student_id?: string;
		grade?: string;
		period?: string;
		introduction?: string;
		aspect_1?: string;
		aspect_2?: string;
		aspect_3?: string;
		aspect_4?: string;
		aspect_5?: string;
		aspect_6?: string;
		score_aspect_1?: string;
		score_aspect_2?: string;
		score_aspect_3?: string;
		score_aspect_4?: string;
		score_aspect_5?: string;
		score_aspect_6?: string;
		closing?: string;
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

	const getDataEvaluation = async () => {
		try {
			let res = await fetch(
				`http://localhost:4000/v1/evaluations/${id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
					},
				}
			);

			const data = await res.json();
			setDataEvaluation(data);
			setFormValues({
				student_id: data['student_id']['_id'],
				grade: data['grade'],
				period: data['period'],
				introduction: data['introduction'],
				aspect_1: data['aspect_1'],
				aspect_2: data['aspect_2'],
				aspect_3: data['aspect_3'],
				aspect_4: data['aspect_4'],
				aspect_5: data['aspect_5'],
				aspect_6: data['aspect_6'],
				score_aspect_1: data['score_aspect_1'],
				score_aspect_2: data['score_aspect_2'],
				score_aspect_3: data['score_aspect_3'],
				score_aspect_4: data['score_aspect_4'],
				score_aspect_5: data['score_aspect_5'],
				score_aspect_6: data['score_aspect_6'],
				closing: data['closing'],
			});
		} catch (error) {
			throw error;
		}
	};

	const handleUpdateEvaluations = async (formValues: any) => {
		let dataForm = {} as any;

		if (formValues) {
			dataForm = {
				student_id: formValues.student_id,
				grade: formValues.grade,
				period: formValues.period,
				introduction: formValues.introduction,
				aspect_1: formValues.aspect_1,
				aspect_2: formValues.aspect_2,
				aspect_3: formValues.aspect_3,
				aspect_4: formValues.aspect_4,
				aspect_5: formValues.aspect_5,
				aspect_6: formValues.aspect_6,
				score_aspect_1: formValues.score_aspect_1,
				score_aspect_2: formValues.score_aspect_2,
				score_aspect_3: formValues.score_aspect_3,
				score_aspect_4: formValues.score_aspect_4,
				score_aspect_5: formValues.score_aspect_5,
				score_aspect_6: formValues.score_aspect_6,
				closing: formValues.closing,
			};
		}

		try {
			evaluationSchema.parse(formValues);

			const results = await fetch(
				`http://localhost:4000/v1/evaluations/${id}`,
				{
					method: 'PATCH',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(dataForm),
				}
			);

			if (results?.status === 401) {
				toast.error(
					'Data Penilaian gagal diubah, silahkan coba lagi!',
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
			} else if (results?.status === 200) {
				router.push('/profile/penilaian');
			}
		} catch (error: any) {
			handleValidationErrors(error);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleUpdateEvaluations(formValues);
	};

	useEffect(() => {
		getDataEvaluation();
		getDataUsers();
	}, []);

	return (
		<form method="PATCH" onSubmit={handleSubmit}>
			<div className="py-2 pt-8">
				<label
					htmlFor="student_id"
					className="block mb-2 text-sm font-medium read-only"
				>
					Student ID
				</label>
				<select
					id="student_id"
					className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					name="student_id"
					onChange={handleChange}
				>
					<option
						value={formValues.student_id}
						selected
						disabled
						hidden
					>
						{dataEvaluation
							? dataEvaluation['student_id']['firstName'] +
							  ' ' +
							  dataEvaluation['student_id']['lastName']
							: 'NO DATA'}
					</option>
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
				{errors.student_id && (
					<span className="text-red-danger text-sm">
						{errors.student_id ? '* ' + errors.student_id : ''}
						<br />
					</span>
				)}
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-6">
				<div className="py-2 lg:w-1/2">
					<label
						htmlFor="grade"
						className="block mb-2 text-sm font-medium read-only"
					>
						Kelompok Usia
					</label>
					<select
						id="grade"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="grade"
						onChange={handleChange}
					>
						<option
							value={formValues.grade}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.grade : 'NO DATA'}
						</option>
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

				<div className="py-2 lg:w-1/2">
					<label
						htmlFor="period"
						className="block mb-2 text-sm font-medium read-only"
					>
						Periode
					</label>
					<select
						id="period"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="period"
						onChange={handleChange}
					>
						<option
							value={formValues.period}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.period : 'NO DATA'}
						</option>
						<option value="Semester I" className="text-black">
							Semester I
						</option>
						<option value="Semester II" className="text-black">
							Semester II
						</option>
					</select>
					{errors.period && (
						<span className="text-red-danger text-sm">
							{errors.period ? '* ' + errors.period : ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<label
					htmlFor="introduction"
					className="block mb-2 text-sm font-medium read-only"
				>
					Pendahuluan
				</label>
				<textarea
					id="introduction"
					name="introduction"
					aria-label="introduction"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					defaultValue={formValues.introduction}
					onChange={handleChange}
				/>
				{errors.introduction && (
					<span className="text-red-danger text-sm">
						{errors.introduction ? '* ' + errors.introduction : ''}
						<br />
					</span>
				)}
			</div>

			<div className="py-2">
				<p className="font-bold">I. NILAI MORAL AGAMA </p>
				<hr />
				<div className="py-2 pt-4">
					<label
						htmlFor="aspect_1"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deskripsi
					</label>
					<textarea
						id="aspect_1"
						name="aspect_1"
						aria-label="aspect_1"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						defaultValue={formValues.aspect_1}
						onChange={handleChange}
					/>
					{errors.aspect_1 && (
						<span className="text-red-danger text-sm">
							{errors.aspect_1 ? '* ' + errors.aspect_1 : ''}
							<br />
						</span>
					)}
				</div>
				<div className="py-2">
					<label
						htmlFor="score_aspect_1"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nilai
					</label>
					<select
						id="score_aspect_1"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="score_aspect_1"
						onChange={handleChange}
					>
						<option
							value={formValues.score_aspect_1}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.score_aspect_1 : 'NO DATA'}
						</option>
						<option value="BB" className="text-black">
							BB (Belum Berkembang)
						</option>
						<option value="MB" className="text-black">
							MB (Mulai Berkembang)
						</option>
						<option value="BSH" className="text-black">
							BSH (Berkembang Sesuai Harapan)
						</option>
						<option value="BSB" className="text-black">
							BSB (Berkembang Sangat Baik)
						</option>
					</select>
					{errors.score_aspect_1 && (
						<span className="text-red-danger text-sm">
							{errors.score_aspect_1
								? '* ' + errors.score_aspect_1
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<p className="font-bold">II. NILAI SOSIAL EMOSIONAL </p>
				<hr />
				<div className="py-2 pt-4">
					<label
						htmlFor="aspect_2"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deskripsi
					</label>
					<textarea
						id="aspect_2"
						name="aspect_2"
						aria-label="aspect_2"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						defaultValue={formValues.aspect_2}
						onChange={handleChange}
					/>
					{errors.aspect_2 && (
						<span className="text-red-danger text-sm">
							{errors.aspect_2 ? '* ' + errors.aspect_2 : ''}
							<br />
						</span>
					)}
				</div>
				<div className="py-2">
					<label
						htmlFor="score_aspect_2"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nilai
					</label>
					<select
						id="score_aspect_2"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="score_aspect_2"
						onChange={handleChange}
					>
						<option
							value={formValues.score_aspect_2}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.score_aspect_2 : 'NO DATA'}
						</option>
						<option value="BB" className="text-black">
							BB (Belum Berkembang)
						</option>
						<option value="MB" className="text-black">
							MB (Mulai Berkembang)
						</option>
						<option value="BSH" className="text-black">
							BSH (Berkembang Sesuai Harapan)
						</option>
						<option value="BSB" className="text-black">
							BSB (Berkembang Sangat Baik)
						</option>
					</select>
					{errors.score_aspect_2 && (
						<span className="text-red-danger text-sm">
							{errors.score_aspect_2
								? '* ' + errors.score_aspect_2
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<p className="font-bold">III. NILAI BAHASA </p>
				<hr />
				<div className="py-2 pt-4">
					<label
						htmlFor="aspect_3"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deskripsi
					</label>
					<textarea
						id="aspect_3"
						name="aspect_3"
						aria-label="aspect_3"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						defaultValue={formValues.aspect_3}
						onChange={handleChange}
					/>
					{errors.aspect_3 && (
						<span className="text-red-danger text-sm">
							{errors.aspect_3 ? '* ' + errors.aspect_3 : ''}
							<br />
						</span>
					)}
				</div>
				<div className="py-2">
					<label
						htmlFor="score_aspect_3"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nilai
					</label>
					<select
						id="score_aspect_3"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="score_aspect_3"
						onChange={handleChange}
					>
						<option
							value={formValues.score_aspect_3}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.score_aspect_3 : 'NO DATA'}
						</option>
						<option value="BB" className="text-black">
							BB (Belum Berkembang)
						</option>
						<option value="MB" className="text-black">
							MB (Mulai Berkembang)
						</option>
						<option value="BSH" className="text-black">
							BSH (Berkembang Sesuai Harapan)
						</option>
						<option value="BSB" className="text-black">
							BSB (Berkembang Sangat Baik)
						</option>
					</select>
					{errors.score_aspect_3 && (
						<span className="text-red-danger text-sm">
							{errors.score_aspect_3
								? '* ' + errors.score_aspect_3
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<p className="font-bold">IV. NILAI KOGNITIF </p>
				<hr />
				<div className="py-2 pt-4">
					<label
						htmlFor="aspect_4"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deskripsi
					</label>
					<textarea
						id="aspect_4"
						name="aspect_4"
						aria-label="aspect_4"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						defaultValue={formValues.aspect_4}
						onChange={handleChange}
					/>
					{errors.aspect_4 && (
						<span className="text-red-danger text-sm">
							{errors.aspect_4 ? '* ' + errors.aspect_4 : ''}
							<br />
						</span>
					)}
				</div>
				<div className="py-2">
					<label
						htmlFor="score_aspect_4"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nilai
					</label>
					<select
						id="score_aspect_4"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="score_aspect_4"
						onChange={handleChange}
					>
						<option
							value={formValues.score_aspect_4}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.score_aspect_4 : 'NO DATA'}
						</option>
						<option value="BB" className="text-black">
							BB (Belum Berkembang)
						</option>
						<option value="MB" className="text-black">
							MB (Mulai Berkembang)
						</option>
						<option value="BSH" className="text-black">
							BSH (Berkembang Sesuai Harapan)
						</option>
						<option value="BSB" className="text-black">
							BSB (Berkembang Sangat Baik)
						</option>
					</select>
					{errors.score_aspect_4 && (
						<span className="text-red-danger text-sm">
							{errors.score_aspect_4
								? '* ' + errors.score_aspect_4
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<p className="font-bold">V. NILAI FISIK MOTORIK </p>
				<hr />
				<div className="py-2 pt-4">
					<label
						htmlFor="aspect_5"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deskripsi
					</label>
					<textarea
						id="aspect_5"
						name="aspect_5"
						aria-label="aspect_5"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						defaultValue={formValues.aspect_5}
						onChange={handleChange}
					/>
					{errors.aspect_5 && (
						<span className="text-red-danger text-sm">
							{errors.aspect_5 ? '* ' + errors.aspect_5 : ''}
							<br />
						</span>
					)}
				</div>
				<div className="py-2">
					<label
						htmlFor="score_aspect_5"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nilai
					</label>
					<select
						id="score_aspect_5"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="score_aspect_5"
						onChange={handleChange}
					>
						<option
							value={formValues.score_aspect_5}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.score_aspect_5 : 'NO DATA'}
						</option>
						<option value="BB" className="text-black">
							BB (Belum Berkembang)
						</option>
						<option value="MB" className="text-black">
							MB (Mulai Berkembang)
						</option>
						<option value="BSH" className="text-black">
							BSH (Berkembang Sesuai Harapan)
						</option>
						<option value="BSB" className="text-black">
							BSB (Berkembang Sangat Baik)
						</option>
					</select>
					{errors.score_aspect_5 && (
						<span className="text-red-danger text-sm">
							{errors.score_aspect_5
								? '* ' + errors.score_aspect_5
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<p className="font-bold">VI. NILAI SENI </p>
				<hr />
				<div className="py-2 pt-4">
					<label
						htmlFor="aspect_6"
						className="block mb-2 text-sm font-medium read-only"
					>
						Deskripsi
					</label>
					<textarea
						id="aspect_6"
						name="aspect_6"
						aria-label="aspect_6"
						className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						defaultValue={formValues.aspect_6}
						onChange={handleChange}
					/>
					{errors.aspect_6 && (
						<span className="text-red-danger text-sm">
							{errors.aspect_6 ? '* ' + errors.aspect_6 : ''}
							<br />
						</span>
					)}
				</div>
				<div className="py-2">
					<label
						htmlFor="score_aspect_6"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nilai
					</label>
					<select
						id="score_aspect_6"
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						name="score_aspect_6"
						onChange={handleChange}
					>
						<option
							value={formValues.score_aspect_6}
							selected
							disabled
							hidden
						>
							{formValues ? formValues.score_aspect_6 : 'NO DATA'}
						</option>
						<option value="BB" className="text-black">
							BB (Belum Berkembang)
						</option>
						<option value="MB" className="text-black">
							MB (Mulai Berkembang)
						</option>
						<option value="BSH" className="text-black">
							BSH (Berkembang Sesuai Harapan)
						</option>
						<option value="BSB" className="text-black">
							BSB (Berkembang Sangat Baik)
						</option>
					</select>
					{errors.score_aspect_6 && (
						<span className="text-red-danger text-sm">
							{errors.score_aspect_6
								? '* ' + errors.score_aspect_6
								: ''}
							<br />
						</span>
					)}
				</div>
			</div>

			<div className="py-2">
				<label
					htmlFor="closing"
					className="block mb-2 text-sm font-medium read-only"
				>
					Penutup
				</label>
				<textarea
					id="closing"
					name="closing"
					aria-label="closing"
					className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					defaultValue={formValues.closing}
					onChange={handleChange}
				/>
				{errors.closing && (
					<span className="text-red-danger text-sm">
						{errors.closing ? '* ' + errors.closing : ''}
						<br />
					</span>
				)}
			</div>

			<div className="text-right">
				<button
					type="submit"
					className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-medium rounded-lg text-sm w-full lg:w-auto px-10 lg:px-40 py-2.5 text-center"
				>
					Ubah
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
