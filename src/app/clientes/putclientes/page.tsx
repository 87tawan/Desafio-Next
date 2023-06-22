"use client"
import ContainerComponent from "@/components/Container"

import { Button, Box } from "@mui/material"
import { useRouter } from "next/navigation"
import FormClients from "./form/form"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/end")
  }

  const back = () => {
    router.push("/clientes/postclientes")
  }

  return (
    <ContainerComponent>
      <p>Vamos atualizar o cliente que você criou</p>

      <FormClients></FormClients>

      <Box display='flex' gap='0.5rem'>
      <Button variant="contained" onClick={back}>
        Voltar Pagina
      </Button>
      <Button variant="contained" onClick={next}>
        Proxima Pagina
      </Button>
      </Box>
    </ContainerComponent>
  )
}
