"use client"

import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"

function KurikulumSekolah() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="bg-white">
      <div className="py-20 flex flex-col lg:mx-40 lg:flex-row lg:divide-y-0 lg:divide-x-2">
        <div className="p-10 text-center lg:text-left lg:my-auto lg:w-1/2">
          <h1 className="text-4xl pt-5 py-3 font-medium">Kurikulum Sekolah</h1>
          <p className="my-3 text-center lg:text-justify lg:pr-10">
            Kurikulum KB TK IT. YAPEMRI BSD mengacu kepada Kurikulum Nasional
            Depatemen Pendidikan dan kebudayaan serta digabungkan dengan
            pembelajaran keagamaan, dimana target utamanya adalah mengembangkan
            kemampuan yang ada pada diri anak yang didasari kaidah-kaidah
            keislaman.
          </p>

          <>
            <button
              className="bg-primary hover:bg-secondary hover:text-white mt-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto py-2.5 px-10 lg:px-0 lg:w-1/4 mx-auto"
              onClick={() => {
                openModal()
              }}
            >
              Selengkapnya
            </button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-10" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-3/4 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
                        <Dialog.Title
                          as="p"
                          className="text-2xl text-center font-medium leading-6 text-gray-900 pt-6 pb-8"
                        >
                          Kurikulum Sekolah
                        </Dialog.Title>
                        <div>
                          <Dialog.Description
                            as="p"
                            className="indent-10 py-2 text-justify"
                          >
                            Kurikulum adalah seperangkat peraturan mengenai isi
                            dan bahan pembelajaran serta cara yang digunakan
                            sebagai pedoman penyelenggaraan kegiatan belajar
                            mengajar (KBM) yang direncanakan untuk dilaksanakan
                            dalam rangka menyiapkan dan melaksanakan dasar-dasar
                            bagi perkembangan diri anak didik. Kegiatan tersebut
                            meliputi upaya perkembangan diri anak didik,
                            pembentukan perilaku, sosial emosional dan
                            nilai-nilai agama serta perkembangan kemampuan
                            berbahasa dan komunikasi, kognitif, sosial emosional
                            serta fisik dan motorik dan yang tidak kalah penting
                            yaitu akhlak.
                          </Dialog.Description>
                          <Dialog.Description
                            as="p"
                            className="indent-10 py-2 text-justify"
                          >
                            Kurikulum KB TK IT. YAPEMRI BSD mengacu kepada
                            Kurikulum Nasional Depatemen Pendidikan dan
                            kebudayaan serta digabungkan dengan pembelajaran
                            keagamaan, dimana target utamanya adalah
                            mengembangkan kemampuan yang ada pada diri anak yang
                            didasari kaidah-kaidah keislaman. Dengan metode
                            pembelajaran sentra, kami mencoba membuat suasana
                            belajar yang menyenangkan untuk anak. Dengan motto
                            “Belajar seraya Bermin” anak tidak akan merasa
                            terbebani dan enjoy dalam aktifitas di sekolah. ‘
                          </Dialog.Description>
                          <Dialog.Description
                            as="p"
                            className="indent-10 py-2 text-justify"
                          >
                            Melalui keterpaduan, kurikulum dan metode yang
                            digunakan, kami berharap murid, orang tua dan guru
                            dapat memperoleh kejelasan tentang proses kegiatan
                            dan hasil belajar yang baik, yang diharapkan dapat
                            dicapai murid di sekolah maupun di rumah.
                          </Dialog.Description>
                          <br />
                          <div>
                            <Dialog.Description
                              as="h1"
                              className="text-2xl font-bold"
                            >
                              Prinsip Pembelajaran
                            </Dialog.Description>
                            <Dialog.Description
                              as="p"
                              className="py-2 text-justify"
                            >
                              Untuk mewujudkan tujuan pendidikan di Kelompok
                              Bermain dan Taman Kanak-kanak Islam Terpadu
                              YAPEMRI BSD, kami menerapkan beberapa prinsip
                              pendidikan yaitu :
                            </Dialog.Description>
                            <Dialog.Description as="p" className="text-justify">
                              <h1 className="font-bold py-2">
                                Pendidikan pada 4 Pilar Pembelajaran
                              </h1>
                              <ul className="list-disc pl-6">
                                <li>
                                  Learning How To Know: belajar untuk memahami
                                </li>
                                <li>
                                  Learning How To Do: belajar bagaimana
                                  mengembangkan kemampuan
                                </li>
                                <li>
                                  Learning How To Be: belajar bagaimana memiliki
                                  akhlak
                                </li>
                                <li>
                                  Learning How To Live Together: bagaimana bisa
                                  bersosialisasi
                                </li>
                              </ul>

                              <h1 className="font-bold py-2">
                                Pendekatan Saintifik
                              </h1>
                              <p>
                                Pendekatan saintifik adalah kegiatan belajar
                                melalui pendekatan yang merangsang kemampuan
                                anak dengan mengarahkan, bukan mendoktrin.
                              </p>

                              <h1 className="font-bold py-2">
                                Belajar Sepanjang Hayat
                              </h1>
                              <p>
                                Belajar sepanjang hayat memberikan motivasi
                                kepada anak bahwa belajar dapat dilakukan
                                dimanapun, kapanpun, dengan siapapun tanpa
                                terbatas waktu dan tempat.
                              </p>
                            </Dialog.Description>
                          </div>
                          <br />
                          <div>
                            <Dialog.Description
                              as="h1"
                              className="text-2xl font-bold"
                            >
                              Pengembangan Kemampuan Leadership
                            </Dialog.Description>
                            <Dialog.Description
                              as="p"
                              className="indent-10 py-2 text-justify"
                            >
                              Pembelajaran kepada anak tidak semata-mata hanya
                              dalam bentuk ilmu pengetahuan. Tetapi menanamkan
                              pemahaman bahwa sejatinya seorang anak adalah
                              pemimpin. Setiap diri adalah pemimpin untuk itu
                              akan dirasakan kepercayaan dalam diri,
                              keterampilan berkomunikasi, kemampuan menerima dan
                              diterima orang disekeliling, kemampuan cara
                              belajar, kemampuan untuk bekerjasama.
                            </Dialog.Description>
                            <Dialog.Description
                              as="p"
                              className="indent-10 py-2 text-justify"
                            >
                              Berbekal dari semua itu KB.TK IT YAPEMRI BSD hadir
                              ditengah masyarakat untuk mengambil sedikit peran
                              untuk membantu para orang tua dalam membimbing,
                              mengarahkan dan membentuk karakteristik anak agar
                              menjadi anak-anak cerdas, religius, kreatif dan
                              mandiri yang nantinya akan berguna dimanapun
                              mereka berada.
                            </Dialog.Description>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-normal space-y-10 p-10 lg:w-1/2">
          <div className="card max-w-prose h-auto inline-flex w-full">
            <Image
              src="/beranda/home-icon.png"
              alt="ikon-kurikulum1"
              width={80}
              height={80}
            />
            <div className="my-auto pl-4 pb-2">
              <h1 className="text-xl font-medium my-auto">How To Know</h1>

              <p className="text-md text-body-color italic text-justify leading-relaxed -pb-1">
                Learning How To Know yaitu belajar untuk memahami.
              </p>
            </div>
          </div>

          <div className="card max-w-prose h-auto inline-flex w-full">
            <Image
              src="/beranda/list-icon.png"
              alt="ikon-kurikulum2"
              width={80}
              height={80}
            />
            <div className="my-auto pl-4 pb-2">
              <h1 className="text-xl font-medium my-auto">How To Do</h1>

              <p className="text-md text-body-color italic leading-relaxed -pb-1">
                Learning How To Do yaitu belajar bagaimana mengembangkan
                kemampuan.
              </p>
            </div>
          </div>

          <div className="card max-w-prose h-auto inline-flex w-full">
            <Image
              src="/beranda/achievement-icon.png"
              alt="ikon-kurikulum3"
              width={80}
              height={80}
            />
            <div className="my-auto pl-4 pb-2">
              <h1 className="text-xl font-medium my-auto">How To Be</h1>

              <p className="text-md text-body-color italic leading-relaxed -pb-1">
                Learning How To Be yaitu belajar bagaimana memiiki akhlak.
              </p>
            </div>
          </div>

          <div className="card max-w-prose h-auto inline-flex w-full">
            <Image
              src="/beranda/location-icon.png"
              alt="ikon-kurikulum4"
              width={80}
              height={80}
            />
            <div className="my-auto pl-4 pb-2">
              <h1 className="text-xl font-medium my-auto">
                How To Live Together
              </h1>

              <p className="text-md text-body-color italic leading-relaxed -pb-1">
                Learning How To Live Together yaitu bagaimana bisa
                bersosialisasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KurikulumSekolah
