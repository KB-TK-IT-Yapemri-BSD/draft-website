import Image from 'next/image';

function Footer() {
	return (
		<div className="bg-secondary text-white divide-y-[1px]">
			<div className="py-20 flex flex-col mx-10 divide-y-[1px] lg:divide-y-0 lg:mx-40 lg:flex-row lg:space-x-10">
				<div className="lg:w-1/3 py-8">
					<div className="inline-flex">
						<Image
							src="/logo.png"
							width={53}
							height={53}
							alt="Logo KB TK IT Yapemri BSD"
						></Image>
						<p className="my-auto px-2">KB TK IT YAPEMRI BSD</p>
					</div>
					{/** 
					 * <p className="py-5">
						Website resmi dari KB TK IT Yapemri BSD.
					</p>
					 * 
					*/}
				</div>

				<div className="my-8 lg:my-0 lg:w-3/12 lg:px-10">
					<h1 className="text-xl my-6 lg:mb-6 font-bold">
						Media Sosial
					</h1>
					<div className="flex flex-col space-y-2 leading-relaxed text-lg font-semibold">
						<a
							href="https://www.instagram.com/tkit.yapemribsd/"
							className="hover:underline hover:text-grey"
							target="_blank"
						>
							Instagram
						</a>
						<a
							href="https://www.youtube.com/@yapemribsd5852"
							className="hover:underline hover:text-grey"
							target="_blank"
						>
							Youtube
						</a>
						<a
							href=" https://wa.me/6289630357888"
							className="hover:underline hover:text-grey"
							target="_blank"
						>
							WhatsApp
						</a>
					</div>
				</div>

				<div className="lg:w-1/3 lg:px-10">
					<h1 className="text-xl my-6 lg:mb-6 font-bold">
						Hubungi Kami
					</h1>
					<div className="space-y-1 leading-relaxed">
						<p className="text-lg font-semibold">Alamat</p>
						<p className="text-sm">
							Komplek DELATINOS, Ruko Bravo Centro Havana, Blok MA
							20 & MA 23, Rawa Buntu, BSD City, Tangerang Selatan
						</p>

						<p className="text-lg font-semibold">Jam Buka</p>
						<p className="text-sm">
							Hari Kerja, Senin-Jumat (08:00-14:00)
						</p>

						<p className="text-sm">Sabtu (08:00-12:00)</p>
						<p className="text-lg font-semibold">Email</p>

						<p className="text-sm">yapemrimail@gmail.com</p>
						<p className="text-lg font-semibold">Telephone</p>
						<p className="text-sm">0896-3035-7888</p>
					</div>
				</div>
			</div>

			<div className="py-10 mx-10 lg:mx-40">
				<p>
					Copyright 2023 © KB TK IT Yapemri BSD. All Rights Reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;
