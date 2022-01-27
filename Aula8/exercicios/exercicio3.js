/**
Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
 */

const prompt = require('prompt-sync')();

tabuada = +prompt('Digite um numero para obter sua tabuada: ');

for (let i = 0; i < 10; i++) {
  console.log(`${tabuada} x ${i + 1} = ${tabuada * (i + 1)}`);
}
