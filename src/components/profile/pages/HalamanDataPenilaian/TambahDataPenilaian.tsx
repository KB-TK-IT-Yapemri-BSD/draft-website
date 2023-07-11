'use client';

import Link from 'next/link';
import { BigArrowLeft } from '@/components/shared/Icons';
import FormAddDataPenilaian from '../../form/FormDataPenilaian/FormAddDataPenilaian';

export default function AddEvaluation() {
	return (
		<div className="bg-white">
			<div className="mx-10 py-20 lg:mx-60 space-y-6">
				<Link
					href="/profile/penilaian"
					className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
				>
					<BigArrowLeft />
					<p className="ml-4 text-lg">Kembali</p>
				</Link>

				<div className="card outline outline-grey outline-[1px] p-8">
					<div className="w-full divide-y-2">
						<p className="font-bold text-2xl pt-4">
							Tambah Data Penilaian
						</p>
						<div className="my-6">
							<FormAddDataPenilaian />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}