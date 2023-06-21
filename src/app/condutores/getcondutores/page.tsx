"use client"
import ContainerComponent from "@/components/Container"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { getCondutors } from "@/services/Gets"
import DataTable from "@/components/Table"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter()

  const next = () => {
    router.push("/condutores/postcondutores")
  }
  const [data, setData] = useState([])

  useEffect(() => {
    const takeData = async () => {
      const response = await getCondutors()
      setData(response)
    }
    takeData()
  })

  return (
    <ContainerComponent>
      <DataTable data={data} />

      <Button variant="contained" onClick={next}>
        Proxima Pagina
      </Button>
    </ContainerComponent>
  )
}
