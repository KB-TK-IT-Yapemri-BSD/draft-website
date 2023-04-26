import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Login',
};

export default function SignInPage() {
	return (
		<div className="flex flex-col bg-secondary w-full h-screen lg:flex-row-reverse">
			<div className="relative lg:absolute lg:left-10 lg:top-10">
				<Image
					src="/login/line-deco.png"
					width={1000}
					height={600}
					alt="Line Login Decoration"
					priority
				></Image>
			</div>
			<div className="relative -top-40 lg:top-80 lg:absolute lg:left-40 z-10">
				<Image
					src="/login/kids.png"
					width={350}
					height={350}
					alt="Kids Picture"
				></Image>
			</div>
			<div className="bg-white -top-40 lg:top-0 lg:w-8/12 relative">
				<div className="card lg:absolute p-10 lg:right-20 lg:top-10 shadow-2xl">
					<h1 className="text-secondary font-semibold text-2xl my-10 lg:text-4xl">
						Selamat Datang!
					</h1>

					<form>
						<div className="grid gap-6 mb-6 md:grid-rows-2">
							<div className="mb-6">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Email address
								</label>
								<input
									type="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="john.doe@company.com"
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="•••••••••"
									required
								/>
							</div>
						</div>
						<Link href="/beranda">
							<button
								type="submit"
								className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:px-40 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Masuk
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}
