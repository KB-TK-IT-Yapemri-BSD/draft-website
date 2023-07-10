import HalamanUnggahBuktiPembayaran from "@/components/profile/pages/HalamanKeuangan/HalamanPembayaranPersonal/UnggahBuktiPembayaran"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Data Finansial | Bukti Pembayaran",
}

export default function UbahDataParent({ params }: { params: any }) {
  return <HalamanUnggahBuktiPembayaran params={params} />
}
