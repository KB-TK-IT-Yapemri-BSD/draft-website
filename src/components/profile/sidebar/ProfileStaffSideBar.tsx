'use client';

import {
	DocumentTextSymbol,
	LogoutSymbol,
	MoneySymbol,
	UserSymbol,
	UsersSymbol,
} from '@/components/shared/Icons';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ProfileStaffSideBar(props: any) {
	const [data, setData] = useState();
	const [type, setType] = useState();
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
			console.log('First Render STAFF SB');
		} else {
			console.log('Subsequent Render STAFF SB');

			if (!props) {
				console.log('No props');
			} else if (props) {
				setData(props.props.props);
				setType(props.props.session.user.user.biodataType);
				setRole(props.props.session.user.user.role);
			}
		}
	});

	const logout = async () => {
		await signOut({
			redirect: true,
			callbackUrl: '/beranda',
		});
	};

	return (
		<>
			<div className="flex flex-col text-center py-6 space-y-3 relative">
				<span className="mx-auto w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mb-6 rounded-full bg-secondary" />
				<p className="font-bold text-xl">
					{data
						? data['firstName'] + ' ' + data['lastName']
						: 'NO DATA'}
				</p>
				<p className="text-md">{type ? type : 'NO DATA '}</p>
			</div>
			<div className="flex flex-col text-center py-6 space-y-2">
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md px-2 py-2">
					<Link
						href="/profile/data-diri"
						className="inline-flex space-x-2 py-1"
					>
						<DocumentTextSymbol />
						<p>Data Diri</p>
					</Link>
				</button>
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md px-2 py-2">
					<Link
						href="/profile/info-akun"
						className="inline-flex space-x-2 py-1"
					>
						<UserSymbol />
						<p>Info Akun</p>
					</Link>
				</button>
				{role === 'teacher' ? (
					<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md px-2 py-2">
						<Link
							href="/profile/data-murid"
							className="inline-flex space-x-2 py-1"
						>
							<UsersSymbol />
							<p>Data Murid</p>
						</Link>
					</button>
				) : (
					<div className="hidden"></div>
				)}
				<button
					onClick={logout}
					className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md p-2"
				>
					<div className="inline-flex space-x-2 py-1">
						<LogoutSymbol />
						<p>Logout</p>
					</div>
				</button>
			</div>
		</>
	);
}