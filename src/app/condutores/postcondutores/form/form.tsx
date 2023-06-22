import React, { useState } from "react"
import { TextField, Button, Box, Typography } from "@mui/material"
import { postCondutors } from "@/services/Posts"
import { DataFormCondutors } from "@/interfaces/Condutors"

export default function FormClients() {
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")
  const [data, setData] = useState<DataFormCondutors>({
    nome: "",
    numeroHabilitacao: "",
    categoriaHabilitacao: "",
    vencimentoHabilitacao: new Date(),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

 

    // Lógica para enviar os dados do formulário

    if(data.nome.trim().length <= 5) {
      setResponse("")
      setError("Seu nome precisa ter mais que 5 digitos.")
      return
    }

    if(data.numeroHabilitacao.trim().length < 2) {
      setResponse("")
      setError("O seu numero de habilitação precisa ter no minimo dois digitos.")
      return
    }

    if(data.categoriaHabilitacao.trim().length < 2) {
      setResponse("")
      setError("A categoria da sua habilitação precisa ter no minimo dois digitos.")
      return
    }


    const result = async () => {
      try {
        const created = await postCondutors(data)
        setResponse(`Você criou um novo condutor! Lembre-se desse id:.. ${created}`)
        setError("")
        console.log(created)
      } catch (err: any) {
        setError(err.response.data)
      }
    }

    result()

    // Limpar os campos após o envio
    setData({
      nome: "",
      numeroHabilitacao: "",
      categoriaHabilitacao: "",
      vencimentoHabilitacao: new Date(),
    })
  }

  const handleChange = (field: keyof DataFormCondutors) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevData => ({ ...prevData, [field]: e.target.value }))
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" paddingTop="140px">
      <p>Cadastre um novo condutor!</p>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            label="Nome"
            value={data.nome}
            onChange={handleChange("nome")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Número da Habilitação"
            value={data.numeroHabilitacao}
            onChange={handleChange("numeroHabilitacao")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Categoria da Habilitação"
            value={data.categoriaHabilitacao}
            onChange={handleChange("categoriaHabilitacao")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="datetime-local"
            label="Vencimento da Habilitação"
            value={data.vencimentoHabilitacao}
            onChange={handleChange("vencimentoHabilitacao")}
            fullWidth
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
