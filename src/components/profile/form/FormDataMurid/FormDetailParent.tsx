import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function FormDetailParent({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const [dataUser, setDataUser] = useState();

	const getDataUser = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/parents/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setDataUser(data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getDataUser();
	}, []);

	return (
		<div className="divide-y-2">
			<div className="space-y-2">
				<div className="py-2 pt-6">
					<label
						htmlFor="status"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status
					</label>
					<input
						type="text"
						id="status"
						name="status"
						aria-label="status"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['status'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2 w-full">
					<label
						htmlFor="fullname"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nama Lengkap
					</label>
					<input
						type="text"
						id="fullname"
						name="fullname"
						aria-label="fullname"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={
							dataUser
								? dataUser['firstName'] +
								  ' ' +
								  dataUser['lastName']
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="birth"
						className="block mb-2 text-sm font-medium read-only"
					>
						Tempat, Tanggal Lahir
					</label>
					<input
						type="text"
						id="birth"
						name="birth"
						aria-label="birth"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={
							dataUser
								? dataUser['birthplace'] +
								  ', ' +
								  new Date(dataUser['birthdate']).getDate() +
								  '/' +
								  (new Date(dataUser['birthdate']).getMonth() +
										1) +
								  '/' +
								  new Date(dataUser['birthdate']).getFullYear()
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="flex flex-col lg:flex-row lg:space-x-6">
					<div className="py-2 w-full">
						<label
							htmlFor="gender"
							className="block mb-2 text-sm font-medium read-only"
						>
							Jenis Kelamin
						</label>
						<input
							type="text"
							id="gender"
							name="gender"
							aria-label="gender"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={
								dataUser
									? dataUser['gender']
										? 'Wanita'
										: 'Pria'
									: 'NO DATA'
							}
							disabled
						/>
					</div>

					<div className="py-2 w-full">
						<label
							htmlFor="religion"
							className="block mb-2 text-sm font-medium read-only"
						>
							Agama
						</label>
						<input
							type="text"
							id="religion"
							name="religion"
							aria-label="religion"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={dataUser ? dataUser['religion'] : 'NO DATA'}
							disabled
						/>
					</div>

					<div className="py-2 w-full">
						<label
							htmlFor="citizenship"
							className="block mb-2 text-sm font-medium read-only"
						>
							Kewarganegaraan
						</label>
						<input
							type="text"
							id="citizenship"
							name="citizenship"
							aria-label="citizenship"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={
								dataUser ? dataUser['citizenship'] : 'NO DATA'
							}
							disabled
						/>
					</div>
				</div>

				<div className="py-2">
					<label
						htmlFor="address"
						className="block mb-2 text-sm font-medium read-only"
					>
						Alamat
					</label>
					<input
						type="text"
						id="address"
						name="address"
						aria-label="address"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['address'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="phone"
						className="block mb-2 text-sm font-medium read-only"
					>
						No. Telephone
					</label>
					<input
						type="text"
						id="phone"
						name="phone"
						aria-label="phone"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['phone'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="occupation"
						className="block mb-2 text-sm font-medium read-only"
					>
						Pekerjaan
					</label>
					<input
						type="text"
						id="occupation"
						name="occupation"
						aria-label="occupation"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['occupation'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="education"
						className="block mb-2 text-sm font-medium read-only"
					>
						Pendidikan
					</label>
					<input
						type="text"
						id="education"
						name="education"
						aria-label="education"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['education'] : 'NO DATA'}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
