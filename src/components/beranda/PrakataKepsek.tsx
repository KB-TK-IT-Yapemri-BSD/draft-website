import Image from 'next/image';
import Link from 'next/link';

function PrakataKepsek() {
	return (
		<div className="bg-white">
			<div className=" flex flex-col justify-center py-10 lg:flex-row lg:mx-40 lg:py-20">
				<div className="w-3/4 h-[300px] lg:w-[700px] lg:min-h-[500px] self-center relative">
					<div className="p-20">
						<Image
							src="/beranda/guru-staff.jpg"
							fill
							alt="Kepala Sekolah Yapemri BSD"
							style={{
								objectFit: 'cover',
							}}
							className="rounded-lg border-white border-2 shadow-xl"
						/>
					</div>
				</div>

				<div className="px-8 text-center my-6 lg:px-0 lg:text-left lg:my-0 lg:w-10/12 lg:pl-20">
					<h1 className="text-4xl pt-5 font-medium">
						Prakata Kepala Sekolah
					</h1>
					<h2 className="text-3xl py-3">KB TK IT Yapemri BSD</h2>
					<p className="my-3 mt-6 italic">
						Assalaamualaikum Warohmatullohi Wabarokaatuh
					</p>
					<p className="my-3 text-justify">
						Puji serta syukur Alhamdulillah kita panjatkan ke
						hadirat Alloh, SWT atas segala limpahan nikmat dan
						karuniaNya, dan semoga keberkahan selalu menyertai
						disetiap langah kita. Sholawat serta salam semoga
						tercurah kepada Junjunan Alam Nabi besar kita Muhammad
						SAW, keluarganya, sahabat serta semua para pengikutnya
						hingga yaumul akhir. Aamiin...
					</p>
					<p className="my-3 text-justify">
						Pertama sekali kami mengucapkan selamat datang dan
						selamat bergabung di KB- TK IT YAPEMRI BSD Tahun
						pembelajaran 2020-2021 pada semester 2 dan Tahun
						Pembelajaran 2021-2022. Tahun ini merupakan tahun
						pertama beroperasinya sekolah ini. Kami sangat
						menghargai atas pilihan bapak/ibu yang sudah
						mempercayakan putra /i bersekolah di KB-TK IT YAPEMRI
						BSD seluruh guru dan staff akan selalu berusaha
						memberikan pelayanan pendidikan dan pengajaran yang
						terbaik untuk putra/i Bapak/Ibu.
					</p>
					<p className="my-3 text-justify">
						Bersama ini kami buatkan buku panduan pembelajaran
						selama 1 tahun kedepan. Semoga buku panduan ini dapat
						menjembatani persamaan pembelajaran antara sekolah
						dengan orang tua/wali murid dan juga merupakan panduan
						secara umum bagi orang tua/ wali murid mengenai visi dan
						misi serta kegiatan-kegiatan sekolah.
					</p>
					<p className="my-3 text-justify">
						Kami sebagai pihak sekolah meminta kerja sama dari
						Bapak/Ibu dalam memberikan pendidikan bagi putra/i kita
						semua di rumah. Dengan harapan kami kelak dapat mencetak
						anak didik menjadi pribadi-pribadi yang unggul dan
						bermanfaat bagi agama, nusa dan bangsa serta terwujudnya
						masa depan yanga gemilang bagi putra/i kita semua
						Aamiin...
					</p>
					<p className="my-3 italic">
						Wassalaamualaikum Warohmatullohi Wabarokaatuh
					</p>
				</div>
			</div>
		</div>
	);
}

export default PrakataKepsek;
