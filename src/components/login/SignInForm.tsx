"use client"

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { authSchema } from "@/pages/api/validations"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { ZodError } from "zod"

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
    } else {
      console.log(error)
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

      console.log({formData,errors,loading,results});

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
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6 mb-6 md:grid-rows-2">
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

      <button
        type="submit"
        className="bg-primary hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-10 lg:px-40 py-2.5 text-center mb-2 disabled:bg-gray-500"
        disabled={loading}
      >
        Masuk
      </button>
    </form>
  )
}

interface IProps {
  label: string
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  errors: any
  isSecured?: boolean
}

function InputText({ label, name, handleChange, errors, isSecured }: IProps) {
  const error = errors[name]

  return (
    <div className="lg:mb-2">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type={isSecured ? "password" : "text"}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1"
        onChange={handleChange}
      />
      {error && (
        <span className="text-red-danger text-sm">
          {error[0] ? "* " + error[0] : ""}
          <br />
          {error[1] ? "* " + error[1] : ""}
        </span>
      )}
    </div>
  )
}
