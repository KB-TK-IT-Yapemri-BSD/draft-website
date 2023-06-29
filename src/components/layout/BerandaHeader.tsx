import Image from 'next/image';

function BerandaHeader() {
	return (
		<div className="w-full bg-secondary text-white bg-gradient-to-tr from-gray-800 to-secondary flex lg:py-20 relative">
			<div className="w-full flex flex-col px-5 z-10 mt-40 -mb-10 lg:my-20 lg:w-3/4 lg:px-20">
				<div className="text-xs w-32 h-8 p-2 rounded-full bg-grey bg-opacity-20 text-center lg:text-md lg:w-34 lg:h-8">
					<p>Haii Parents! 👋</p>
				</div>
				<div className="mt-4 mb-20 z-20">
					<h1 className="text-xl lg:text-4xl mb-3 ">
						Selamat datang di website
					</h1>
					<h1 className="text-4xl pb-8 lg:text-6xl">
						KB TK IT Yapemri BSD
					</h1>
				</div>
			</div>
			<div className="right-0 top-0 w-full h-full absolute bg-gradient-to-tr from-gray-600 to-gray-400 lg:w-3/5 lg:rounded-ss-full">
				<Image
					src="/header/beranda-photoHeader.jpg"
					alt="Header Photo Tentang Kami"
					fill
					quality={100}
					priority
					style={{ objectFit: 'cover', mixBlendMode: 'overlay' }}
					className="lg:rounded-ss-full"
				/>
			</div>
		</div>
	);
}

export default BerandaHeader;
