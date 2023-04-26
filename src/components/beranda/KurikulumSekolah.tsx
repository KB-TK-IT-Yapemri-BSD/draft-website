import Image from 'next/image';
import { HomepageSymbol } from '../shared/Icons';
import Link from 'next/link';

function KurikulumSekolah() {
	return (
		<div className="bg-white">
			<div className="py-20 flex flex-col divide-y-2 lg:mx-40 lg:flex-row lg:divide-y-0 lg:divide-x-2">
				<div className="p-10 text-center lg:text-left lg:my-auto lg:w-1/2">
					<h1 className="text-4xl pt-5 py-3 font-medium">
						Kurikulum Sekolah
					</h1>
					<p className="my-3 text-justify lg:pr-10">
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

				<div className="flex flex-wrap justify-center lg:justify-normal space-y-10 p-10 lg:w-1/2">
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
