import React from "react"
import Image from "next/image"

export default function DiskonPromo() {
  return (
    <div className="flex flex-row mb-32">
      <Image
        src="/diskon.jpg "
        alt="promo"
        width={500}
        height={500}
        className="rounded-2xl"
      />
      <div className="my-auto mx-auto w-1/2">
        <p className="font-semibold text-2xl">Jangan Sampai Kelewatan!</p>
        <p className="font-bold text-6xl">
          Early Bird Promo sampai dengan 25%{" "}
        </p>
      </div>
    </div>
  )
}
