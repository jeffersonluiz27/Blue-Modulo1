/**
Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido
Todos os números ímpares do 0 ao número escolhido
 */

const prompt = require('prompt-sync')();
let cont = 0;
let num = 0;
const par = [];
const impar = [];

num = parseInt(prompt('Digite um numero inteiro: '));

while (cont <= num) {
  if (cont % 2 == 0) {
    par.push(cont);
  } else {
    impar.push(cont);
  }
  cont++;
}

console.log(`Pares: ${par}`);
console.log(`Impares: ${impar}`);
