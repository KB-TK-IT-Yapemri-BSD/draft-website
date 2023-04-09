import Image from 'next/image';
import Link from 'next/link';

function PrakataKepsek() {
	return (
		<div className="bg-white">
			<div className="mx-40 py-20 flex justify-center">
				<div className="w-[700px] min-h-[500px] relative self-center">
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

				<div className="w-10/12 pl-20">
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
						Kami sebagai pihak sekolah meminta kerja sama dari
						Bapak/Ibu dalam memberikan pendidikan bagi putra/i kita
						semua di rumah. Dengan harapan kami kelak dapat mencetak
						anak didik menjadi pribadi-pribadi yang unggul dan
						bermanfaat bagi agama, nusa dan bangsa serta terwujudnya
						masa depan yanga gemilang bagi putra/i kita semua.
						Aamiin...
					</p>
					<p className="my-3 italic">
						Wassalaamualaikum Warohmatullohi Wabarokaatuh
					</p>

					<Link href="/kata-pengantar">
						<button className="bg-primary hover:bg-secondary hover:text-white rounded-md px-8 py-1.5 mt-4">
							<p>Lebih Lanjut</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PrakataKepsek;
