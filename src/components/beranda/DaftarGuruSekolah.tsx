import Image from 'next/image';

function DaftarGuruSekolah() {
	return (
		<div className="bg-grey">
			<div className="mx-10 lg:mx-40 py-20">
				<div>
					<h1 className="text-3xl pb-3 text-center italic">
						Perkenalkan
					</h1>
					<p className="text-4xl pb-10 text-center font-medium">
						Para Guru dan Staff Kami
					</p>
				</div>
				<div className="w-full p-10 relative">
					<div className="rounded-full px-20 h-[325px] mx-auto">
						<Image
							src="/beranda/guru-staff.jpg"
							fill
							alt="Guru dan Staff KB TK IT Yapemri BSD"
							style={{
								objectFit: 'cover',
							}}
							className="rounded-lg border-white border-4 shadow-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DaftarGuruSekolah;
