import Cliente from "./Cliente";
import Item from "./Item";

export default class Pedido {
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
}