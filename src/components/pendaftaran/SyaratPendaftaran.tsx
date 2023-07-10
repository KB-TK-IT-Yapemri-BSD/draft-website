import React from "react"

export default function SyaratPendaftaran() {
  return (
    <div className="card leading-relaxed overflow-hidden outline outline-grey outline-[1px]">
      <h1 className="text-2xl text-center font-semibold bg-primary p-2">
        Persyaratan Pendaftaran
      </h1>
      <ul className="py-4 ml-6 text-justify list-decimal">
        <li>Usia memenuhi persyaratan masuk KB (3-4 Tahun)</li>
        <li>Mengisi formulir pendaftaran pada halaman website</li>
        {/**
				<li>
					Menyerahkan fotocopy (Akta Kelahiran, Kartu Keluarga, KTP
					Ayah dan Ibu (masing-masing 1 lembar), Pas Photo Calon Siswa
					ukuran 2x3 dan 3x4 (masing-masing 1 lembar).
				</li>
				 */}
        <li>
          Pembayaran ditransfer melalui BCA 5235597788 YAYASAN PENDIDIKAN
          MASYARAKAT REPUBLIK INDONESIA
        </li>
        <li>Bukti transfer diupload pada halaman website</li>
      </ul>
    </div>
  )
}
