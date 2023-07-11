import React from "react"

export default function AgendaSekolahSingkat() {
  return (
    <div className="card p-10 relative overflow-x-scroll lg:overflow-hidden">
      <h1 className="text-4xl font-bold mb-6">Agenda Sekolah</h1>
      <table className="table-auto w-full overflow-x-scroll lg:overflow-hidden">
        <thead>
          <tr>
            <th className="border bg-grey border-black px-4 py-2">Sentra</th>
            <th className="border bg-grey border-black px-4 py-2">Senin</th>
            <th className="border bg-grey border-black px-4 py-2">Selasa</th>
            <th className="border bg-grey border-black px-4 py-2">Rabu</th>
            <th className="border bg-grey border-black px-4 py-2">Kamis</th>
            <th className="border bg-grey border-black px-4 py-2">Jumat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 font-semibold">
              Bahan Alam
            </td>
            <td className="border border-black px-4 py-2">KB</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">TK A</td>
            <td className="border border-black px-4 py-2">TK B</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 font-semibold">
              Seni
            </td>
            <td className="border border-black px-4 py-2">TK A</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">TK B</td>
            <td className="border border-black px-4 py-2">KB</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 font-semibold">
              Persiapan
            </td>
            <td className="border border-black px-4 py-2">TK B</td>
            <td className="border border-black px-4 py-2">TK A</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 font-semibold">
              IMTAQ
            </td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">TK B</td>
            <td className="border border-black px-4 py-2">KB</td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">TK A</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 font-semibold">
              UMMI DEWI
            </td>
            <td className="border border-black px-4 py-2">-</td>
            <td className="border border-black px-4 py-2">TK A</td>
            <td className="border border-black px-4 py-2">TK B</td>
            <td className="border border-black px-4 py-2">TK A</td>
            <td className="border border-black px-4 py-2">TK B</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
