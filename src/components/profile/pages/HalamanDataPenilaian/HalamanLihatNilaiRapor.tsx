'use client';

import Link from 'next/link';
import { BigArrowLeft } from '@/components/shared/Icons';
import FormBuktiPembayaran from '@/components/profile/form/FormBuktiPembayaran';

export default function HalamanLihatNilaiRapor({ params }: { params: any }) {
	return (
		<div className="bg-white">
			<div className="mx-10 py-20 lg:mx-60 space-y-6">
				<Link
					href="/profile/data-diri"
					className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
				>
					<BigArrowLeft />
					<p className="ml-4 text-lg">Kembali</p>
				</Link>

				<div className="card outline outline-grey outline-[1px] p-8">
					<div className="w-full divide-y-2">
						<p className="font-bold text-2xl pt-4">
							Lihat Nilai Rapor Murid
						</p>
						<div className="my-6">
							<FormBuktiPembayaran params={params} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
