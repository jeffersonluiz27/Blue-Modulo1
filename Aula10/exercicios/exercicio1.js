/**
Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
 */

const prompt = require('prompt-sync')();

const num = +prompt(`Digite um numero: `);
let primo = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    primo = false;
    break;
  }
  primo = true;
}

if (primo) {
  console.log(`${num} é Primo!`);
} else {
  console.log(`${num} não é Primo!`);
}