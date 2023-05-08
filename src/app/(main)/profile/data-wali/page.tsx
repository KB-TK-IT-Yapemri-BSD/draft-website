import FormBiodataAyah from '@/components/profile/form/FormBiodataAyah';
import FormBiodataIbu from '@/components/profile/form/FormBiodataIbu';
import ProfileOrangTuaSideBar from '@/components/profile/ProfileOrangTuaSideBar';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Profile',
};

export default function DataWali() {
	return (
		<div className="bg-white">
			<div className="mx-10 lg:mx-60 py-20 flex flex-col lg:flex-row gap-10">
				<div className="bg-primary lg:min-w-1/4 h-max p-4 lg:p-10 border-2 rounded-xl divide-y-[1px] space-y-2">
					<ProfileOrangTuaSideBar />
				</div>
				<div className="bg-white lg:w-2/3 p-10 h-max space-y-6 border-2 rounded-xl">
					<p className="text-3xl font-bold">Data Orang Tua/ Wali</p>
					<FormBiodataAyah />
					<FormBiodataIbu />
				</div>
			</div>
		</div>
	);
}