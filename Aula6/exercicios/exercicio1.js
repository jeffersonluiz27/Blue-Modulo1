/**
   Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
 */

const prompt = require('prompt-sync')();
let cont = 0;
const numeros = [];
const par = [];
const impar = [];

while (cont < 20) {
  numeros.push(+prompt('Digite um numero: '));
  if (numeros[cont] % 2 == 0) {
    par.push(numeros[cont]);
  } else {
    impar.push(numeros[cont]);
  }
  cont++;
}

console.log(`Todos os Numeros: ${numeros}`);
console.log(`Numeros Par: ${par}`);
console.log(`Numeros Impar: ${impar}`);
