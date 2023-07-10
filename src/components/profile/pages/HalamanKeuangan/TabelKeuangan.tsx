"use client"

import { useSession } from "next-auth/react"

import TabelDataFinansialMurid from "../../table/TabelDataFinansialMurid"
import TabelPembayaranPersonal from "../../table/TabelPembayaranPersonal"
import TabelTipePembayaran from "../../table/TabelTipePembayaran"

export default function HalamanTabelKeuangan() {
  const { data: session } = useSession()

  if (session?.user.user.role === "admin") {
    return (
      <>
        <div className="card outline outline-grey outline-[1px] p-8">
          <div className="w-full divide-y-2">
            <p className="font-bold text-2xl pt-4">
              Data Finansial Murid KB TK IT Yapemri BSD
            </p>
            <div className="my-6">
              <TabelDataFinansialMurid />
            </div>
          </div>
        </div>

        <div className="card outline outline-grey outline-[1px] p-8">
          <div className="w-full divide-y-2">
            <p className="font-bold text-2xl pt-4">
              Tipe Pembayaran Data Finansial
            </p>
            <div className="my-6">
              <TabelTipePembayaran />
            </div>
          </div>
        </div>
      </>
    )
  } else if (session?.user.user.role === "parents") {
    return (
      <div className="card outline outline-grey outline-[1px] p-8">
        <div className="w-full divide-y-2">
          <p className="font-bold text-2xl pt-4">Data Finansial Murid</p>
          <div className="my-6">
            <TabelPembayaranPersonal />
          </div>
        </div>

        <p className="text-sm">
          * Apabila sudah menggunggah bukti pembayaran di sistem, silahkan lapor
          ke bagian Administrasi untuk pengecekan
        </p>
      </div>
    )
  } else if (session?.user.user.role === "teachers") {
    return (
      <div className="card outline outline-grey outline-[1px] p-8">
        <div className="w-full divide-y-2">
          <p className="font-bold text-2xl pt-4">
            Data Finansial Murid KB TK IT Yapemri BSD
          </p>
          <div className="my-6">
            <TabelDataFinansialMurid />
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
