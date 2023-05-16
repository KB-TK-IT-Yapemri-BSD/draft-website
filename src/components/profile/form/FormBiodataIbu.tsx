import { useEffect, useRef, useState } from 'react';

export default function FormBiodataIbu(props: any) {
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
			console.log('First Render');
		} else {
			console.log('Subsequent Render');

			if (!props) {
				console.log('No props');
			} else if (props) {
				setData(props.props.mother_id);
			}
		}
	});

	return (
		<div className="divide-y-2">
			<p className="text-2xl py-4">Biodata Ibu</p>
			<div className="space-y-2">
				<div className="py-2 pt-4">
					<label
						htmlFor="status"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status Ibu
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['status'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
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
						htmlFor="occupation"
						className="block mb-2 text-sm font-medium read-only"
					>
						Pekerjaan
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['occupation'] : 'NO DATA'}
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['education'] : 'NO DATA'}
						disabled
					/>
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['address'] : 'NO DATA'}
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
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={data ? data['phone'] : 'NO DATA'}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
