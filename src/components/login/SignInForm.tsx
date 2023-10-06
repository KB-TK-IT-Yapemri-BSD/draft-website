"use client"

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { authSchema } from "@/pages/api/validations"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { ZodError } from "zod"

import { Button } from "../layout/ui/Button"
import InputText from "../layout/ui/InputText"

type Errors = { email?: string; password?: string }

export default function SignInForm() {
    const router = useRouter()

    const [formData, setFormData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState<Errors>({})
    const [loading, setLoading] = useState(false)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }))
    }

    const handleValidationErrors = (error: ZodError) => {
        if (error.formErrors && error.formErrors.fieldErrors) {
            setErrors(error.formErrors.fieldErrors)
        }
    }

    const onSubmit = async (e: any) => {
        try {
            e.preventDefault()
            setLoading(true)

            authSchema.parse(formData)

            const results = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            })

            if (results?.status === 401) {
                setLoading(false)
                toast.error("Email or passsword is incorrect. Please try again")
            } else {
                setLoading(false)
                router.push("/beranda")
            }
        } catch (error: any) {
            setLoading(false)
            handleValidationErrors(error)
        }
    }

    return (
        <form id="sign-in" onSubmit={onSubmit}>
            <div
                id="wrapper"
                className="flex flex-col gap-6 my-6 md:grid-rows-2"
            >
                <InputText
                    label="Email"
                    name="email"
                    handleChange={handleChange}
                    errors={errors}
                />
                <InputText
                    label="Password"
                    name="password"
                    handleChange={handleChange}
                    errors={errors}
                    isSecured
                />
            </div>

            <Button
                type="submit"
                variant="default"
                className="w-full md:w-full lg:w-full py-2.5 justify-center disabled:bg-grey"
                disabled={loading}
            >
                Masuk
            </Button>
        </form>
    )
}
