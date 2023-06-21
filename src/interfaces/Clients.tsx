export interface DataFormClients {
  id?: number 
  numeroDocumento: string
  tipoDocumento: string
  nome: string
  logradouro: string
  numero: string
  bairro: string
  cidade: string
  uf: string
}

export interface DataFormClientsUpdate {
  id: number | undefined
  nome: string
  logradouro: string
  numero: string
  bairro: string
  cidade: string
  uf: string
}
