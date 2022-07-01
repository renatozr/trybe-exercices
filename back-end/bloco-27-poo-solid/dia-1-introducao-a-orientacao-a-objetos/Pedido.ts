import Cliente from "./Cliente";
import Item from "./Item";

class Pedido {
  cliente: Cliente;
  itens: Item[];
  formaDePagamento: string;
  descontoEmPercentual?: number;

  constructor(cliente: Cliente, itens: Item[], formaDePagamento: string, descontoEmPercentual: number | undefined) {
    this.cliente = cliente;
    this.itens = itens;
    this.formaDePagamento = formaDePagamento;
    this.descontoEmPercentual = descontoEmPercentual;
  }

  calculaValorTotal(): number {
    let valorTotal = 0;

    this.itens.forEach((item) => valorTotal += item.preco);

    return valorTotal;
  }

  calculaValorTotalComDesconto(): number {
    const valorTotal = this.calculaValorTotal();

    if (!this.descontoEmPercentual) return valorTotal;

    const valorTotalComDesconto = valorTotal - valorTotal * this.descontoEmPercentual / 100;

    return valorTotalComDesconto;
  }
}