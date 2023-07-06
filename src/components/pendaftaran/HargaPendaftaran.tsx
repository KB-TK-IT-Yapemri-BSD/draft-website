import React from 'react';

export default function RincianPendaftaran() {
	return (
		<div className="card leading-relaxed overflow-hidden outline outline-grey outline-[1px]">
			<h1 className="text-2xl text-center font-semibold bg-primary p-2">
				Rincian Harga Keseluruhan
			</h1>

			<div className="py-2 overflow-x-scroll">
				<table className="my-4 w-full">
					<thead>
						<tr>
							<th className="border border-black px-4 py-2">
								NO.
							</th>
							<th className="border border-black px-4 py-2">
								RINCIAN
							</th>
							<th className="border border-black px-4 py-2">
								JUMLAH
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-black px-4 py-2">1</td>
							<td className="border border-black px-4 py-2">
								Formulir Pendaftaran
							</td>
							<td className="border border-black px-4 py-2">
								Free
							</td>
						</tr>
						<tr>
							<td className="border border-black px-4 py-2">2</td>
							<td className="border border-black px-4 py-2">
								Uang Pangkal
							</td>
							<td className="border border-black px-4 py-2">
								Rp. 7.500.000
							</td>
						</tr>
						<tr>
							<td className="border border-black px-4 py-2">3</td>
							<td className="border border-black px-4 py-2">
								Uang Kegiatan 1 tahun
							</td>
							<td className="border border-black px-4 py-2">
								Rp. 2.500.000
							</td>
						</tr>
						<tr>
							<td className="border border-black px-4 py-2">4</td>
							<td className="border border-black px-4 py-2">
								Uang Perlengkapan 1 tahun
							</td>
							<td className="border border-black px-4 py-2">
								Rp. 1.250.000
							</td>
						</tr>
						<tr>
							<td className="border border-black px-4 py-2">5</td>
							<td className="border border-black px-4 py-2">
								SPP Bulan
							</td>
							<td className="border border-black px-4 py-2">
								Rp. 1.000.000
							</td>
						</tr>
						<tr>
							<td
								colSpan={2}
								className="border border-black px-4 py-2 font-semibold"
							>
								TOTAL
							</td>
							<td className="border border-black px-4 py-2 font-semibold">
								Rp. 12.250.000
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
