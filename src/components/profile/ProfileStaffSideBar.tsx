import {
	DocumentTextSymbol,
	LogoutSymbol,
	MoneySymbol,
	UserSymbol,
	UsersSymbol,
} from '@/components/shared/Icons';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileStaffSideBar() {
	return (
		<>
			<div className="flex flex-col text-center py-6 space-y-3 relative">
				<span className="mx-auto w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mb-6 rounded-full bg-secondary" />
				<p className="font-bold text-xl">Suci Mei Syahrini</p>
				<p className="text-md">Kepala Sekolah</p>
			</div>
			<div className="flex flex-col text-center py-6 space-y-2">
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md px-2 py-2">
					<Link
						href="/profile/data-diri"
						className="inline-flex space-x-2 py-1"
					>
						<DocumentTextSymbol />
						<p>Data Diri</p>
					</Link>
				</button>
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md px-2 py-2">
					<Link
						href="/profile/info-akun"
						className="inline-flex space-x-2 py-1"
					>
						<UserSymbol />
						<p>Info Akun</p>
					</Link>
				</button>
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md px-2 py-2">
					<Link href="/login" className="inline-flex space-x-2 py-1">
						<LogoutSymbol />
						<p>Logout</p>
					</Link>
				</button>
			</div>
		</>
	);
}
