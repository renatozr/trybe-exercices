type Slices = 4 | 6 | 8;

export default interface Pizza {
  flavor: string;
  slices: Slices;
}

const pizza1: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

const pizza2: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

const pizza3: Pizza = {
  flavor: 'Nutela',
  slices: 4,
}
