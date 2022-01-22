/*
  Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
*/

const prompt = require('prompt-sync')();
let num;

while (num % 2 != 0 || isNaN(num)) {
  num = +prompt('Digite um numero Par: ');
  if (num % 2 != 0 || isNaN(num)) {
    console.log('O numero precisa ser Par! Tente de novo!');
  }
}
