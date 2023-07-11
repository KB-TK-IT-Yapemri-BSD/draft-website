import React from "react"

export default function TargetPembelajaran() {
  const data = [
    {
      head: "Kelas",
      content: ["KB", "TK-A", "TK-B"],
    },
    {
      head: "Uraian",
    },
  ]

  const maxContentLength = Math.max(
    ...data.map((item) =>
      Array.isArray(item.content) ? item.content.length : 0
    )
  )

  return (
    <div className="card p-10">
      <h1 className="text-4xl font-bold mb-6">Target Pembelajaran PAI</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {data.map((item, index) => (
              <th key={index} className="px-4 py-2 border border-black bg-grey">
                {item.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 w-1/12 text-center">
              KB
            </td>
            <td className="border border-black px-4 py-2">
              <div>
                <p className="underline">Surat Pendek</p>
                <p className="pb-2">
                  Al-Fatihah, An-Naas, A;l-Falaq, Al-Ikhlas, Al-Ashr
                </p>
                <p className="underline"> Do’a Harian</p>
                <p className="pb-2">
                  Doa Sebelum & Sesudah Makan, Sebelum Dan Sesudah Tidur, doa
                  Masuk & Keluar Kamar Mandi, Keluar Kelas, Naik Kendaraan,
                  Asmaul Husna, Bacaan wudhu dan gerakan Sholat.
                </p>
                <p className="underline">Hadits</p>
                <p className="pb-2">Sholat, Niat, Senyum, Jangan Marah</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 w-1/12 text-center">
              TK A
            </td>
            <td className="border border-black px-4 py-2">
              <div>
                <p className="underline">Surat Pendek</p>
                <p className="pb-2">
                  An Naas, Al Falaq, Al Ikhlash, An Nashr, Al Kaafiruun.
                </p>
                <p className="underline"> Do’a Harian</p>
                <p className="pb-2">
                  Doa Sebelum & Sesudah Makan, Sebelum Dan Sesudah Tidur, Kedua
                  Orang Tua, Masuk & Keluar Kamar Mandi, keselamatan dunia dan
                  akhirat Keluar Kelas, Naik Kendaraan, Asmaul Husna, Bacaan
                  Wudhu, dan Bacaan Sholat.
                </p>
                <p className="underline">Hadits</p>
                <p className="pb-2">
                  Sholat, Niat, Senyum, Jangan Marah, Kebersihan, Salam, Orang
                  Tua, Menuntut Ilmu, Kasih sayang.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 w-1/12 text-center">
              TK B
            </td>
            <td className="border border-black px-4 py-2">
              <div>
                <p className="underline">Surat Pendek</p>
                <p className="pb-2">
                  An naas, Al falaq, Al ikhlash, An Nashr, Al Kaafiruun, Al
                  Kautsar, Al Maa’uun, Al Quroisy, Ayat Kursi.
                </p>
                <p className="underline"> Do’a Harian</p>
                <p className="pb-2">
                  Doa Sebelum & Sesudah Makan, Sebelum Dan Sesudah Tidur, Kedua
                  Orang Tua, Masuk & Keluar Kamar Mandi, keselamatan dunia dan
                  akhirat Keluar Kelas, Naik Kendaraan, Masuk dan Keluar Masjid,
                  Bercermin, Berpakaian, Mendengar Petir, Syukur Nikmat, Asmaul
                  Husna, Bacaan Wudhu, dan Bacaan Sholat.
                </p>
                <p className="underline">Hadits</p>
                <p className="pb-2">
                  Sholat, Niat, Senyum, Jangan Marah, Kebersihan, Salam, Orang
                  Tua, Menuntut Ilmu, Kasih Sayang, Islam Agama Tertinggi,
                  Perkataan yang Baik, Keutamaan Membaca Al-Qur’an.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
