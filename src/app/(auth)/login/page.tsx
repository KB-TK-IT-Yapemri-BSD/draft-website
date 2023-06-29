import SignInForm from '@/components/login/SignInForm';
import Image from 'next/image';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Login',
};

export default function SignInPage() {
	return (
		<div className="w-screen h-screen flex flex-col bg-secondary lg:flex-row">
			{/**
			 * <div className="bg-secondary w-1/4"></div>
			 */}

			<Image
				src="/login/line-deco.png"
				fill
				alt="Line Login Decoration"
				priority
				style={{
					objectFit: 'cover',
					maxWidth: '100%',
					zIndex: 0,
				}}
			></Image>

			{/**
 * <Image
					src="/login/kids.png"
					width={350}
					height={350}
					alt="Kids Picture"
					style={{
						objectFit: 'contain',
						maxWidth: '100%',
						height: 'auto',
						left: 0,
						top: 0,
					}}
				></Image>
 */}

			<div className="card p-10 shadow-2xl w-3/4 h-fit mx-auto my-auto z-10">
				<h1 className="text-secondary text-center font-semibold text-4xl mb-4">
					Selamat Datang!
				</h1>
				<p className="text-secondary text-center font-semibold text-2xl mb-14">
					Website KB TK IT Yapemri BSD
				</p>
				<SignInForm />
			</div>
		</div>
	);
}
