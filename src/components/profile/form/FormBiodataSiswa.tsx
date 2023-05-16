import { useEffect, useRef, useState } from 'react';

export default function FormBiodataSiswa(props: any) {
	const [data, setData] = useState();

	const useIsMount = () => {
		const isMountRef = useRef(true);
		useEffect(() => {
			isMountRef.current = false;
		}, []);
		return isMountRef.current;
	};

	const isMount = useIsMount();

	useEffect(() => {
		if (isMount) {
			console.log('First Render BIO SISWA');
		} else {
			console.log('Subsequent Render BIO SISWA');

			if (!props) {
				console.log('No props');
			} else if (props) {
				setData(props.props.props);
			}
		}
	});

	return (
		<div className="divide-y-2">
			<p className="text-2xl py-4">Biodata Siswa</p>
			<div className="space-y-2">
				<div className="flex flex-col lg:flex-row lg:space-x-6 pt-4">
					<div className="py-2 w-full">
						<label
							htmlFor="fullname"
							className="block mb-2 text-sm font-medium read-only"
						>
							Nama Lengkap
						</label>
						<input
							type="text"
							id="disabled-input-2"
							aria-label="disabled input 2"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							value={
								data
									? data['firstName'] + ' ' + data['lastName']
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
							id="disabled-input-2"
							aria-label="disabled input 2"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							value={data ? data['nickname'] : 'NO DATA'}
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={
							data
								? data['birthplace'] +
								  ', ' +
								  new Date(data['birthdate']).getDate() +
								  '/' +
								  (new Date(data['birthdate']).getMonth() + 1) +
								  '/' +
								  new Date(data['birthdate']).getFullYear()
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="gender"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jenis Kelamin
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={
							data
								? data['gender']
									? 'Perempuan'
									: 'Laki-Laki'
								: 'NO DATA'
						}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="religion"
						className="block mb-2 text-sm font-medium read-only"
					>
						Agama
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['religion'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="citizenship"
						className="block mb-2 text-sm font-medium read-only"
					>
						Kewarganegaraan
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['citizenship'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="birthOrder"
						className="block mb-2 text-sm font-medium read-only"
					>
						Anak Ke-
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['birthOrder'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="numOfSiblings"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jumlah Saudara
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['numOfSiblings'] : 'NO DATA'}
						disabled
					/>
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['statusInFamily'] : 'NO DATA'}
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
							id="disabled-input-2"
							aria-label="disabled input 2"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							value={data ? data['height'] + ' cm' : 'NO DATA'}
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
							id="disabled-input-2"
							aria-label="disabled input 2"
							className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							value={data ? data['weight	'] + ' kg' : 'NO DATA'}
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['bloodType'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="sicknessHistory"
						className="block mb-2 text-sm font-medium read-only"
					>
						Penyakit yang Pernah Diderita
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['sicknessHistory'] : 'NO DATA'}
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['distanceToHome'] : 'NO DATA'}
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['language'] : 'NO DATA'}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
