import PendaftaranHeader from '@/components/layout/PendaftaranHeader';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Pendaftaran',
};

export default function Pendaftaran() {
	return (
		<>
			<PendaftaranHeader />

			<div className="bg-white">
				<div className="mx-60 py-10">
					<div className="w-full py-20 border-solid border-black">
						<div className="card leading-relaxed">
							<h1 className="text-2xl text-center font-semibold bg-primary p-2">
								Syarat Pendaftaran
							</h1>
							<ul className="py-4 ml-6 text-justify list-decimal">
								<li>
									Usia memenuhi persyaratan masuk KB (3-4
									Tahun)
								</li>
								<li>
									Mengisi formulir pendaftaran pada laman
									https://kb-tk-it-yapemribsd/pendaftaran/form
								</li>
								<li>
									Menyerahkan fotocopy (Akta Kelahiran, Kartu
									Keluarga, KTP Ayah dan Ibu (masing-masing 1
									lembar), Pas Photo Calon Siswa ukuran 2x3
									dan 3x4 (masing-masing 1 lembar).
								</li>
								<li>
									Pembayaran ditransfer melalui BCA 5235597788
									YAYASAN PENDIDIKAN MASYARAKAT REPUBLIK
									INDONESIA
								</li>
								<li>
									Bukti transfer diupload pada laman
									https://kb-tk-it-yapemribsd/profil/keuangan/uploadkeuangan
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
