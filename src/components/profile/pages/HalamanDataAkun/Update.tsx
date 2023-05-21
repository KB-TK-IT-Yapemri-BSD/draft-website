'use client';

import FormUpdate from '../../form/FormDataAkun/FormUpdate';

export default function Update() {
	return (
		<div className="bg-white">
			<div className="mx-10 lg:mx-60 py-20 flex flex-col lg:flex-row gap-10">
				<div className="bg-white lg:w-2/3 h-max p-10 space-y-6 border-2 rounded-xl">
					<p className="text-3xl font-bold">Edit Data Akun</p>
					<FormUpdate />
				</div>
			</div>
		</div>
	);
}
