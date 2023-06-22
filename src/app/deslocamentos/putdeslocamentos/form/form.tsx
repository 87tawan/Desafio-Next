import MyModal from "@/components/Modal"
import { DataFormDisplacementPut } from "@/interfaces/Displacement"
import { getDisplacementById } from "@/services/GetsById"
import { TextField, Box, Button, Typography } from "@mui/material"
import { useState, useEffect, ChangeEvent } from "react"


export default function DisplacementUpdate() {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento`

  const [id, setId] = useState(0)
  const [error, setError] = useState("")
  const [endpoint, setEndPoint] = useState("")
  const [BASEURLPUT, setBASEURLPUT] = useState("")
  // Existe esse dataModified por conta dos valores permitidos para modificar.
  const [dataModified, setDataModified] = useState<DataFormDisplacementPut>({
    id: 0,
    kmFinal: 0,
    fimDeslocamento: new Date(),
    observacao: "",
  })

  const resetData = () => {
    setDataModified({
      id: 0,
      kmFinal: 0,
      fimDeslocamento: new Date(),
      observacao: "",
    })
  }

  const getDisplacementByIdConst = async () => {
    resetData()
    setError("")

    if (!id) {
      setError("Digite um id")
      return
    }

    try {
      const response = await getDisplacementById(id)
      setEndPoint(`${BASEURL}`)
      setDataModified({
        id: response.data.id,
        kmFinal: response.data.kmFinal,
        fimDeslocamento: response.data.fimDeslocamnto,
        observacao: response.data.observacao,
      })
      setBASEURLPUT(`https://api-deslocamento.herokuapp.com/api/v1/Deslocamento`)
    } catch (err) {
      setError("Deslocamento não encontrado")
    }
    console.log(dataModified)
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

      <Button variant="contained" sx={{ background: "purple" }} onClick={getDisplacementByIdConst}>
        Buscar
      </Button>
      {error && (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      )}

      {dataModified.id != 0 && (
        <MyModal dataModified={dataModified} endpoint={endpoint} endpointDisplacement={BASEURLPUT} id={id} />
      )}
    </Box>
  )
}
