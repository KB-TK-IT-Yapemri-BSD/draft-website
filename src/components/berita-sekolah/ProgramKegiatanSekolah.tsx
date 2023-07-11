import React from "react"

import PartKegiatanHarianSK from "./PartKegiatanHarianSK"
import PartKegiatanHarianJ from "./PartKegiatanHariJ"
import PartKegiatanMingguan from "./PartKegiatanMingguan"
import PartKegiatanSemester from "./PartKegiatanSemester"
import PartKegiatanTahunan from "./PartKegiatanTahunan"

export default function ProgramKegiatanSekolah() {
  return (
    <div className="card p-10">
      <h1 className="text-4xl font-bold mb-6">Program Kegiatan Sekolah</h1>
      <PartKegiatanHarianSK />
      <PartKegiatanHarianJ />
      <PartKegiatanMingguan />
      <PartKegiatanSemester />
      <PartKegiatanTahunan />
    </div>
  )
}
