import Image from 'next/image';

function VisiMisiHeader() {
	return (
		<div className="relative">
			<div className="bg-gradient-to-tr from-gray-800 to-gray-400 text-white py-20 bg-cover relative">
				<div className="my-60">
					<Image
						src="/header/tk-photoHeader.jpg"
						alt="Header Photo Tentang Kami"
						fill
						style={{ objectFit: 'cover', mixBlendMode: 'overlay' }}
						quality={100}
						priority
					/>
				</div>
			</div>
			<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-medium text-center text-white">
				Visi dan Misi KB TK IT Yapemri BSD
			</h1>
		</div>
	);
}

export default VisiMisiHeader;
