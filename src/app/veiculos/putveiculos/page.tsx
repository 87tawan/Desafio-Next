"use client"
import ContainerComponent from "@/components/Container"

import { Button, Box, Link } from "@mui/material"
import { useRouter } from "next/navigation"
import Form from "./form/form"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/end")
  }

  const back = () => {
    router.push("/veiculos/postveiculos")
  }

  return (
    <ContainerComponent>
      <p>Vamos atualizar um veiculo!</p>
      <p>Para atualizar um veiculo, encontre um identificador</p>
      <Link
        href="https://api-deslocamento.herokuapp.com/api/v1/Veiculo"
        underline="hover"
        target="_blank"
        rel="noreferrer"
      >
        Acessar
      </Link>
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
