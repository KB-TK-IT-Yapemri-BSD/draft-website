import Image from 'next/image';

function PrestasiSekolah() {
	return (
		<div className="bg-grey">
			<div className="mx-10 text-center lg:text-left lg:mx-40 py-20">
				<h1 className="text-4xl py-3 pb-10 font-medium text-center">
					Prestasi Sekolah
				</h1>
				<div className="mx-10 lg:mx-60 divide-y-2 space-y-6">
					<div className="w-full py-10 flex flex-wrap place-content-stretch">
						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687269136/yapemri-photos/Example/TK_q19e0o.jpg"
									alt="Lomba Sains untuk Anak di BSD"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Lomba Sains untuk Anak di Delatinos BSD
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687269215/yapemri-photos/Example/WhatsApp-Image-2021-03-22-at-07.22.56_dkszr6.jpg"
									alt="Lomba Kebersihan Sekolah di BSD"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Lomba Kebersihan Sekolah di Delatinos BSD
							</h1>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="https://res.cloudinary.com/aurellieandra/image/upload/v1687269177/yapemri-photos/Example/pTieSAl_Prestasi_20Juara_20Murid_20TK_20Panca_20Budi_20Medan.._20_1_p9vbyw.jpg"
									alt="Lomba Hari Kemerdekaan di BSD"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
								Lomba Hari Kemerdekaan di Delatinos BSD
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PrestasiSekolah;
