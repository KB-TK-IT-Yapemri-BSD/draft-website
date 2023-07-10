import Image from "next/image"

function AgendaSekolahHeader() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-tr from-gray-800 to-gray-400 text-white bg-cover relative lg:py-20">
        <div className="lg:my-60">
          <Image
            src="/header/bt-photoHeader.JPG"
            alt="Header Photo Berita Terbaru"
            fill
            style={{
              objectFit: "cover",
              mixBlendMode: "overlay",
            }}
            quality={100}
            priority
          />
        </div>
      </div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-medium text-center text-white">
        Agenda Sekolah KB TK IT Yapemri BSD
      </h1>
    </div>
  )
}

export default AgendaSekolahHeader
