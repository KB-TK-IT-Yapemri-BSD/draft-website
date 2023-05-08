import SignInForm from '@/components/login/SignInForm';
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
				<div className="card lg:absolute p-10 lg:right-20 shadow-2xl lg:h-screen">
					<h1 className="text-secondary font-semibold text-2xl my-10 lg:text-4xl">
						Selamat Datang!
					</h1>

					<SignInForm />
				</div>
			</div>
		</div>
	);
}
