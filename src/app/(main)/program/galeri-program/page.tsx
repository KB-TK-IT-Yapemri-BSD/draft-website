import Image from "next/image"
import Link from "next/link"

import GaleriProgramHeader from "@/components/layout/GaleriProgramHeader"
import { ArrowRight, HomepageSymbol } from "@/components/shared/Icons"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Program",
}

export default function Program() {
  return (
    <>
      <GaleriProgramHeader />

      <div className="bg-white">
        <div className="mx-10 lg:mx-60 py-20 divide-y-2 space-y-6">
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
                      Program
                    </span>
                    <ArrowRight />
                    <span className="flex text-xs lg:text-sm font-medium lg:ml-2 items-center">
                      Galeri Program
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/**
					<div className="w-full py-10 flex flex-wrap place-content-stretch">
						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kegiatan Harian"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kegiatan Harian
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Dolore consequuntur nemo,
								quibusdam enim iusto ipsum magni quos
								reprehenderit illo distinctio.
							</p>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kegiatan Outbound"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kegiatan Outbound
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum, nemo ipsa iste
								exercitationem ipsam cupiditate nihil facere
								assumenda saepe minima.
							</p>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kegiatan Renang"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kegiatan Renang
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Distinctio earum deleniti
								explicabo iusto quos harum eligendi minima,
								laborum quis quaerat.
							</p>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/rakBuku.JPEG"
									alt="Kunjungan ke Branchsto"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kunjungan ke Branchsto
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Corrupti dolorum vero, dolor
								ut hic totam architecto deleniti culpa? Ex,
								praesentium?
							</p>
						</div>

						<div className="card w-80 mx-4 mb-10">
							<div className="py-20 bg-cover relative">
								<Image
									src="/tentang-kami/musholla.JPEG"
									alt="Kunjungan ke Masjid Al-Aqsha"
									fill
									style={{ objectFit: 'cover' }}
								></Image>
							</div>
							<h1 className="text-lg text-center font-semibold bg-primary p-2">
								Kunjungan ke Masjid Al-Aqsha
							</h1>
							<p className="p-2 py-4 text-justify text-md">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quo, perspiciatis? Soluta,
								veniam at tenetur blanditiis hic voluptatibus
								dolorem illo consequuntur!
							</p>
						</div>
					</div>
					*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259515/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_2016_azjsys.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260071/yapemri-photos/Kegiatan%20Outbound/Copy_of_IMG_9313_vsyyrz.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259515/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_2071_e9j9lr.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259515/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_2006_mvyvtn.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259852/yapemri-photos/Kunjungan%20ke%20Branchsto/Copy_of_IMG_8991_ytvc3q.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260071/yapemri-photos/Kegiatan%20Outbound/Copy_of_IMG_9326_u7lnhr.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259517/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_2068_jabgkg.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259851/yapemri-photos/Kunjungan%20ke%20Branchsto/Copy_of_IMG_8967_nxiegm.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260070/yapemri-photos/Kegiatan%20Outbound/Copy_of_IMG_9268_burfgk.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259966/yapemri-photos/Kegiatan%20Harian/Copy_of_IMG_9005_wj8v4g.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259965/yapemri-photos/Kegiatan%20Harian/Copy_of_IMG_8955_vj25qv.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259965/yapemri-photos/Kegiatan%20Harian/Copy_of_IMG_8965_uzekqc.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259515/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_2034_clf7px.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260698/yapemri-photos/Kegiatan%20Renang/Copy_of_IMG_2252_ywbvvq.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687259515/yapemri-photos/Kunjungan%20ke%20Masjid%20Al-Aqsha/Copy_of_IMG_1994_gjwp5k.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/aurellieandra/image/upload/v1687260699/yapemri-photos/Kegiatan%20Renang/Copy_of_IMG_2270_ozk2q5.jpg"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
