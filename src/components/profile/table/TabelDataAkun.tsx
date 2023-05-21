'use client';

import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react';
import {
	ExclamationCircleSymbol,
	EyeSymbol,
	PencilSymbol,
	TrashCanSymbol,
} from '@/components/shared/Icons';

export default function TabelDataAkun() {
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
			let res = await fetch(`http://localhost:4000/v1/users`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUsers(data);
			console.log(data);
		} catch (error) {
			throw error;
		}
	};

	const handleDeleteUser = async (id: any) => {
		try {
			await fetch(`http://localhost:4000/v1/users/${id}`, {
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

	return (
		<div className="overflow-x-auto outline outline-grey outline-[1px]">
			<table className="w-full text-sm text-left text-gray-500 ">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">
							Nama Lengkap
						</th>
						<th scope="col" className="px-6 py-3">
							Role
						</th>
						<th scope="col" className="px-6 py-3">
							Email
						</th>
						<th scope="col" className="px-6 py-3">
							Biodata ID
						</th>
						<th scope="col" className="px-6 py-3">
							Biodata Type
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
										{user['biodata_id']
											? user['biodata_id']['firstName'] +
											  ' ' +
											  user['biodata_id']['lastName']
											: 'NO DATA'}
									</th>
									<td className="px-6 py-4 uppercase">
										{user ? user['role'] : 'NO DATA'}
									</td>
									<td className="px-6 py-4">
										{user ? user['email'] : 'NO DATA'}
									</td>
									<td className="px-6 py-4">
										{user['biodata_id']
											? user['biodata_id']['_id']
											: 'NO DATA'}
									</td>
									<td className="px-6 py-4">
										{user['biodataType']
											? user['biodataType']
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