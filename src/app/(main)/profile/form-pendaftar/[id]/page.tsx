import DetailFormPendaftar from '@/components/profile/pages/HalamanFormPendaftar';

export const metadata = {
	title: 'KB TK IT Yapemri BSD | Form Pendaftar | Detail',
};

export default function HalamanFormPendaftar({ params }: { params: any }) {
	return <DetailFormPendaftar params={params} />;
}
