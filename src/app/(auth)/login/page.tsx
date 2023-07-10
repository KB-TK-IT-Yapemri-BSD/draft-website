import Image from "next/image"

import SignInForm from "@/components/login/SignInForm"

export const metadata = {
  title: "KB TK IT Yapemri BSD | Login",
}

export default function SignInPage() {
  return (
    <div className="h-screen grid place-items-center bg-secondary">
      <Image
        fill
        priority
        src="/login/line-deco.png"
        alt="Line Login Decoration"
        style={{ objectFit: "cover" }}
      />
      <div className="card p-10 shadow-2xl w-3/4 z-10">
        <div className="mb-14 space-y-4 text-secondary text-center font-semibold">
          <h1 className="text-4xl">Selamat Datang!</h1>
          <p className="text-2xl">Website KB TK IT Yapemri BSD</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
