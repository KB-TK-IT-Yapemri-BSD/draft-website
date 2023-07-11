import Link from "next/link"

import AgendaSekolahSingkat from "@/components/berita-sekolah/AgendaSekolahSingkat"
import KalenderAkademik from "@/components/berita-sekolah/KalenderAkademik"
import PartTataTertibSekolah from "@/components/berita-sekolah/PartTataTertibSekolah"
import ProgramKegiatanSekolah from "@/components/berita-sekolah/ProgramKegiatanSekolah"
import TargetPembelajaran from "@/components/berita-sekolah/TargetPembelajaranPAI"
import TemaSemesterIni from "@/components/berita-sekolah/TemaSemesterIni"
import BeritaSekolahHeader from "@/components/layout/BeritaSekolahHeader"
import { ArrowRight, HomepageSymbol } from "@/components/shared/Icons"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Berita Terbaru",
}

export default function BeritaSekolah() {
  return (
    <>
      <BeritaSekolahHeader />

      <div className="bg-white">
        <div className="mx-10 lg:mx-40 py-20 divide-y-2 divide-grey space-y-6">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="lg:inline-flex items-center">
                <li className="flex-col lg:inline-flex items-center">
                  <Link
                    href="/beranda"
                    className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
                  >
                    <HomepageSymbol />
                    Beranda
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex lg:items-center">
                    <ArrowRight />
                    <span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center lg:mr-2">
                      Berita Terbaru
                    </span>
                    <ArrowRight />
                    <span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
                      Berita Sekolah
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="w-full py-20 space-y-20">
            <PartTataTertibSekolah />
            <TargetPembelajaran />
            <ProgramKegiatanSekolah />
            <AgendaSekolahSingkat />
            <KalenderAkademik />
            <TemaSemesterIni />
          </div>
        </div>
      </div>
    </>
  )
}
