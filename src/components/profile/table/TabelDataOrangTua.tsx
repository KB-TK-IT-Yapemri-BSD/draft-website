'use client';

import {
	ExclamationCircleSymbol,
	EyeSymbol,
	PencilSymbol,
	TrashCanSymbol,
} from '@/components/shared/Icons';
import { Dialog, Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

export default function TabelDataOrangTua() {
	const { data: session } = useSession();

	const router = useRouter();

	const [dataUsers, setDataUsers] = useState([]);
	const [changes, setChanges] = useState(false);

	let [isOpen, setIsOpen] = useState(false);
	let [currentId, setCurrentId] = useState();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const getDataUsers = async () => {
		try {
			setChanges(false);

			let res = await fetch(`http://localhost:4000/v1/parents`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUsers(data);
		} catch (error) {
			throw error;
		}
	};

	const handleDeleteUser = async (id: any) => {
		try {
			await fetch(`http://localhost:4000/v1/parents/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			setChanges(true);
			closeModal();
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getDataUsers();
	}, [changes == true]);

	console.log(dataUsers);

	return (
		<div className="overflow-x-auto outline outline-grey outline-[1px]">
			<table className="w-full text-sm text-left text-gray-500 ">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">
							Nama Lengkap
						</th>
						<th scope="col" className="px-6 py-3">
							Jenis Kelamin
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							No. Telp
						</th>
						<th scope="col" className="px-6 py-3">
							Agama
						</th>
						<th scope="col" className="px-6 py-3">
							Aksi
						</th>
					</tr>
				</thead>
				<tbody>
					{dataUsers
						? dataUsers.map((user) => (
								<tr className="bg-white border-b  hover:bg-gray-50">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										{user
											? user['firstName'] +
											  ' ' +
											  user['lastName']
											: 'NO DATA'}
									</th>
									<td className="px-6 py-4">
										{user['gender'] ? 'P' : 'L'}
									</td>
									<td className="px-6 py-4">
										{user['status']
											? user['status']
											: 'NO DATA'}
									</td>
									<td className="px-6 py-4">
										{user['phone']
											? user['phone']
											: 'NO DATA'}
									</td>
									<td className="px-6 py-4">
										{user['religion']
											? user['religion']
											: 'NO DATA'}
									</td>
									<td className="flex items-center px-6 py-4 space-x-2">
										<button
											className="bg-primary rounded-md p-2 my-4 inline-flex lg:my-0"
											onClick={() =>
												router.push(
													`/profile/data-akun/detail/${user['id']}`
												)
											}
										>
											<EyeSymbol />
										</button>
										<button
											className="bg-blue-primary rounded-md p-2 my-4 inline-flex lg:my-0"
											onClick={() =>
												router.push(
													`/profile/data-akun/update/${user['id']}`
												)
											}
										>
											<PencilSymbol />
										</button>
										{user['id'] ? (
											<>
												<button
													className="bg-red-danger rounded-md p-2 my-4 inline-flex lg:my-0"
													onClick={() => {
														setCurrentId(
															user['id']
														);
														openModal();
													}}
												>
													<TrashCanSymbol />
												</button>
												<Transition
													appear
													show={isOpen}
													as={Fragment}
												>
													<Dialog
														as="div"
														className="relative z-10"
														onClose={closeModal}
													>
														<Transition.Child
															as={Fragment}
															enter="ease-out duration-300"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="ease-in duration-200"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<div className="fixed inset-0 bg-black bg-opacity-25" />
														</Transition.Child>

														<div className="fixed inset-0 overflow-y-auto">
															<div className="flex min-h-full items-center justify-center p-4 text-center">
																<Transition.Child
																	as={
																		Fragment
																	}
																	enter="ease-out duration-300"
																	enterFrom="opacity-0 scale-95"
																	enterTo="opacity-100 scale-100"
																	leave="ease-in duration-200"
																	leaveFrom="opacity-100 scale-100"
																	leaveTo="opacity-0 scale-95"
																>
																	<Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
																		<ExclamationCircleSymbol />

																		<Dialog.Title
																			as="p"
																			className="text-2xl text-center font-medium leading-6 text-gray-900 pt-6 pb-8"
																		>
																			Yakin
																			Hapus
																			Data?
																		</Dialog.Title>

																		<div className="flex gap-4 justify-center">
																			<button
																				className="bg-red-danger text-white hover:bg-red-700 rounded-md w-20 px-4 py-2 my-2 inline-flex items-center"
																				onClick={() => {
																					handleDeleteUser(
																						currentId
																					);
																				}}
																			>
																				<p className="mx-auto">
																					Ya
																				</p>
																			</button>
																			<button
																				className="bg-blue-primary text-white hover:bg-blue-700 rounded-md w-20 px-4 py-2 my-2 inline-flex items-center"
																				onClick={
																					closeModal
																				}
																			>
																				<p className="mx-auto">
																					Tidak
																				</p>
																			</button>
																		</div>
																	</Dialog.Panel>
																</Transition.Child>
															</div>
														</div>
													</Dialog>
												</Transition>
											</>
										) : (
											'NO DATA'
										)}
									</td>
								</tr>
						  ))
						: 'NO DATA'}
				</tbody>
			</table>
		</div>
	);
}