import Link from "next/link"

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
          <div className="w-full py-20 space-y-6">
            <div className="card p-10 relative overflow-x-scroll">
              <h1 className="text-4xl font-bold mb-6">Agenda Sekolah</h1>
              <table className="table-auto w-full overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="border-2 border-black px-4 py-2">Sentra</th>
                    <th className="border-2 border-black px-4 py-2">Senin</th>
                    <th className="border-2 border-black px-4 py-2">Selasa</th>
                    <th className="border-2 border-black px-4 py-2">Rabu</th>
                    <th className="border-2 border-black px-4 py-2">Kamis</th>
                    <th className="border-2 border-black px-4 py-2">Jumat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-black px-4 py-2 font-bold">
                      Bahan Alam
                    </td>
                    <td className="border-2 border-black px-4 py-2">KB</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">TK A</td>
                    <td className="border-2 border-black px-4 py-2">TK B</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2 font-bold">
                      Seni
                    </td>
                    <td className="border-2 border-black px-4 py-2">TK A</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">TK B</td>
                    <td className="border-2 border-black px-4 py-2">KB</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2 font-bold">
                      Persiapan
                    </td>
                    <td className="border-2 border-black px-4 py-2">TK B</td>
                    <td className="border-2 border-black px-4 py-2">TK A</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2 font-bold">
                      IMTAQ
                    </td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">TK B</td>
                    <td className="border-2 border-black px-4 py-2">KB</td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">TK A</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2 font-bold">
                      UMMI DEWI
                    </td>
                    <td className="border-2 border-black px-4 py-2">-</td>
                    <td className="border-2 border-black px-4 py-2">TK A</td>
                    <td className="border-2 border-black px-4 py-2">TK B</td>
                    <td className="border-2 border-black px-4 py-2">TK A</td>
                    <td className="border-2 border-black px-4 py-2">TK B</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card p-10">
              <h1 className="text-4xl font-bold mb-6">Tema Semester Ini</h1>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border-2 border-black px-4 py-2">No.</th>
                    <th className="border-2 border-black px-4 py-2">Subtema</th>
                    <th className="border-2 border-black px-4 py-2">Durasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-black px-4 py-2">1</td>
                    <td className="border-2 border-black px-4 py-2">
                      Rekreasi
                    </td>
                    <td className="border-2 border-black px-4 py-2">
                      4 minggu
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2"></td>
                    <td className="border-2 border-black px-4 py-2">
                      - Kendaraan
                    </td>
                    <td className="border-2 border-black px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2"></td>
                    <td className="border-2 border-black px-4 py-2">
                      - Pesisir dan Pegunungan
                    </td>
                    <td className="border-2 border-black px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2">2</td>
                    <td className="border-2 border-black px-4 py-2">
                      Pekerjaan
                    </td>
                    <td className="border-2 border-black px-4 py-2">
                      3 minggu
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2">3</td>
                    <td className="border-2 border-black px-4 py-2">
                      Air, Udara, Api
                    </td>
                    <td className="border-2 border-black px-4 py-2">
                      2 minggu
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2">4</td>
                    <td className="border-2 border-black px-4 py-2">
                      Alat Komunikasi
                    </td>
                    <td className="border-2 border-black px-4 py-2">
                      2 minggu
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2">5</td>
                    <td className="border-2 border-black px-4 py-2">
                      Tanah Airku
                    </td>
                    <td className="border-2 border-black px-4 py-2">
                      3 minggu
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2"></td>
                    <td className="border-2 border-black px-4 py-2">
                      - Negaraku
                    </td>
                    <td className="border-2 border-black px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2"></td>
                    <td className="border-2 border-black px-4 py-2">
                      - Kehidupan di Kota dan di Desa
                    </td>
                    <td className="border-2 border-black px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2">6</td>
                    <td className="border-2 border-black px-4 py-2">
                      Alam Semesta
                    </td>
                    <td className="border-2 border-black px-4 py-2">
                      3 minggu
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2"></td>
                    <td className="border-2 border-black px-4 py-2">
                      - Matahari, Bulan, Bintang, Bumi
                    </td>
                    <td className="border-2 border-black px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-4 py-2"></td>
                    <td className="border-2 border-black px-4 py-2">
                      - Gejala Alam
                    </td>
                    <td className="border-2 border-black px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
