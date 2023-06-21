import React, { useEffect, useState } from "react"
import { TextField, Button, Box, Typography } from "@mui/material"
import { postDisplacement } from "@/services/Posts"
import { DataFormDisplacement } from "@/interfaces/Displacement"

export default function FormClients() {
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")
  const [data, setData] = useState<DataFormDisplacement>({
    kmInicial: 0,
    inicioDeslocamento: new Date(),
    checkList: "",
    motivo: "",
    observacao: "",
    idCondutor: 0,
    idVeiculo: 0,
    idCliente: 0,
  })


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Dados do formulário:", data)

    const result = async () => {
      try {
        const created = await postDisplacement(data)

        if(created.response.data) {
          setError(created.response.data)
          return 
        } else {
          setResponse(`Você criou um novo deslocamento!`)
        }
      } catch (err: any) {
        console.log(err)
      }
    }

    result()

  }

  
  const handleChange = (field: keyof DataFormDisplacement) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevData => ({ ...prevData, [field]: e.target.value as string }))
  }


  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" paddingTop="140px">
      <p>Cadastre um novo Deslocamento!</p>
      <p>Certifique-se de preencher Ids existentes.</p>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            type="number"
            label="Quilometragem Inicial"
            value={data.kmInicial}
            onChange={handleChange("kmInicial")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="date"
            label="Início do Deslocamento"
            value={data.inicioDeslocamento.toISOString().substring(0, 10)}
            onChange={handleChange("inicioDeslocamento")}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Checklist"
            value={data.checkList}
            onChange={handleChange("checkList")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Motivo"
            value={data.motivo}
            onChange={handleChange("motivo")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Observação"
            value={data.observacao}
            onChange={handleChange("observacao")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="number"
            label="ID do Condutor"
            value={data.idCondutor}
            onChange={handleChange("idCondutor")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="number"
            label="ID do Veículo"
            value={data.idVeiculo}
            onChange={handleChange("idVeiculo")}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="number"
            label="ID do Cliente"
            value={data.idCliente}
            onChange={handleChange("idCliente")}
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
