import axios, { AxiosError } from "axios";

function getErrorMessage(error: AxiosError): string {
  if (error.response && error.response.data) {
    return JSON.stringify(error.response.data);
  }
  return "Erro desconhecido.";
}

export async function getClientsById(id: number) {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Cliente/${id}`;
  try {
    const response = await axios.get(`${BASEURL}`);
    return response;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function getCondutorsById(id: number) {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Condutor/${id}`;
  try {
    const response = await axios.get(`${BASEURL}`);
    return response;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}

export async function getDisplacementById(id: number) {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${id}`;
  try {
    const response = await axios.get(`${BASEURL}`);
    return response;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}



export async function getVehicleById(id: number) {
  const BASEURL = `https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${id}`;
  try {
    const response = await axios.get(`${BASEURL}`);
    return response;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw new Error(getErrorMessage(error));
  }
}
