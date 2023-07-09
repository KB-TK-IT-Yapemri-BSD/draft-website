import HalamanUpdatePenilaian from '@/components/profile/pages/HalamanDataPenilaian/UbahDataPenilaian';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Penilaian | Ubah Data',
};

export default function UbahDataPenilaian({ params }: { params: any }) {
	return <HalamanUpdatePenilaian params={params} />;
}
