'use client'
import ContainerComponent from "@/components/Container"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { getVehicle } from "@/services/Gets"
import DataTable from "@/components/Table"
import { useRouter } from "next/navigation"
export default function Home() {
const router = useRouter()

const next = () => {
  router.push("/veiculos/postveiculos")
}
const [data, setData] = useState([])

    useEffect(() => {
        const takeData = async () => {
          const response = await getVehicle()
          setData(response)
        }
        takeData()
    })

  return (


    <ContainerComponent>
      
      <DataTable data={data} />

      <Button variant="contained" onClick={next}>Proxima Pagina</Button>
    </ContainerComponent>


  )
}
