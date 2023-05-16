import TabelDaftarMurid from '@/components/profile/table/TabelDaftarMurid';
import { ArrowRight, HomepageSymbol } from '@/components/shared/Icons';
import Link from 'next/link';

export default function DataMurid() {
	return (
		<div className="bg-white">
			<div className="mx-10 py-20 lg:mx-60 divide-y-2 space-y-6">
				<div>
					<nav className="flex" aria-label="Breadcrumb">
						<ol className="lg:inline-flex items-center">
							<li className="flex-col lg:inline-flex lg:items-center lg:mr-3">
								<Link
									href="/profile/data-diri"
									className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
								>
									<HomepageSymbol />
									Profile
								</Link>
							</li>
							<li aria-current="page">
								<div className="flex lg:items-center">
									<ArrowRight />
									<span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center lg:mr-2">
										Tentang Kami
									</span>
									<ArrowRight />
									<span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
										Sejarah Singkat
									</span>
								</div>
							</li>
						</ol>
					</nav>
				</div>

				<div className="w-full py-10">
					<p className="font-bold text-3xl pb-10">Data Murid</p>
					<TabelDaftarMurid />
				</div>
			</div>
		</div>
	);
}
