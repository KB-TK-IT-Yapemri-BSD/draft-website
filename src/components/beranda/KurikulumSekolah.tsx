import Image from 'next/image';
import { HomepageSymbol } from '../shared/Icons';
import Link from 'next/link';

function KurikulumSekolah() {
	return (
		<div className="bg-white">
			<div className="mx-40 py-20 flex divide-x-2">
				<div className="w-1/2 my-auto px-10">
					<h1 className="text-4xl pt-5 py-3 font-medium">
						Kurikulum Sekolah
					</h1>
					<p className="my-3 pr-10 text-justify">
						Kurikulum KB TK IT. YAPEMRI BSD mengacu kepada Kurikulum
						Nasional Depatemen Pendidikan dan kebudayaan serta
						digabungkan dengan pembelajaran keagamaan, dimana target
						utamanya adalah mengembangkan kemampuan yang ada pada
						diri anak yang didasari kaidah-kaidah keislaman.
					</p>
					<Link href="/kurikulum-sekolah">
						<button className="bg-primary hover:bg-secondary hover:text-white rounded-md px-8 py-1.5 mt-4">
							<p>Lebih Lanjut</p>
						</button>
					</Link>
				</div>

				<div className="w-1/2 flex flex-wrap space-y-10 px-10">
					<div className="card max-w-prose h-auto">
						<HomepageSymbol />
						<h1 className="text-xl pt-5 py-3 font-medium">
							How To Know
						</h1>
						<p className="text-sm text-body-color italic text-justify leading-relaxed">
							Learning How To Know yaitu belajar untuk memahami.
						</p>
					</div>
					<div className="card max-w-prose h-auto">
						<HomepageSymbol />
						<h1 className="text-xl pt-5 py-3 font-medium">
							How To Do
						</h1>
						<p className="text-sm text-body-color italic text-justify leading-relaxed">
							Learning How To Do yaitu belajar bagaimana
							mengembangkan kemampuan.
						</p>
					</div>
					<div className="card max-w-prose h-auto">
						<HomepageSymbol />
						<h1 className="text-xl pt-5 py-3 font-medium">
							How To Be
						</h1>
						<p className="text-sm text-body-color italic text-justify leading-relaxed">
							Learning How To Be yaitu belajar bagaimana memiiki
							akhlak.
						</p>
					</div>
					<div className="card max-w-prose h-auto">
						<HomepageSymbol />
						<h1 className="text-xl pt-5 py-3 font-medium">
							How To Live Together
						</h1>
						<p className="text-sm text-body-color italic text-justify leading-relaxed">
							Learning How To Live Together yaitu bagaimana bisa
							bersosialisasi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KurikulumSekolah;
