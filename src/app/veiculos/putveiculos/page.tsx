"use client"
import ContainerComponent from "@/components/Container"

import { Button, Link } from "@mui/material"
import { useRouter } from "next/navigation"
import Form from "./form/form"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/end")
  }

  return (
    <ContainerComponent>

      <Form></Form>
      <Button variant="contained" onClick={next}>
        Proxima Pagina
      </Button>
    </ContainerComponent>
  )
}
