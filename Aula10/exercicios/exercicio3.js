/**
Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional de 2 países A e B, sendo que a população do país A deve ser menor que a de B, e a taxa de crescimento de A seja maior. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
 */
const prompt = require('prompt-sync')();

let populacaoPaisA = prompt('Informe a população do Pais A: ');
const taxaCrescimentoPaisA = prompt(
  'Informe a taxa de crescimento do Pais A (%): '
);

let populacaoPaisB = prompt('Informe a população do Pais B: ');
const taxaCrescimentoPaisB = prompt(
  'Informe a taxa de crescimento do Pais B (%): '
);

let anos = 0;
while (populacaoPaisA < populacaoPaisB) {
  populacaoPaisA *= 1 + taxaCrescimentoPaisA / 100;
  populacaoPaisB *= 1 + taxaCrescimentoPaisB / 100;
  anos++;
}

console.log(`A população A levou ${anos} anos para ultrapassar a população B`);
console.log(`População A: ${populacaoPaisA} \nPopulação B: ${populacaoPaisB}`);