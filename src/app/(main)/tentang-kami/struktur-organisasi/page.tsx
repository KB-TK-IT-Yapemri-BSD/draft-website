import StrukturOrganisasiHeader from '@/components/layout/StrukturOrganisasiHeader';
import { ArrowRight, HomepageSymbol } from '@/components/shared/Icons';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Tentang Kami',
};

export default function StrukturOrganisasi() {
	return (
		<>
			<StrukturOrganisasiHeader />

			<div className="bg-white">
				<div className="mx-10 lg:mx-60 py-20 divide-y-2 space-y-6">
					<div>
						<nav className="flex" aria-label="Breadcrumb">
							<ol className="lg:inline-flex items-center">
								<li className="flex-col lg:inline-flex lg:items-center">
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
											Tentang Kami
										</span>
										<ArrowRight />
										<span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
											Struktur Organisasi
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div className="w-full py-10">
						<div className="p-4 lg:p-10 border-dashed border-2 border-grey justify-center">
							<Image
								src="/tentang-kami/strukturOrganisasi.png"
								width={2000}
								height={1000}
								alt="Struktur Organisasi KB TK IT Yapemri BSD"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
