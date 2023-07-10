import Image from "next/image"

function DaftarGuruSekolah() {
  return (
    <div className="bg-grey">
      <div className="mx-10 py-20 flex flex-col lg:mx-40 lg:flex-row">
        <div className="mx-auto my-auto px-10 lg:mx-0">
          <h1 className="text-3xl pb-3 text-center italic">Perkenalkan</h1>
          <p className="text-4xl pb-12 text-center font-medium">
            Para Guru dan Staff Kami
          </p>
        </div>

        <div className="mx-auto w-11/12 lg:px-20">
          <div
            className="flex justify-center relative mx-auto"
            style={{
              width: "auto",
              height: "500px",
            }}
          >
            <Image
              src="/beranda/guru-staff2.jpg"
              fill
              alt="Guru dan Staff KB TK IT Yapemri BSD"
              className="border-white rounded-lg border-2 shadow-lg justify-center absolute"
              style={{ objectFit: "cover" }}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaftarGuruSekolah
