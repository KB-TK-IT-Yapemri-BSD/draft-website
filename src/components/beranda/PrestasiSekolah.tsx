import Image from 'next/image';

function PrestasiSekolah() {
	return (
		<div className="bg-grey">
			<div className="mx-40 py-10">
				<h1 className="w-1/2 text-4xl pt-5 py-3 pb-10 font-medium">
					Prestasi Sekolah
				</h1>
				<div className="w-1/2">
					<div className="flex">
						<div className="w-80 h-80 bg-blue-200"></div>
						<div className="w-80 h-80 bg-blue-200"></div>
						<div className="w-80 h-80 bg-blue-200"></div>
					</div>
					<button className="bg-primary rounded-md px-8 py-1.5 mt-4">
						<p className="text-secondary font-medium">
							Lebih Lanjut
						</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PrestasiSekolah;
