'use client';

import { EyeSymbol } from '@/components/shared/Icons';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TabelNilaiMurid() {
	const { data: session } = useSession();

	const router = useRouter();

	const [dataEvaluations, setDataEvaluations] = useState<any[]>([]);
	const [changes, setChanges] = useState(false);

	let [isOpen, setIsOpen] = useState(false);
	let [currentId, setCurrentId] = useState();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const getDataEvaluations = async () => {
		try {
			setChanges(false);

			let res = await fetch(
				`http://localhost:4000/v1/evaluations/filter?student_id=${session?.user.user.biodata_id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
					},
				}
			);

			let data = await res.json();
			setDataEvaluations(data);
		} catch (error) {
			throw error;
		}
	};

	console.log(dataEvaluations);

	useEffect(() => {
		getDataEvaluations();
	}, [changes == true]);

	return (
		<>
			<div className="overflow-x-auto outline outline-grey outline-[1px]">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Nama Lengkap
							</th>
							<th scope="col" className="px-6 py-3">
								Kelompok Usia
							</th>
							<th scope="col" className="px-6 py-3">
								Periode
							</th>
							<th scope="col" className="px-6 py-3">
								Tanggal
							</th>
							<th scope="col" className="px-6 py-3">
								Aksi
							</th>
						</tr>
					</thead>
					<tbody>
						{dataEvaluations.length > 0
							? dataEvaluations.map((item) => (
									<tr
										key={item['id']}
										className="bg-white border-b  hover:bg-gray-50"
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											{item
												? item['student_id'][
														'firstName'
												  ] +
												  ' ' +
												  item['student_id']['lastName']
												: 'NO DATA'}
										</th>
										<td className="px-6 py-4">
											{item['grade']
												? item['grade']
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{item['period']
												? item['period']
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{item['createdAt']
												? new Date(item['createdAt'])
														.toUTCString()
														.split(' ')
														.slice(0, 4)
														.join(' ')
												: 'NO DATA'}
										</td>
										<td className="flex items-center px-6 py-4 space-x-2">
											<button
												className="bg-primary rounded-md p-2 my-4 inline-flex lg:my-0"
												onClick={() =>
													router.push(
														`/profile/nilai-murid/${item['id']}`
													)
												}
											>
												<EyeSymbol />
											</button>
										</td>
									</tr>
							  ))
							: 'NO DATA'}
					</tbody>
				</table>
				<ToastContainer
					style={{ width: '500px' }}
					position="bottom-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</div>
		</>
	);
}
