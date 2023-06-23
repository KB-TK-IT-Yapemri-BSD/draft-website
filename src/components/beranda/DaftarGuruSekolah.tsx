import Image from 'next/image';

function DaftarGuruSekolah() {
	return (
		<div className="bg-grey">
			<div className="mx-10 lg:mx-40 py-20 flex flex-row">
				<div className="my-auto px-10 w-1/3">
					<h1 className="text-3xl pb-3 text-center italic">
						Perkenalkan
					</h1>
					<p className="text-4xl pb-10 text-center font-medium">
						Para Guru dan Staff Kami
					</p>
				</div>
				<div className="mx-auto w-3/4 px-40">
					<div
						className="flex justify-center relative mx-auto"
						style={{
							width: 'auto',
							height: '500px',
						}}
					>
						<Image
							src="/beranda/guru-staff2.jpg"
							fill
							alt="Guru dan Staff KB TK IT Yapemri BSD"
							className="border-white rounded-lg border-2 shadow-lg justify-center absolute"
							style={{ objectFit: 'cover' }}
							quality={100}
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DaftarGuruSekolah;
