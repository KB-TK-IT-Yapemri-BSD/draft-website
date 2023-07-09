import DetailDataPenilaian from '@/components/profile/pages/HalamanDataPenilaian/DetailDataPenilaian';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Penilaian Murid | Detail',
};

export default function DetailPenilaian({ params }: { params: any }) {
	return <DetailDataPenilaian params={params} />;
}
