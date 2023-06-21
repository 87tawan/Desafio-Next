

export interface DataFormDisplacement {
  kmInicial: number,
  inicioDeslocamento: Date,
  checkList: string,
  motivo: string,
  observacao: string,
  idCondutor: number,
  idVeiculo: number,
  idCliente: number
}



export interface DataFormDisplacementPut {
  id: number,
  kmFinal: number,
  fimDeslocamento: Date,
  observacao: string
}

  