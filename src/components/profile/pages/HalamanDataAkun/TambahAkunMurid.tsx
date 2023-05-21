'use client';

import FormAddStudent from '../../form/FormDataAkun/FormAddStudent';
import Link from 'next/link';
import { BigArrowLeft } from '@/components/shared/Icons';

export default function AddStudent() {
	return (
		<div className="bg-white">
			<div className="mx-60 py-20 flex flex-col gap-6">
				<Link
					href="/profile/data-akun"
					className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
				>
					<BigArrowLeft />
					<p className="ml-4 text-lg">Kembali</p>
				</Link>

				<div className="card outline outline-grey outline-[1px] p-8">
					<div className="w-full divide-y-2">
						<p className="font-bold text-2xl pt-4">
							Tambah Data Akun Murid
						</p>
						<div className="my-6">
							<FormAddStudent />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
