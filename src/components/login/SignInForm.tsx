'use client';

import { ZodError } from 'zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authSchema } from '@/pages/api/validations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignInForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	type Errors = {
		email?: string;
		password?: string;
	};

	const [errors, setErrors] = useState<Errors>({});

	const router = useRouter();

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

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

	const onSubmit = async (e: any) => {
		e.preventDefault();

		try {
			authSchema.parse(formData);

			const results = await signIn('credentials', {
				email: formData.email,
				password: formData.password,
				redirect: false,
			});

			if (results?.status === 401) {
				toast.error(
					'Email or passsword is incorrect. Please try again',
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
				router.push('/beranda');
			}
		} catch (error: any) {
			handleValidationErrors(error);
		}
	};

	return (
		<>
			<form>
				<div className="flex flex-col gap-6 mb-6 md:grid-rows-2">
					<div className="mb-6 lg:mb-2">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium"
						>
							Email Address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1"
							onChange={handleChange}
							required
						/>
						{errors.email && (
							<span className="text-red-600 text-sm">
								{errors.email[0] ? '* ' + errors.email[0] : ''}
								<br />
								{errors.email[1] ? '* ' + errors.email[1] : ''}
							</span>
						)}
					</div>

					<div className="mb-6 lg:mt-0">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							onChange={handleChange}
							required
						/>
						{errors.password && (
							<span className="text-red-600 text-sm">
								{errors.password[0]
									? '* ' + errors.password[0]
									: ''}
								<br />
								{errors.password[1]
									? '* ' + errors.password[1]
									: ''}
							</span>
						)}
					</div>
				</div>
			</form>

			<button
				type="submit"
				className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
				onClick={onSubmit}
			>
				Masuk
			</button>

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
		</>
	);
}
