import { useEffect, useState } from "react"
import { Button, Modal, TextField, Typography } from "@mui/material"
import axios from "axios"


interface ModalProps {
  dataModified: unknown
  endpoint: string
  endpointDisplacement?: string
  id: number
}

export default function UserModal({ dataModified, endpoint, endpointDisplacement, id }: ModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<unknown>(dataModified)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    setFormData(dataModified)
  }, [dataModified])

  const handleOpen = () => {
    setSuccess("")
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prevData: unknown) => {
      if (typeof prevData === "object" && prevData !== null) {
        return { ...prevData, [field]: value }
      }
      return prevData
    })
  }
  const handleSubmit = async () => {
    if (!endpointDisplacement) {
      try {
        const response = await axios.put(`${endpoint}/${id}`, formData)
        console.log("Dados atualizados:", response)
        setSuccess(`O registro com o id: ${id} foi atualizado com sucesso!`)
        handleClose()
      } catch (error) {
        console.error("Erro ao atualizar os dados:", error)
      }
    } else {
      try {
        const response = await axios.put(`${endpointDisplacement}/${id}/EncerrarDeslocamento`, formData)
        console.log("Dados atualizados:", response)
        setSuccess(`O registro com o id: ${id} foi atualizado com sucesso!`)
        handleClose()
      } catch (error: any) {
        setError(error.response.data)
      }
    }
  }

  const deleteRegister = async () => {
    try {
      const response = await axios.delete(`${endpoint}/${id}`, { data: { id: id } })
      console.log("Registro deletado:", response)
      setSuccess(`O registro com o id: ${id} foi deletado com sucesso!`)
    } catch (error) {
      setError("Um erro ocorreu ao tentar deletar o registro.")
    }
    handleClose()
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} color="success" sx={{ marginTop: "30px" }}>
        Abrir Modal
      </Button>
      {success && <Typography sx={{ color: "green" }}>{success}</Typography>}

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            padding: "20px",
            position: "relative",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            height: "400px",
            overflow: "auto",
          }}
        >
          <h2>Editar Registro 😄</h2>
          {Object.entries(formData as { [key: string]: unknown }).map(([key, value]) => (
            <TextField
              key={key}
              label={key}
              value={value}
              onChange={e => handleChange(key, e.target.value)}
              fullWidth
              margin="normal"
            />
          ))}

          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
          <Button variant="contained" onClick={handleSubmit}>
            Alterar
          </Button>
          <Button variant="contained" color="error" onClick={deleteRegister}>
            Deletar
          </Button>
        </div>
      </Modal>
    </div>
  )
}
