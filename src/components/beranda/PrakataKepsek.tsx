import Image from 'next/image';

function PrakataKepsek() {
	return (
		<div className="bg-white">
			<div className="mx-40 py-10 flex">
				<div className="w-1/2">
					<div className="w-80 h-80 float-right m-10 mx-40 bg-blue-200"></div>
				</div>
				<div className="w-1/2">
					<h1 className="text-4xl pt-5 font-medium">
						Prakata Kepala Sekolah
					</h1>
					<h2 className="text-3xl py-3">KB TK IT Yapemri BSD</h2>
					<p className="my-3 italic">
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
					<button className="bg-primary rounded-md px-8 py-1.5 mt-4">
						<p className="text-secondary">Lebih Lanjut</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PrakataKepsek;
