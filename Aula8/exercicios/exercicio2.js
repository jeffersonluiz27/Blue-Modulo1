/**
Escreva um programa que peça um número e escreva o fatorial dele. 
Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
 */

const prompt = require('prompt-sync')();
let fatorial = +prompt('Degite um numero para exibir seu fatorial: ');

for (let i = fatorial - 1; i > 0; i--) {
  fatorial = fatorial * i;
}
console.log(fatorial);
