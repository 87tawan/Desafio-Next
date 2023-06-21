import axios, { AxiosError } from "axios";

function getErrorMessage(error: AxiosError): string {
  if (error.response && error.response.data) {
    return JSON.stringify(error.response.data);
  }
  return "Erro desconhecido.";
}

export async function getClients() {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";
  try {
    const response = await axios.get(`${BASEURL}`);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function getDisplacement() {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Deslocamento";
  try {
    const response = await axios.get(`${BASEURL}`);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function getCondutors() {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Condutor";
  try {
    const response = await axios.get(`${BASEURL}`);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function getVehicle() {
  const BASEURL = "https://api-deslocamento.herokuapp.com/api/v1/Veiculo";
  try {
    const response = await axios.get(`${BASEURL}`);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}
