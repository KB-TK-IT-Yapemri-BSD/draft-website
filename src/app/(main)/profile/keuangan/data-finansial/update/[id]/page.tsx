import HalamanUpdateDataFinansial from '@/components/profile/pages/HalamanKeuangan/HalamanDataFinansial/UbahDataFinansial';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Data Finansial | Ubah Data',
};

export default function UbahDataParent({ params }: { params: any }) {
	return <HalamanUpdateDataFinansial params={params} />;
}
