export enum CarColor {
  Black = 'preto',
  White = 'branco',
  Red = 'vermelho',
  Silver = 'prata',
}

export enum Door {
  LeftFront = 'dianteira da esquerda',
  RightFront = 'dianteira da direita',
  LeftRear = 'traseira da esquerda',
  RightRear = 'traseira da direita',
}

export enum Side {
  Left = 'esquerda',
  Right = 'direita',
}

export default class Car {
  brand: string;
  color: CarColor;
  doors: number;

  constructor(brand: string, color: CarColor, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('Biiiiiiii!!!');
  }

  openTheDoor(door: Door) {
    console.log(`Abre a porta ${door}`);
  }

  closeTheDoor(door: Door) {
    console.log(`Fecha a porta ${door}`);
  }

  turnOn() {
    console.log('Liga o carro');
  }

  turnOff() {
    console.log('Desliga o carro');
  }

  speedUp() {
    console.log('Acelera o carro');
  }

  speedDown() {
    console.log('Desacelera o carro');
  }

  stop() {
    console.log('Para o carro');
  }

  turn(side: Side) {
    console.log(`Vira o carro para ${side}`)
  }
}