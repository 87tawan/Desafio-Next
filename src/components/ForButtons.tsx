"use client"
import { Typography, Box, Button } from "@mui/material"
import { useRouter } from "next/navigation"

export default function ForButtons() {
  const router = useRouter()

  const handleNavigate = (route: string) => {
    router.push(route)
  }

  return (
    
     

      <Box sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}>
         <Typography>Escolha alguma rota</Typography>
       <Box display='flex' sx={{flexWrap: 'wrap', justifyContent:'center', alignItems: 'center', width: '90vw'}}>
       <Button variant="outlined" onClick={() => handleNavigate("/clientes/getclientes")}>
          Cliente
        </Button>
        <Button variant="outlined" onClick={() => handleNavigate("/condutores/getcondutores")}>
          Condutor
        </Button>
        <Button variant="outlined" onClick={() => handleNavigate("/deslocamentos/getdeslocamentos")}>
          Deslocamento
        </Button>

        <Button variant="outlined" onClick={() => handleNavigate("/veiculos/getveiculos")}>
          Veiculo
        </Button>
       </Box>
      </Box>

  )
}
