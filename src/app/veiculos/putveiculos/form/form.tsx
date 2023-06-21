import MyModal from "@/components/Modal"
import { DataFormVehiclesPut } from "@/interfaces/Vehicles"
import { getDisplacementById } from "@/services/GetsById"
import { TextField, Box, Button, Typography } from "@mui/material"
import { useState, useEffect, ChangeEvent } from "react"


export default function VehicleUpdate() {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Veiculo`

  const [id, setId] = useState(0)
  const [error, setError] = useState("")
  const [endpoint, setEndPoint] = useState("")
  const [BASEURLPUT, setBASEURLPUT] = useState("")
  // Existe esse dataModified por conta dos valores permitidos para modificar.
  const [dataModified, setDataModified] = useState<DataFormVehiclesPut>({
    id: 0,
    marcaModelo: "",
    anoFabricacao: 0,
    kmAtual: 0
  })

  const resetData = () => {
    setDataModified({
      id: 0,
      marcaModelo: '',
      anoFabricacao: 0,
      kmAtual: 0
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
        marcaModelo: response.data.marcaModelo,
        anoFabricacao: response.data.anoFabricacao,
        kmAtual: response.data.kmAtual
      })
      setBASEURLPUT(`https://api-deslocamento.herokuapp.com/api/v1/Veiculo`)
    } catch (err) {
      setError("Veiculo não encontrado")
    }
    console.log(dataModified)
  }

  useEffect(() => {
    // Atualiza a interface quando o estado de error é alterado
  }, [error])

  return (
    <Box display="flex" flexDirection="column">
      <p>Vamos atualizar seu veiculo!</p>
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
        <MyModal dataModified={dataModified} endpoint={endpoint}  id={id} />
      )}
    </Box>
  )
}
