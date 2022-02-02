/**
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

const prompt = require('prompt-sync')();

const num1 = +prompt(`Digite o 1º numero: `);
const num2 = +prompt(`Digite o 2º numero: `);

function operacao(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

operacao(num1, num2);
