import FormInfoAkun from '@/components/profile/form/FormInfoAkun';
import ProfileOrangTuaSideBar from '@/components/profile/ProfileOrangTuaSideBar';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Profile',
};

export default function InfoAkun() {
	return (
		<div className="bg-white">
			<div className="mx-10 lg:mx-60 py-20 flex flex-col lg:flex-row gap-10">
				<div className="bg-primary lg:min-w-1/4 h-max p-4 lg:p-10 border-2 rounded-xl divide-y-[1px] space-y-2">
					<ProfileOrangTuaSideBar />
				</div>
				<div className="bg-white lg:w-2/3 h-max p-10 space-y-6 border-2 rounded-xl">
					<p className="text-3xl font-bold">Info Akun</p>
					<FormInfoAkun />
				</div>
			</div>
		</div>
	);
}
