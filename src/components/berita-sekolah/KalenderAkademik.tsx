import React from "react"
import Image from "next/image"

export default function KalenderAkademik() {
  return (
    <div className="card p-10">
      <h1 className="text-4xl font-bold mb-6">Kalender Akademik</h1>
      <div className="w-full">
        <div className="p-4 lg:p-10 border-dashed border-2 border-grey justify-center">
          <Image
            src="/kalender-akademik2324.png"
            width={2000}
            height={1000}
            alt="Kalender Akademik"
          />
        </div>
      </div>
    </div>
  )
}
