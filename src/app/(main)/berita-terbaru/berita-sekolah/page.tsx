import BeritaSekolahHeader from '@/components/layout/BeritaSekolahHeader';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Berita Terbaru',
};

export default function BeritaSekolah() {
	return (
		<>
			<BeritaSekolahHeader />

			<div className="bg-white">
				<div className="mx-20 py-20">
					<div className="w-full py-20 border-solid border-black">
						<h1 className="text-4xl text-center font-semibold">
							Berita Sekolah
						</h1>
						<div className="text-justify p-10 leading-relaxed">
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
