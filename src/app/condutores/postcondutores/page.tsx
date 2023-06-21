'use client'
import ContainerComponent from "@/components/Container"

import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import FormClients from "./form/form"
export default function Home() {
const router = useRouter()

const next = () => {
  router.push("/condutores/putcondutores")
}


  return (


    <ContainerComponent>
      
      
      <FormClients />
      <Button variant="contained" onClick={next} >Proxima Pagina</Button>
    </ContainerComponent>


  )
}
