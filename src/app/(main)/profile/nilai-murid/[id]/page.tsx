import HalamanDetailNilaiMurid from '@/components/profile/pages/HalamanDataPenilaian/DetailNilaiMurid';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Nilai Murid | Detail',
};

export default function DetailNilaiMurid({ params }: { params: any }) {
	return <HalamanDetailNilaiMurid params={params} />;
}
