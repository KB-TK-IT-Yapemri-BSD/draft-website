import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Page Not Found',
};

export default function PageNotFound() {
	return (
		<div className="grid h-screen w-screen text-center p-60">
			<div className="space-y-4">
				<h1 className="text-5xl font-semibold">
					Halaman tidak ditemukan...
				</h1>
				<p className="text-xl">
					Halaman yang sedang anda cari tidak tersedia.
				</p>
				<Link
					href="/beranda"
					className="flex w-fit items-center gap-3 border-2 px-3 py-2 mx-auto rounded-full bg-primary hover:bg-secondary hover:text-white"
				>
					<p className="capitalize">Kembali ke Beranda</p>
				</Link>
			</div>
		</div>
	);
}
