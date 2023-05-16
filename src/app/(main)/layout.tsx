import '@/styles/globals.css';
import Navbar from '@/components/layout/main/Navbar';
import NavbarLoggedIn from '@/components/layout/loggedIn/NavbarLoggedIn';
import Footer from '@/components/layout/main/Footer';
import Providers from './providers';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export default function MainLayout({ children }: IProps) {
	return (
		<html lang="en">
			<body className="relative">
				<Providers>
					<Navbar />
					<div className="w-full bg-blue-400 pt-20">{children}</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
