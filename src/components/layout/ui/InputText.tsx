import { ChangeEvent } from "react"

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

export default InputText
