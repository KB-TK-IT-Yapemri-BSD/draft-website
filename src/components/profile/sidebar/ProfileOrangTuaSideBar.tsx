'use client';

import {
	AcademicCapSymbol,
	DocumentTextSymbol,
	LogoutSymbol,
	MoneySymbol,
	UsersSymbol,
} from '@/components/shared/Icons';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ProfileOrangTuaSideBar(props: any) {
	const [data, setData] = useState();
	const [type, setType] = useState();
	const [picture, setPicture] = useState();

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
			// console.log('First Render ORANG TUA SIDEBAR');
		} else {
			// console.log('Subsequent Render ORANG TUA SIDEBAR');

			if (!props) {
				// console.log('No props');
			} else if (props) {
				setData(props.props.props);
				setType(props.props.session.user.user.biodataType);
				setPicture(props.props.session.user.user.picture);
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
				<div className="mx-auto w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mb-6 rounded-full bg-secondary relative">
					<Image
						src={picture ? picture : ''}
						fill
						alt="profile-picture"
						style={{
							objectFit: 'cover',
							position: 'absolute',
						}}
						priority
						className="mx-auto w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mb-6 rounded-full bg-secondary relative"
					/>
				</div>

				<p className="font-bold text-xl">
					{data
						? data['firstName'] + ' ' + data['lastName']
						: 'NO DATA'}
				</p>
				<p className="text-md">{type ? type : 'NO DATA '}</p>
			</div>

			<div className="flex flex-col py-6 space-y-2">
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md text-left px-2 py-2">
					<Link
						href="/profile/data-diri"
						className="inline-flex space-x-2 py-1"
					>
						<DocumentTextSymbol />
						<p>Data Diri</p>
					</Link>
				</button>
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md text-left px-2 py-2">
					<Link
						href="/profile/data-wali"
						className="inline-flex space-x-2 py-1"
					>
						<UsersSymbol />
						<p>Data Wali</p>
					</Link>
				</button>
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md text-left px-2 py-2">
					<Link
						href="/profile/keuangan"
						className="inline-flex space-x-2 py-1"
					>
						<MoneySymbol />
						<p>Keuangan</p>
					</Link>
				</button>
				<button className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md text-left px-2 py-2">
					<Link
						href="/profile/nilai-murid"
						className="inline-flex space-x-2 py-1"
					>
						<AcademicCapSymbol />
						<p>Penilaian Murid</p>
					</Link>
				</button>
				<button
					onClick={logout}
					className="hover:bg-body-color hover:bg-opacity-20 hover:rounded-md text-left px-2 py-2"
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
