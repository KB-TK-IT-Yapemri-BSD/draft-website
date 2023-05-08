import AgendaSekolahHeader from '@/components/layout/AgendaSekolahHeader';
import { ArrowRight, HomepageSymbol } from '@/components/shared/Icons';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Berita Terbaru',
};

export default function AgendaSekolah() {
	return (
		<>
			<AgendaSekolahHeader />

			<div className="bg-white">
				<div className="mx-10 lg:mx-40 py-20 divide-y-2 divide-grey space-y-6">
					<div>
						<nav className="flex" aria-label="Breadcrumb">
							<ol className="lg:inline-flex items-center">
								<li className="flex-col lg:inline-flex items-center">
									<Link
										href="/beranda"
										className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
									>
										<HomepageSymbol />
										Beranda
									</Link>
								</li>
								<li aria-current="page">
									<div className="flex lg:items-center">
										<ArrowRight />
										<span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center lg:mr-2">
											Berita Terbaru
										</span>
										<ArrowRight />
										<span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
											Agenda Sekolah
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>
					<div className="w-full py-20 border-solid border-black">
						<h1 className="text-4xl text-center font-semibold">
							Masih dalam proses pembuatan...
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}