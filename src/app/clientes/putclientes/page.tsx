"use client"
import ContainerComponent from "@/components/Container"

import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import FormClients from "./form/form"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/end")
  }

  return (
    <ContainerComponent>
      <p>Vamos atualizar o cliente que você criou</p>

      <FormClients></FormClients>
      <Button variant="contained" onClick={next}>
        Proxima Pagina
      </Button>
    </ContainerComponent>
  )
}
