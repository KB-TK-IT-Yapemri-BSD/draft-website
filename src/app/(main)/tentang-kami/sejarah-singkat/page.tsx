import Link from "next/link"

import SejarahSingkatHeader from "@/components/layout/SejarahSingkatHeader"
import { ArrowRight, HomepageSymbol } from "@/components/shared/Icons"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Tentang Kami",
}

export default function SejarahSingkat() {
  return (
    <>
      <SejarahSingkatHeader />

      <div className="bg-white">
        <div className="mx-10 py-20 lg:mx-60 divide-y-2 space-y-6">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="lg:inline-flex items-center">
                <li className="flex-col lg:inline-flex lg:items-center">
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
                      Tentang Kami
                    </span>
                    <ArrowRight />
                    <span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
                      Sejarah Singkat
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="w-full py-10">
            <div className="text-justify p-4 text-sm lg:p-10 leading-relaxed border-dashed border-2 border-grey">
              <p className="py-2 text-md">
                TK IT YAPEMRI BSD berdiri dibawah Naungan Yayasan Pendidikan
                Masyarakat Republik Indonesia atau YAPEMRI BSD yang dipimpin
                Oleh Bapak. Wendhyharto Kusumaatmadja yang memberikan mandat
                kepada Ibu Iim Rahmani, S.Pd selaku pimpinan lembaga untuk
                mengelola keberlangsungan pelayananan Pendidikan yang lebih baik
                lagi.
              </p>
              <p className="py-2 text-md">
                Yayasan Pendidikan YAPEMRI sendiri sudah berkecimpung di dunia
                Pendidikan dari Tahun 1980an dan memberikan pelayanan Pendidkan
                dari jenjang TK s.d SMK di daerah Depok untuk selanjutnya
                Yapemri melebarkan sayapnya untuk menambah dan memperluas
                layanan Pendidikan untuk masyarakat melalui didirikannya sekolah
                yang diberi nama TK IT. YAPEMRI BSD yang diresmikan oleh ketua
                Yayasan YAPEMRI Depok Ibu Hj. Tatty Rochaety pada 07 November
                2020.
              </p>
              <p className="py-2 text-md">
                Berdasarkan data tersebut di atas, dan dengan maksud ikut serta
                menyelenggarakan Pendidikan anak usia dini dalam rangka ikut
                membangun masa depan anak-anak menjadi lebih baik. TK IT YAPEMRI
                BSD terletak di Ruko Centro Havana MA. 20 De Latinos Rawa Buntu
                Kecamatan Serpong.
              </p>
              <p className="py-2 text-md">
                Dengan berdirinya TK IT YAPEMRI BSD ini kami berharap dapat
                memberikan pembekalan pengetahuan dasar kepada anak-anak usia
                dini melalui pembentukan karakter, kematangan emosional kearifan
                lokal dan wawasan global.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
