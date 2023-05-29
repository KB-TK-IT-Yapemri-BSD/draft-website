import Image from 'next/image';

function DaftarGuruSekolah() {
	return (
		<div className="bg-grey">
			<div className="mx-10 lg:mx-40 py-20 flex flex-row w-3/4 gap-20">
				<div className="my-auto px-20">
					<h1 className="text-3xl pb-3 text-center italic">
						Perkenalkan
					</h1>
					<p className="text-4xl pb-10 text-center font-medium">
						Para Guru dan Staff Kami
					</p>
				</div>
				<div className="mx-auto">
					<div className="flex rounded-full justify-center">
						<Image
							src="/beranda/guru-staff2.jpg"
							width={500}
							height={200}
							alt="Guru dan Staff KB TK IT Yapemri BSD"
							className="rounded-full border-white border-2 shadow-lg justify-center"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DaftarGuruSekolah;
