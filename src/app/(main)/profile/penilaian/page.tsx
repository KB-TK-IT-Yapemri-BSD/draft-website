import Link from 'next/link';
import { BigArrowLeft, DocumentPlusSymbol } from '@/components/shared/Icons';
import TabelDataPenilaian from '@/components/profile/table/TabelDataPenilaian';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Penilaian',
};

export default function DataPenilaian() {
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
							Daftar Penilaian Murid KB TK IT Yapemri BSD
						</p>
						<div className="my-6">
							<div className="text-right">
								<button className="bg-blue-primary text-white hover:bg-blue-700 rounded-md px-4 py-2 my-6 inline-flex justify-center w-full lg:w-auto">
									<DocumentPlusSymbol />
									<Link href="/profile/penilaian/add">
										<p className="ml-2 text-sm">
											Buat Penilaian Murid
										</p>
									</Link>
								</button>
							</div>
							<TabelDataPenilaian />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
