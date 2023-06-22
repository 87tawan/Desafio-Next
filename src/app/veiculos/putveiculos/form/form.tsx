import MyModal from "@/components/Modal";
import { DataFormVehiclesPut } from "@/interfaces/Vehicles";
import { getVehicleById } from "@/services/GetsById";

import { TextField, Box, Button, Typography } from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";

export default function VehicleUpdate() {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Veiculo`;

  const [id, setId] = useState(0);
  const [error, setError] = useState("");
  const [endpoint, setEndPoint] = useState("");
  const [dataModified, setDataModified] = useState<DataFormVehiclesPut>({
    id: 0,
    marcaModelo: "",
    anoFabricacao: 0,
    kmAtual: 0,
  });

  const resetData = () => {
    setDataModified({
      id: 0,
      marcaModelo: "",
      anoFabricacao: 0,
      kmAtual: 0,
    });
  };

  const getVehicleConst = async () => {
    resetData();
    setError("");

    if (!id) {
      setError("Digite um id");
      return;
    } 


    try {
      const response = await getVehicleById(id);
      setEndPoint(BASEURL);
      setDataModified({
        id: response.data.id,
        marcaModelo: response.data.marcaModelo,
        anoFabricacao: response.data.anoFabricacao,
        kmAtual: response.data.kmAtual,
      });
      setError("");
    } catch (err: any) {
      setError("Veiculo não encontrado");
    }
  };

  useEffect(() => {
    // Atualiza a interface quando o estado de error é alterado
  }, [error]);

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        label="id"
        value={id}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setId(Number(e.target.value))
        }
        type="number"
      />

      <Button variant="contained" sx={{ background: "purple" }} onClick={getVehicleConst}>
        Buscar
      </Button>
      {error && dataModified.id === 0 && (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      )}

      {dataModified.id !== 0 && (
        <MyModal dataModified={dataModified} endpoint={endpoint} id={id} />
      )}
    </Box>
  );
}
