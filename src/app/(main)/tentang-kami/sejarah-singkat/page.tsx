import SejarahSingkatHeader from '@/components/layout/SejarahSingkatHeader';
import { ArrowRight, HomepageSymbol } from '@/components/shared/Icons';
import Link from 'next/link';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Tentang Kami',
};

export default function SejarahSingkat() {
	return (
		<>
			<SejarahSingkatHeader />

			<div className="bg-white">
				<div className="mx-10 py-20 lg:mx-60 divide-y-2 space-y-6">
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
											Sejarah Singkat
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div className="w-full py-10">
						<div className="text-justify p-4 text-sm lg:p-10 leading-relaxed border-dashed border-2 border-grey">
							<p className="py-2">
								SMP Negeri 1 CIbadak didirikan pada tahun 1965
								berdasarkan Surat Keputusan Menteri P & K
								Republik Indonesia. Pada mulanya, Sekolah
								didirikan di daerah kebon pala yang sekarang
								menjadi Pasar & Terminal cibadak. Berangkat dari
								antusias dan kepedulian masyarakat terhadap
								dunia pendidikan, maka sekolah ini resmi berdiri
								dengan nama SMP Cibadak.
							</p>
							<p className="py-2">
								SMP Negeri 1 Cibadak sebagai bagian dari dunia
								pendidikan yang berada di Kecamatan Cibadak
								mempunyai peranan yang sangat penting dalam
								meningkatkan sumber daya manusia Indonesia
								seutuhnya pada anak usia sekolah khususnya pada
								jenjang Sekolah menengah pertama, yang berada di
								Kabupaten Sukabumi.
							</p>
							<p className="py-2">
								Kemajuan Ilmu Pengetahuan dan Teknologi yang
								semakin cenderung membuat orang semakin sibuk
								dalam mengupayakan urusan duniawi. Mereka
								seolah-olah melupakan kebutuhan manusia yang
								paling utama yaitu kebutuhan akan pendidikan
								akhlak yang akan menjamin kebahagiaan dunia
								maupun akhirat. Hal ini tidak hanya terjadi di
								kota-kota besar saja, bahkan dampaknya ke
								daerah-daerah pedesaan sudah semakin terasa.
								Oleh karena itu. SMP Negeri 1 Cibadak merupakan
								salah satu pilihan bagi masyarakat untuk
								menyekolahkan putra-putrinya setelah tamat
								SD/MI, yang dapat memberikan Ilmu Pengetahuan
								pada peserta didiknya.
							</p>
							<p className="py-2">
								SMP Negeri 1 Cibadak, keberadaannya sangat
								diperlukan oleh masyarakat di lingkungan
								Kecamatan Cibadak, khususnya dan umumnya oleh
								masyarakat sekitar. Mereka berharap dengan
								menyekolahkan anaknya di SMP, sedikit banyak
								dapat membantu peran orang tua dalam
								menyelamatkan putra-putrinya dari bahaya yang di
								akibatkan oleh dampak negatif kemajuan Ilmu
								pengetahuan dan teknologi serta pengaruh
								perkembangan zaman dan dari pergaulan lingkungan
								yang negatif.
							</p>
							<p className="py-2">
								Kegiatan Belajar Mengajar yang diselenggarakan
								keberadaanya sangat membantu masyarakat dalam
								memenuhi tuntutan pengetahuan melalui jalur
								bidang pendidikan terutama pendidikan agama
								Islam, sehingga segenggam harapan terlahir dari
								hati nurani yang sangat dalam yang di motivasi
								oleh semangat belajar siswa/i serta simpati
								masyarakat sekitar, walau dalam kondisi ekonomi
								yang tak menentu, namun mereka tetap berupaya
								untuk dapat ke luar dari kebodohan dan
								keterbelakangan, guna mengejar ketinggalan
								langkah saudaranya yang jauh lebih maju.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
