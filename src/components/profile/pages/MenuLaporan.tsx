import { useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export default function MenuLaporan(props: any) {
  const { data: session } = useSession()

	const menuChoice = [
		{
			view: 'Murid',
			redirect: 'murid',
		},
		{
			view: 'Wali Murid',
			redirect: 'wali-murid',
		},
		{
			view: 'Staff',
			redirect: 'staff',
		},
		{
			view: 'Form Pendaftar',
			redirect: 'form',
		},
		{
			view: 'Pembayaran',
			redirect: 'pembayaran',
		},
		{
			view: 'Tipe Pembayaran',
			redirect: 'tipe-pembayaran',
		},
		{
			view: 'Akun',
			redirect: 'akun',
		},
		{
			view: 'Penilaian Murid',
			redirect: 'penilaian',
		},
	];

  return (
    <div>
      {menuChoice.map((item, index) => (
        <Link href={"/profile/laporan/" + item.redirect}>
          <div key={index} className="mb-4 card">
            {item.view}
          </div>
        </Link>
      ))}
    </div>
  )
}
