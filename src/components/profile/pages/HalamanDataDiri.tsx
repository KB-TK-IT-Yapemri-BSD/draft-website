'use client';

import SideBar from '@/components/profile/sidebar/SideBar';
import FormDataDiri from '@/components/profile/form/FormDataDiri';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function HalamanDataDiri() {
	const { data: session } = useSession();

	const [dataUser, setDataUser] = useState([]);

	const getDataUser = async () => {
		try {
			let res;
			if (session?.user.user.role === 'parents') {
				res = await fetch(
					`http://localhost:4000/v1/students/${session?.user.user.biodata_id}`,
					{
						method: 'GET',
						headers: {
							Authorization: `Bearer ${session?.user.token.accessToken}`,
						},
					}
				);
			} else {
				res = await fetch(
					`http://localhost:4000/v1/staffs/${session?.user.user.biodata_id}`,
					{
						method: 'GET',
						headers: {
							Authorization: `Bearer ${session?.user.token.accessToken}`,
						},
					}
				);
			}

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
				<div className="bg-white lg:w-2/3 h-max p-10 space-y-6 border-2 rounded-xl">
					<p className="text-3xl font-bold">Data Diri</p>
					<FormDataDiri props={dataUser} session={session} />
				</div>
			</div>
		</div>
	);
}
