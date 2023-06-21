import MyModal from "@/components/Modal"
import { DataFormClientsUpdate } from "@/interfaces/Clients"
import { getClientsById } from "@/services/GetsById"
import { TextField, Box, Button, Typography } from "@mui/material"
import { useState, useEffect, ChangeEvent } from "react"

// Atualizar ou Deletar um Cliente

export default function ClientsUpdate() {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Cliente`
  const [id, setId] = useState(0)
  const [error, setError] = useState("")
  const [endpoint, setEndPoint] = useState("")

  // Existe esse dataModified por conta dos valores permitidos para modificar.
  const [dataModified, setDataModified] = useState<DataFormClientsUpdate>({
    id: 0,
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  })

  const resetData = () => {
    setDataModified({
      id: 0,
      nome: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    })
  }

  const getClientsByIdConst = async () => {
    resetData()
    setError("")

    if (!id) {
      setError("Digite um id")
      return
    }

    try {
      const response = await getClientsById(id)
      setEndPoint(`${BASEURL}`)
      setDataModified({
        id: response.data.id,
        nome: response.data.nome,
        logradouro: response.data.logradouro,
        numero: response.data.numero,
        bairro: response.data.bairro,
        cidade: response.data.cidade,
        uf: response.data.uf,
      })
    } catch (err) {
      setError("Cliente não encontrado")
    }
  }

  useEffect(() => {
    // Atualiza a interface quando o estado de error é alterado
  }, [error])

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        label="id"
        value={id}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setId(Number(e.target.value))}
        type="number"
      />

      <Button variant="contained" sx={{ background: "purple" }} onClick={getClientsByIdConst}>
        Buscar
      </Button>
      {error && (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      )}

      {dataModified.id != 0 && <MyModal dataModified={dataModified} endpoint={endpoint} id={id} />}
    </Box>
  )
}
