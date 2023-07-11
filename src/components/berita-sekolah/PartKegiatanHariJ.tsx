import React from "react"

export default function PartKegiatanHarianJ() {
  const data = [
    {
      head: "Waktu",
      content: [
        "07:30-08:00",
        "08:00-09:00",
        "09:00-10:30",
        "10:00-10:45",
        "10:45-11:00",
      ],
    },
    {
      head: "Kegiatan",
      content: [
        "Jurnal Pagi (di kelas masing-masing)",
        "Kelas Menari",
        "Kegiatan Inti: (praktek wudhu, praktek sholat, iqro)",
        "Istirahat, makan, bermain",
        "Kegiatan Penutup",
      ],
    },
    {
      head: "Pengembangan",
      content: [
        ["Akhlak/ Sosem", "Seni", "Motorik", "Kognitif"],
        ["Akhlak/ Sosem", "Bahasa", "Kognitif", "Motorik"],
        ["Nilai Agama dan Moral", "Motorik dan Bahasa"],
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
      <h1 className="text-lg py-3">Kegiatan Harian KB, TK A & TK B (JUMAT)</h1>
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
