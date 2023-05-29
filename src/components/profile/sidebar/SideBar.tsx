import ProfileStaffSideBar from './ProfileStaffSideBar';
import ProfileOrangTuaSideBar from './ProfileOrangTuaSideBar';
import { useEffect, useRef, useState } from 'react';

export default function SideBar(props: any) {
	const [role, setRole] = useState();

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
			// console.log('First Render SIDEBAR');
		} else {
			// console.log('Subsequent Render SIDEBAR');

			if (!props) {
				// console.log('No props');
			} else if (props) {
				setRole(props.session.user.user.role);
			}
		}
	});

	if (role === 'parents') {
		return <ProfileOrangTuaSideBar props={props} />;
	} else {
		return <ProfileStaffSideBar props={props} />;
	}
}
