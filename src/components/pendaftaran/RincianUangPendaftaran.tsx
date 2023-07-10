import React from "react"

export default function RincianUangPendaftaran() {
  const uangPerlengkapan = [
    "Baju seragam 3 stell",
    "Pensil warna isi 12 steadler",
    "Pensil, penghapus, rautan (1 paket)",
    "Lem fox botol 150gr",
    "Buku tulis + sampul 2 paket",
    "Buku gambar",
    "Buku tema 1 tahun",
    "Pocket file (portofolio) isi 50",
    "Kertas Origami 2 pack",
    "Sikat dan pasta gigi + tempat",
    "Masker logo sekolah",
    "Face shield logo sekolah",
    "Kaos kaki hitam",
    "Buku panduan orang tua",
    "Pas foto raport 1 paket",
    "Buku raport dinas + sampul",
  ]

  const uangKegiatan = [
    "Kunjungan Tema 1 dan 2",
    "Cooking Class 8 kali pertemuan",
    "Menu sehat 10 kali",
    "Karyawisata 1 kali",
    "Idul Qurban",
    "Pekan Muharram",
    "Perayaan Maulid",
    "Kartini Days",
  ]

  return (
    <>
      <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
        <div className="card lg:w-1/2">
          <h1 className="text-xl lg:text-2xl text-center font-semibold bg-primary p-2">
            Rincian Uang Kegiatan
          </h1>
          <table className="w-full my-4">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">NO.</th>
                <th className="border border-black px-4 py-2">
                  Rincian Uang Kegiatan
                </th>
              </tr>
            </thead>
            <tbody>
              {uangKegiatan.map((item, index) => (
                <tr key={item}>
                  <td className="border border-black px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-black px-4 py-2">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card lg:w-1/2">
          <h1 className="text-xl lg:text-2xl text-center font-semibold bg-primary p-2">
            Rincian Uang Perlengkapan
          </h1>
          <table className="w-full my-4">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">NO.</th>
                <th className="border border-black px-4 py-2">
                  Rincian Uang Perlengkapan
                </th>
              </tr>
            </thead>
            <tbody>
              {uangPerlengkapan.map((item, index) => (
                <tr key={item}>
                  <td className="border border-black px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-black px-4 py-2">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
