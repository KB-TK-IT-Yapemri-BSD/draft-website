import DetailDataFinansial from "@/components/profile/pages/HalamanKeuangan/HalamanDataFinansial/DetailDataFinansial"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Data Finansial | Detail",
}

export default function HalamanDetailDataFinansial({
  params,
}: {
  params: any
}) {
  return <DetailDataFinansial params={params} />
}
