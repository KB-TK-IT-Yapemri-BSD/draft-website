import HalamanUpdateStaff from "@/components/profile/pages/HalamanDataStaff/UbahDataStaff"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Staff | Ubah Data",
}

export default function UbahDataParent({ params }: { params: any }) {
  return <HalamanUpdateStaff params={params} />
}
