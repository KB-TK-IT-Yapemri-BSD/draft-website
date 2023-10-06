import Image from "next/image"

import Background from "@/components/layout/ui/Background"
import Card from "@/components/layout/ui/Card"
import SignInForm from "@/components/login/SignInForm"

export const metadata = {
    title: "Login / KB TK IT Yapemri BSD",
}

export default function SignInPage() {
    return (
        <Background
            color="bg-secondary"
            className="h-screen grid place-items-center"
        >
            <Image
                fill
                priority
                src="/login/line-deco.png"
                alt="Line Login Decoration"
                style={{ objectFit: "cover" }}
            />

            <Card width="w-3/4" className="p-10 shadow-2xl z-10">
                <div
                    id="title"
                    className="mb-14 space-y-4 text-secondary text-center font-semibold"
                >
                    <h1 className="text-4xl">Selamat Datang!</h1>
                    <p className="text-2xl">Website KB TK IT Yapemri BSD</p>
                </div>
                <SignInForm />
            </Card>
        </Background>
    )
}
