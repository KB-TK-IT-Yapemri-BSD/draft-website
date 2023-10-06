"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify"

interface IProps {
  children: ReactNode
  session?: any
}

export default function Providers({ children, session }: IProps) {
  return (
    <SessionProvider session={session}>
      {children}
      <ToastContainer
        style={{ width: "500px" }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </SessionProvider>
  )
}
