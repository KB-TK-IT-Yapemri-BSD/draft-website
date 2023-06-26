import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function FormDetailStudent({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const [dataUser, setDataUser] = useState();

	const getDataUser = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/students/${id}`, {
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
						htmlFor="fullname"
						className="block mb-2 text-sm font-medium read-only"
					>
						Grade
					</label>
					<input
						type="text"
						id="fullname"
						name="fullname"
						aria-label="fullname"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['grade'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="flex flex-col lg:flex-row lg:space-x-6">
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

					<div className="py-2 w-full">
						<label
							htmlFor="nickname"
							className="block mb-2 text-sm font-medium read-only"
						>
							Nama Panggilan
						</label>
						<input
							type="text"
							id="nickname"
							name="nickname"
							aria-label="nickname"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={dataUser ? dataUser['nickname'] : 'NO DATA'}
							disabled
						/>
					</div>
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
										? 'Perempuan'
										: 'Laki-Laki'
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

				<div className="flex flex-col lg:flex-row lg:space-x-6">
					<div className="py-2 w-full">
						<label
							htmlFor="birthOrder"
							className="block mb-2 text-sm font-medium read-only"
						>
							Anak Ke-
						</label>
						<input
							type="text"
							id="birthOrder"
							name="birthOrder"
							aria-label="birthOrder"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={
								dataUser ? dataUser['birthOrder'] : 'NO DATA'
							}
							disabled
						/>
					</div>

					<div className="py-2 w-full">
						<label
							htmlFor="numOfSiblings"
							className="block mb-2 text-sm font-medium read-only"
						>
							Jumlah Saudara
						</label>
						<input
							type="text"
							id="numOfSiblings"
							name="numOfSiblings"
							aria-label="numOfSiblings"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={
								dataUser ? dataUser['numOfSiblings'] : 'NO DATA'
							}
							disabled
						/>
					</div>
				</div>

				<div className="py-2">
					<label
						htmlFor="statusInFamily"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status dalam Keluarga
					</label>
					<input
						type="text"
						id="statusInFamily"
						name="statusInFamily"
						aria-label="statusInFamily"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={
							dataUser ? dataUser['statusInFamily'] : 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="studentStatus"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status Murid
					</label>
					<input
						type="text"
						id="studentStatus"
						name="studentStatus"
						aria-label="studentStatus"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={
							dataUser
								? dataUser['studentStatus']
									? 'Aktif'
									: 'Tidak Aktif'
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="flex flex-col lg:flex-row lg:space-x-6">
					<div className="py-2 w-full">
						<label
							htmlFor="height"
							className="block mb-2 text-sm font-medium read-only"
						>
							Tinggi Badan
						</label>
						<input
							type="text"
							id="height"
							name="height"
							aria-label="height"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={
								dataUser
									? dataUser['height'] + ' cm'
									: 'NO DATA'
							}
							disabled
						/>
					</div>
					<div className="py-2 w-full">
						<label
							htmlFor="weight"
							className="block mb-2 text-sm font-medium read-only"
						>
							Berat Badan
						</label>
						<input
							type="text"
							id="weight"
							name="weight"
							aria-label="weight"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							value={
								dataUser
									? dataUser['weight'] + ' kg'
									: 'NO DATA'
							}
							disabled
						/>
					</div>
				</div>

				<div className="py-2">
					<label
						htmlFor="bloodType"
						className="block mb-2 text-sm font-medium read-only"
					>
						Golongan Darah
					</label>
					<input
						type="text"
						id="bloodType"
						name="bloodType"
						aria-label="bloodType"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['bloodType'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="diseaseHistory"
						className="block mb-2 text-sm font-medium read-only"
					>
						Penyakit yang Pernah Diderita
					</label>
					<input
						type="text"
						id="diseaseHistory"
						name="diseaseHistory"
						aria-label="diseaseHistory"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={
							dataUser ? dataUser['diseaseHistory'] : 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="distanceToHome"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jarak Tempat Tinggal ke TK
					</label>
					<input
						type="text"
						id="distanceToHome"
						name="distanceToHome"
						aria-label="distanceToHome"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={
							dataUser ? dataUser['distanceToHome'] : 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="language"
						className="block mb-2 text-sm font-medium read-only"
					>
						Bahasa Sehari-Hari di Rumah
					</label>
					<input
						type="text"
						id="language"
						name="language"
						aria-label="language"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={dataUser ? dataUser['language'] : 'NO DATA'}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
