'use client';

import Link from 'next/link';
import { BigArrowLeft } from '@/components/shared/Icons';
import FormDetailNilaiMurid from '../../form/FormDataPenilaian/FormDetailNilaiMurid';

export default function HalamanDetailNilaiMurid({ params }: { params: any }) {
	return (
		<div className="bg-white">
			<div className="mx-10 py-20 lg:mx-60 space-y-6">
				<Link
					href="/profile/nilai-murid"
					className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
				>
					<BigArrowLeft />
					<p className="ml-4 text-lg">Kembali</p>
				</Link>

				<div className="card outline outline-grey outline-[1px] p-8">
					<div className="w-full divide-y-2">
						<p className="font-bold text-2xl pt-4">
							Detail Data Penilaian
						</p>
						<div className="my-6">
							<FormDetailNilaiMurid params={params} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}