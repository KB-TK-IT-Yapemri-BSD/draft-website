import Image from "next/image"

function PrakataKepsek() {
  return (
    <div className="bg-grey">
      <div className="flex flex-col justify-center py-10 lg:flex-row lg:mx-40 lg:py-20">
        <div className="w-3/4 self-center pt-6 lg:w-[700px] lg:min-h-[500px] lg:pt-0">
          <div
            className="flex mx-auto p-20 relative"
            style={{ maxWidth: "100%", height: "600px" }}
          >
            <Image
              src="/beranda/foto-kepsek-crop.jpg"
              fill
              alt="Kepala Sekolah Yapemri BSD"
              style={{
                objectFit: "cover",
                objectPosition: "0% 20%",
                position: "absolute",
              }}
              className="hidden lg:block border-white border-2 shadow-xl rounded-lg"
            />
            <Image
              src="/beranda/foto-kepsek-crop.jpg"
              fill
              alt="Kepala Sekolah Yapemri BSD"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                position: "absolute",
              }}
              className="block lg:hidden border-white border-2 shadow-xl rounded-lg"
            />
          </div>
        </div>

        <div className="px-8 text-center my-6 lg:px-0 lg:text-left lg:my-0 lg:w-10/12 lg:pl-20">
          <h1 className="text-4xl pt-8 lg:pt-5 font-medium">
            Prakata Kepala Sekolah
          </h1>
          <h2 className="text-3xl py-3">KB TK IT Yapemri BSD</h2>
          <p className="my-3 mt-6 italic">
            Assalaamualaikum Warohmatullohi Wabarokaatuh
          </p>
          <p className="my-3 text-center lg:text-justify">
            Puji serta syukur Alhamdulillah kita panjatkan ke hadirat Allah SWT
            atas segala limpahan nikmat dan karunia-Nya, dan semoga keberkahan
            selalu menyertai disetiap langah kita. Sholawat serta salam semoga
            tercurah kepada Junjunan Alam Nabi besar kita Muhammad SAW,
            keluarganya, sahabat serta semua para pengikutnya hingga yaumul
            akhir. Aamiin...
          </p>
          <p className="my-3 text-center lg:text-justify">
            Pertama sekali kami mengucapkan selamat datang dan selamat bergabung
            di KB-TK IT YAPEMRI BSD. Kami sangat menghargai atas pilihan Bapak/
            Ibu yang sudah mempercayakan putra/i bersekolah di KB-TK IT YAPEMRI
            BSD seluruh guru dan staff akan selalu berusaha memberikan pelayanan
            pendidikan dan pengajaran yang terbaik untuk putra/i Bapak/ Ibu.
          </p>
          <p className="my-3 text-center lg:text-justify">
            Semoga website ini dapat menjembatani persamaan pembelajaran antara
            sekolah dengan orang tua/wali murid dan juga merupakan panduan
            secara umum bagi orang tua/ wali murid mengenai Visi dan Misi serta
            kegiatan-kegiatan sekolah.
          </p>
          <p className="my-3 text-center lg:text-justify">
            Kami sebagai pihak sekolah meminta kerja sama dari Bapak/Ibu dalam
            memberikan pendidikan bagi putra/i kita semua di rumah. Dengan
            harapan kami kelak dapat mencetak anak didik menjadi pribadi-pribadi
            yang unggul dan bermanfaat bagi agama, nusa dan bangsa serta
            terwujudnya masa depan yanga gemilang bagi putra/i kita semua
            Aamiin...
          </p>
          <p className="my-3 italic">
            Wassalaamualaikum Warohmatullohi Wabarokaatuh
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrakataKepsek
