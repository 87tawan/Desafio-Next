import { DataFormClients } from "@/interfaces/Clients";
import { DataFormCondutors } from "@/interfaces/Condutors";
import { DataFormDisplacement } from "@/interfaces/Displacement";
import { DataFormVehicles } from "@/interfaces/Vehicles";
import axios, { AxiosError } from "axios";

function getErrorMessage(error: AxiosError): string {
  if (error.response && error.response.data) {
    return JSON.stringify(error.response.data);
  }
  return "Erro desconhecido.";
}

export async function postClients(data: DataFormClients) {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";
  try {
    const response = await axios.post(`${BASEURL}`, data);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function postVehicles(data: DataFormVehicles) {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Veiculo";
  try {
    const response = await axios.post(`${BASEURL}`, data);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function postDisplacement(data: DataFormDisplacement) {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/IniciarDeslocamento";
  try {
    const response = await axios.post(`${BASEURL}`, data);
    return response.data;
  }  catch (e: unknown) {
      return e 
  }
}

export async function postCondutors(data: DataFormCondutors) {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Condutor";
  try {
    const response = await axios.post(`${BASEURL}`, data);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}
``
