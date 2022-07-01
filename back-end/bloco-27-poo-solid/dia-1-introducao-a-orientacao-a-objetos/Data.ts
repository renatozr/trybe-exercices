const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio',
  'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    if (this.validaData(dia, mes, ano)) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    } else {
      this.dia = 1;
      this.mes = 1;
      this.ano = 1900;
    }
  }

  validaData(dia: number, mes: number, ano: number): boolean {
    const validacaoDia = dia >= 1 && dia <= 30;
    const validacaoMes = mes >= 1 && mes <= 12;
    const validacaoAno = ano >= 1000 && ano <= 9999;

    return validacaoDia && validacaoMes && validacaoAno;
  }

  pegaNomeDoMes(mes: number): string {
    return meses[mes - 1];
  }

  eAnoBissexto(ano: number): boolean {
    return (ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0);
  }

  compara(data: Data): number {
    const dataCorrente = new Date(this.ano, this.mes, this.dia).getTime();
    const dataParametro = new Date(data.ano, data.mes, data.dia).getTime();

    if (dataCorrente === dataParametro) return 0;
    if (dataCorrente < dataParametro) return 1;
    return -1;
  }

  formata(formato: string): string {
    let dataFormatada = formato;

    const ano = `${this.ano}`;
    const anoDoisDigitos = ano.slice(2);
    const mes = this.mes < 10 ? `0${this.mes}` : `${this.mes}`;
    const mesExtenso = this.pegaNomeDoMes(this.mes);
    const dia = this.dia < 10 ? `0${this.dia}` : `${this.dia}`;

    dataFormatada = dataFormatada.replace('aaaa', ano);
    dataFormatada = dataFormatada.replace('aa', anoDoisDigitos);
    dataFormatada = dataFormatada.replace('mm', mes);
    dataFormatada = dataFormatada.replace('M', mesExtenso);
    dataFormatada = dataFormatada.replace('dd', dia);

    return dataFormatada;
  }
}