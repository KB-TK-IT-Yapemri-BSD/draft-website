import React from "react"

export default function PartKegiatanHarianSK() {
  const data = [
    {
      head: "Waktu",
      content: [
        "07:40-08:00",
        "08:00-08:20",
        "08:40-10:00",
        "10:00-10:45",
        "10:45-11:00",
      ],
    },
    {
      head: "Kegiatan",
      content: [
        "Jurnal Pagi (di kelas masing-masing)",
        "Circle Time (doa, bernyanyi, bergerak, ikrar, informasi bermain di sentra dan tema)",
        "Kegiatan Inti",
        "Istirahat, makan, bermain",
        "Kegiatan Penutup",
      ],
    },
    {
      head: "Pengembangan",
      content: [
        ["Akhlak/ Sosem", "Seni", "Motorik", "Kognitif"],
        ["NAM", "Akhlak/ Sosem", "Bahasa", "Kognitif", "Motorik"],
        ["Bahasa", "Kognitif", "Seni", "Motorik"],
        ["Akhlak/ Sosem", "Bahasa", "Motorik"],
        ["Akhlak/ Sosem", "Bahasa", "Motorik"],
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
      <h1 className="text-xl pt-6 pb-3 font-semibold">A. Kegiatan Harian</h1>
      <h1 className="text-lg pb-3">
        Kegiatan Harian KB, (SENIN, RABU), TK A & TK B (SENIN-KAMIS)
      </h1>
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
                if (item.head === "Pengembangan") {
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
