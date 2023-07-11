import DaftarGuruSekolah from "@/components/beranda/DaftarGuruSekolah"
import Diagram from "@/components/beranda/Diagram"
import FAQCorner from "@/components/beranda/FAQCorner"
import KisahSuksesOrtu from "@/components/beranda/KisahSuksesOrtu"
import KurikulumSekolah from "@/components/beranda/KurikulumSekolah"
import PrakataKepsek from "@/components/beranda/PrakataKepsek"
import PrestasiSekolah from "@/components/beranda/PrestasiSekolah"
import VideoProfil from "@/components/beranda/VideoProfil"
import BerandaHeader from "@/components/layout/BerandaHeader"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Beranda",
}

export default function Beranda() {
  return (
    <>
      <BerandaHeader />
      <VideoProfil />
      <PrakataKepsek />
      <Diagram />
      <DaftarGuruSekolah />
      <KurikulumSekolah />
      <PrestasiSekolah />
      <KisahSuksesOrtu />
      <FAQCorner />
    </>
  )
}
