'use client';

function KisahSuksesOrtu() {
	return (
		<div className="bg-white">
			<div className="mx-10 lg:mx-40 py-20">
				<h1 className="text-4xl pt-5 text-center font-medium pb-16">
					Kisah Sukses Orang Tua
				</h1>
				<div className="flex flex-col lg:flex-row gap-20 items-center py-10 px-4 lg:px-0">
					<div className="relative max-w-md mx-auto flex flex-col py-6 px-8 bg-white rounded-lg shadow-lg">
						<img
							src="https://res.cloudinary.com/aurellieandra/image/upload/v1687270833/yapemri-photos/Example/811cf987bb3e0d45499253eb496c9306_n1vfr0.jpg"
							alt=""
							className="absolute rounded-full w-14 h-14 -left-6 -top-6"
						/>
						<p className="text-[#5E6282] pt-4">
							“KB TK IT Yapemri BSD adalah sekolah yang dapat
							membantu tumbuh dan kembang anak-anak saya.
							Guru-gurunya pun ramah dan baik hati, sabar
							mengajarkan anak-anak. Mantap!”
						</p>
						<p className="mt-6 mb-2">Farah Restyana</p>
						<p className="text-sm">Tangerang</p>
					</div>

					<div className="relative max-w-md mx-auto flex flex-col py-6 px-8 bg-white rounded-lg shadow-lg">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
							alt=""
							className="absolute rounded-full w-14 h-14 -left-6 -top-6"
						/>
						<p className="text-[#5E6282] pt-4">
							“KB TK IT Yapemri BSD adalah sekolah yang
							menyenangkan dan sesuai untuk anak saya.
							Program-program nya menarik dan menyenangkan.”
						</p>
						<p className="mt-6 mb-2">Wawan Harsono</p>
						<p className="text-sm">Depok</p>
					</div>

					<div className="relative max-w-md mx-auto flex flex-col py-6 px-8 bg-white rounded-lg shadow-lg">
						<img
							src="https://res.cloudinary.com/aurellieandra/image/upload/v1687270809/yapemri-photos/Example/no_brands_jilbab_paris_-_hijab_paris_full01_s32bbx8a_mcvnfi.jpg"
							alt=""
							className="absolute rounded-full w-14 h-14 -left-6 -top-6"
						/>
						<p className="text-[#5E6282] pt-4">
							“KB TK IT Yapemri BSD adalah sekolah yang sangat
							bersih, fasilitasnya pun lengkap. Guru-gurunya pun
							mudah untuk diajak komunikasi.”
						</p>
						<p className="mt-6 mb-2">Mia Yolanda</p>
						<p className="text-sm">BSD</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KisahSuksesOrtu;
