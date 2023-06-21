'use client'

import { Box, Container, Typography } from "@mui/material"
import { useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/prev');
    }, 5000);
  }, [router]);

  return (


    <Container sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Box>
        <Typography variant="h4">Hey, seja bem vindo!</Typography>
        <Typography variant="h6">Espero que goste.</Typography>
          
      </Box>

    </Container>


  )
}
