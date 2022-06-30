type NotasDeProva = [number, number, number, number]
type NotasDeTrabalho = [number, number];

class Estudante {
  matricula: string;
  nome: string;
  notasDeProva: NotasDeProva;
  notasDeTrabalho: NotasDeTrabalho;

  constructor(matricula: string, nome: string, notasDeProva: NotasDeProva, notasDeTrabalho: NotasDeTrabalho) {
    this.matricula = matricula;
    this.nome = nome;
    this.notasDeProva = notasDeProva;
    this.notasDeTrabalho = notasDeTrabalho
  }
}