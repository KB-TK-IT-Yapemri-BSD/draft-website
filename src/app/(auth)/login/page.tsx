import SignInForm from '@/components/login/SignInForm';
import Image from 'next/image';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Login',
};

export default function SignInPage() {
	return (
		<div className="flex flex-col bg-secondary w-full h-screen lg:flex-row-reverse">
			<div className="relative lg:absolute lg:left-10 lg:top-1/3">
				<Image
					src="/login/line-deco.png"
					width={1000}
					height={600}
					alt="Line Login Decoration"
					priority
					style={{
						objectFit: 'contain',
						width: 'auto',
						height: 'auto',
					}}
				></Image>
			</div>
			<div className="relative -top-40 lg:absolute lg:left-96 lg:top-2/3 z-10">
				<Image
					src="/login/kids.png"
					width={350}
					height={350}
					alt="Kids Picture"
					style={{
						objectFit: 'contain',
						width: 'auto',
						height: 'auto',
					}}
				></Image>
			</div>
			<div className="bg-white -top-40 lg:top-0 lg:w-8/12 relative">
				<div className="card lg:absolute p-10 lg:right-20 shadow-2xl lg:h-full">
					<h1 className="text-secondary font-semibold text-2xl my-10 lg:text-4xl">
						Selamat Datang!
					</h1>
					<SignInForm />
				</div>
			</div>
		</div>
	);
}
