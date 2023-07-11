import React from "react"

export default function TemaSemesterIni() {
  return (
    <div className="card p-10">
      <h1 className="text-4xl font-bold mb-6">Tema Semester Ini</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2 bg-grey">No.</th>
            <th className="border border-black px-4 py-2 bg-grey">Subtema</th>
            <th className="border border-black px-4 py-2 bg-grey">Durasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="border border-black px-4 py-2 text-center"
              rowSpan={3}
            >
              1
            </td>
            <td className="border border-black px-4 py-2">Rekreasi</td>
            <td className="border border-black px-4 py-2" rowSpan={3}>
              4 minggu
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">- Kendaraan</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              - Pesisir dan Pegunungan
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-center">2</td>
            <td className="border border-black px-4 py-2">Pekerjaan</td>
            <td className="border border-black px-4 py-2">3 minggu</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-center">3</td>
            <td className="border border-black px-4 py-2">Air, Udara, Api</td>
            <td className="border border-black px-4 py-2">2 minggu</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-center">4</td>
            <td className="border border-black px-4 py-2">Alat Komunikasi</td>
            <td className="border border-black px-4 py-2">2 minggu</td>
          </tr>
          <tr>
            <td
              className="border border-black px-4 py-2 text-center"
              rowSpan={3}
            >
              5
            </td>
            <td className="border border-black px-4 py-2">Tanah Airku</td>
            <td className="border border-black px-4 py-2" rowSpan={3}>
              3 minggu
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">- Negaraku</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              - Kehidupan di Kota dan di Desa
            </td>
          </tr>
          <tr>
            <td
              className="border border-black px-4 py-2 text-center"
              rowSpan={3}
            >
              6
            </td>
            <td className="border border-black px-4 py-2">Alam Semesta</td>
            <td className="border border-black px-4 py-2" rowSpan={3}>
              3 minggu
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              - Matahari, Bulan, Bintang, Bumi
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">- Gejala Alam</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
