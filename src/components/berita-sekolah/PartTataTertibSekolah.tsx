import React from "react"

export default function PartTataTertibSekolah() {
  const data = [
    "Kegiatan Belajar Mengajar (KBM) setiap hari senin-kamis pukul 07:30 s/d 11:00 WIB, hari jumat pukul 07:30 s/d pukul 10:00 WIB",
    "Orang tua tidak diperkenankan menemani siswa di kelas atau sekolah",
    "Apabila ada keperluan siswa/i harus meminta izin kepada wali kelas",
    "Apabila siswa berhalangan masuk sekolah, orang tua harus memberi kabar ke sekolah",
    "Siswa harus membuat jurnal pagi, kegiatan circle time, membaca ikrar sebelum masuk sentra/kelas",
    "Penggunaan seragam sekolah: baju biru rompi + kerudung untuk siswi (senin), kotak-kotak + kerudung untuk siswi (selasa), seragam olahraga + kerudung untuk siswi (rabu), pakaian muslim bebas + kerudung untuk siswi (kamis),  putih-putih + kerudung untuk siswi (jumat)",
    "Siswa/i memakai sepatu dan kaos kaki ketika di area sekolah",
    "Perlengkapan yang harus dikumpulkan siswa/i : Pakaian ganti muslim, perlengkapan sholat, sandal, buku cerita Islam 2 buah (semua perlengkapan diberi label nama siswa/i)",
    "Siswa/i membawa makan dan minum secukupnya",
    " Siswa/i diharuskan mengikuti kegiatan Intrakurikuler di sekolah : Tari dan Komputer (Masuk dalam KBM)",
    "Siswa/i boleh memilih untuk mengikuti kegiatan ektrakurikuler di sekolah : calistung, tahfidz, Iqro, Bahasa Inggris (diluar KBM)",
    "Siswa/i harus melunasi administrasi bulanan berupa SPP (transfer ke PT.Pendopo Cendana Abadi), iuran kegiatan intra + ekstrakurikuler, dan iuran POMG (cash /tunai) setiap tanggal 10 per bulannya.",
    "Kelengkapan administrasi penunjang siswa/i: Buku raport, buku tabungan, kartu iuran SPP+Ekskul+POMG dan fortofolio",
    "Kegiatan intra dan Extrakurikuler dikenakan biaya diluar SPP sekolah",
    "Tabungan siswa/i bisa diambil ketika ada keperluan atau ketika kenaikan tingkat dengan dipotong biaya administrasi",
    "siswa/i yang akan mengikuti antar jemput sekolah, harus memberitahukan kepada fihak sekolah",
    "Bagi siswa yang memiliki kebiasaan tertentu, orang tua siswa/i wajib berkoordinasi dengan guru kelas agar tidak terjadi hal-hal yang tidak diinginkan",
    "Orang tua dapat berkonsultasi dengan guru kelas diluar jam belajar",
    "Bagi siswa/i yang hendak syukuran hari lahir harus meminta izin kepada pihak sekolah dengan acara sederhana dan tidak ada kegiatan tiup lilin",
    "Siswa/i dilatih untuk berinfaq setiap hari khususnya hari jumat",
    "Siswa dianjukan menabung setiap hari dengan nominal yang tidak ditentukan",
    "Jika terjadi sesuatu kepada siswa/i di sekolah, guru kelas akan menginformasikan kepada orang tua",
    "Antar jemput siswa/i diharapkan sesuai jadwal/tepat waktu, apabila terjadi keterlambatan dari jam penjemputan pengawasan anak akan diserahkan kepada security atau OB sekolah",
    "Pengantar/penjemput siswa/i diharuskan menunjukkan kartuidenttas/penjemputan dan mengisi buku tamu/kehadiran.",
  ]

  return (
    <div className="card p-10 relative overflow-x-scroll lg:overflow-hidden">
      <h1 className="text-4xl font-bold mb-6">Tata Tertib Sekolah</h1>
      <ul className="list-decimal list-outside ml-10">
        {data.map((item, index) => (
          <li key={index} className=" leading-snug pt-1 pb-2">
            {item.split("\n").map((line, i) => (
              <span
                key={i}
                className={
                  line.startsWith(" a) ") || line.startsWith(" b) ")
                    ? "indent-10"
                    : ""
                }
              >
                {line}
                {i !== item.split("\n").length - 1 && <br />}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
