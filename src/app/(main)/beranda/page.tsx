import DaftarGuruSekolah from '@/components/beranda/DaftarGuruSekolah';
import KisahSuksesOrtu from '@/components/beranda/KisahSuksesOrtu';
import KurikulumSekolah from '@/components/beranda/KurikulumSekolah';
import PrakataKepsek from '@/components/beranda/PrakataKepsek';
import PrestasiSekolah from '@/components/beranda/PrestasiSekolah';
import BerandaHeader from '@/components/layout/BerandaHeader';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Beranda',
};

export default function Beranda() {
	return (
		<div>
			<BerandaHeader />

			<PrakataKepsek />

			<DaftarGuruSekolah />

			<KurikulumSekolah />

			<PrestasiSekolah />

			<KisahSuksesOrtu />
		</div>
	);
}
