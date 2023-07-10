import Image from "next/image"

function FAQCorner() {
  const faqData = [
    {
      question: "What are the age requirements for enrollment?",
      answer: "Children aged 2 to 5 years old are eligible for enrollment.",
    },
    {
      question: "What are the operating hours of the kindergarten?",
      answer:
        "The kindergarten operates from 8:00 am to 4:00 pm, Monday to Friday.",
    },
    {
      question: "Do you provide meals for the children?",
      answer:
        "Yes, we provide nutritious meals for breakfast, lunch, and snacks.",
    },
    // Add more FAQ items as needed
  ]
  return (
    <div className="bg-grey">
      <div className="mx-10 text-center lg:text-left lg:mx-40 py-20">
        <h1 className="text-4xl py-3 pb-10 font-medium text-center">
          FAQ Corner Sekolah
        </h1>
        <div className="lg:mx-10 divide-y-2 space-y-6">
          <div className="w-full py-10 flex flex-wrap place-content-evenly">
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
