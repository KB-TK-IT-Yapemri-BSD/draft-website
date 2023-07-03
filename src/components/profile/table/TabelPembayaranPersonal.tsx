'use client';

import {
	DocumentPlusSymbol,
	ExclamationCircleSymbol,
	EyeSymbol,
	PencilSymbol,
	TrashCanSymbol,
} from '@/components/shared/Icons';
import { Dialog, Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TabelPembayaranPersonal() {
	const { data: session } = useSession();
	const router = useRouter();

	const [payments, setPayments] = useState([]);
	const [changes, setChanges] = useState(false);

	let [isOpen, setIsOpen] = useState(false);
	let [currentId, setCurrentId] = useState();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const getDataPayments = async () => {
		try {
			setChanges(false);

			let res = await fetch(
				`http://localhost:4000/v1/payments/filter?user_id=${session?.user.user.biodata_id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
					},
				}
			);

			const data = await res.json();
			setPayments(data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getDataPayments();
	}, [changes == true]);

	return (
		<>
			<div className="overflow-x-auto outline outline-grey outline-[1px]">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Tipe Pembayaran
							</th>
							<th scope="col" className="px-6 py-3">
								Jumlah
							</th>
							<th scope="col" className="px-6 py-3">
								Deadline
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
							<th scope="col" className="px-6 py-3">
								Tanggal Pembayaran
							</th>
							<th scope="col" className="px-6 py-3">
								Telah Diunggah
							</th>
							<th scope="col" className="px-6 py-3">
								Keterangan Tambahan
							</th>
							<th scope="col" className="px-6 py-3">
								Unggah Bukti Pembayaran
							</th>
						</tr>
					</thead>
					<tbody>
						{payments
							? payments.map((payment) => (
									<tr
										key={payment['id']}
										className="bg-white border-b  hover:bg-gray-50"
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											{payment['type_id']
												? payment['type_id']['type']
												: 'NO DATA'}
										</th>
										<td className="px-6 py-4">
											{payment['amount']
												? payment['amount']
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{payment['type_id']
												? new Date(
														payment['type_id'][
															'deadline'
														]
												  ).toLocaleDateString()
												: 'NO DATA'}
										</td>
										<td className="px-6 py-4">
											{payment['status']
												? 'Lunas'
												: 'Belum Lunas'}
										</td>
										<td className="px-6 py-4">
											{payment['payment_date']
												? new Date(
														payment['payment_date']
												  ).toLocaleDateString()
												: ' – '}
										</td>
										<td className="px-6 py-4">
											{payment['modified']
												? 'Sudah'
												: 'Belum '}
										</td>
										<td className="px-6 py-4">
											{payment['reason']
												? payment['reason']
												: ' – '}
										</td>
										<td className="flex items-center px-6 py-4 space-x-2">
											<button
												className="bg-blue-primary rounded-md p-2 my-4 inline-flex lg:my-0"
												onClick={() =>
													router.push(
														`/profile/keuangan/bukti-pembayaran/${payment['id']}`
													)
												}
											>
												<PencilSymbol />
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
