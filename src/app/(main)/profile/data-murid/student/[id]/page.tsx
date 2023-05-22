import DetailDataMurid from '@/components/profile/pages/HalamanDataMurid/DetailDataMurid';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Murid | Detail',
};

export default function DetailMurid({ params }: { params: any }) {
	return <DetailDataMurid params={params} />;
}
