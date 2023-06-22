"use client"
import ContainerComponent from "@/components/Container"

import { Button, Box } from "@mui/material"
import { useRouter } from "next/navigation"
import FormClients from "./form/form"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/clientes/putclientes")
  }

  const back = () => {
    router.push("/clientes/getclientes")
  }


  return (
    <ContainerComponent>
      <FormClients />

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
