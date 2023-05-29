import Link from 'next/link';
import TabelDataStaff from '@/components/profile/table/TabelDataStaff';
import { BigArrowLeft, DocumentPlusSymbol } from '@/components/shared/Icons';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Keuangan',
};

export default function Keuangan() {
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
							Keuangan Murid KB TK IT Yapemri BSD
						</p>

						<div className="card outline outline-grey outline-[1px] p-8">
							<div className="w-full divide-y-2">
								<p className="font-bold text-2xl pt-4">
									Tipe Pembayaran
								</p>
								<div className="my-6"></div>
							</div>
						</div>

						<div className="card outline outline-grey outline-[1px] p-8">
							<div className="w-full divide-y-2">
								<p className="font-bold text-2xl pt-4">
									Daftar Biodata Orang Tua KB TK IT Yapemri
									BSD
								</p>
								<div className="my-6"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
