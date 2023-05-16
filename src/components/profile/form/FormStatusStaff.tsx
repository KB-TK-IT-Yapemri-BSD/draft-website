import { useEffect, useRef, useState } from 'react';

export default function FormStatusStaff(props: any) {
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
			console.log('First Render STATUS STAFF');
		} else {
			console.log('Subsequent Render STATUS STAFF');

			if (!props) {
				console.log('No props');
			} else if (props) {
				setStatus(props.props.props.status);
			}
		}
	});

	return (
		<>
			<div className="divide-y-2">
				<p className="text-2xl py-4">Status Staff</p>
				<div className="py-4">
					<label
						htmlFor="status"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status Staff
					</label>
					<input
						type="text"
						id="status"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={status ? status : 'NO DATA'}
						disabled
					/>
				</div>
			</div>
		</>
	);
}
