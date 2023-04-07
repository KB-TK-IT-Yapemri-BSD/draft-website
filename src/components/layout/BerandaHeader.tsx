import Image from 'next/image';

function BerandaHeader() {
	return (
		<div className="bg-secondary text-white py-20">
			<div className="flex mx-40">
				<div className=" w-3/4">
					<div className="w-40 h-10 mt-16 p-2 rounded-full bg-grey bg-opacity-20">
						<p className="text-center">Haii Parents! 👋</p>
					</div>
					<div className="mt-4 mb-20">
						<h1 className="text-4xl mb-3">
							Selamat datang di website
						</h1>
						<h1 className="text-6xl">KB TK IT Yapemri BSD</h1>
					</div>
				</div>
				<div>
					<div className="w-80 h-80 mx-auto bg-blue-200 max-w-full"></div>
				</div>
			</div>
		</div>
	);
}

export default BerandaHeader;
