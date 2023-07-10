import PendaftaranHeader from "@/components/layout/PendaftaranHeader"
import RincianPendaftaran from "@/components/pendaftaran/HargaPendaftaran"
import RincianUangPendaftaran from "@/components/pendaftaran/RincianUangPendaftaran"
import SyaratPendaftaran from "@/components/pendaftaran/SyaratPendaftaran"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Pendaftaran",
}

export default function Pendaftaran() {
  return (
    <>
      <PendaftaranHeader />
      <div className="bg-white">
        <div className="mx-10 lg:mx-60 py-10">
          <div className="w-full py-20 space-y-10">
            <SyaratPendaftaran />
            <RincianPendaftaran />
            <RincianUangPendaftaran />
          </div>
        </div>
      </div>
    </>
  )
}
