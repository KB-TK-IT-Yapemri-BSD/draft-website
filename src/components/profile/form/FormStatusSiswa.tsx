import { useEffect, useRef, useState } from "react"

export default function FormStatusSiswa(props: any) {
  const [status, setStatus] = useState()
  const [email, setEmail] = useState()

  const useIsMount = () => {
    const isMountRef = useRef(true)
    useEffect(() => {
      isMountRef.current = false
    }, [])
    return isMountRef.current
  }

  const isMount = useIsMount()

  useEffect(() => {
    if (isMount) {
      // FIRST RENDER STATUS SISWA
    } else {
      // SUBSEQUENT RENDER STATUS SISWA
      if (!props) {
        // NO PROPS
      } else if (props) {
        setEmail(props.props.session.user.user.email)
        setStatus(props.props.props.studentStatus)
      }
    }
  })

  return (
    <>
      <div className="divide-y-2">
        <p className="text-2xl py-4">Informasi Akun</p>
        <div className="space-y-2">
          <div className="py-2 pt-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium read-only"
            >
              Email Terdaftar
            </label>
            <input
              type="text"
              id="email"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={email ? email : "NO DATA"}
              disabled
            />
          </div>

          <div className="py-2">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium read-only"
            >
              Status Siswa
            </label>
            <input
              type="text"
              id="status"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={status ? "Aktif" : "Tidak Aktif"}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  )
}
