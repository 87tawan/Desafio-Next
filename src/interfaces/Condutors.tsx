
export interface DataFormCondutors {
    nome: string,
    numeroHabilitacao: number,
    categoriaHabilitacao: string,
    vencimentoHabilitacao: Date
  }
  

export interface DataFormCondutorsPut {
  id: number,
  categoriaHabilitacao: string,
  vencimentoHabilitacao: Date
}
