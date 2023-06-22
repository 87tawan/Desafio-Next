"use client"
import ContainerComponent from "@/components/Container"

import { Button, Box } from "@mui/material"
import { useRouter } from "next/navigation"
import Form from "./form/form"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/end")
  }

  const back = () => {
    router.push("/deslocamentos/postdeslocamentos")
  }

  return (
    <ContainerComponent>
      <div>
        <p>Hora de encerrar seu deslocamento!</p>
        <p>Lembre-se do formato da Data</p>
        <p style={{ color: "#383E42", fontSize: "12px" }}>2023-06-21T16:52:30.276</p>
      </div>
      <Form></Form>

      <Box display="flex" gap="0.5rem">
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
