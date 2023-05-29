import HalamanUpdateStudent from '@/components/profile/pages/HalamanDataMurid/UbahDataStudent';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Murid | Ubah Data',
};

export default function UbahDataMurid({ params }: { params: any }) {
	return <HalamanUpdateStudent params={params} />;
}
