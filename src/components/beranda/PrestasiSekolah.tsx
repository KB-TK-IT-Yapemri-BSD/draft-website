import Image from 'next/image';

function PrestasiSekolah() {
	return (
		<div className="bg-grey">
			<div className="mx-10 text-center lg:text-left lg:mx-40 py-20">
				<h1 className="text-4xl py-3 pb-10 font-medium">
					Prestasi Sekolah
				</h1>
				<div>
					<div className="w-full flex flex-wrap justify-evenly">
						<div className="card w-80 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kegiatan Harian"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kegiatan Harian
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Dolore consequuntur nemo,
								quibusdam enim iusto ipsum magni quos
								reprehenderit illo distinctio.
							</p>
						</div>

						<div className="card w-80 mb-10 m-0">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kegiatan Outbound"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kegiatan Outbound
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum, nemo ipsa iste
								exercitationem ipsam cupiditate nihil facere
								assumenda saepe minima.
							</p>
						</div>

						<div className="card w-80 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kegiatan Renang"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kegiatan Renang
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Distinctio earum deleniti
								explicabo iusto quos harum eligendi minima,
								laborum quis quaerat.
							</p>
						</div>

						<div className="card w-80 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kunjungan ke Branchsto"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kunjungan ke Branchsto
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Corrupti dolorum vero, dolor
								ut hic totam architecto deleniti culpa? Ex,
								praesentium?
							</p>
						</div>

						<div className="card w-80 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/musholla.JPEG"
									alt="Kunjungan ke Masjid Al-Aqsha"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kunjungan ke Masjid Al-Aqsha
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quo, perspiciatis? Soluta,
								veniam at tenetur blanditiis hic voluptatibus
								dolorem illo consequuntur!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PrestasiSekolah;
