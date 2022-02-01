/**
Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
 */

const prompt = require('prompt-sync')();

function calculo(num1, num2, operador) {
  if (operador == '*') {
    console.log(num1 * num2);
  } else if (operador == '/') {
    console.log(num1 / num2);
  } else if (operador == '+') {
    console.log(num1 + num2);
  } else if (operador == '-') {
    console.log(num1 - num2);
  } else {
    console.log('\nErro! Operador inválido!');
  }
}

const num1 = +prompt('Digite o primeiro numero: ');
const num2 = +prompt('Digite o segundo numero: ');
const operador = prompt('Digite o operador (/ * + -): ');

calculo(num1, num2, operador);
