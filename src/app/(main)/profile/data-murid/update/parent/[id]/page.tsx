import HalamanUpdateParent from '@/components/profile/pages/HalamanDataMurid/UbahDataParent';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Orang Tua | Ubah Data',
};

export default function UbahDataParent({ params }: { params: any }) {
	return <HalamanUpdateParent params={params} />;
}
