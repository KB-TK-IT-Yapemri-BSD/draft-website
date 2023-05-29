'use client';

import YouTube from 'react-youtube';

function KisahSuksesOrtu() {
	return (
		<div className="bg-white">
			<div className="mx-10 lg:mx-40 py-20">
				<h1 className="text-4xl pt-5 text-center font-medium pb-10">
					Kisah Sukses Orang Tua
				</h1>
				<div className="flex justify-center w-full">
					<YouTube videoId="kvlsOvmgavQ" />
				</div>
			</div>
		</div>
	);
}

export default KisahSuksesOrtu;
