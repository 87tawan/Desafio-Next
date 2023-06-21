import { useState } from "react"
import { TextField, Button, Box, Typography } from "@mui/material"
import { DataFormClients } from "@/interfaces/Clients"
import { postClients } from "@/services/Posts"

export default function FormClients() {
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")
  const [data, setData] = useState<DataFormClients>({
    numeroDocumento: "",
    tipoDocumento: "",
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  })

  const handleSubmit = (e: React.FormEvent)  => {
    e.preventDefault()

    // Lógica para enviar os dados do formulário
    console.log("Dados do formulário:", data)

    const result = async () => {
      try {
        const created = await postClients(data)
        setError("")
        setResponse(`Você criou um novo cliente, o id do seu cliente é: ${created}`)
        console.log(created)
      } catch (err: any) {
        setError(err.message)
      }
    }

    result()
    // Limpar os campos após o envio
    setData({
      numeroDocumento: "",
      tipoDocumento: "",
      nome: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    })
  }

  const handleChange = (field: keyof DataFormClients) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevData => ({ ...prevData, [field]: e.target.value }))
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" paddingTop="140px">
      <p>Cadastre um novo usuario!</p>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            label="Número Documento"
            value={data.numeroDocumento}
            onChange={handleChange("numeroDocumento")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Tipo Documento"
            value={data.tipoDocumento}
            onChange={handleChange("tipoDocumento")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Nome"
            value={data.nome}
            onChange={handleChange("nome")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Logradouro"
            value={data.logradouro}
            onChange={handleChange("logradouro")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Número"
            value={data.numero}
            onChange={handleChange("numero")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Bairro"
            value={data.bairro}
            onChange={handleChange("bairro")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Cidade"
            value={data.cidade}
            onChange={handleChange("cidade")}
            fullWidth
            margin="normal"
            required
          />
          <TextField label="UF" value={data.uf} onChange={handleChange("uf")} fullWidth margin="normal" required />
        </Box>
        <Button type="submit" variant="contained" color="success" fullWidth>
          Enviar
        </Button>

        {response && (
          <Typography textAlign="center" sx={{ color: "green" }}>
            {response}
          </Typography>
        )}
        {response && (
          <Typography textAlign="center" sx={{ color: "green" }}>
            Lembre-se desse Id para a proxima etapa!
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
