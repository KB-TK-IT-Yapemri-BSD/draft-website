import DetailDataParent from '@/components/profile/pages/HalamanDataMurid/DetailDataParent';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Parent | Detail',
};

export default function DetailParent({ params }: { params: any }) {
	return <DetailDataParent params={params} />;
}
