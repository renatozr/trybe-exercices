import Car, { CarColor, Door, Side } from "./exercicio1";

const car = new Car('Volkswagen Gol', CarColor.Silver, 4);

console.log(`${car.brand} ${car.color} ${car.doors} portas`)

car.openTheDoor(Door.LeftFront);
car.closeTheDoor(Door.LeftFront);
car.turnOn();
car.speedUp();
console.log('600 m');
car.turn(Side.Left);
console.log('200 m');
car.speedDown();
console.log('Rotatória')
car.turn(Side.Right);
car.speedUp();
console.log('1,2 km');
console.log('300 m');
car.turn(Side.Right);
console.log('400 m');
car.speedDown();
car.stop();
car.turnOff();
car.openTheDoor(Door.LeftRear);
car.closeTheDoor(Door.LeftRear);
car.turnOn();
car.speedUp();
console.log('300 m');
car.turn(Side.Right);
console.log('2 km');
console.log('200 m');
car.turn(Side.Left);
console.log('400 m');
car.turn(Side.Right);
console.log('100 m');
car.speedDown();
car.stop();
car.turnOff();
car.openTheDoor(Door.LeftRear);
car.closeTheDoor(Door.LeftRear);
car.turnOn();
car.speedUp();