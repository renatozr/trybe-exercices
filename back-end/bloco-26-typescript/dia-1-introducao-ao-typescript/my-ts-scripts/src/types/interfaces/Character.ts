interface Stats {
  agi: number,
  str: number,
  int: number,
  hp: number,
  mp: number,
};

export default interface Character {
  nickname: string,
  class: string,
  stats: Stats
  createdAt: Date,
};