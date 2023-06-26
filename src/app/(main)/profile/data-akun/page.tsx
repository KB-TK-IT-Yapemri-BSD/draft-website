import Link from 'next/link';
import TabelDataAkun from '@/components/profile/table/TabelDataAkun';
import { BigArrowLeft, DocumentPlusSymbol } from '@/components/shared/Icons';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Data Akun',
};

export default function DataAkun() {
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
							Daftar Akun Website KB TK IT Yapemri BSD
						</p>

						<div className="my-6">
							<div className="text-right space-x-4">
								<Link href="/profile/data-akun/add/student">
									<button className="bg-blue-primary text-white hover:bg-blue-700 rounded-md px-4 py-2 my-6 inline-flex items-center">
										<DocumentPlusSymbol />

										<p className="ml-2 text-sm">
											Tambah Akun MURID
										</p>
									</button>
								</Link>
								<Link href="/profile/data-akun/add/staff">
									<button className="bg-blue-primary text-white hover:bg-blue-700 rounded-md px-4 py-2 my-6 inline-flex items-center">
										<DocumentPlusSymbol />

										<p className="ml-2 text-sm">
											Tambah Akun STAFF
										</p>
									</button>
								</Link>
							</div>

							<TabelDataAkun />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
