import Image from 'next/image';

function KurikulumSekolah() {
	return (
		<div className="bg-white">
			<div className="mx-40 py-20 flex">
				<div className="w-1/2">
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
					<button className="bg-primary rounded-md px-8 py-1.5 mt-4">
						<p className="text-secondary font-medium">
							Lebih Lanjut
						</p>
					</button>
				</div>
				<div className="w-1/2 flex justify-evenly">
					<div className="space-y-8 space-x-2">
						<div className="card w-[250px] h-fit">
							<h1 className="text-xl pt-5 py-3 font-medium">
								How To Know
							</h1>
							<p className="text-sm text-body-color italic text-justify leading-relaxed">
								Learning How To Know yaitu belajar untuk
								memahami.
							</p>
						</div>
						<div className="card w-[250px] h-fit">
							<h1 className="text-xl pt-5 py-3 font-medium">
								How To Do
							</h1>
							<p className="text-sm text-body-color italic text-justify leading-relaxed">
								Learning How To Do yaitu belajar bagaimana
								mengembangkan kemampuan.
							</p>
						</div>
					</div>
					<div className="space-y-8 space-x-2">
						<div className="card w-[250px] h-fit">
							<h1 className="text-xl pt-5 py-3 font-medium">
								How To Be
							</h1>
							<p className="text-sm text-body-color italic text-justify leading-relaxed">
								Learning How To Be yaitu belajar bagaimana
								memiiki akhlak.
							</p>
						</div>
						<div className="card w-[250px] h-fit">
							<h1 className="text-xl pt-5 py-3 font-medium">
								How To Live Together
							</h1>
							<p className="text-sm text-body-color italic text-justify leading-relaxed">
								Learning How To Live Together yaitu bagaimana
								bisa bersosialisasi.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KurikulumSekolah;
