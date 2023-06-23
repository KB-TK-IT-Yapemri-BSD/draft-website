import VisiMisiHeader from '@/components/layout/VisiMisiHeader';
import { ArrowRight, HomepageSymbol } from '@/components/shared/Icons';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Tentang Kami',
};

export default function VisiMisi() {
	return (
		<>
			<VisiMisiHeader />

			<div className="bg-white">
				<div className="mx-10 lg:mx-60 py-20 divide-y-2 space-y-6">
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
											Tentang Kami
										</span>
										<ArrowRight />
										<span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
											Visi dan Misi
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div className="w-full py-10 space-y-10 leading-loose">
						<div className="card">
							<h1 className="text-xl lg:text-2xl text-center font-semibold bg-primary p-2">
								Tujuan
							</h1>
							<p className="p-2 py-4 text-sm lg:text-lg text-center">
								Berpartisipasi dalam mencetak generasi muslim
								yang unggul, guna membentuk masyarakat yang
								berakhlak, berilmu pengetahuan, kreatif dan
								berprestasi, mandiri dan kompetitif
							</p>
						</div>

						<div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
							<div className="card lg:w-1/2">
								<h1 className="text-xl lg:text-2xl text-center font-semibold bg-primary p-2">
									Visi
								</h1>
								<p className="p-2 py-4 text-sm lg:text-lg text-center">
									Membentuk pembelajar yang akhlakul karimah,
									berilmu, beretika, berwawasan lingkungan
									untuk menuju pentas dunia.
								</p>
							</div>
							<div className="card lg:w-1/2">
								<h1 className="text-xl lg:text-2xl text-center font-semibold bg-primary p-2">
									Misi
								</h1>
								<ul className="py-4 ml-6 text-sm lg:text-lg text-justify list-disc">
									<li>
										Mewujudkan pendidikan dengan keteladanan
									</li>
									<li>
										Mengembangkan budaya belajar dengan
										didasari pada kecintaan terhadap ilmu
										pengetahuan
									</li>
									<li>
										Meningkatkan fasilitas sekolah menuju
										sekolah bersih, sehat dan berwawasan
										lingkungan
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
