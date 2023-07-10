import HalamanUpdateAkun from "@/components/profile/pages/HalamanDataAkun/UbahDataAkun"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Akun | Ubah Data",
}

export default function UbahDataParent({ params }: { params: any }) {
  return <HalamanUpdateAkun params={params} />
}
