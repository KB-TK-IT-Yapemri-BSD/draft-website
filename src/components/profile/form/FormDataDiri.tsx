import { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"

import FormBiodataSiswa from "./FormBiodataSiswa"
import FormBiodataStaff from "./FormBiodataStaff"
import FormStatusSiswa from "./FormStatusSiswa"
import FormStatusStaff from "./FormStatusStaff"

export default function FormDataDiri(props: any) {
  const [role, setRole] = useState()

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
      // console.log('First Render FORM DATA DIRI');
    } else {
      // console.log('Subsequent Render FORM DATA DIRI');

      if (!props) {
        // console.log('No props');
      } else if (props) {
        setRole(props.session.user.user.role)
      }
    }
  })

  if (role === "parents") {
    return (
      <>
        <FormStatusSiswa props={props} />
        <FormBiodataSiswa props={props} />
      </>
    )
  } else {
    return (
      <>
        <FormStatusStaff props={props} />
        <FormBiodataStaff props={props} />
      </>
    )
  }
}
