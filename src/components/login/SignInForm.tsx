'use client';

import { signIn } from 'next-auth/react';
import { useRef } from 'react';
import Link from 'next/link';

export default function SignInForm() {
	const email = useRef('');
	const password = useRef('');

	const onSubmit = async () => {
		const result = await signIn('credentials', {
			email: email.current,
			password: password.current,
			redirect: true,
			callbackUrl: '/beranda',
		});
	};

	return (
		<>
			<form>
				<div className="flex flex-col gap-6 mb-6 md:grid-rows-2">
					<div className="mb-6">
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
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="john.doe@company.com"
							onChange={(e) => (email.current = e.target.value)}
							required
						/>
					</div>
					<div className="mb-6">
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
							placeholder="•••••••••"
							onChange={(e) =>
								(password.current = e.target.value)
							}
							required
						/>
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
		</>
	);
}
