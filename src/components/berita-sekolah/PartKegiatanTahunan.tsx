import React from "react"

export default function PartKegiatanTahunan() {
  const data = [
    {
      head: "Kegiatan",
      content: [
        "Peringatan Hari Besar Nasional",
        "Peringatan Hari Besar Islam",
        "Kunjungan Edukasi",
        "Perlombaan",
        "Seminar Parenting",
      ],
    },
    {
      head: "Uraian",
      content: [
        "HUT RI, Kartini",
        "Qurban, Muharram, Maulid Nabi, Manasik Haji, Pesantren Kilat",
        "Outbound/ Karyawisata",
        "Porseni, Perlombaan Antar Sekolah",
        "Menyamakan visi dan misi mendidik anak",
      ],
    },
  ]

  const maxContentLength = Math.max(
    ...data.map((item) =>
      Array.isArray(item.content) ? item.content.length : 0
    )
  )

  return (
    <>
      <h1 className="text-xl pt-6 pb-3 font-semibold">D. Kegiatan Tahunan</h1>
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
          {[...Array(maxContentLength)].map((_, index) => (
            <tr key={index}>
              {data.map((item, i) => {
                if (item.head === "Uraian") {
                  const content = item.content[index] || []
                  return (
                    <td key={i} className="border border-black px-4 py-2 w-1/3">
                      {Array.isArray(content) ? (
                        <ul className="list-disc list-inside">
                          {content.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        content
                      )}
                    </td>
                  )
                }
                return (
                  <td key={i} className="border border-black px-4 py-2">
                    {item.content[index] || ""}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
