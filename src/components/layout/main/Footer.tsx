import Image from 'next/image';

function Footer() {
	return (
		<div className="bg-secondary text-white divide-y-[1px]">
			<div className="py-20 flex flex-col mx-10 divide-y-[1px] lg:divide-y-0 lg:mx-40 lg:flex-row lg:space-x-10">
				<div className="lg:w-1/3">
					<Image
						src="/logo.png"
						width={53}
						height={53}
						alt="Logo KB TK IT Yapemri BSD"
					></Image>
					<p className="py-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Eveniet modi a debitis sunt in veritatis illum
						excepturi molestias minima inventore.
					</p>
				</div>

				<div className="my-8 lg:my-0 lg:w-3/12 lg:px-10">
					<h1 className="text-xl my-6 lg:mb-6 font-bold">
						Media Sosial
					</h1>
					<div className="space-y-2 leading-relaxed">
						<p className="text-lg font-semibold">Instagram</p>
						<p className="text-lg font-semibold">WhatsApp</p>
					</div>
				</div>

				<div className="lg:w-1/3 lg:px-10">
					<h1 className="text-xl my-6 lg:mb-6 font-bold">
						Hubungi Kami
					</h1>
					<div className="space-y-1 leading-relaxed">
						<p className="text-lg font-semibold">Alamat</p>
						<p className="text-sm">
							Centro Havana, Rw. Buntu, Kec. Serpong, Kota
							Tangerang Selatan, Banten 15318
						</p>
						<p className="text-lg font-semibold">Jam Buka</p>
						<p className="text-sm">Senin - Jumat (08:00 - 13:00)</p>
						<p className="text-lg font-semibold">Email</p>
						<p className="text-sm">
							info@kbtkityapemri.sch.id, kbtkityapemri@yahoo.co.id
						</p>
						<p className="text-lg font-semibold">Telephone</p>
						<p className="text-sm">0877-7448-7968</p>
					</div>
				</div>
			</div>
			<div className="py-10 mx-10 lg:mx-40">
				<p>Copyright © KB TK IT Yapemri BSD. All Rights Reserved.</p>
			</div>
		</div>
	);
}

export default Footer;
