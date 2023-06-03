import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function FormDetailFinansial({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const [dataPayment, setDataPayment] = useState();

	const getDataPayment = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/payments/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataPayment(data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getDataPayment();
	}, []);

	return (
		<div className="divide-y-2">
			<div className="space-y-2">
				<div className="py-2 pt-6">
					<label
						htmlFor="user_id"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nama Murid
					</label>
					<input
						type="text"
						id="type_id"
						name="type_id"
						aria-label="type_id"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						value={
							dataPayment
								? dataPayment['user_id']['firstName'] +
								  ' ' +
								  dataPayment['user_id']['lastName']
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="type_id"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nama Tipe Pembayaran
					</label>
					<input
						type="text"
						id="type_id"
						name="type_id"
						aria-label="type_id"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						value={
							dataPayment
								? dataPayment['type_id']['type']
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="flex flex-col lg:flex-row lg:space-x-6">
					<div className="py-2 w-full">
						<label
							htmlFor="amount"
							className="block mb-2 text-sm font-medium read-only"
						>
							Jumlah Pembayaran
						</label>
						<input
							type="number"
							id="amount"
							name="amount"
							aria-label="amount"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
							placeholder={
								dataPayment ? dataPayment['amount'] : 'NO DATA'
							}
							disabled
						/>
					</div>
					<div className="py-2 w-full">
						<label
							htmlFor="payment_date"
							className="block mb-2 text-sm font-medium read-only"
						>
							Tanggal Pembayaran
						</label>
						<input
							type="input"
							id="payment_date"
							name="payment_date"
							aria-label="payment_date"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
							placeholder={
								dataPayment
									? dataPayment['payment_date']
										? new Date(
												dataPayment['payment_date']
										  ).toLocaleDateString()
										: ' – '
									: 'NO DATA'
							}
							disabled
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row lg:space-x-6">
					<div className="py-2 w-full">
						<label
							htmlFor="deadline"
							className="block mb-2 text-sm font-medium read-only"
						>
							Deadline
						</label>
						<input
							type="input"
							id="deadline"
							name="deadline"
							aria-label="deadline"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
							placeholder={
								dataPayment
									? new Date(
											dataPayment['type_id']['deadline']
									  ).toLocaleDateString()
									: 'NO DATA'
							}
							disabled
						/>
					</div>

					<div className="py-2 w-full">
						<label
							htmlFor="status"
							className="block mb-2 text-sm font-medium read-only"
						>
							Status Pembayaran
						</label>
						<input
							id="status"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
							name="status"
							placeholder={
								dataPayment
									? dataPayment['status']
										? 'Lunas'
										: 'Belum Lunas'
									: 'NO DATA'
							}
							disabled
						/>
					</div>

					<div className="py-2 w-full">
						<label
							htmlFor="isOverdue"
							className="block mb-2 text-sm font-medium read-only"
						>
							Keterangan Pembayaran
						</label>
						<input
							id="isOverdue"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
							name="isOverdue"
							placeholder={
								dataPayment
									? dataPayment['isOverdue'] === 'undefined'
										? 'Belum Terbayar'
										: dataPayment['isOverdue'] === 'true'
										? 'Pembayaran Terlambat'
										: 'Pembayaran Tepat Waktu'
									: 'NO DATA'
							}
							disabled
						/>
					</div>
				</div>

				<div className="py-2">
					<label
						htmlFor="receipt"
						className="block mb-2 text-sm font-medium read-only"
					>
						Bukti Pembayaran
					</label>
					<input
						type="input"
						id="receipt"
						name="receipt"
						aria-label="receipt"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						value={
							dataPayment
								? dataPayment['receipt']
									? dataPayment['receipt']
									: ' – '
								: 'NO DATA'
						}
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="reason"
						className="block mb-2 text-sm font-medium read-only"
					>
						Keterangan Tambahan
					</label>
					<input
						type="input"
						id="reason"
						name="reason"
						aria-label="reason"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						placeholder={
							dataPayment
								? dataPayment['reason']
									? dataPayment['reason']
									: '– '
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="updatedAt"
						className="block mb-2 text-sm font-medium read-only"
					>
						Terakhir Diubah
					</label>
					<input
						type="text"
						id="updatedAt"
						name="updatedAt"
						aria-label="updatedAt"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 placeholder-black"
						placeholder={
							dataPayment
								? new Date(
										dataPayment['updatedAt']
								  ).toLocaleDateString()
								: 'NO DATA'
						}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
