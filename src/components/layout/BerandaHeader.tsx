import Image from 'next/image';

function BerandaHeader() {
	return (
		<div className="bg-secondary text-white py-20 relative bg-gradient-to-tr from-gray-800 to-secondary ">
			<div className="flex mx-20">
				<div className=" w-3/4 z-10">
					<div className="w-40 h-10 mt-16 p-2 rounded-full bg-grey bg-opacity-20">
						<p className="text-center">Haii Parents! 👋</p>
					</div>
					<div className="mt-4 mb-20 z-20">
						<h1 className="text-4xl mb-3 ">
							Selamat datang di website
						</h1>
						<h1 className="text-6xl">KB TK IT Yapemri BSD</h1>
					</div>
				</div>
				<div className="right-0 top-0 w-3/5 h-[471.5px] absolute bg-gradient-to-tr from-gray-600 to-gray-400 rounded-ss-full">
					<Image
						src="/header/beranda-photoHeader.jpg"
						alt="Header Photo Tentang Kami"
						fill
						quality={100}
						priority
						style={{ objectFit: 'cover', mixBlendMode: 'overlay' }}
						className="rounded-ss-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default BerandaHeader;
