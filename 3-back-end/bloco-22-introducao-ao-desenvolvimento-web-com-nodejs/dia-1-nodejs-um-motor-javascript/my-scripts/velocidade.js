const { questionInt } = require('readline-sync');

const distance = questionInt('Distância percorrida em metros?\n');
const time = questionInt('Tempo cronometrados em segundos?\n');

const velocity = distance / time;

console.log(`\nA velocidade média do objeto é ${velocity}m/s.`);
