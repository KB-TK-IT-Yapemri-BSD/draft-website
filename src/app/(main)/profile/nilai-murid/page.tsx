import Link from 'next/link';
import { BigArrowLeft } from '@/components/shared/Icons';
import TabelNilaiMurid from '@/components/profile/table/TabelNilaiMurid';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Nilai Murid',
};

export default function DataNilaiMurid() {
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
							Daftar Penilaian Murid
						</p>
						<div className="my-6">
							<TabelNilaiMurid />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
