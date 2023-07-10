"use client"

import { useSession } from "next-auth/react"

import NavbarLoggedIn from "../loggedIn/NavbarLoggedIn"
import NavbarPublic from "../public/NavbarPublic"

function Navbar() {
  const { data: session } = useSession()

  if (session?.user) {
    return <NavbarLoggedIn />
  } else {
    return <NavbarPublic />
  }
}

export default Navbar
