import MyModal from "@/components/Modal"
import { DataFormCondutorsPut } from "@/interfaces/Condutors"
import { getCondutorsById } from "@/services/GetsById"
import { TextField, Box, Button, Typography } from "@mui/material"
import { useState, useEffect, ChangeEvent } from "react"


export default function CondutorUpdate() {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Condutor`
  const [id, setId] = useState(0)
  const [error, setError] = useState("")
  const [endpoint, setEndPoint] = useState("")

  // Existe esse dataModified por conta dos valores permitidos para modificar.
  const [dataModified, setDataModified] = useState<DataFormCondutorsPut>({
    id: 0,
    categoriaHabilitacao: "",
    vencimentoHabilitacao: new Date()
  })

  const resetData = () => {
    setDataModified({
      id: 0,
      categoriaHabilitacao: "",
      vencimentoHabilitacao: new Date()
    })
  }

  const getCondutorsByIdConst = async () => {
    resetData()
    setError("")

    if (!id) {
      setError("Digite um id")
      return
    }

    try {
      const response = await getCondutorsById(id)
      console.log(response)
      setEndPoint(`${BASEURL}`)
      setDataModified({
        id: response.data.id,
        categoriaHabilitacao: response.data.catergoriaHabilitacao,
        vencimentoHabilitacao: response.data.vencimentoHabilitacao,
      
      })
    } catch (err) {
      setError("Condutor não encontrado")
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

      <Button variant="contained" sx={{ background: "purple" }} onClick={getCondutorsByIdConst}>
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
