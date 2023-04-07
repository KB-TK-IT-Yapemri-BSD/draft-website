import DaftarProgramHeader from '@/components/layout/DaftarProgramHeader';
import {
	ArrowRight,
	HomepageSymbol,
	MagnifyingGlass,
} from '@/components/shared/Icons';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Program',
};

export default function Program() {
	return (
		<>
			<DaftarProgramHeader />

			<div className="bg-white">
				<div className="mx-60 py-20 divide-y-2 space-y-6">
					<div>
						<nav className="flex" aria-label="Breadcrumb">
							<ol className="inline-flex items-center space-x-1 md:space-x-3">
								<li className="inline-flex items-center">
									<Link
										href="/beranda"
										className="inline-flex items-center text-sm font-medium text-body-color hover:text-black"
									>
										<HomepageSymbol />
										Beranda
									</Link>
								</li>
								<li aria-current="page">
									<div className="flex items-center">
										<ArrowRight />
										<span className="flex text-sm font-medium md:ml-2 items-center mr-2">
											Program
										</span>
										<ArrowRight />
										<span className="flex ml-1 text-sm font-medium md:ml-2 items-center">
											Daftar Program
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div>
						<label className="relative block float-right mt-6">
							<span className="sr-only">Search</span>
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<MagnifyingGlass />
							</span>
							<input
								className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-8 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm"
								placeholder="Pencarian..."
								type="text"
								name="search"
							/>
						</label>

						<div className="w-full py-10 flex flex-wrap place-content-stretch">
							<div className="card w-80 mx-4 mb-10">
								<div className="py-20 bg-cover relative">
									<Image
										src="/tentang-kami/rakBuku.JPEG"
										alt="Kegiatan Harian"
										fill
										style={{ objectFit: 'cover' }}
									></Image>
								</div>
								<h1 className="text-lg text-center font-semibold bg-primary p-2">
									Kegiatan Harian
								</h1>
								<p className="p-2 py-4 text-justify text-md">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Dolore consequuntur nemo,
									quibusdam enim iusto ipsum magni quos
									reprehenderit illo distinctio.
								</p>
							</div>

							<div className="card w-80 mx-4 mb-10">
								<div className="py-20 bg-cover relative">
									<Image
										src="/tentang-kami/rakBuku.JPEG"
										alt="Kegiatan Outbound"
										fill
										style={{ objectFit: 'cover' }}
									></Image>
								</div>
								<h1 className="text-lg text-center font-semibold bg-primary p-2">
									Kegiatan Outbound
								</h1>
								<p className="p-2 py-4 text-justify text-md">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Ipsum, nemo ipsa iste
									exercitationem ipsam cupiditate nihil facere
									assumenda saepe minima.
								</p>
							</div>

							<div className="card w-80 mx-4 mb-10">
								<div className="py-20 bg-cover relative">
									<Image
										src="/tentang-kami/rakBuku.JPEG"
										alt="Kegiatan Renang"
										fill
										style={{ objectFit: 'cover' }}
									></Image>
								</div>
								<h1 className="text-lg text-center font-semibold bg-primary p-2">
									Kegiatan Renang
								</h1>
								<p className="p-2 py-4 text-justify text-md">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Distinctio earum deleniti
									explicabo iusto quos harum eligendi minima,
									laborum quis quaerat.
								</p>
							</div>

							<div className="card w-80 mx-4 mb-10">
								<div className="py-20 bg-cover relative">
									<Image
										src="/tentang-kami/rakBuku.JPEG"
										alt="Kunjungan ke Branchsto"
										fill
										style={{ objectFit: 'cover' }}
									></Image>
								</div>
								<h1 className="text-lg text-center font-semibold bg-primary p-2">
									Kunjungan ke Branchsto
								</h1>
								<p className="p-2 py-4 text-justify text-md">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Corrupti dolorum vero,
									dolor ut hic totam architecto deleniti
									culpa? Ex, praesentium?
								</p>
							</div>

							<div className="card w-80 mx-4 mb-10">
								<div className="py-20 bg-cover relative">
									<Image
										src="/tentang-kami/musholla.JPEG"
										alt="Kunjungan ke Masjid Al-Aqsha"
										fill
										style={{ objectFit: 'cover' }}
									></Image>
								</div>
								<h1 className="text-lg text-center font-semibold bg-primary p-2">
									Kunjungan ke Masjid Al-Aqsha
								</h1>
								<p className="p-2 py-4 text-justify text-md">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quo, perspiciatis? Soluta,
									veniam at tenetur blanditiis hic
									voluptatibus dolorem illo consequuntur!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
