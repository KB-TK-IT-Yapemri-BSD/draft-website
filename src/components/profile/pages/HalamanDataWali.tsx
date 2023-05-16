'use client';

import FormBiodataAyah from '@/components/profile/form/FormBiodataAyah';
import FormBiodataIbu from '@/components/profile/form/FormBiodataIbu';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import SideBar from '../sidebar/SideBar';

export default function HalamanDataWali() {
	const { data: session } = useSession();

	const [dataUser, setDataUser] = useState([]);

	const getDataUser = async () => {
		try {
			const res = await fetch(
				`http://localhost:4000/v1/students/${session?.user.user.biodata_id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${session?.user.token.accessToken}`,
					},
				}
			);

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
		<div className="bg-white">
			<div className="mx-10 lg:mx-60 py-20 flex flex-col lg:flex-row gap-10">
				<div className="bg-primary lg:min-w-1/4 h-max p-4 lg:p-10 border-2 rounded-xl divide-y-[1px] space-y-2">
					<SideBar props={dataUser} session={session} />
				</div>
				<div className="bg-white lg:w-2/3 p-10 h-max space-y-6 border-2 rounded-xl">
					<p className="text-3xl font-bold">Data Orang Tua/ Wali</p>
					<FormBiodataAyah props={dataUser} session={session} />
					<FormBiodataIbu props={dataUser} session={session} />
				</div>
			</div>
		</div>
	);
}
