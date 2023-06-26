'use client';

import Link from 'next/link';
import FormDataFinansial from '@/components/profile/form/FormDataFinansial/FormTambahDataFinansial';
import { BigArrowLeft } from '@/components/shared/Icons';

export default function AddPayment() {
	return (
		<div className="bg-white">
			<div className="mx-60 py-20 flex flex-col gap-6">
				<Link
					href="/profile/keuangan"
					className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
				>
					<BigArrowLeft />
					<p className="ml-4 text-lg">Kembali</p>
				</Link>

				<div className="card outline outline-grey outline-[1px] p-8">
					<div className="w-full divide-y-2">
						<p className="font-bold text-2xl pt-4">
							Tambah Data Finansial
						</p>
						<div className="my-6">
							<FormDataFinansial />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}