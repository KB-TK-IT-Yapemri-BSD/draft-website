import Navbar from '@/components/layout/main/Navbar';
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
				<Navbar />
				<div className="w-full bg-blue-400 pt-20">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
