import Navbar from '@/components/layout/main/Navbar';
import NavbarLoggedIn from '@/components/layout/loggedIn/NavbarLoggedIn';
import Footer from '@/components/layout/main/Footer';
import '@/styles/globals.css';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative">
				<NavbarLoggedIn />
				<div className="w-full bg-blue-400 pt-20">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
