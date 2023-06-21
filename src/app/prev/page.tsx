'use client'
import ContainerComponent from "@/components/Container"
import { Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"


export default function Home() {
const router = useRouter()

const next = () => {
  router.push("/home")
}



  return (


    <ContainerComponent>
      
    <Typography>Esse é o desafio de consumir todas as rotas.</Typography>
  

    
      <Button variant="contained" onClick={next} >Entendi! Vamos lá</Button>
    </ContainerComponent>


  )
}
