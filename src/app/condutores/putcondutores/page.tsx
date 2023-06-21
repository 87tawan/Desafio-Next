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
      <p>Para atualizar algum condutor, peço que entre no link abaixo e escolha algum identificador</p>
      <Link
        href="https://api-deslocamento.herokuapp.com/api/v1/Condutor"
        underline="hover"
        target="_blank"
        rel="noreferrer"
      >
        Acessar
      </Link>

      <Form></Form>
      <Button variant="contained" onClick={next}>
        Proxima Pagina
      </Button>
    </ContainerComponent>
  )
}
