import Image from "next/image"

function FAQCorner() {
  const faqData = [
    {
      question: "Berapa umur persyaratan untuk dapat daftar di Yapemri",
      answer: "Untuk KB, minimal anaknya berusia 3 hingga 4 tahun.",
    },
    {
      question: "Kapan jam buka Yapemri BSD?",
      answer:
        "Sekolah dibuka pada hari Senin - Jumat (08:00 - 14:00) dan Sabtu (08:00 - 12:00).",
    },
    {
      question:
        "Apakah anak-anak akan mendapatkan makanan saat berada di Yapemri?",
      answer: "Ya, kami menyiapkan makanan untuk anak-anak dan juga snacks.",
    },
    {
      question:
        "Apabila orang tua tidak bisa menjemput, bagaimana dengan anak?",
      answer:
        "Kami akan mengantarkan anak apabila orang tua tidak bisa menjemput, dan tidak memperbolehkan orang lain selain orang tua untuk menjemput kecuali sudah lapor terlebih dahulu.",
    },
    // Add more FAQ items as needed
  ]
  return (
    <div className="bg-grey">
      <div className="mx-10 text-center lg:text-left lg:mx-40 py-20 flex flex-col lg:flex-row">
        <h1 className="text-4xl py-3 pb-10 font-medium text-center lg:w-1/2 my-auto">
          FAQ Corner
        </h1>
        <div className="lg:mx-10 divide-y-2 space-y-6 lg:w-1/2">
          <div className="w-full flex flex-wrap place-content-between">
            <div className="max-w-md py-8">
              {faqData.map((item, index) => (
                <div key={index} className="mb-4 card">
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <p className="text-gray-600 mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQCorner
