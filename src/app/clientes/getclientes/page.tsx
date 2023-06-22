"use client"
import ContainerComponent from "@/components/Container"
import { Button, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { getClients } from "@/services/Gets"
import DataTable from "@/components/Table"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/clientes/postclientes")
  }
  const back = () => {
    router.push("/home")
  }


  const [data, setData] = useState([])

  useEffect(() => {
    const takeData = async () => {
      const response = await getClients()
      setData(response)
    }
    takeData()
  })

  return (
    <ContainerComponent>
      <DataTable data={data} />

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
