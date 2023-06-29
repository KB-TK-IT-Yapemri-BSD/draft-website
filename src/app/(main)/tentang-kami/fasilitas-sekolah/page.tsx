import FasilitasSekolahHeader from '@/components/layout/FasilitasSekolahHeader';
import { ArrowRight, HomepageSymbol } from '@/components/shared/Icons';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Tentang Kami',
};

export default function FasilitasSekolah() {
	return (
		<>
			<FasilitasSekolahHeader />

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
											Fasilitas Sekolah
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div className="w-full py-10 flex flex-wrap place-content-around">
						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687267867/yapemri-photos/Example/IMG_000000_000000_lxolbb.jpg"
									alt="Ruang Kelas"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Ruang Kelas
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268059/yapemri-photos/Example/Ruang-TU-2-1024x683_btkedd.jpg"
									alt="Ruang Administrasi"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Ruang Administrasi
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268171/yapemri-photos/Example/RUANG-TATA-USAHA_kjnjv0.jpg"
									alt="Ruang Guru"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Ruang Guru
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268246/yapemri-photos/Example/IMG_20211021_112043-scaled_nfc2fq.jpg"
									alt="Ruang Kantor"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Ruang Kantor
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268332/yapemri-photos/Example/toilet-sekolah_20180824_203722_eoliih.jpg"
									alt="Kamar Mandi"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Kamar Mandi
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Aula Bermain Anak"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Aula Bermain Anak
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687267753/yapemri-photos/Example/2019-01-15-10-40-42_pgx8pr.jpg"
									alt="Rak Buku"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Rak Buku
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268410/yapemri-photos/Example/IMG_20220215_085020-scaled_d990o3.jpg"
									alt="Dapur"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Dapur
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268485/yapemri-photos/Example/fariz3501-588c40dacdd24f38e0d833e8db46fb6a_ydiabd.jpg"
									alt="Mainan Outdoor"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Mainan Outdoor
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687268576/yapemri-photos/Example/ludoteca-abierta-logrono1_ic0dzo.jpg"
									alt="Mainan Indoor"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Mainan Indoor
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
