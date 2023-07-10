import Image from "next/image"
import Link from "next/link"

import DaftarProgramHeader from "@/components/layout/DaftarProgramHeader"
import {
  ArrowRight,
  HomepageSymbol,
  MagnifyingGlass,
} from "@/components/shared/Icons"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Program",
}

export default function Program() {
  return (
    <>
      <DaftarProgramHeader />

      <div className="bg-white">
        <div className="mx-10 lg:mx-60 py-20 divide-y-2 space-y-6">
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
                      Program
                    </span>
                    <ArrowRight />
                    <span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
                      Daftar Program
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="w-full py-10 flex flex-wrap place-content-evenly">
            <div className="card w-80 mx-4 mb-10">
              <div className="py-20 bg-cover relative">
                <Image
                  src="/tentang-kami/rakBuku.JPEG"
                  alt="Kegiatan Harian"
                  fill
                  style={{ objectFit: "cover" }}
                ></Image>
              </div>
              <h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
                Kegiatan Harian
              </h1>
              <p className="p-2 py-4 text-justify text-sm lg:text-md">
                Kehidupan sekolah sehari-hari adalah perjalanan belajar yang
                dinamis, terhubung, dan berkembang. Anak-anak menjelajahi
                berbagai mata pelajaran, berkolaborasi dalam proyek, dan
                membentuk persahabatan yang langgeng. Guru menginspirasi rasa
                ingin tahu dan berpikir kritis. Dari ruang kelas hingga taman
                bermain, hubungan sosial, dan pengembangan pribadi, yang
                membentuk pembelajar seumur hidup.
              </p>
            </div>

            <div className="card w-80 mx-4 mb-10">
              <div className="py-20 bg-cover relative">
                <Image
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260071/yapemri-photos/Kegiatan%20Outbound/Copy_of_IMG_9307_z8zx7n.jpg"
                  alt="Kegiatan Outbound"
                  fill
                  style={{ objectFit: "cover" }}
                ></Image>
              </div>
              <h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
                Kegiatan Outbound
              </h1>
              <p className="p-2 py-4 text-justify text-sm lg:text-md">
                Kegiatan Outbound menawarkan pembelajaran langsung di alam,
                membina hubungan yang mendalam dengan alam bebas. Anak-anak
                mengeksplorasi, melakukan eksperimen, dan terlibat dalam
                kegiatan praktis, memperoleh pengetahuan lintas mata pelajaran
                sambil mengembangkan keterampilan pemecahan masalah dan
                kecintaan terhadap alam.
              </p>
            </div>

            <div className="card w-80 mx-4 mb-10">
              <div className="py-20 bg-cover relative">
                <Image
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260699/yapemri-photos/Kegiatan%20Renang/Copy_of_IMG_2270_ozk2q5.jpg"
                  alt="Kegiatan Renang"
                  fill
                  style={{ objectFit: "cover" }}
                ></Image>
              </div>
              <h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
                Kegiatan Renang
              </h1>
              <p className="p-2 py-4 text-justify text-sm lg:text-md">
                Dalam program sekolah ini, anak-anak mengunjungi kolam renang
                untuk mempelajari keterampilan berenang, keamanan air, dan kerja
                sama tim di bawah bimbingan guru-guru. Ini mempromosikan
                kebugaran fisik dan kecintaan untuk berenang.
              </p>
            </div>

            <div className="card w-80 mx-4 mb-10">
              <div className="py-20 bg-cover relative">
                <Image
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259851/yapemri-photos/Kunjungan%20ke%20Branchsto/Copy_of_IMG_8967_nxiegm.jpg"
                  alt="Kunjungan ke Branchsto"
                  fill
                  style={{ objectFit: "cover" }}
                ></Image>
              </div>
              <h1 className="text-lg text-center font-semibold bg-primary p-2">
                Kunjungan ke Branchsto
              </h1>
              <p className="p-2 py-4 text-justify text-sm lg:text-md">
                Anak-anak dengan bersemangat mengunjungi pertanian, membenamkan
                diri dalam keajaiban alam dan pertanian. Dipandu oleh guru,
                mereka berinteraksi dengan hewan ternak, menjelajahi ladang, dan
                belajar tentang praktik pertanian berkelanjutan, membina
                hubungan dengan lingkungan dan kecintaan pada makanan sehat.
              </p>
            </div>

            <div className="card w-80 mx-4 mb-10">
              <div className="py-20 bg-cover relative">
                <Image
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259515/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_1994_gjwp5k.jpg"
                  alt="Kunjungan ke Masjid Al-Aqsha"
                  fill
                  style={{ objectFit: "cover" }}
                ></Image>
              </div>
              <h1 className="text-md lg:text-lg text-center font-semibold bg-primary p-2">
                Kunjungan ke Masjid Al-Aqsha
              </h1>
              <p className="p-2 py-4 text-justify text-sm lg:text-md">
                Anak-anak mengunjungi masjid setempat, memperluas pemahaman
                religi mereka. Dibimbing oleh para guru, mereka mengeksplorasi
                arsitektur masjid, tradisi, dan nilai-nilai, menumbuhkan rasa
                hormat, apresiasi keragaman, dan rasa kebersamaan dalam
                perjalanan pendidikan awal mereka, dan pengetahuan baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
