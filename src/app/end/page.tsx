"use client"
import ContainerComponent from "@/components/Container"
import { Button, Typography, Box } from "@mui/material"
import { useRouter } from "next/navigation"

export default function End() {
  const router = useRouter()

  return (
    <ContainerComponent>
      <Typography variant="h4" sx={{ color: "green" }}>
        Obrigado por chegar até aqui!
      </Typography>

      <Typography variant="h6" sx={{ color: "black" }}>
        Espero ter conseguido mostrar o meu valor como um possível colaborador da Naty Secretary
      </Typography>

      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Até logo!"
        src="https://gamela.com.br/blog/imgs/nos-vemos-em-breve.jpg"
      />

      <Button color="success" variant="contained" onClick={() => router.push("/home")}>
        Recomeçar
      </Button>
    </ContainerComponent>
  )
}
