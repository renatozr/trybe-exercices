type Slices = 4 | 6 | 8;

interface IPizza {
  flavor: string;
  slices: Slices;
}

const pizza1: IPizza = {
  flavor: 'Calabresa',
  slices: 8,
}

const pizza2: IPizza = {
  flavor: 'Marguerita',
  slices: 6,
}

const pizza3: IPizza = {
  flavor: 'Nutela',
  slices: 4,
}
