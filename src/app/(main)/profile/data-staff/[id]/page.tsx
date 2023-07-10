import DetailDataStaff from "@/components/profile/pages/HalamanDataStaff/DetailDataStaff"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Staff | Detail",
}

export default function DetailStaff({ params }: { params: any }) {
  return <DetailDataStaff params={params} />
}
