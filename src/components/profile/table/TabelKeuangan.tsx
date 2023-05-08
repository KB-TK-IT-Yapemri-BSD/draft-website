import React from 'react';

export default function TabelKeuangan() {
	return (
		<div>
			<table className="border-grey border-2 w-full">
				<thead>
					<tr className="border-grey border-2">
						<th className="bg-grey px-6 py-2">Jenis Tagihan</th>
						<th className="bg-grey px-6 py-2">Tanggal</th>
						<th className="bg-grey px-6 py-2">Jumlah</th>
						<th className="bg-grey px-6 py-2">Status Bayar</th>
						<th className="bg-grey px-6 py-2">Aksi</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="px-2">SPP Bulan</td>
						<td className="px-2">23 Februari 2022</td>
						<td className="px-2">Rp. 1.000.000</td>
						<td className="px-2">Belum Lunas</td>
						<td className="px-2">Unggah Bukti Pembayaran</td>
					</tr>
					<tr>
						<td className="px-2">SPP Bulan</td>
						<td className="px-2">23 Februari 2022</td>
						<td className="px-2">Rp. 1.000.000</td>
						<td className="px-2">Belum Lunas</td>
						<td className="px-2">Unggah Bukti Pembayaran</td>
					</tr>
					<tr>
						<td className="px-2">SPP Bulan</td>
						<td className="px-2">23 Februari 2022</td>
						<td className="px-2">Rp. 1.000.000</td>
						<td className="px-2">Belum Lunas</td>
						<td className="px-2">Unggah Bukti Pembayaran</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
