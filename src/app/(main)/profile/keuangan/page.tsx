import Link from "next/link"

import HalamanTabelKeuangan from "@/components/profile/pages/HalamanKeuangan/TabelKeuangan"
import { BigArrowLeft } from "@/components/shared/Icons"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Keuangan",
}

export default function Keuangan() {
  return (
    <div className="bg-white">
      <div className="mx-10 py-20 lg:mx-60 space-y-6">
        <Link
          href="/profile/data-diri"
          className="inline-flex items-center text-xs lg:text-sm font-medium text-body-color hover:text-black"
        >
          <BigArrowLeft />
          <p className="ml-4 text-lg">Kembali</p>
        </Link>

        <HalamanTabelKeuangan />
      </div>
    </div>
  )
}
