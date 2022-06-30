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

  calculaNotaTotal(): number {
    let notaTotal = 0;

    this.notasDeProva.forEach((nota: number) => notaTotal += nota);
    this.notasDeTrabalho.forEach((nota: number) => notaTotal += nota);

    return notaTotal;
  }

  calculaNotaMedia(): number {
    const notaTotal = this.calculaNotaTotal();
    const quantidadeDeNotas = this.notasDeProva.length + this.notasDeTrabalho.length;

    const notaMedia = notaTotal / quantidadeDeNotas;

    return notaMedia;
  }
}