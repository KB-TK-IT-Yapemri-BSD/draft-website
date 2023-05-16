import { useEffect, useRef, useState } from 'react';

export default function FormStatusSiswa(props: any) {
	const [status, setStatus] = useState();

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
			console.log('First Render STATUS SISWA');
		} else {
			console.log('Subsequent Render STATUS SISWA');

			if (!props) {
				console.log('No props');
			} else if (props) {
				setStatus(props.props.props.studentStatus);
			}
		}
	});

	return (
		<>
			<div className="divide-y-2">
				<p className="text-2xl py-4">Status Siswa</p>
				<div className="py-4">
					<label
						htmlFor="status"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status Siswa
					</label>
					<input
						type="text"
						id="status"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={status ? 'Aktif' : 'Tidak Aktif'}
						disabled
					/>
				</div>
			</div>
		</>
	);
}
