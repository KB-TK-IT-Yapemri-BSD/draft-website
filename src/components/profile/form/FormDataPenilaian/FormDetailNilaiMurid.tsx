import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function FormDetailNilaiMurid({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const [dataPenilaian, setDataPenilaian] = useState();

	const getDataPenilaian = async () => {
		try {
			let res = await fetch(
				`http://localhost:4000/v1/evaluations/${id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
					},
				}
			);

			const data = await res.json();
			setDataPenilaian(data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getDataPenilaian();
	}, []);

	return (
		<div className="divide-y-2 py-6">
			<div className="space-y-2">
				<table className="table-auto w-full border border-black p-4">
					<tbody>
						<tr>
							<td className="font-medium read-only border border-black p-2 bg-grey">
								Nama Lengkap
							</td>
							<td className="border border-black p-2" colSpan={3}>
								{dataPenilaian
									? dataPenilaian['student_id']['firstName'] +
									  ' ' +
									  dataPenilaian['student_id']['lastName']
									: 'NO DATA'}
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 bg-grey w-1/4">
								Kelas
							</td>
							<td className="border border-black p-2 w-1/4">
								KB
							</td>
							<td className="font-medium read-only border border-black p-2 bg-grey w-1/4">
								Periode
							</td>
							<td className="border border-black p-2 w-1/4">
								Semester II
							</td>
						</tr>
					</tbody>
				</table>

				<table className="table-auto w-full border border-black p-4">
					<tbody>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 bg-grey"
								colSpan={4}
							>
								Pendahuluan
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['introduction']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
					</tbody>
				</table>

				<table className="table-auto w-full border border-black p-4">
					<tbody>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 text-center bg-grey"
								colSpan={4}
							>
								I. NILAI MORAL AGAMA
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['aspect_1']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 w-1/6">
								Nilai
							</td>
							<td className="border border-black p-2">
								{dataPenilaian
									? dataPenilaian['score_aspect_1']
									: 'NO DATA'}
							</td>
						</tr>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 text-center bg-grey"
								colSpan={4}
							>
								II. NILAI SOSIAL EMOSIONAL
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['aspect_2']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 w-1/6">
								Nilai
							</td>
							<td className="border border-black p-2">
								{dataPenilaian
									? dataPenilaian['score_aspect_2']
									: 'NO DATA'}
							</td>
						</tr>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 text-center bg-grey"
								colSpan={4}
							>
								III. NILAI BAHASA
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['aspect_3']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 w-1/6">
								Nilai
							</td>
							<td className="border border-black p-2">
								{dataPenilaian
									? dataPenilaian['score_aspect_3']
									: 'NO DATA'}
							</td>
						</tr>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 text-center bg-grey"
								colSpan={4}
							>
								IV. NILAI KOGNITIF
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['aspect_4']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 w-1/6">
								Nilai
							</td>
							<td className="border border-black p-2">
								{dataPenilaian
									? dataPenilaian['score_aspect_4']
									: 'NO DATA'}
							</td>
						</tr>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 text-center bg-grey"
								colSpan={4}
							>
								V. NILAI FISIK MOTORIK
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['aspect_5']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 w-1/6">
								Nilai
							</td>
							<td className="border border-black p-2">
								{dataPenilaian
									? dataPenilaian['score_aspect_5']
									: 'NO DATA'}
							</td>
						</tr>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 text-center bg-grey"
								colSpan={4}
							>
								VI. NILAI SENI
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['aspect_6']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
						<tr>
							<td className="font-medium read-only border border-black p-2 w-1/6">
								Nilai
							</td>
							<td className="border border-black p-2">
								{dataPenilaian
									? dataPenilaian['score_aspect_6']
									: 'NO DATA'}
							</td>
						</tr>
					</tbody>
				</table>

				<table className="table-auto w-full border border-black p-4">
					<tbody>
						<tr>
							<td
								className="font-bold read-only border border-black p-2 bg-grey"
								colSpan={4}
							>
								Penutup
							</td>
						</tr>
						<tr>
							<td className="border border-black p-2" colSpan={4}>
								<p className="text-justify">
									{dataPenilaian
										? dataPenilaian['closing']
										: 'NO DATA'}
								</p>
							</td>
						</tr>
					</tbody>
				</table>

				<p className="font-bold">Keterangan Istilah:</p>
				<p>BB : Belum Berkembang</p>
				<p>MB : Mulai Berkembang</p>
				<p>BSH : Berkembang Sesuai Harapan</p>
				<p>BSB : Berkembang Sangat Baik</p>
			</div>
		</div>
	);
}
