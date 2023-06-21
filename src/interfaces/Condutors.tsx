
export interface DataFormCondutors {
    nome: string,
    numeroHabilitacao: string,
    categoriaHabilitacao: string,
    vencimentoHabilitacao: Date
  }
  

export interface DataFormCondutorsPut {
  id: number,
  categoriaHabilitacao: string,
  vencimentoHabilitacao: Date
}
