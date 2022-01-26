/**
Faça um programa que sorteie 20 números de 0 a 100, 
armazene todos em um array e imprima em ordem crescente.
 */

let cont = 0;
const lances = [];

while (cont < 20) {
  lances.push(Math.floor(100 * Math.random()));
  cont++;
}

console.log(lances.sort((a, b) => a - b));
