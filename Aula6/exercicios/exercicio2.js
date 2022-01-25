/**
Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.
 */

const prompt = require('prompt-sync')();
let cont = 0;
const idade = [];
const altura = [];
let mediaIdade = 0;
let mediaAltura = 0;

while (cont < 5) {
  idade.push(+prompt(`Digite a ${cont + 1}ª idade: `));
  mediaIdade += idade[cont];
  altura.push(+prompt(`Digite a ${cont + 1}ª altura: `));
  mediaAltura += altura[cont];
  cont++;
}
console.log(`A media de idade foi de: ${mediaIdade / idade.length} Anos`);
console.log(`A media de altura foi de: ${mediaAltura / altura.length} Metros`);
