import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SignInForm() {
	return (
		<form>
			<div className="grid gap-6 mb-6 md:grid-rows-2">
				<div className="mb-6">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium"
					>
						Email address
					</label>
					<input
						type="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="john.doe@company.com"
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
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="•••••••••"
						required
					/>
				</div>
			</div>
			<Link href="/beranda">
				<button
					type="submit"
					className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center"
				>
					Masuk
				</button>
			</Link>
		</form>
	);
}
