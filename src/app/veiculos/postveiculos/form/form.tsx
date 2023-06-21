import { useState } from "react"
import { TextField, Button, Box, Typography } from "@mui/material"
import { DataFormVehicles } from "@/interfaces/Vehicles"
import { postVehicles } from "@/services/Posts"

export default function FormClients() {
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")
  const [data, setData] = useState<DataFormVehicles>({
    placa: "",
    marcaModelo: "",
    anoFabricacao: 0,
    kmAtual: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Lógica para enviar os dados do formulário
    console.log("Dados do formulário:", data)

    const result = async () => {
      try {
        const created = await postVehicles(data)
        setError("")
        setResponse(`Você criou um novo veiculo!`)
        console.log(created)
      } catch (err: any) {
        setError(err.message)
      }
    }

    result()
    // Limpar os campos após o envio
    setData({
      placa: "",
      marcaModelo: "",
      anoFabricacao: 0,
      kmAtual: 0,
    })
  }

  const handleChange = (field: keyof DataFormVehicles) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevData => ({ ...prevData, [field]: e.target.value }))
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" paddingTop="140px">
      <p>Cadastre um novo veiculo!</p>
      
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            label="Placa"
            value={data.placa}
            onChange={handleChange("placa")}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Ano de Fabricação"
            value={data.anoFabricacao}
            onChange={handleChange("anoFabricacao")}
            fullWidth
            margin="normal"
            type="number"
            required
          />
          <TextField
            label="Km Atual"
            value={data.kmAtual}
            onChange={handleChange("kmAtual")}
            fullWidth
            type="number"
            margin="normal"
            required
          />
          <TextField
            label="Modelo da Marca"
            value={data.marcaModelo}
            onChange={handleChange("marcaModelo")}
            fullWidth
            type="text"
            margin="normal"
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="success" fullWidth>
          Enviar
        </Button>

        {response && (
          <Typography textAlign="center" sx={{ color: "green" }}>
            {response}
          </Typography>
        )}

        {error && (
          <Typography textAlign="center" sx={{ color: "red" }}>
            {error}
          </Typography>
        )}
      </form>
    </Box>
  )
}
