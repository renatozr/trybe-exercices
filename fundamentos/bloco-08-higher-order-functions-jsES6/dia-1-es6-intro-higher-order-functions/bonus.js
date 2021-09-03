// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, 
// atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDmg = dragonStr => Math.floor(Math.random() * (dragonStr - 14)) + 15;

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDmg = (warriorStr, warriorWpnDmg) => Math.floor(Math.random() * (warriorStr * warriorWpnDmg - (warriorStr - 1))) + warriorStr;

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de 
// dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDmgMana = (mageIntlg, mageMana) => {
  if (mageMana < 15) {
    return 'Não possui mana suficiente';
  }
  const result = {
    damage: Math.floor(Math.random() * (mageIntlg * 2 - (mageIntlg - 1))) + mageIntlg,
    spendMana: 15,
  }
  return result;
}

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras
// funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , 
// pois neste caso, são funções que recebem como parâmetro outra função.
const gameActions = {
  // Crie as HOFs neste objeto.
  // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior .
  //  Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do 
  //  monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
  warriorTurn: warriorDmg => {
    warrior.damage = warriorDmg(warrior.strength, warrior.weaponDmg);
    dragon.healthPoints -= warrior.damage;
  },
  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . 
  // Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do 
  // monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
  mageTurn: mageDmgMana => {
    const objDmgMana = mageDmgMana(mage.intelligence, mage.mana); 
    mage.damage = objDmgMana.damage;
    mage.mana -= objDmgMana.spendMana;
    if (typeof (mage.damage) === 'number') {
      dragon.healthPoints -= mage.damage;
    }
  },
  // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . 
  // Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints 
  // dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
  dragonTurn: dragonDmg => {
    dragon.damage = dragonDmg(dragon.strength);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para 
  // visualizar o resultado final do turno.
  battleStatus: () => {
    battleMembers.mage = Object.assign({}, mage);
    battleMembers.warrior = Object.assign({}, warrior);
    battleMembers.dragon = Object.assign({}, dragon);
    return battleMembers;
  },
};

// Precisa descobrir o problema
const startBattle = () => {
  console.log('Start battle', gameActions.battleStatus());
  let mageAndWarriorLife = mage.healthPoints < 0 && warrior.healthPoints < 0;
  let dragonLife = dragon.healthPoints < 0;
  let continueBattle = mageAndWarriorLife || dragonLife;
  while (continueBattle) {
    gameActions.mageTurn(mageDmgMana);
    console.log('Mage turn', gameActions.battleStatus());
    
    gameActions.warriorTurn(warriorDmg);
    console.log('Warrior turn', gameActions.battleStatus());
    
    gameActions.dragonTurn(dragonDmg);
    console.log('Dragon turn', gameActions.battleStatus());
  }
  if (dragon.healthPoints <= 0) {
    console.log('Mage and Warrior WINS!!', gameActions.battleStatus());
  } else {
    console.log('Dragon WINS!!', gameActions.battleStatus());
  }
}

startBattle();