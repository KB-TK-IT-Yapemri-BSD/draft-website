'use client';

import Link from 'next/link';
import FormDetailFormPendaftar from '../form/FormDetailFormPendaftar';
import { BigArrowLeft } from '@/components/shared/Icons';

export default function DetailFormPendaftar({ params }: { params: any }) {
	return (
		<div className="bg-white">
			<div className="mx-60 py-20 flex flex-col gap-6">
				<Link
					href="/profile/form-pendaftar"
					className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
				>
					<BigArrowLeft />
					<p className="ml-4 text-lg">Kembali</p>
				</Link>

				<div className="card outline outline-grey outline-[1px] p-8">
					<div className="w-full divide-y-2">
						<p className="font-bold text-2xl pt-4">
							Detail Form Pendaftar
						</p>
						<div className="my-6">
							<FormDetailFormPendaftar params={params} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
