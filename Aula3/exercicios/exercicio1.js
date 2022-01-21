/**
 * Faça um Programa que peça dois números e imprima o
 * maior deles, e informe caso eles sejam iguais.
 */

const prompt = require('prompt-sync')();

var num1 = +prompt('Digite um numero: ');
var num2 = +prompt('Digite outro numero: ');

if (num1 > num2) {
  console.log(`O numero ${num1} é maior`);
} else if (num1 < num2) {
  console.log(`O numero ${num2} é maior`);
} else {
  console.log(`Os numeros são iguais`);
}
